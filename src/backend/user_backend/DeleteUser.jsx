import React, { useEffect, useState } from 'react'
import { userDelete, userGet } from '../../crud/UserService';
import UpdateUser from './UpdateUser';

const DeleteUser = () => {
  const [userList,setUserList]=useState();
  const[user,setUser]=useState({})
  const[message,setMessage]=useState({message:"",ec:0});
  const[uId,setUId]=useState(0);  //to whom we want to update
  const[isClose,setClose]=useState(false);
  const messageSetter=(mess,ise)=>{
    setMessage({message:mess,ec:ise})
  }

  useEffect(()=>{
      userGet().then((resp)=>{
          setUserList(resp);
          setMessage({message:"data is fetched successfully",ec:0})
      }).catch((error)=>{
          setMessage({message:`${error.message} can't connect to server`,ec:2});
      })
  },[])

  const handlerDelete=(id)=>{
    userDelete(id).then((resp)=>{
      setMessage({message:`${resp.message} with id : ${id} !!`,ec:0})
    }).catch((error)=>{
      if(error.data!=undefined)
      setMessage({message:`${error.data.status}`,ec:2})
      else if(error.response.status==403){
      setMessage(({message:`${error.response.data.message}` ,ec:2}))
      }
      else{
        setMessage({message: "something went wrong : ",ec:2});
        console.log(error);
      }
    })

  }
  const handlerUpdate=(userId,usr)=>{
    setUId(userId);
    setUser(usr);
  }

  const closeFn=()=>{
    setClose(false);
  }


  return (
    <>
      <div className='main-element'>
        <h3 className='form-heading'>delete user  </h3>
        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> User Id </th>
                    <th> Name </th>
                    <th> email </th>
                    <th> delete </th>
                    <th> update </th>
                </tr>
            </thead>
            <tbody>
            {
                userList!=null ? userList.map((ur,idx)=>{
                    const {id,name,email}=ur;
                    return <tr key={idx}>
                        <td>{idx+1} </td>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td><button className='leaf-btn delete-btn' onClick={()=>handlerDelete(id)}>Delete</button></td>
                        <td><button className='leaf-btn update-btn' onClick={()=>{
                          handlerUpdate(id,ur);
                          setClose(true);
                        }}> Update </button></td>
                    </tr> 
                }) : <tr><td>loading ...</td></tr>
            }
            </tbody>
        </table>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      
        {
          isClose ? <UpdateUser uId={uId} usr={user} closeFn={closeFn} messageSetter={messageSetter}/> : null
        }
    </div>
    </>
  )
}

export default DeleteUser
   