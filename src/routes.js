import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from 'components/Header';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Registration from 'pages/Registration';
import Gallery from 'pages/Gallery';
import Contact from 'pages/Contact';
import Profile from 'pages/Profile';
import Footer from 'components/Footer';

import general from 'styles/_global.module.scss';

function AppRouter(){
	return(
		<Router>
			<div className={general.wrapper}>
				<Header
					perfil={true}
				/>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />

						<Route path='/login' element={<Login />} />

						<Route path='/registration' element={<Registration />} />

						<Route path='/gallery' element={<Gallery />} />

						<Route path='/contact' element={<Contact />} />

						<Route path='/profile' element={<Profile />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</Router>
	);
}

export default AppRouter;