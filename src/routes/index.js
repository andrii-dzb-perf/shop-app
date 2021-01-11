import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';

const Routes = () => {
    return (
        <>
            <Header />
			<Switch>
                <Route
                    key="/users"
                    path="/users"
                    exact
                    component={UsersPage}
                />
                <Route
                    key="/user"
                    path="/user/:userId"
                    exact
                    component={UserPage}
                />
				<Route path="/">
					<Redirect to="/users" />
				</Route>
				<Route render={() => <Redirect to="users" />} />
			</Switch>
		</>
    )
};

export default Routes;