import Button from '@mui/material/Button';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';

const Sidebar = () => {     

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
        
    }
            
  return (
    <>
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">  
                        <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`}  onClick={()=>isOpenSubmenu(0)}>
                            <span className='icon'><TbLayoutDashboardFilled/></span>
                            Dashboard 
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                    
                </li>
                <li>
                      
                        <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true ?'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt/></span>
                            Products 
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/products">Product List</Link></li>
                                <li><Link to="/product/details">Product View</Link></li>
                                <li><Link to="/product/upload">Product Upload</Link></li>
                            </ul>
                        </div>
                  
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`}  onClick={()=>isOpenSubmenu(2)}>
                           <span className='icon'><FaCartArrowDown/></span>
                            Orders
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">   
                        <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`}  onClick={()=>isOpenSubmenu(3)}>
                            <span className='icon'><BiSolidMessageDetail/></span>
                            Messages
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`}  onClick={()=>isOpenSubmenu(4)}>  
                            <span className='icon'><IoNotifications/></span>
                            Notifications
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">    
                        <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`}  onClick={()=>isOpenSubmenu(5)}>
                            <span className='icon'><IoMdSettings/></span>
                            Settings
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                
            </ul>

            <br />

            <div className='logoutWrapper'>
                <div className='logoutBox'>
                    <Button variant='contained' ><IoMdLogOut/>Logout</Button>
                </div>
            </div>
             
        </div>
    </>
  );
}
export default Sidebar;