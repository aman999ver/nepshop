import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";

const Cart = () => {
    return(
        <>
            <section className="section cartPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="hd mb-0">Your Cart</h2>
                    <p>There are <b>3</b> products in your cart</p>

                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                <th width="35%">Product</th>
                                <th width="15%">Unit Price</th>
                                <th width="25%">Quantity</th>
                                <th width="15%">Sub Total</th>
                                <th width="10%">Remove</th>
                            </tr>
                            </thead>
                        
                        <tbody>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center cartitemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6>Polo Men's Tshirt </h6>
                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        </div>
                                    </div>
                                    </Link>
                                </td>
                                <td width="15%">$15</td>
                                <td width="25%">
                                    <QuantityBox/>
                                </td>
                                <td width="15%">$15</td>
                                <td width="10%"><span className="remove"><IoIosClose/></span></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center cartitemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6>Polo Men's Tshirt </h6>
                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        </div>
                                    </div>
                                    </Link>
                                </td>
                                <td width="15%">$15</td>
                                <td width="25%">
                                    <QuantityBox/>
                                </td>
                                <td width="15%">$15</td>
                                <td width="10%"><span className="remove"><IoIosClose/></span></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center cartitemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6>Polo Men's Tshirt </h6>
                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        </div>
                                    </div>
                                    </Link>
                                </td>
                                <td width="15%">$15</td>
                                <td width="25%">
                                    <QuantityBox/>
                                </td>
                                <td width="15%">$15</td>
                                <td width="10%"><span className="remove"><IoIosClose/></span></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td width="35%">
                                    <Link to="/product/1">
                                    <div className="d-flex align-items-center cartitemimgWrapper">
                                        <div className="imgWrapper">
                                            <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                        </div>
                                        <div className="info px-3">
                                            <h6>Polo Men's Tshirt </h6>
                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                                        </div>
                                    </div>
                                    </Link>
                                </td>
                                <td width="15%">$15</td>
                                <td width="25%">
                                    <QuantityBox/>
                                </td>
                                <td width="15%">$15</td>
                                <td width="10%"><span className="remove"><IoIosClose/></span></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;