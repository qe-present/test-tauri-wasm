use tauri_wasm_copy::api::app;
use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub async fn get_name() -> String {
    app::get_name().await.unwrap()
}