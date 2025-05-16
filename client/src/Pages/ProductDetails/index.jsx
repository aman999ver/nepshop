import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button';
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () =>{

    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    
    const isActive = (index) => {
        setActiveSize(index);
    }


    return(
        <>
        <section className="productDetails section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pl-5">
                        <ProductZoom/>
                    </div>
                    <div className="col-md-7 pl-5 pr-5">
                        <h2 className="hd text-capitalize">Polo Men's Tshirt</h2>
                        <ul className="list list-inline d-flex align-items-center">
                            <li className="list-inline-item">
                                <div className="d-flex align-items-center">
                                    <span className="text-light mr-2">Brands : </span>
                                    <span>Polo's</span>
                                </div>
                            </li>
                            <li className="list-inline-item d-flex">
                                <div className="d-flex align-items-center">
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                    <span className="text-light cursor ml-2">1 Review</span>
                                </div>
                            </li>
                            
                        </ul>
                        
                        <div className='d-flex info mb-3'>
                            <span className='oldPrice lg mr-2'>$20</span>
                            <span className='netPrice text-danger lg'>$15</span>
                        </div>

                        <span className="badge badge-success">IN STOCK</span>
                        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum veniam vitae commodi accusamus nisi illo quia nesciunt est enim vero rem facere quisquam exercitationem mollitia, aspernatur qui, natus id! accusamus nisi illo quia nesciunt est enim vero rem facere quisquam exercitationem mollitia, aspernatur qui, natus id!</p>

                        <div className="productSize d-flex align-items-center">
                            <span>Size/Weight</span>
                            <ul className="list list-inline mb-0 pl-4">
                               <li className="list-inline-item"><a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={()=> isActive(0)} >SM</a></li>
                               <li className="list-inline-item"><a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={()=> isActive(1)}>M</a></li>
                               <li className="list-inline-item"><a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={()=> isActive(2)}>L</a></li>
                               <li className="list-inline-item"><a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={()=> isActive(3)}>XL</a></li>
                               <li className="list-inline-item"><a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={()=> isActive(4)}>XXL</a></li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <QuantityBox/>
                            <Button className="btn-blue btn-lg btn-big btn-round"><BsCartFill/> &nbsp; Add to cart</Button>
                            <Tooltip title="Add to WishList" placement="top">   
                            <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><FaRegHeart/></Button>
                            </Tooltip>
                            <Tooltip title="Add to Compare" placement="top">   
                            <Button className="btn-blue btn-lg btn-big btn-circle ml-2"><MdOutlineCompareArrows/></Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <br />

                <div className="card mt-5 p-5 detailPageTabs">
                    <div className="customTabs">
                        <ul className="list list-inline">
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => {
                                    setActiveTabs(0)
                                }}
                                >Description</Button>
                            </li>
                            
                            <li className="list-inline-item">
                                <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => {
                                    setActiveTabs(1)
                                }}
                                >Aditional Info</Button>
                            </li>

                            <li className="list-inline-item ">
                                <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => {
                                    setActiveTabs(2)
                                }}
                                >Reviews (3)</Button>
                            </li>
                            
                        </ul>

                        <br />
                        
                        {
                            activeTabs ===0 &&
                            <div className="tabContent">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis soluta maxime quos neque aspernatur!</p>
                            </div>
                        }
                       {
                        activeTabs === 1 && (
                            <div className="tabContent">
                                <table className="table-responsive">
                                    <tbody>
                                        <tr className="stand-up">
                                            <th>Stand Up</th>
                                            <td>
                                                <p>35"L x 24"W x 37-45"H (front to back wheel)</p>
                                            </td>
                                        </tr>
                                        <tr className="folded-wo-wheels">
                                            <th>Folded (w/o wheels)</th>
                                            <td>
                                                <p>32.5"L x 18.5"W x 16.5"H</p>
                                            </td>
                                        </tr>
                                        <tr className="folded-w-wheels">
                                            <th>Folded (w/ wheels)</th>
                                            <td>
                                                <p>32.5"L x 24"W x 18.5"H</p>
                                            </td>
                                        </tr>
                                        <tr className="door-pass-through">
                                            <th>Door Pass Through</th>
                                            <td>
                                                <p>24"</p>
                                            </td>
                                        </tr>
                                        <tr className="frame">
                                            <th>Frame</th>
                                            <td>
                                                <p>Aluminum</p>
                                            </td>
                                        </tr>
                                        <tr className="weight-wo-wheels">
                                            <th>Weight (w/o wheels)</th>
                                            <td>
                                                <p>28 LBS</p>
                                            </td>
                                        </tr>
                                        <tr className="weight-capacity">
                                            <th>Weight Capacity</th>
                                            <td>
                                                <p>60 LBS</p>
                                            </td>
                                        </tr>
                                        <tr className="width">
                                            <th>Width</th>
                                            <td>
                                                <p>24"</p>
                                            </td>
                                        </tr>
                                        <tr className="handle-height-ground-to-handle">
                                            <th>Handle height (ground to handle)</th>
                                            <td>
                                                <p>37-45"</p>
                                            </td>
                                        </tr>
                                        <tr className="wheels">
                                            <th>Wheels</th>
                                            <td>
                                                <p>12" air / wide track slick tread</p>
                                            </td>
                                        </tr>
                                        <tr className="seat-back-height">
                                            <th>Seat back height</th>
                                            <td>
                                                <p>21.5"</p>
                                            </td>
                                        </tr>
                                        <tr className="head-room-inside-canopy">
                                            <th>Head room (inside canopy)</th>
                                            <td>
                                                <p>25"</p>
                                            </td>
                                        </tr>
                                        <tr className="pa_color">
                                            <th>Color</th>
                                            <td>
                                                <p>Black, Blue, Red, White</p>
                                            </td>
                                        </tr>
                                        <tr className="pa_size">
                                            <th>Size</th>
                                            <td>
                                                <p>M, S</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}


                        {   
                            activeTabs === 2 &&
                            <div className="tabContent">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h3>Customer question & answers</h3>
                                        <br />

                                        <div className="card p-4 reviewCard flex-row">
                                            
                                        <div className="image">
                                            <div className="rounded-circle">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="/>
                                            </div>
                                            <span className="text-g d-block text-center font-weight-bold">Aman Verma</span>
                                        </div>

                                        <div className="info pl-5">
                                            <div className="d-flex align-items-center w-100">
                                                <h5 className="text-light">01/03/2025</h5>
                                                <div className="ml-auto">
                                                    <Rating name="half-rating-read"
                                                    value={4.5}
                                                    precision={0.5} size="small" readOnly/>
                                                </div>

                                            </div>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias error quos blanditiis sequi libero illum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla modi deserunt dignissimos voluptatum incidunt dolorem, nemo laboriosam ducimus dicta minima sunt, similique vitae dolore sequi assumenda distinctio voluptates numquam optio.</p>
                                        </div>
                            
                                        </div>

                                        <br className="res-hide"/>
                                        <br className="res-hide"/>



                                        <form className="reviewForm">
                                            <h4>Add a review</h4> 
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Write a Review" name="review"></textarea>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Name" name="userName" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Rating name="rating" value={4.5} precision={0.5} />
                                                    </div>
                                                </div>
                                            </div>

                                            <br />
                                            <div className="form-group">
                                                <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>    
                            </div>
                        }



                    </div>
                </div>

                <br />
                <RelatedProducts title="RELATED PRODUCTS"/>
                <RelatedProducts title="RECENTLY VIEWED PRODUCTS"/>


            </div>
        </section>
        </>
    );
}

export default ProductDetails;