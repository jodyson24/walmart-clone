import React, {Component} from 'react'
import logo from '../Walmart_svgs_collection/svg2.svg'
import {Link} from 'react-router-dom'

class SignUp extends Component{
    constructor(props){
        super(props);

        this.initialState = {
            name: '',
            phone: '',
            email: '',
            password : '',
        };

        this.state = this.initialState
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name] : value
        });
        console.log(this.state)
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        return(
            <div className="account-full-body">
            <div className="accounts-main-region c-acc">
            <div className="logo-img d-flex justify-content-center">
                        <img src={logo} alt="logo-img"/>
                    </div>
                <div>
                    <h3 className="form-text">Create your Walmart Account</h3>
                </div>
                <form>
                    <div>
                        <input type="text" 
                        placeholder="Full Name"
                        name="name"
                        className="input-field"
                        id="name"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <input type="text" 
                        placeholder="Phone Number"
                        name="phone"
                        className="input-field"
                        id="phone"
                        value={this.state.phone}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <input type="text" 
                        placeholder="Email"
                        className="input-field"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <div>
                        <input type="text" 
                        placeholder="Password"
                        className="input-field"
                        name="password"
                        id="password"
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
                    <div className="d-flex">
                        <input type="checkbox" 
                        checked={true}
                        className="checked mt-3"
                        />
                        <p className="letters-info">
                        Email me about Rollbacks, special pricing, hot new items,
                         gift ideas and more.
                        </p>
                    </div>
                    <div className="letters-info">
                    By clicking Create Account, you acknowledge you have read 
                    and agreed to our Terms of Use and Privacy Policy.
                    </div>
                    <div>
                        <button className="submit-btn form-btn"
                        type="submit" value="submit"
                        onClick={this.onFormSubmit}
                        >Create Account</button>
                    </div>
                </form>
    
                <div className="btn-area sign-up">
                    <p>Already have an account?</p>
                    <button className="submit-btn"
                    onClick={this.props.onclick}
                    ><Link to="/SignIn">Sign in</Link>
                    </button>
                </div>
            </div>
            <div className="accounts-footer">
    
            </div>
        </div>
        )
    
    }
}   

export default SignUp;