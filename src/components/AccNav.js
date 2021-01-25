import React from 'react'


function AccountNavigation(props) {
    return (
        <div className="acc-nav-outer">
            <div className="acc-nav">
                <div className="w-100 d-flex">
                    <div>
                        <span></span>
                        <h2>Accounts</h2>
                    </div>
                    <div onClick={props.closeAccountNavigation} >
                        X
                    </div>
                </div>
                <div className="acc-links">
                    <ul>
                        <li>Sign in</li>
                        <li>Track Orders</li>
                        <li>Account</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccountNavigation;