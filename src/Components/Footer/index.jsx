import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className="ml-2">Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Free delivery for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine/></span>
                        <span className="ml-2">Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiBadgeDollar/></span>
                        <span className="ml-2">Best price on the market</span>
                    </div>
                </div>


                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>Fruits & Vegetables</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotics Fruits and veggies</Link></li>
                            <li><Link to="#">Packed produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Electronics</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotics Fruits and veggies</Link></li>
                            <li><Link to="#">Packed produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Beauty & Grooming</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotics Fruits and veggies</Link></li>
                            <li><Link to="#">Packed produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Fashion & wearable</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotics Fruits and veggies</Link></li>
                            <li><Link to="#">Packed produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Mobiles</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotics Fruits and veggies</Link></li>
                            <li><Link to="#">Packed produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul> 
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All rights reserved</p>
                    <ul className="list list-inline ml-auto mb-0">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebook/></Link>
                            <Link to="#"><FaTwitter/></Link>
                            <Link to="#"><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;