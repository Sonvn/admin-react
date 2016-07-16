import * as React from "react";
import { render } from "react-dom";

import {Header} from "./layout/header";


const Root = () => (
    <Header/>
);

render(
    <Root/>,
    document.getElementById("app")
);