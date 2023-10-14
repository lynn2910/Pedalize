const fs = require("node:fs");

function countLines(dir, extensions){
    let lines=  0;
    fs.readdirSync(dir).forEach((subdir) => {
        if (!["node_modules", "target"].includes(subdir) && fs.lstatSync(`${dir}/${subdir}`).isDirectory()) {
            lines += countLines(`${dir}/${subdir}`, extensions);
        } else if (extensions.includes(subdir.split(/.+\./)[1]) || subdir.endsWith(".toml")) {
            const content = fs.readFileSync(`${dir}/${subdir}`, "utf8");
            lines += content.split("\n").length;
        }
    });
    return lines;
}

console.log(`Rust: ${countLines(".", ['rs'])}`);
console.log(`All: ${countLines(".", ['rs', 'ts', 'vue', 'html', 'js'])}`);
