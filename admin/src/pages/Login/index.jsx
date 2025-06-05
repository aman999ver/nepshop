import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/logo3.png'
import Google from '../../assets/images/Google.png'
import { MyContext } from '../../App';
import pattern from '../../assets/images/background.webp';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Login = ()=>{

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const context = useContext(MyContext);
    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
    },[]);

    const focusInput=(index)=>{
        setInputIndex(index);
    }

    return(
        <>
            <img src={pattern} className='loginPattern'/>
            <section className="loginSection">
                <div className="loginBox">
                    <div className='logo text-center'>
                        <img src={Logo} width="60px"/>
                        <h5 className='font-weight-bold'>Login to Nepshop</h5>
                    </div>

                    <div className='wrapper mt-3 card border'>
                        <form >
                            <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className='icon'><MdEmail/></span>
                                <input type="text" className='form-control' placeholder='enter your email' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} autoFocus/>
                            </div>
                            <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill/></span>
                                <input type={`${isShowPassword===true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>
                                <span className='toggleShowPassword' onClick={()=> setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword===true ?  <IoMdEyeOff/> : <IoMdEye/> 
                                        
                                    }
                                    </span>
                            </div>

                            <div className='form-group'>
                                <Button className="btn-blue btn-big w-100" >Sign In</Button>
                            </div>
                            
                            <div className='form-group text-center mb-0'>
                                <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>
                                <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                                </div>
                            <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
                                <img src={Google} width={"30px"} />&nbsp;
                                Sign In With Google
                            </Button>
                            </div>
                            

                        </form>
                    </div>

                    <div className='wrapper mt-3 card border footer p-3'>
                        <span className='text-center'>Don't Have an account? <Link to={'/signUp'} className='link color ml-2'>Register</Link></span>
                    </div>

                </div>

            </section>
        </>
    );
}

export default Login;