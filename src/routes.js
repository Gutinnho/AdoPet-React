import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from 'pages/Registration';

function AppRouter(){
	return(
		<Router>
			<Header 
				perfil={true}
			/>

			<main>
				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/registration' element={<Registration />} />
				</Routes>
			</main>

				<Footer />
			</Router>
	);
}

export default AppRouter;