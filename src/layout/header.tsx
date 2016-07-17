import * as React from "react";

export class Header extends React.Component<any, any>{
	render(){
		return (
			<header className="main-header">
				<a href="http://localhost:8081" className="logo">
					<span className="logo-mini"><img src="assets/images/icon@2x.png" style={{height: '30px', width: '30px', border: '2px solid white', marginTop: '-4px'}}/></span>
					<span className="logo-lg"><img src="assets/images/icon@2x.png" style={{height: '30px', width: '30px', border: '2px solid white', marginTop: '-4px'}}/> <b>Prototype1</b></span>
				</a>
				<nav className="navbar navbar-static-top">
					<div className="navbar-custom-menu">
						<ul className="nav navbar-nav">
							<li className="user user-menu">
								<a>
									<img src="assets/images/default-user.png" className="user-image" alt="User Image"/>
									<span className="hidden-xs">Dave Hurt</span>
								</a>
							</li>
							<li>
								<a><i className="fa fa-sign-out"></i> Logout</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}
