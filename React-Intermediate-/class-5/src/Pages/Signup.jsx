import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.webp"

function Sign({setLoggedin}) {
    return (
        <Template
                title="welcome back"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={signupImg}
                formType="signup"
                setLoggedin={setLoggedin}
            />
    );
}
export default Sign;