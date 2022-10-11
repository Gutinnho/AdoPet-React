import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styles from 'index.module.scss';

function AppRouter(){
	return(
		<Router>
			<div className={styles.wrapper}>
				<Header 
					perfil={true}
				/>

				<Routes>
					<Route path='/' element={<Home />}/>
				</Routes>
			</div>

				<Footer />
			</Router>
	);
}

export default AppRouter;