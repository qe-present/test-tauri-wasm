import "./App.css";
import init,{get_name,get_version} from "../src-wasm/app/pkg/app";
import {useEffect} from "react";
function App() {
    useEffect(() => {
        init()
    }, []);

    async function greet(num:Number) {
        switch (num){
            case 1:
                let name = await get_name();
                console.log(name);
                break;
            case 2:

            default:
                console.log("default");
                break;
        }
    }

    return (
        <>
            <main className="container">
                <h1>Welcome to Tauri + React</h1>
                <button onClick={()=> greet(1)}>点击</button>
            </main>
        </>

    );
}

export default App;
