import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link as RouterLink, Route } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Routes from './route';

const styles = theme => ({
	root: {
		paddingTop: '8px',
    paddingRight: '16px',
    paddingBottom: '8px',
    paddingLeft: '16px',
		display: 'flex',
		flexDirection: 'row',
		marginLeft: '7%',
		margin: '1%',
		marginTop:'5%',
		height: '5%',
		position: 'sticky'
	},
	lists: {
		backgroundColor: theme.palette.background.paper,
	},
	// nested: {
	// 	paddingLeft: theme.spacing.unit * 4,
	// },

});

class RouterBreadcrumbs extends Component {
	state = {
		breadcrumbNameMap: {}
	};

	componentDidMount() {
		this.processBreadcrumbs();
	}

	handleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	processBreadcrumbs = () => {
		let processingArray = [];
		let breadcrumbNameMap = {}
		let breadcrumbPlaceholder = "";
		Routes.map((route, i) => {
			breadcrumbPlaceholder = { [route.navPath]: route.title }
			processingArray.push(breadcrumbPlaceholder)
			return processingArray;
		})
		breadcrumbNameMap = Object.assign({}, ...processingArray);
		this.setState({ breadcrumbNameMap })
		return breadcrumbNameMap;
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Route>
					{({ location }) => {
						const pathnames = location.pathname.split('/').filter(x => x);
						return (
							<Breadcrumbs arial-label="Breadcrumb">
								<HomeIcon />
								<Link component={RouterLink} color="inherit" to="/">
									Home
                </Link>
								{pathnames.includes('product') || pathnames.includes('services') || pathnames.includes('about') || pathnames.includes('contact-us') ?
									<Typography color="textPrimary" key={pathnames}>
										{`${pathnames.join(' / ')}`}
									</Typography>
									:
									pathnames.map((value, index) => {
										const last = index === pathnames.length - 1;
										const to = `/${pathnames.slice(0, index + 1).join('/')}`;
										return last ? (
											<Typography color="textPrimary" key={to}>
												{this.state.breadcrumbNameMap[to]}
											</Typography>
										) : (
												<Link component={RouterLink} color="inherit" to={to} key={to}>
													{this.state.breadcrumbNameMap[to]}
												</Link>
											);
									})
								}
							</Breadcrumbs>
						);
					}}
				</Route	>
			</div>
		);
	}
}

RouterBreadcrumbs.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RouterBreadcrumbs);
