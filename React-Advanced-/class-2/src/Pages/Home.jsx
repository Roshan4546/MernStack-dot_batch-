import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import PageChange from '../components/PageChange'
function Home() {
    return (
        <div>
            <Header></Header>
            <div>
                <Blogs></Blogs>
                <PageChange></PageChange>
            </div>
        </div>
    )
}

export default Home
