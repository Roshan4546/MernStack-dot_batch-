import React from 'react'
import { useState } from 'react'
import frameImg from "../assets/frame.webp"
const Template = ({ title, desc1, desc2, image, formtype, seisLoggedin }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signip" ?
                (
                    <SignupForm></SignupForm>
                ) :
                (
                    <LoginForm></LoginForm>
                )
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>

                <button>
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div>
                <img src={frameImg} alt="Pattern" width={558} height={504} loading="lazy" />
                <img src={image} alt="Students" width={558} height={490} loading="lazy" />
            </div>
        </div>
    )
}

export default Template
