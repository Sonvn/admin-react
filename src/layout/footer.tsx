import * as React from "react";

export class Footer extends React.Component<any, any>{
    render(){
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.3.3
                </div>
                <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
            </footer>
        )
    }
}
