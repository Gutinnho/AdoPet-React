import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Registration from 'pages/Registration';
import Login from 'pages/Login';

import styles from 'index.module.scss';
import Gallery from 'pages/Gallery';
import Contact from 'pages/Contact';

function AppRouter(){
	return(
		<Router>
			<div className={styles.wrapper}>
				<div className={styles.wrapper__gridA}>
					<Header 
						perfil={true}
					/>
				</div>

				<main className={styles.wrapper__gridB}>
					<Routes>
						<Route path='/' element={<Home />} />

						<Route path='/login' element={<Login />} />

						<Route path='/registration' element={<Registration />} />

						<Route path='/gallery' element={<Gallery />} />

						<Route path='/contact' element={<Contact />} />
					</Routes>
				</main>

				<div className={styles.wrapper__gridC}>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default AppRouter;