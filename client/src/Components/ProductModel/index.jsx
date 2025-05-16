import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import Rating from '@mui/material/Rating';
import 'react-inner-image-zoom/lib/styles.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useContext, useRef, useState } from 'react';
import QuantityBox from '../QuantityBox';
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';
import { IoCartSharp } from "react-icons/io5";




const ProductModel = (props)=>{



    const context = useContext(MyContext);


    return(
        <Dialog open={true} className="productModal"  onClose={() =>props.closeProductModal()}>
            
            <Button className='close_' onClick={() => context.setisOpenProductModal(false)}><MdClose/></Button>
            <h4 className='mb-1 font-weight-bold'>Polo Men's Tshirt</h4>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center mr-4'>
                    <span>Brands:</span>
                    <span className='ml-2'><b>Polo's</b></span>
                </div>

                <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />

            </div>  

            <hr />
            
            <div className='row mt-2 productDetailModal'>
                <ProductZoom/>
                <div className='col-md-7'>
                    <div className='d-flex info align-items-center mb-3'>
                        <span className='oldPrice lg mr-2'>$20</span>
                        <span className='netPrice text-danger lg'>$15</span>
                    </div>

                    <span className='badge bg-success'>IN STOCK</span>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe minima labore voluptas! Voluptatum, debitis.</p>
                    
                    <div className='d-flex align-items-center'>
                        <QuantityBox/>
                        <Button className='btn-blue btn-lg btn-big btn-round ml-3'><IoCartSharp/> Add to Cart</Button>
                    </div>

                    <div className='d-flex align-items-center mt-5 actions'>
                        <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp; ADD TO WISHLIST</Button>
                        <Button className='btn-round btn-sml ml-3' variant='outlined'><MdCompareArrows/> &nbsp; COMPARE</Button>
                    </div>
                    
                    

                </div>
            </div>
            

           
      
        </Dialog>
    );
}

export default ProductModel;