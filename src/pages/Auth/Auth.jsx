import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas through the world.</h6>
            </div>
        </div>

        <LogIn/>
    </div>
  )
}

function LogIn(){
    return(
        <div className='a-right'>
            <form className="infoForm authForm">


                <h3>Log in</h3>

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
                    name='password'/>
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account! Sign Up</span>
                </div>
                <button className='button infoButton' type='s'>Login</button>

            </form>
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
            <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
                </div>
                <button className='button infoButton' type='s'>Signup</button>

            </form>
        </div>
    )
}

export default Auth