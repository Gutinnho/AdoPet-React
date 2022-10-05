import Home from 'pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function AppRouter(){
	return(
		<Router>
			<Routes>
				<Route path='/' element={<Home />}/>
			</Routes>
		</Router>
	);
}

export default AppRouter;