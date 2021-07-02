import React from 'react'
import {
	Switch, Route
} from 'react-router-dom'
import AuthRoutes from './pages/Auth'


const Routes = () => {
	return (
		<Switch>
			<Route path={"/auth"} component={AuthRoutes} />
		</Switch>
	)
}

export default Routes;
