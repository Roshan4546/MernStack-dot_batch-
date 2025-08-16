import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react'
const Signupform = () => {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form action="">

                <div className='flex gap-[10px]'>
                    <label htmlFor="">
                        <p>First Name
                            <sup>*</sup>
                        </p>
                        <input type="text"
                            required
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='First Name'
                            value={FormData.firstName}
                        />
                    </label>
                    <label htmlFor="">
                        <p>Last Name
                            <sup>*</sup>
                        </p>
                        <input type="text"
                            required
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Last Name'
                            value={FormData.lastName}
                        />
                    </label>
                </div>
                <label htmlFor="">
                    <p>Email Address
                        <sup>*</sup>
                    </p>
                    <input type="email"
                        required
                        name='email'
                        onChange={changeHandler}
                        placeholder='Email id'
                        value={FormData.email}
                    />
                </label>
                <label htmlFor="">
                    <p>Password
                        <sup>*</sup>
                    </p>
                    <input type={showPassword ? ('text') : ('password')}
                        required
                        name='password'
                        onChange={changeHandler}
                        placeholder='Create a Password'
                        value={FormData.password}
                    />
                    <span onClick={() => { // toggling true and false.
                        setShowPassword((prev) => !prev)
                    }}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>
                <label htmlFor="">
                    <p>Re-enter password
                        <sup>*</sup>
                    </p>
                    <input type="password"
                        required
                        name='password'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={FormData.confirmPassword}
                    />
                </label>

                <button>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default Signupform
