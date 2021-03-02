import React from "react";
import '../default/MainApp.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Main from "./Main";

export default function MainApp() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}
