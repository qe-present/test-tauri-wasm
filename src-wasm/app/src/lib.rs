use tauri_wasm_copy::api::app;
use wasm_bindgen::prelude::wasm_bindgen;
#[wasm_bindgen]
pub async fn get_name()->String{
    app::get_name().await.unwrap()
}
#[wasm_bindgen]
pub async fn get_version()->String{
    app::get_version().await.unwrap()
}
#[wasm_bindgen]
pub async fn get_tauri_version()->String{
    app::get_tauri_version().await.unwrap()
}