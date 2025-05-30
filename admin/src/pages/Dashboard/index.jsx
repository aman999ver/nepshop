import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HiDotsHorizontal } from "react-icons/hi";
import Button from '@mui/material/Button';
import { useState } from "react";
import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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
    const [showBy, setShowBy] =useState('');
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
                        <div className="col">
                            <h4>SHOW BY</h4>
                            <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
};

export default Dashboard;
