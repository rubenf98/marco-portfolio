import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <ul>
                    <li>
                        <Link to="/">Return home</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contact;
