import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import MiniDrawer from './nav/minidrawer';
import { AppBar } from '@material-ui/core';
import Breadcrumbs from './nav/breadcrumbs';
import Home from './views/home'
import Product from './views/product'
import Services from './views/services';
import ContactUs from './views/contactUs'; 
import About from './views/memberList'
import MemberList from './views/memberList';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      loggedIn: true
    }
      
	}

	render() {
		return (
			<div>
				<MiniDrawer/>
				<AppBar className='breadcrumbsBar' color='default'>
					<Breadcrumbs/>
        </AppBar>
        Home
				<div>
					<Switch>
						<Route exact path="/" component={Home} /> */}
						<Route path="product" component={Product} />
						<Route path="/services" component={Services} />
						<Route path="/member-list" component={MemberList} />
            <Route path="/contact-us" component={ContactUs} />
					</Switch>
				</div>
			</div>
		);
  }
}


export default withRouter(App)