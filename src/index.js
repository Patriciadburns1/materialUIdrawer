import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import App from './App';
import {
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';




// Creates personalized Material UI theme. Additional parameters may be added here for further customization.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00476b'
		},
		secondary: {
			main: '#E4E5E6'
		}
	},
	typography: {
		useNextVariants: true,
		fontFamily: 'Darker Grotesque ,sans-serif',
		textTransform: "none",
	},
});


ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<MemoryRouter>
			<Router>
				<App />
			</Router>
		</MemoryRouter>
	</MuiThemeProvider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();