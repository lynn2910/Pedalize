use axum::Router;
use axum::routing::{delete, get, patch, post};
use tracing::info;
use crate::database::Database;

mod declaration;
mod constants;
mod database;
mod shopping_cart;
mod clients;
mod product;
mod reviews;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();
    info!("Starting...");


    // init database
    let database = Database::init().await;

    let app_state = AppState { database };


    let app = Router::new()
        .route("/shopping_cart/fetch", get(shopping_cart::routes::get_shopping_cart))
        .route("/shopping_cart/articles/add", post(shopping_cart::routes::add_article_to_shopping_cart))
        .route("/shopping_cart/articles/change_quantity", patch(shopping_cart::routes::edit_article_quantity))
        .route("/shopping_cart/articles/remove", delete(shopping_cart::routes::delete_article))
        .route("/shopping_cart/clear", delete(shopping_cart::routes::clear_articles))

        .route("/product/all", get(product::routes::get_all_products))
        .route("/product/page", get(product::routes::get_product_page))
        .route("/product/:id", get(product::routes::get_product_detail))
        .route("/product/:id/characteristics", get(product::routes::get_product_characteristics))

        .route("/test", get(|| async { "Hello, World!" }))
        .with_state(app_state);

    info!(target: "App", "Running on 0.0.0.0:9999");
    axum::Server::bind(&"0.0.0.0:9999".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

#[derive(Clone)]
pub struct AppState {
    database: Database
}