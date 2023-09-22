import React, { useEffect, useState } from 'react'
import { noticeDelete, noticeGet,noticeUpdateApiCall } from '../../crud/UserService';
import { useNavigate } from 'react-router-dom';

const DeleteNotice = () => {

    const[noticeList,setNoticeList]=useState([])
    const[message,setMessage]=useState({message:"",ec:0});
    const[updateNotice,setUpdateNotice]=useState({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})
    const[updateId,setUpdateId]=useState(0);
    const[updateBox,setUpdateBox]=useState(false);  

    const getAllNotice=()=>{
        noticeGet().then((resp)=>{
            setMessage({message:"data is fetched successfully",ec:0});
            setNoticeList(resp)
        }).catch((error)=>{
            console.error(error);
            setMessage({message:`${error.message} can't connect to server`,ec:2});
        })
    }
    useEffect(()=>{
        getAllNotice();
    },[])  
    
    const deleteNoticeById = (id)=>{
        noticeDelete(id).then(()=>{
            setMessage({message:`notice with ${id} is deleted successfully !!`,ec:0})
            setTimeout(()=>setMessage(""),3500)

        }).catch((error)=>{
           setMessage({message:`something went wrong !! ${error.response.data.message}`,ec:2})
           setTimeout(()=>setMessage(""),3500)
        })
    }

    const handlerDelete=(id)=>{
        deleteNoticeById(id);
    }

    const updateNoticeById=(notice)=>{
        //more action like closing and opening of update notice tab 
        setUpdateNotice(notice);
    }

    const handlerUpdate=(noticeId,notice)=>{
        setUpdateId(noticeId);
        updateNoticeById(notice);
        setUpdateBox(true)
    }

    const handleChange=(event)=>{

        const {name,value}=event.target;
        // console.log(name,value);
        setUpdateNotice({...updateNotice,[name]:value});

    }
    const handlerSubmit=(event)=>{
        event.preventDefault();

        const {noticeTitle,noticeDesc}=updateNotice;
        //validate
        if(noticeTitle.trim()=="" || noticeDesc.trim()=="" ){
            setMessage({message:"title and description must have some value",ec:2})
            return ;
        }   
        //call server
        noticeUpdateApiCall(updateId,updateNotice).then((resp)=>{
            setMessage({message:"notice is updated successfully refresh page to see changes",ec:0})
            setTimeout(()=>{setTimeout("")},3000)
            setUpdateBox(false);
            
        }).catch((error)=>{
            setMessage({message:`something went wrong !! ${error.response.data.message}`, ec:2})
            console.error(error);
            setTimeout(()=>setMessage(""),3500)
        })
        //close the notice box
    }

    const handlerReset=()=>{
        setUpdateNotice({noticeTitle:"",noticeDesc:"",noticeDate:"",noticeLink:"",noticeAuthor:""})

    }

  return (
    <>
     <div className='main-element'>
        <h2 className='form-heading'>delete / update </h2>
        <p className={`${message.ec==0?`message-success-log`:message.ec==1?`message-warning-log`:`message-error-log`} message-log` }>{message.message}</p>
      

        <table>
            <thead>
                <tr>
                    <th> Serial No </th>
                    <th> Notice Id </th>
                    <th> Date </th>
                    <th> Title </th>
                    <th>Delete</th>
                    <th> Update</th>
                </tr>
            </thead>
            <tbody>
            {
                noticeList!=null ? noticeList.map((notice,idx)=>{
                    const {noticeId,noticeDate,noticeTitle}=notice;
                    return <tr key={idx}>
                        <td> {idx+1} </td>
                        <td> {noticeId}</td>
                        <td> {noticeDate}</td>
                        <td> {noticeTitle}</td>
                        <td>
                            <button className='leaf-btn delete-btn' onClick={()=>handlerDelete(noticeId)}>delete</button>
                        </td>
                        <td>
                            <button className='leaf-btn update-btn' onClick={()=>handlerUpdate(noticeId,notice)}>update</button>
                        </td>

                    </tr>
                    
                }) : <tr><td>loading ... <div className='span-loading'></div></td></tr>
            }
            </tbody>
        </table>

        {/* update notice  */}
            
        {!updateBox?null:
            <div id='item-dash'>
                <h3 className='form-heading'> Update Notice  </h3>
                <button className='leaf-btn close-btn' style={{float:"right",padding:"6px",margin:"12px"}} onClick={()=>setUpdateBox(false)}> close </button>
                <hr />
                <div className='main-form'>
                    <form onSubmit={(event)=>handlerSubmit(event)} onReset={(e)=>{handlerReset(e)}}>
                        <label htmlFor='noticeTitle'> Notice Title : </label>
                        <input
                            type="text"
                            placeholder='Enter notice title'
                            id='noticeTitle'
                            name='noticeTitle'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeTitle}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeDate'> Notice Date : </label>
                        <input
                            type="text"
                            placeholder='Enter notice Date'
                            id='noticeDate'
                            name='noticeDate'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeDate}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeAuthor'> authority : </label>
                        <input
                            type="text"
                            placeholder='Enter notice authority'
                            id='noticeAuthor'
                            name='noticeAuthor'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeAuthor}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeLink'> Notice Link : </label>
                        <input
                            type="text"
                            placeholder='Enter notice Link'
                            id='noticeLink'
                            name='noticeLink'
                            onChange={(e)=>handleChange(e)}
                            value={updateNotice.noticeLink}
                        />
                        <br />
                        <br />

                        <label htmlFor='noticeDesc' >Notice Description :<br /> </label>
                            <textarea 
                            placeholder='Describe '
                            rows={6}
                            cols={50}
                            id="noticeDesc"
                            name='noticeDesc'
                            value={updateNotice.noticeDesc}
                            onChange={(e)=>handleChange(e)}> </textarea>
                        <br /> <br />

                        <div className='btn-container'>
                            <button className='leaf-btn submit-btn' type="submit"> SUBMIT </button>
                            <button  className='leaf-btn reset-btn' type="reset">RESET</button>
                        </div>
                    </form>
                </div>
                
            </div>
    
        }


    </div>
    </>
  )
}
export default DeleteNotice
