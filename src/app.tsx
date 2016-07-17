import * as React from "react";
import { render } from "react-dom";

import {Header} from "./layout/header";
import {Footer} from "./layout/footer";
import {Sidebar} from "./layout/sidebar";
import {Login} from "./pages/login";
import { Router, Route, hashHistory } from 'react-router';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                { this.props.isLogged ? [(<Header/>), (<Sidebar/>)] : null }
                <div className="content-wrapper" style={{marginLeft: this.props.isLogged ? '230px' : 0}}>
                    {this.props.children}
                </div>
                { this.props.isLogged ? (<Footer/>) : null }
            </div>
        )
    }
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="login" component={Login}/>
            <Route path="*" component={Login}/>
        </Route>
    </Router>,
    document.getElementById("app")
);