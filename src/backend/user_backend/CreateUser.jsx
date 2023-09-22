import React, { useState } from 'react'
import { userPost } from '../../crud/UserService';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [message,setMessage]=useState({message:"",ec:0})
  const [user,setUser]=useState({name:"",email:"",password:"",about:""})
  
  const handleChange=(event)=>{
    const {name,value}=event.target;
    setUser({...user,[name]:value})
  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    const {name,email,password}=user;

    //validate 
    if(name.trim()=="" || email.trim()==""|| password.trim()==""){
      setMessage({message:"name, email and password must have some value",ec:1})
      return;
    }
    //call server
    userPost(user).then((resp)=>{
      // console.log(resp)
      setMessage({message:`user is successfully created with name ${resp.name} `,ec:0} );
            setTimeout(()=>{
                setMessage({message:"",ec:0})
            },3000)

    }).catch((error)=>{
        console.error(error);
        setMessage({message:error.response.data.name,ec:2});
        setTimeout(()=>{
            setMessage({message:"",ec:2})
        },3500)
    })
  }

  const handlerReset=()=>{
    setMessage({message:"",ec:0})
    setUser({name:"",email:"",password:"",about:""})
  }
  

  return (
    <>
      <div id='item-dash'>
        <h3 className='form-heading'> Create new User </h3>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
        <div className='main-form'> 
        <form id="forms" onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
        <label htmlFor="name"> Enter Name : </label>
        <input
            type="text"
            placeholder='Enter your name'
            id='name'
            name='name'
            onChange={(e)=>handleChange(e)}
            value={user.name}
        />
        <br/>
        <br/>
        <label htmlFor="email"> Enter Email : </label>
        <input
            type="email"
            placeholder='Enter your email'
            id='email'
            name='email'
            onChange={(e)=>handleChange(e)}
            value={user.email}
        />
        <br/>
        <br/>

        <label htmlFor="password"> Enter Password : </label>
        <input
            type="text"
            placeholder='Enter password'
            id='password'
            name='password'
            onChange={(e)=>handleChange(e)}
            value={user.password}
        
        />
        <br/>
        <br/>

        <label htmlFor="about"> Enter about  : </label>
        <textarea 
        placeholder='about yourself'
        rows={6}
        cols={30}
        id="about"
        name='about'
        value={user.about}
        onChange={(e)=>handleChange(e)}> </textarea>
        <br/> <br/>
          <div className='btn-container'>
            <button className='leaf-btn submit-btn' type="submit"> SUBMIT </button>
            <button  className='leaf-btn reset-btn' type="reset">RESET</button>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default CreateUser
