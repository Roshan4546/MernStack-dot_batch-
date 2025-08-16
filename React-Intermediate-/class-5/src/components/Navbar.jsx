import React, { lazy } from 'react'
import Logo from "../assets/logo2.png"
import { Link } from 'react-router-dom'
function Navbar(props) {

    let isLoggedin = props.isLoggedin;
    let setLoggedin = props.setLoggedin;
    return (
        <div className='flex justify-evenly text-center'>
            <Link to="/">
                <img src={Logo} alt="Logo" loading={lazy} className="w-20 h-10 rounded-2xl object-cover" />
            </Link>

            <nav >
                <ul className='flex gap-3 justify-center text-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>


            <div className='flex gap-3 ml-5'>
                {!isLoggedin &&  // when you are not login
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                {!isLoggedin &&  // when you are not login
                    <Link to="/signup">
                        <button>
                            Sign up
                        </button>
                    </Link>
                }
                {isLoggedin &&  // when you are login
                    <Link to="/">
                        <button onClick={() => {
                            setLoggedin(false);
                            alert("Logout successfully");
                        }}>
                            Logout
                        </button>
                    </Link>
                }
                {isLoggedin &&  // when you are login
                    <Link to="/dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
