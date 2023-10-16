"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBuilder = exports.PedalizeApi = void 0;
/**
 * Represent the Api interface between the client and the server
 */
var PedalizeApi = /** @class */ (function () {
    function PedalizeApi(host) {
        this.config = { host: host };
    }
    /**
     * Retrieves a product with the given ID.
     *
     * @param {string} id - The ID of the product.
     * @returns {Promise<Option<Product>>} - A promise that resolves to an option containing the product, or an error.
     */
    PedalizeApi.prototype.get_product = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var req, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = new RequestBuilder("".concat(this.config.host, "/product/").concat(id));
                        req.set_method("GET");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, req.send()];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, error_1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a specific page of products from the server.
     *
     * @param {number} page - The page number to retrieve. Must be a positive or null integer.
     *
     * @returns {Promise<Option<Product[]>>} - A promise that resolves to an Option containing an array of Product objects on success, or an error on failure.
     *
     * @throws {Error} - If the page number is not a positive or null integer.
     */
    PedalizeApi.prototype.get_page = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var req, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (page < 0 && Math.floor(page) == page)
                            throw new Error("The page must be a positive or null integer");
                        req = new RequestBuilder("".concat(this.config.host, "/product/page?page=").concat(page));
                        req.set_method("GET");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, req.send()];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, error_2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the characteristics of a product specified by its ID.
     *
     * @param {string} id - The ID of the product.
     * @returns {Promise<Option<ProductCharacteristic[]>>} - A promise that resolves to an option of an array of product characteristics. If the retrieval is successful, the promise resolves to the characteristics. If there is an error, the promise resolves to the error object.
     */
    PedalizeApi.prototype.get_product_characteristics = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var req, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = new RequestBuilder("".concat(this.config.host, "/product/").concat(id, "/characteristics"));
                        req.set_method("GET");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, req.send()];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [2 /*return*/, error_3];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the reviews for a given product ID.
     *
     * @param {string} id - The ID of the product to retrieve reviews for.
     *
     * @returns {Promise<Option<Review[]>>} - A promise that resolves to an optional array of Review objects.
     *       The array will be empty if no reviews are found.
     *       If an error occurs during the retrieval process, the promise will reject with the error.
     */
    PedalizeApi.prototype.get_reviews = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var req, res, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = new RequestBuilder("".concat(this.config.host, "/product/").concat(id, "/reviews"));
                        req.set_method("GET");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, req.send()];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [2 /*return*/, error_4];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves the shopping cart from the server.
     *
     * @returns {Promise<Option<Product[]>>} A promise that resolves to an {@link Option} containing an array of {@link Product}s if successful,
     * or an error object if unsuccessful.
     */
    PedalizeApi.prototype.get_shopping_cart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req, res, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = new RequestBuilder("".concat(this.config.host, "/shopping_cart/fetch"));
                        req.set_method("GET");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, req.send()];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [2 /*return*/, error_5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PedalizeApi.prototype.clear_shopping_cart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req, res, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        req = new RequestBuilder("".concat(this.config.host, "/shopping_cart/clear"));
                        req.set_method("GET");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, req.send()];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        error_6 = _a.sent();
                        console.error(error_6);
                        return [2 /*return*/, error_6];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return PedalizeApi;
}());
exports.PedalizeApi = PedalizeApi;
/**
 * RequestBuilder class is responsible for building and representing network requests.
 */
var RequestBuilder = /** @class */ (function () {
    /**
     * Creates a new instance of the constructor.
     *
     * @param {string} url - The URL to be assigned to the instance.
     */
    function RequestBuilder(url) {
        this.url = url;
    }
    /**
     * Set the HTTP method for the request.
     *
     * @param {Method} method - The HTTP method to set.
     */
    RequestBuilder.prototype.set_method = function (method) {
        this.method = method;
    };
    /**
     * Sets the body of the object.
     *
     * @param {string} body - The body to be set.
     */
    RequestBuilder.prototype.set_body = function (body) {
        this.body = body;
    };
    /**
     * Sends a request to the specified URL using the specified HTTP method.
     *
     * @return {Promise<Response>} A promise that resolves to a Response object representing the response to the request.
     */
    RequestBuilder.prototype.send = function () {
        return fetch(this.url, {
            method: this.method || "GET",
            body: this.body || null
        });
    };
    return RequestBuilder;
}());
exports.RequestBuilder = RequestBuilder;
