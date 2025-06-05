import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiDotsHorizontal } from "react-icons/hi";
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";

export const data = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

export const options = {
  backgroundColor: 'transparent',
  legend: 'none',
  bar: { groupWidth: '100%' },
  candlestick: {
    fallingColor: { stroke: 'black', strokeWidth: 0, fill: 'red' }, // red with black border
    risingColor: { stroke: 'black', strokeWidth: 0, fill: '#0f9d58' }   // green with black border
  },
  hAxis: {
    textStyle: {
      color: 'white'
    }
  },
  vAxis: {
    textStyle: {
      color: 'white'
    }
  },
  titleTextStyle: {
    color: 'white'
  }
};


const Dashboard = () =>{

    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };
    const ITEM_HEIGHT = 48;

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);
        window.scrollTo(0,0);
    },[])


    const [showBy, setShowBy] =useState('');
    const [catBy, setCatBy] =useState('');
    const handleChange = (event) => {
    setShowBy(event.target.value);
  };


    return(
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle/>} grow={true} />
                            <DashboardBox color={["#c012e2","#eb64fe"]} icon={<IoMdCart/>}/>
                            <DashboardBox color={["#2c78e5","#60aff5"]} icon={<MdShoppingBag/>} />
                            <DashboardBox color={["#e1950e","#f3cd29"]} icon={<GiStarsStack/>} />
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h4 className="text-white mb-0 mt-0">Total Sales</h4>
                                <div className="ml-auto">
                                    <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsHorizontal/></Button>
                                    <Menu
                                        className="dropdown_menu"
                                        MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                        paper: {
                                            style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                            },
                                        },
                                        }}
                                    >
                            
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer/> Last Day
                                        </MenuItem>
                                        <MenuItem  onClick={handleClose}>
                                            <IoIosTimer/> Last Week
                                        </MenuItem>
                                        <MenuItem  onClick={handleClose}>
                                            <IoIosTimer/> Last Month
                                        </MenuItem>
                                        <MenuItem  onClick={handleClose}>
                                            <IoIosTimer/> Last Year
                                        </MenuItem>
                                        
                                    </Menu>
                                </div>
                            </div>

                            <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                            <p >$3,578.9 in last month</p>

                            <Chart
                                chartType="CandlestickChart"
                                width="100%"
                                height="200px"
                                data={data}
                                options={options}
                            />


                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>
                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                            <Select
                            value={showBy}
                            onChange={(e)=>setShowBy(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className="w-100"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                            <Select
                            value={catBy}
                            onChange={(e)=>setCatBy(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            labelId="demo-select-small-label"
                            className="w-100"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </div>

                    </div>


                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCTS</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ml-3">
                                                <h6> Polo men's Tshirt</h6>
                                                <p>Best mens wear polo tshirt available on our ecommerce go buy on heavy discount</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Mens</td>
                                    <td>Polo</td>
                                    <td>
                                        <div>
                                            <del className="old">$17.00</del>
                                            <span className="new text-danger">$17.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><FaTrashAlt/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ml-3">
                                                <h6> Polo men's Tshirt</h6>
                                                <p>Best mens wear polo tshirt available on our ecommerce go buy on heavy discount</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Mens</td>
                                    <td>Polo</td>
                                    <td>
                                        <div>
                                            <del className="old">$17.00</del>
                                            <span className="new text-danger">$17.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><FaTrashAlt/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ml-3">
                                                <h6> Polo men's Tshirt</h6>
                                                <p>Best mens wear polo tshirt available on our ecommerce go buy on heavy discount</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Mens</td>
                                    <td>Polo</td>
                                    <td>
                                        <div>
                                            <del className="old">$17.00</del>
                                            <span className="new text-danger">$17.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><FaTrashAlt/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ml-3">
                                                <h6> Polo men's Tshirt</h6>
                                                <p>Best mens wear polo tshirt available on our ecommerce go buy on heavy discount</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Mens</td>
                                    <td>Polo</td>
                                    <td>
                                        <div>
                                            <del className="old">$17.00</del>
                                            <span className="new text-danger">$17.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><FaTrashAlt/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ml-3">
                                                <h6> Polo men's Tshirt</h6>
                                                <p>Best mens wear polo tshirt available on our ecommerce go buy on heavy discount</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Mens</td>
                                    <td>Polo</td>
                                    <td>
                                        <div>
                                            <del className="old">$17.00</del>
                                            <span className="new text-danger">$17.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><FaTrashAlt/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info ml-3">
                                                <h6> Polo men's Tshirt</h6>
                                                <p>Best mens wear polo tshirt available on our ecommerce go buy on heavy discount</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Mens</td>
                                    <td>Polo</td>
                                    <td>
                                        <div>
                                            <del className="old">$17.00</del>
                                            <span className="new text-danger">$17.00</span>
                                        </div>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><FaTrashAlt/></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>
                            <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton/>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
};

export default Dashboard;
