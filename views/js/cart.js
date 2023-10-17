import * as client from './client.js';

let api;

addEventListener("load", () => {
    // TODO N'oubliez pas de changer cette variable!
    api = new client.PedalizeApi('http://127.0.0.1:9999');

    // fetch the shopping cart :)
    api.get_shopping_cart().then(
        (cart) =>  {
            if (!cart)
                return no_product_found()

            clear_container();
            if (cart.articles.length < 1)
                return no_product_found()

            cart.articles.forEach((p, index) => add_product(p, index));
        },
        console.error
    )
})

function clear_container(){
    let container = document.getElementById("product_container");
    container.innerHTML = "";
}

/**
 * Adds a product_informations to the system.
 *
 * @param {{product_informations: string, quantity: number, product: string}} product_informations - The product_informations object to be added.
 * @param {string} id
 */
async function add_product(product_informations, id) {
    let product = await api.get_product(product_informations.product)

    if (!product)
        throw new Error("Cannot fetch the product")

    let style = "";
    if (product.image) {
        style = `style="background: center url('static/img/${product.image}')"`
    }
    let elm = `<div class="product">
                        <div class="img" ${style}></div>
                        <div class="infos">
                            <h2>${product.name}</h2>
                            <p>Quantité : ${product_informations.quantity}</p>
                            <h3>${product.price}€</h3>
                        </div>
                        <div class="remove" id="product_${id}_remove">
                            <p>Supprimer</p>
                        </div>
                    </div>`;


    // add the element
    let container = document.getElementById("product_container");

    if (!container)
        throw new Error("No element were found with the ID 'product_container'");

    container.innerHTML += elm;

    // add the "remove button"
    document.getElementById(`product_${id}_remove`)
        .addEventListener(
            "click",
            () => {
                // send a request to delete the ressources
                api.remove_cart_article(product_informations.product)
                document.location.reload();
            }
        )
}

function no_product_found(){
    let elm = document.getElementById("product_container");

    if (!elm)
        throw new Error("No element was found with the id 'product_container'")

    elm.innerHTML = "<p class='no_product'>Aucun produit n'a été ajouté dans votre panier pour le moment</p>"
}