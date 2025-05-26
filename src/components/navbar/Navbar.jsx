import { useState } from 'react';
import '../../styles/Navbar.css';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import image1  from "../../assets/toon_profile.png";
import { TiThMenu } from "react-icons/ti";

const Navbar = ({setIsOverlayOpen}) => {
  const [searchText, setSearchText] = useState("");

  const handleOverlayOpen=()=>{
    setIsOverlayOpen(true);
  }

  return (
    <div className='navbar-container'>
        <div className='logo'>
          <h1>
            <span>Health</span><span>care.</span>
          </h1>
        </div>

        <div className='searchBar'>

            <HiMiniMagnifyingGlass className='search-icon'/>
            <input 
            type="text" 
            className='search-inputBox'
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            placeholder='Search'
            />

        </div>

        <div className='profile-container'>
          <IoIosNotifications className='notification-icon' />
          <div className='user'>
            <div className='user-icon'>
              <img src={image1} alt="profile" />
            </div>
            <div className='plus-icon'>
              <FaPlus />
            </div>
            <div className='menu-icon'>
              <TiThMenu onClick={()=>handleOverlayOpen()}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar