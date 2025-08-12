import React from 'react'
import { Outlet } from 'react-router-dom'; // Import Outlet

function MainHeader() {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default MainHeader
