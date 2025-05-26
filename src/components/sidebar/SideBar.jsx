import React from 'react'
import { IoSettingsSharp } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import '../../styles/SideBar.css';


const SideBar = ({ items }) => {

    const items_general = items.filter((item) => item.category === 'General');
    const items_tools = items.filter((item) => item.category === 'Tools');

    const location = useLocation();

    return (
        <div className='sidebar-container'>
            <div className='menu'>
                <div>
                    <h5>General</h5>
                    {items_general.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <p key={index} className={`menu-items ${location.pathname === item.link ? 'active' : ''}`}>
                                <Icon />
                                <a href={item.link}>{item.name}</a>
                            </p>
                        );
                    })}
                </div>
                <div>
                    <h5>Tools</h5>
                    {items_tools.map((item, index) => {
                        const Icon = item.icon;
                        return (

                            <p key={index} className={`menu-items ${location.pathname === item.link ? 'active' : ''}`}>
                                <Icon />
                                <a href={item.link}>{item.name}</a>
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className={`setting-container menu-items ${location.pathname === '/setting' ? 'active' : ''}`}>
                <IoSettingsSharp />
                <a href={"#"}>Setting</a>
            </div>
        </div>
    )
}

export default SideBar