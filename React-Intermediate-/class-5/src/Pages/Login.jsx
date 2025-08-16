import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png"
import { Link } from "react-router-dom";
function Login({ setLoggedin }) {
    return (
        <div>
            <Template
                title="welcome back"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={loginImg}
                formType="login"
                setLoggedin={setLoggedin}
            />

        </div>
    );
}
export default Login;