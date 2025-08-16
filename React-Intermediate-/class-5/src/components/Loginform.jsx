import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Loginform = () => {

    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData, // spread previous data
            [event.target.name]: event.target.value // update the changed field
        }));
    }

    return (
        <form action="">
            <label htmlFor="">
                <p>Email Address
                    <sup>*</sup>
                </p>
                <input type="email"
                    required
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email id'
                    name='email'
                />
            </label>
            <label htmlFor="">
                <p>Email Address
                    <sup>*</sup>
                </p>
                <input
                    type={showPassword ? ("text") : ("password")}
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name='password'
                />
                <span onClick={() => { // toggling true and false.
                    setShowPassword((prev) => !prev)
                }}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye/>)}
                </span>
            </label>
            <Link to="#">
                <p>
                    Forgot password
                </p>
            </Link>

            <button >
                Sign in
            </button>
        </form>
    )
}

export default Loginform
