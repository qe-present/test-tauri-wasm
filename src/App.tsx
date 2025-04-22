import "./App.css";
import init from "../src-wasm/app/pkg/app";
import {useEffect} from "react";
import {RouterProvider} from "react-router";
import router from "./router";

function App() {
    useEffect(() => {
        init();
    }, []);

    return (
            <RouterProvider router={router}/>
    );
}

export default App;