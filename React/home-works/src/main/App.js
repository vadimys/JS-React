import React from "react";
import '../default/App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Main from "./Main";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}
