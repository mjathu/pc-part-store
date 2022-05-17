import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div className="App">

            <Header></Header>

            <Routes>

                <Route exact path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/shop' element={<ShopPage></ShopPage>}></Route>
                <Route path='/signin' element={<SignInAndSignUp></SignInAndSignUp>}></Route>

            </Routes>

        </div>
    );
}

export default App;
