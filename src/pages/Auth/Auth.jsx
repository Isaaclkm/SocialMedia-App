import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
    const [isSignUp, setIsSignUp ] = useState(false)

    const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
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
            <form className="infoForm authForm">


                <h3>{isSignUp ? "Sing Up": "Login In"}</h3>

                
                    {isSignUp && 
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
                    }
                    
                
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
                    {isSignUp &&
                     <input 
                     type="text" 
                     placeholder='Confirm password'
                     className='infoInput' 
                     name='confirmpassword'/>
                    }
                   
                </div>

                <div>
            <span style={{fontSize: '12px', cursor: "pointer"}} onClick = {()=> setIsSignUp((prev)=> !prev)}>
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