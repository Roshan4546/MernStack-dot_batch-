import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import PageChange from '../components/PageChange';
function Tag() {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div>
            <Header></Header>
            <div>
                <button
                    onClick={() => navigation(-1)}
                >
                    back
                </button>
                <h2>
                    Blogs on <span>#{tag}</span>
                </h2>
            </div>
            <Blogs></Blogs>
            <PageChange></PageChange>
        </div>
    )
}

export default Tag
