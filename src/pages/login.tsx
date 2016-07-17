import * as React from "react";

export class Login extends React.Component<any, any>{
    render(){
        return (
            <section className="content">
                <div className="modal" style={{display: "block"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Login</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email address</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
