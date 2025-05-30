
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

import { useState } from "react";
import { Divider } from "@mui/material";

const Header = () => {  

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationsDrop, setisOpenNotificationsDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpenNotificationsDrop);
    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpenNotificationsDrop = () => {
        setisOpenNotificationsDrop(true);
    }   
    const handleCloseNotificationsDrop = () => {
        setisOpenNotificationsDrop(false);
    }   

  return (
    <>
        <header className="d-flex align-items-center">
            <div className="container-fluid w-100">
                <div className="row d-flex align-items-center w-100">
                    <div className="col-sm-2 part1">
                        <Link to={"/"} className="d-flex align-items-center logo"><img src={logo} />
                        <span className="ml-2">NEPSHOP</span></Link>
                    </div>

                    <div className="col-sm-3 d-flex align-items-center part2 pl-4">
                        <Button className="rounded-circle mr-3"><MdMenuOpen/></Button>
                        <SearchBox/>
                    </div>

                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        <Button className="rounded-circle mr-3"><MdOutlineLightMode/></Button>   
                        <Button className="rounded-circle mr-3"><IoCartOutline/></Button>

                        

                        <Button className="rounded-circle mr-3"><MdOutlineMailOutline/></Button>
                        <div className="dropdownWrapper position-relative">
                            <Button className="rounded-circle mr-3" onClick={handleOpenNotificationsDrop}><FaRegBell/></Button>
                                <Menu
                                    anchorEl={isOpenNotificationsDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleCloseNotificationsDrop}
                                    onClick={handleCloseNotificationsDrop}
                                
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="head pl-3 pb-0">
                                        <h4>Notifications (12)</h4>
                                    </div>

                                    <Divider className="mb-1" />

                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    
                                    
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleOpenMyAccDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    </div>

                                    <div className="pl-3 pr-3 pt-2 pb-1 w-100">
                                        <Button className="btn-blue w-100">View all notifications</Button>
                                    </div>
                                    
                                </Menu>
                                <Menu
                                    anchorEl={isOpenNotificationsDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    
                                    onClose={handleCloseNotificationsDrop}
                                    onClick={handleCloseNotificationsDrop}
                                
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="head pl-3 pb-0">
                                        <h4>Notifications (12)</h4>
                                    </div>

                                    <Divider className="mb-1" />

                                    <MenuItem onClick={handleCloseNotificationsDrop}>
                                        <div className="d-flex ">    
                                            <div>
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="dropdownInfo">
                                                <h4>
                                                    <span>
                                                        <b>Aman Verma </b>
                                                        added to his favorite list
                                                        <b> Polo Men's Tshirt</b>
                                                    </span>
                                                </h4>
                                                <p className="text-sky mb-0">few seconds ago</p>
                                            </div>

                                        </div>
                                    </MenuItem>
                                    
                                </Menu>
                        </div>

                        <div className="myAccWrapper">
                            <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
                                    </span>
                                </div>

                                <div className="userInfo">
                                    <h4>Aman Verma</h4>
                                    <p className="mb-0">@mrwhite</p>
                                </div>

                            </Button>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openMyAcc}
                                onClose={handleCloseMyAccDrop}
                                onClick={handleCloseMyAccDrop}
                               
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <FaUser />
                                    </ListItemIcon>
                                    My Account   
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <IoShieldHalfSharp />
                                    </ListItemIcon>
                                    Reset Password   
                                </MenuItem>
                                <MenuItem onClick={handleCloseMyAccDrop}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>


                        </div>

                    </div>

                </div>
            </div>
        </header>
    </>
  );
}

export default Header;