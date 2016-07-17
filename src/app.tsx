import * as React from "react";
import { render } from "react-dom";

import {Header} from "./layout/header";
import {Footer} from "./layout/footer";
import {Sidebar} from "./layout/sidebar";

const Root = () => (
    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">
            aaa
        </div>
        <Footer/>
    </div>
);

render(
    <Root/>,
    document.getElementById("app")
);