import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(window.innerWidth < 600);

    const toggleSidebar = () => {

        setCollapsed(!collapsed);
    }
    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={`collapsible-sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            
            <ul className='m-3'>
                <li><i className="bi bi-file-lock2 mr-1"></i> <span className='nav-hide'>Dashboard</span><span><i class="bi bi-chevron-right icon-side"></i></span></li>
                <li><i className="bi bi-person-square mr-2"></i>Product<span><i class="bi bi-chevron-right icon-side"></i></span></li>
                <li><i className="bi bi-person-square mr-2"></i>Customer<span><i class="bi bi-chevron-right icon-side"></i></span></li>
                <li><i className="bi bi-coin mr-2"></i>Income<span><i class="bi bi-chevron-right icon-side"></i></span></li>
                <li><i className="bi bi-terminal-dash mr-2"></i>Promote<span><i class="bi bi-chevron-right icon-side"></i></span></li>
                <li> <i className="bi bi-file-lock2 mr-2"></i>Help<span><i class="bi bi-chevron-right icon-side"></i></span></li>
                {/* Add more items as needed */}
                {/* <button className="login-button">Login</button> */}

            </ul>
        </div>

    )
}

export default Navbar
