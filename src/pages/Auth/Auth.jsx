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

        <SignUp/>
    </div>
  )
}

function SignUp(){
    
    return(
        <div className='a-right'>
            <form className="infoForm">


                <h3>SignUp</h3>

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
                    <span>Already have an account. Login!</span>
                    <button className='button infoButton' type='s'>Signup</button>
                </div>

            </form>
        </div>
    )
}

export default Auth