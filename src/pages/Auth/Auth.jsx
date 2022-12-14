import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import {useDispatch} from 'react-redux'

const Auth = () => {
    const [isSignUp, setIsSignUp ] = useState(false)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        firstname: "", 
        lastname: "", 
        password: "", 
        confirmpass: "", 
        username: ""
    });
    
    const [confirmPass, setConfirmPass] = useState(true)
    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    };

// comment
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(isSignUp)
        {
           data.password === data.confirmpass 
           ? dispatch(singUp(data)) 
           : setConfirmPass(false)
        }else 
        {
            dispatch(logIn(data))
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({
        firstname: "", 
        lastname: "", 
        password: "", 
        confirmpass: "", 
        username: ""
        })
    }

    return (
    <div className="Auth">
        {/*Left Side */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas through the world.</h6>
            </div>
        </div>
        {/* Right Side */}
        <div className='a-right'>
            <form className="infoForm authForm" onSubmit={handleSubmit}>


                <h3>{isSignUp ? "Sing Up": "Login In"}</h3>

                
                    {isSignUp && 
                    <div>
                    <input 
                    type="text" 
                    placeholder='First Name'
                    className='infoInput' 
                    name='firstname'
                    onChange = {handleChange}
                    value={data.firstname}
                    />
                    <input 
                    type="text" 
                    placeholder='Last Name'
                    className='infoInput' 
                    name='lastname'
                    onChange = {handleChange}
                    value={data.lastname}
                    />
                    </div>
                    }
                    
                
                <div>
                    <input 
                    type="text" 
                    placeholder='Username'
                    className='infoInput' 
                    name='username'
                    onChange = {handleChange}
                    value={data.username}
                    />
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder='Password'
                    className='infoInput' 
                    name='password'
                    onChange = {handleChange}
                    value={data.password}
                    />
                    {isSignUp &&
                     <input 
                     type="password" 
                     placeholder='Confirm password'
                     className='infoInput' 
                     name='confirmpass'
                     onChange = {handleChange}
                     value={data.confirmpass}
                     />
                    }
                   
                </div>
                    <span style={{display: confirmPass? "none": "block", color: 'red', fonstSize: '12px', alignSelf: 'flex-end', marginRight: '5px'}}>
                        * Confirm password is not the same. 
                    </span>
                <div>
            <span style={{fontSize: '12px', cursor: "pointer"}} 
                 onClick = {() => {setIsSignUp((prev)=> !prev); resetForm()}}>
                {isSignUp ? `Already have an account. Login!
`: `Don't have an account? Sign Up`}</span>
                </div>
                <button className='button infoButton' type='s'>{isSignUp ? "Sing Up": "Login In"}</button>

            </form>
        </div>
    </div>
  )
}


function SignUp(){
    
    return(
        <div className='a-right'>
            <form className="infoForm authForm">


                <h3>Sign up</h3>

                <div>
                    <input 
                    type="text" 
                    placeholder='First Name'
                    className='infoInput' 
                    name='firstname'/>
                    <input 
                    type="text" 
                    placeholder='Last Name'
                    className='infoInput' 
                    name='lastname'/>
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder='Username'
                    className='infoInput' 
                    name='username'/>
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder='Password'
                    className='infoInput' 
                    name='password'
                    />
                    <input 
                    type="text" 
                    placeholder='Confirm password'
                    className='infoInput' 
                    name='confirmpassword'/>
                </div>

                <div>
            <span style={{fontSize: '12px'}}>
                </span>
                </div>
                <button className='button infoButton' type='s'>Signup</button>

            </form>
        </div>
    )
}

export default Auth