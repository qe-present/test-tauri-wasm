import "./App.css";
import init,{get_theme} from "../src-wasm/window/pkg/src_wasm";
import {useEffect} from "react";
function App() {
    useEffect(() => {
        init()
    }, []);

    async function greet() {
        let a=await get_theme();
        console.log(a);
    }

    return (
        <>
            <main className="container">
                <h1>Welcome to Tauri + React</h1>
                <button onClick={()=> greet()}>点击</button>
            </main>
        </>

    );
}

export default App;
