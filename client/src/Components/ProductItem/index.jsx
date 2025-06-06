import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';



const ProductItem = (props) =>{

   const context = useContext(MyContext);

    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);
    }




    return(
        <>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://img.drz.lazcdn.com/static/np/p/ab16021a24fe031653062bfaad695e5f.png_400x400q80.png_.webp" className="w-100"/>
                                                
                    <span className="badge badge-primary">28%</span>
                        <div className="actions onebtn">
                            <Button onClick={()=>viewProductDetails(1)}><AiOutlineFullscreen/></Button>
                            <Button><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
                        </div>

            </div>

            <div className="info">
                <Link to= "/product/:id">
                <h4>Polo Men's Tshirt</h4>
                </Link>
                <span className="text-success d-block">In stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger ml-2">$15.00</span>
                    </div>

            </div>

        </div>


        
         
        </>
    )
};

export default ProductItem;