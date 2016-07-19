import * as React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

import {Header} from "./layout/header";
import {Footer} from "./layout/footer";
import {Sidebar} from "./layout/sidebar";

import {Login} from "./pages/login";
import {FeatureList} from "./pages/feature-list";
import ComponentClass = __React.ComponentClass;

class App extends React.Component<any, any> {
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.header}
                {this.props.sidebar}
                <div className="content-wrapper" style={{marginLeft: this.props.header ? '230px' : 0}}>
                    {this.props.main}
                </div>
                {this.props.footer}
            </div>
        )
    }
}

function GetComponents(mainComponent, isLogged) : ComponentClass<any> {

    if (isLogged) {
        return {
            main: mainComponent,
            header: Header,
            sidebar: Sidebar,
            footer: Footer
        }
    } else {
        return {
            main: mainComponent
        }
    }
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="login" components={ GetComponents(Login, false) }/>
            <Route path="feature-list" components={ GetComponents(FeatureList, true) }/>
            {/*<Route path="*" component={Login}/>*/}
        </Route>
    </Router>,
    document.getElementById("app")
);