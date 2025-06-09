import React, { useRef } from "react";
import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Slider from "react-slick";
import { FaShop } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaTags } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { PiResizeBold } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import UserAvatar from "../../components/userAvatar";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaReply } from "react-icons/fa";



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

const ProductDetails = () =>{

    const productSliderBig = useRef();
    const productSliderSml = useRef();

    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };


    const goToSlide=(index)=>{
        productSliderBig.current.slickGoTo(index);
        productSliderSml.current.slickGoTo(index);
    }

    return (
        <>
        <div className="right-content w-100">
            <div className="card shadow border-0 w-100 flex-row p-4">
                <h5 className="mb-0">Product View</h5>
                <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
                    <StyledBreadcrumb
                        component="a"
                        href="/"
                        label="Dashboard"
                        icon={<HomeIcon fontSize="small"/>}
                    />
                    <StyledBreadcrumb
                        label="Products"
                        component="a"
                        href="/products"
                        
                    />
                    <StyledBreadcrumb
                        label="Product View"
                        component="a"
                    />
                </Breadcrumbs>
            </div>
            <div className="card productDetailsSection">
            <div className="row">
                <div className="col-md-5">
                     <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                        <h6 className="mb-4">Product Gallery</h6>
                        <Slider {...productSliderOptions} ref={productSliderBig} className="sliderBig mb-2">
                            <div className="item">
                                <img src="https://5.imimg.com/data5/LE/WK/LO/SELLER-33389186/mens-formal-blazer-500x500.jpg" className="w-100" />
                            </div>
                            <div className="item">
                                <img src="https://t3.ftcdn.net/jpg/05/80/61/14/360_F_580611440_4oCo3gd5XcCkpaRYyiO7QaS67rKEvLgI.jpg" className="w-100" />
                            </div>
                            <div className="item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Gtzod_uB9zYQxl13XVSw2j102cMmFStXAA&s" className="w-100" />
                            </div>
                            <div className="item">
                                <img src="https://3.imimg.com/data3/XD/NF/MY-21537692/office-coat.jpg" className="w-100" />
                            </div>
                            <div className="item">
                                <img src="https://5.imimg.com/data5/LE/WK/LO/SELLER-33389186/mens-formal-blazer-500x500.jpg" className="w-100" />
                            </div>
                            <div className="item">
                                <img src="https://5.imimg.com/data5/LE/WK/LO/SELLER-33389186/mens-formal-blazer-500x500.jpg" className="w-100" />
                            </div>
                        </Slider>
                        <Slider {...productSliderSmlOptions} ref={productSliderSml} className="sliderSml">
                            <div className="item" onClick={()=>goToSlide(0)}>
                                <img src="https://5.imimg.com/data5/LE/WK/LO/SELLER-33389186/mens-formal-blazer-500x500.jpg" className="w-100" />
                            </div>
                            <div className="item" onClick={()=>goToSlide(1)}>
                                <img src="https://t3.ftcdn.net/jpg/05/80/61/14/360_F_580611440_4oCo3gd5XcCkpaRYyiO7QaS67rKEvLgI.jpg" className="w-100" />
                            </div>
                            <div className="item" onClick={()=>goToSlide(2)}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Gtzod_uB9zYQxl13XVSw2j102cMmFStXAA&s" className="w-100" />
                            </div>
                            <div className="item" onClick={()=>goToSlide(3)}>
                                <img src="https://3.imimg.com/data3/XD/NF/MY-21537692/office-coat.jpg" className="w-100" />
                            </div>
                            <div className="item" onClick={()=>goToSlide(4)}>
                                <img src="https://5.imimg.com/data5/LE/WK/LO/SELLER-33389186/mens-formal-blazer-500x500.jpg" className="w-100" />
                            </div>
                            <div className="item" onClick={()=>goToSlide(5)}>
                                <img src="https://5.imimg.com/data5/LE/WK/LO/SELLER-33389186/mens-formal-blazer-500x500.jpg" className="w-100" />
                            </div>
                        </Slider>
                     </div>
                </div>
                <div className="col-md-7">
                    <div className="pt-3 pb-3 pl-4 pr-4">
                        <h6 className="mb-4">Product Details</h6>
                        <h4>Formal Suits for man wedding slim fit 3 piece dress business party jacket</h4>

                        <div className="productInfo mt-4">
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><FaShop/></span>
                                    <span className="name">Brand</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">Reymond</span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><BiSolidCategoryAlt/></span>
                                    <span className="name">Category</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">Man's</span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><FaTags/></span>
                                    <span className="name">Tags</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">
                                    <ul className="list list-inline tags sml">
                                        <li className="list-inline-item">
                                            <span>SUITE</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>PARTY</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>DRESS</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>SMART</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>MAN</span>
                                        </li>
                                        
                                    </ul>
                                   </span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><IoIosColorPalette/></span>
                                    <span className="name">Color</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">
                                    <ul className="list list-inline tags sml">
                                        <li className="list-inline-item">
                                            <span>BLACK</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>WHITE</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>GREY</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>RED</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>BLUE</span>
                                        </li>
                                        
                                    </ul>
                                   </span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><PiResizeBold/></span>
                                    <span className="name">Size</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">
                                    <ul className="list list-inline tags sml">
                                        <li className="list-inline-item">
                                            <span>SM</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>L</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>XL</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>XXL</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span>XXXL</span>
                                        </li>
                                        
                                    </ul>
                                   </span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><FaRegMoneyBillAlt/></span>
                                    <span className="name">Price</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">Man's</span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><MdAddShoppingCart/></span>
                                    <span className="name">Stock</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">(68) Piece</span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><MdReviews/></span>
                                    <span className="name">Review</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">(0.3) Review</span>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><MdOutlinePublishedWithChanges/></span>
                                    <span className="name">Published</span>
                                </div>
                                <div className="col-sm-9">
                                   : <span className="">06 June 2025</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="p-4">
                <h6 className="mt-4 mb-3">Product Description</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eaque delectus possimus recusandae rerum? Nisi accusamus cupiditate voluptate eos suscipit, repellat esse fugiat, vitae tempora quidem sequi quas, iusto maxime quod vero. Quam cumque neque optio nobis rerum perspiciatis nisi sunt reprehenderit culpa. Dolore optio suscipit, sint delectus iure non odit consequatur voluptate cupiditate numquam itaque provident rem labore esse quasi a. In quasi quae at nam, vitae dolore reprehenderit laborum aut. Odio autem minima nulla delectus praesentium eum ullam.</p>
                <br />
                <h6 className="mt-4 mb-4">Rating Analytics</h6>
                <div className="ratingSection">
                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            5 Star
                        </span>
                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'90%'}}></div>
                            </div>
                        </div>
                        <span className="col3">
                            (22)
                        </span>
                    </div>
                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            4 Star
                        </span>
                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'70%'}}></div>
                            </div>
                        </div>
                        <span className="col3">
                            (22)
                        </span>
                    </div>
                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            3 Star
                        </span>
                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'50%'}}></div>
                            </div>
                        </div>
                        <span className="col3">
                            (2)
                        </span>
                    </div>
                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            2 Star
                        </span>
                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'10%'}}></div>
                            </div>
                        </div>
                        <span className="col3">
                            (22)
                        </span>
                    </div>
                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            1 Star
                        </span>
                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'5%'}}></div>
                            </div>
                        </div>
                        <span className="col3">
                            (22)
                        </span>
                    </div>
                </div>

                <br />

                <h6 className="mt-4 mb-4">Customer Reviews</h6>
                <div className="reviewsSection">
                    <div className="reviewsRow">
                        <div className="row">
                            <div className="col-sm-7 d-flex">
                                <div className="d-flex  flex-column">
                                    <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatar img={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} lg={true}/>
                                        <div className="info pl-3">
                                            <h6>Aman Verma</h6>
                                            <span>25 minutes ago!</span>
                                        </div>
                                    </div>
                                    <Rating  name="read-only" value={4.5} precision={0.5} readOnly />
                                </div>
                            </div>
                            <div className="col-sm-5 d-flex align-items-center">
                                <div className="ml-auto">
                                    <Button className="btn-blue btn-lg btn-big ml-auto"><FaReply/> &nbsp; Reply</Button>
                                </div>

                            </div>

                            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officiis vero dolorum accusantium, beatae sunt! Quam cum aut at impedit architecto reprehenderit mollitia accusantium quisquam error eum officia officiis, numquam iure culpa.</p>
                                
                        </div>
                    </div>
                    <div className="reviewsRow reply">
                        <div className="row">
                            <div className="col-sm-7 d-flex">
                                <div className="d-flex  flex-column">
                                    <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatar img={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} lg={true}/>
                                        <div className="info pl-3">
                                            <h6>Aman Verma</h6>
                                            <span>25 minutes ago!</span>
                                        </div>
                                    </div>
                                    <Rating  name="read-only" value={4.5} precision={0.5} readOnly />
                                </div>
                            </div>
                            <div className="col-sm-5 d-flex align-items-center">
                                <div className="ml-auto">
                                    <Button className="btn-blue btn-lg btn-big ml-auto"><FaReply/> &nbsp; Reply</Button>
                                </div>

                            </div>

                            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officiis vero dolorum accusantium, beatae sunt! Quam cum aut at impedit architecto reprehenderit mollitia accusantium quisquam error eum officia officiis, numquam iure culpa.</p>
                                
                        </div>
                    </div>
                    <div className="reviewsRow reply">
                        <div className="row">
                            <div className="col-sm-7 d-flex">
                                <div className="d-flex  flex-column">
                                    <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatar img={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} lg={true}/>
                                        <div className="info pl-3">
                                            <h6>Aman Verma</h6>
                                            <span>25 minutes ago!</span>
                                        </div>
                                    </div>
                                    <Rating  name="read-only" value={4.5} precision={0.5} readOnly />
                                </div>
                            </div>
                            <div className="col-sm-5 d-flex align-items-center">
                                <div className="ml-auto">
                                    <Button className="btn-blue btn-lg btn-big ml-auto"><FaReply/> &nbsp; Reply</Button>
                                </div>

                            </div>

                            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officiis vero dolorum accusantium, beatae sunt! Quam cum aut at impedit architecto reprehenderit mollitia accusantium quisquam error eum officia officiis, numquam iure culpa.</p>
                                
                        </div>
                    </div>
                    <div className="reviewsRow">
                        <div className="row">
                            <div className="col-sm-7 d-flex">
                                <div className="d-flex  flex-column">
                                    <div className="userInfo d-flex align-items-center mb-3">
                                        <UserAvatar img={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} lg={true}/>
                                        <div className="info pl-3">
                                            <h6>Aman Verma</h6>
                                            <span>25 minutes ago!</span>
                                        </div>
                                    </div>
                                    <Rating  name="read-only" value={4.5} precision={0.5} readOnly />
                                </div>
                            </div>
                            <div className="col-sm-5 d-flex align-items-center">
                                <div className="ml-auto">
                                    <Button className="btn-blue btn-lg btn-big ml-auto"><FaReply/> &nbsp; Reply</Button>
                                </div>

                            </div>

                            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officiis vero dolorum accusantium, beatae sunt! Quam cum aut at impedit architecto reprehenderit mollitia accusantium quisquam error eum officia officiis, numquam iure culpa.</p>
                                
                        </div>
                    </div>
                </div>

                <br />
                <h6 className="mt-4 mb-4">Reviews Reply Form</h6>
                <form className="reviewForm ">
                    <textarea placeholder="write here"></textarea>
                </form>
                <Button className="btn-blue btn-big btn-lg w-100 mt-4">Drop your replies</Button>


            </div>
        </div>
        </div>

        
        </>
    );
}

export default ProductDetails;