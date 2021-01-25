import React, { Component } from 'react';
import logo from '../Walmart_svgs_collection/svg2.svg'
import { Link } from 'react-router-dom'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            email: '',
            password: '',
        };

        this.state = this.initialState;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    // onFormSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.signIn(this.state);
    //     this.setState(this.initialState);
    // }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        // returnUrl
        const { email, password, } = this.state;

        // stop here if form is invalid
        if (!(email && password)) {
            return;
        }

        this.setState({ loading: true });
        this.props.login(email, password)
            .then(
                user => {
                    window.location="home.js"
                },
                error => this.setState({ error, loading: false })
            );
    }

    render() {
        return (
            <div className="account-full-body">
                <div className="accounts-main-region">
                    <div className="logo-img d-flex justify-content-center">
                        <img src={logo} alt="logo-img" />
                    </div>
                    <div>
                        <h3 className="form-text">Sign in to your Walmart Account</h3>
                    </div>
                    <form>
                        <div>
                            <input type="text"
                                className="input-field"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={this.state.email}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div>
                            <input type="text"
                                placeholder="Password"
                                className="input-field"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div className="recovery">
                            <p>Forget Password</p>
                        </div>
                        <div className="d-flex">
                            <input type="checkbox"
                                checked="checked"
                                className="checked mt-3"
                            />
                            <div className="letters-info">
                                <p>Keep me Signed in</p>
                                <p>Uncheck if using a public device </p>
                            </div>
                        </div>
                        <div className="pt-3">
                            <button
                                onClick={this.signIn}
                                className="submit-btn form-btn"
                            >Sign In</button>
                        </div>
                    </form>

                    <div className="btn-area" >
                        <p>Don't have an account?</p>
                        <button
                            className="submit-btn"
                        > <Link to="/SignUp">Create Account</Link>
                        </button>
                    </div>
                </div>
                <div className="accounts-footer">

                </div>
            </div>
        )
    }
}

export default SignIn;