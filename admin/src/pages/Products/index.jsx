
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Checkbox from "@mui/material";
import { Link } from "react-router-dom";

const label = { inputProps: {'aria-label': 'Checkbox demo'}};

const StyledBreadcrumb = styled(Chip)(({theme}) =>{
    const backgroundColor = 
        theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
        return{
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active':{
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
});

const Products = () => {

    const [anchorEl, setAnchorEl] = useState(null);
     const [showBy, setShowBy] =useState('');
        const [catBy, setCatBy] =useState('');
        const open = Boolean(anchorEl);

        const ITEM_HEIGHT = 48;

        const handleChange = (event) => {
        setShowBy(event.target.value);
        }
    return(
        <>
        <div className="right-content w-100">
                   <div className="card shadow border-0 w-100 flex-row p-4">
                       <h5 className="mb-0">Product List</h5>
                       <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                           <StyledBreadcrumb
                               component="a"
                               href="/dashboard"
                               label="Dashboard"
                               icon={<HomeIcon fontSize="small"/>}
                           />
                           <StyledBreadcrumb
                               label="Products"
                               deleteIcon={<ExpandMoreIcon />}
                           />
                       </Breadcrumbs>
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
                                                                <Link to="/product/details"><Button className="secondary" color="secondary"><FaEye/></Button></Link>
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
}

export default Products;