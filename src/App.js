import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Component } from 'react';
import { auth } from './firebase/firebase.utils';

class App extends Component {

    constructor () {
        super();

        this.state = {
            currentUser: null
        };

    }

    authUnsubscribe = null;

    componentDidMount () {

        this.authUnsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            this.setState({currentUser: user});
        });

    }

    componentWillUnmount() {
        this.authUnsubscribe();
    }
    
    render () {

        return (
    
            <div className="App">
    
                <Header currentUser={this.state.currentUser}></Header>
    
                <Routes>
    
                    <Route exact path='/' element={<HomePage></HomePage>}></Route>
                    <Route path='/shop' element={<ShopPage></ShopPage>}></Route>
                    <Route path='/signin' element={<SignInAndSignUp></SignInAndSignUp>}></Route>
    
                </Routes>
    
            </div>
        );

    }
    
}

export default App;
