import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import { useContext, useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from '../QuantityBox';
import { MyContext } from '../../App';


const ProductModel = (props)=>{

    var settings2 ={
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow:1,
        slidesToScroll:1,
        fade: false,
        arrows: false,
    };
    var settings ={
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:5,
        slidesToScroll:1,
        fade: false,
        arrows: true,
    };

    const zoomSliderBig = useRef();
    const zoomSlider = useRef(); 

    const context = useContext(MyContext);

    const goto = (index) =>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }


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
                <div className='col-md-5'>
                    <div className='productZoom position-relative'>
                        <div className='badge badge-primary'>28%</div>    
                        <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}
                        >
                            <div className='item'>
                                        <InnerImageZoom 
                                            zoomType="hover" zoomScale={1.5}
                                            src={`https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp`}/>
                            </div>
                            <div className='item'>
                                        <InnerImageZoom 
                                            zoomType="hover" zoomScale={1.5}
                                            src={`https://mobile.yoox.com/images/items/12/12452835JA_14_f.jpg?impolicy=crop&width=387&height=490`}/>
                            </div>
                            <div className='item'>
                                        <InnerImageZoom 
                                            zoomType="hover" zoomScale={0.3}
                                            src={`https://www.code-zero.com/uploads/media/62/a1/b6/1715866677/polo-atlantic-white.jpg?ts=1715866677`}/>
                            </div>
                        </Slider>
                    </div>
                       
                        <Slider {...settings} className='zoomSlider' ref={zoomSlider}
                        >
                            <div className='item'>
                                <img src={`https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp`} className='w-100' onClick={()=> goto(0)} />               
                            </div>
                            <div className='item'>
                                <img src={`https://mobile.yoox.com/images/items/12/12452835JA_14_f.jpg?impolicy=crop&width=387&height=490`} className='w-100' onClick={()=> goto(1)} />               
                            </div>
                            <div className='item'>
                                <img src={`https://www.code-zero.com/uploads/media/62/a1/b6/1715866677/polo-atlantic-white.jpg?ts=1715866677`} className='w-100' onClick={()=> goto(2)} />               
                            </div>

                        </Slider>
                    
                </div>
                <div className='col-md-7'>
                    <div className='d-flex info align-items-center mb-3'>
                        <span className='oldPrice lg mr-2'>$20</span>
                        <span className='netPrice text-danger lg'>$15</span>
                    </div>

                    <span className='badge bg-success'>IN STOCK</span>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe minima labore voluptas! Voluptatum, debitis.</p>
                    
                    <div className='d-flex align-items-center'>
                        <QuantityBox/>
                        <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Add to Cart</Button>
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