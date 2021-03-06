import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

    constructor () {
        super();

        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        
        const {value, name} = e.target;

        this.setState({ [name]: value });

    }

    render() {

        return (
            <div className='sign-in'>

                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput type="email" name='email' label="Email" value={this.state.email} handleChange={this.handleChange} required></FormInput>

                    <FormInput type="password" name='password' label="Password" value={this.state.password} handleChange={this.handleChange} required></FormInput>

                    <div className="buttons">
                        
                        <CustomButton type="submit">Sign In</CustomButton>
                        
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    
                    </div>

                </form>

            </div>
        );

    }

}

export default SignIn;