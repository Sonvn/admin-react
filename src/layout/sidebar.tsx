import * as React from "react";

export class Sidebar extends React.Component<any, any>{
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active">
                            <a>
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-files-o"></i>
                                <span>Feature List</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        )
    }
}