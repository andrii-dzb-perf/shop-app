import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import UsersProvider from './providers/UsersProvider';
import Routes from './routes';
import theme from './theme';

function App() {
	const providers = [
		[ThemeProvider, { theme }],
		[UsersProvider],
	];
	const appChildren = (
		<>
			<CssBaseline />
			<Routes />
		</>
	);

	return (
		<>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			{
				providers
					.reverse()
					.reduce(
						(acc, [Provider, props]) => (
							<Provider {...props}>{acc}</Provider>
						),
						appChildren
					)
			}
		</>
	);
}

export default App;
