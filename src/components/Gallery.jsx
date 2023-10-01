import React, { useEffect, useState } from 'react'
import {IoClose} from "react-icons/io5";
import './Gallery.css'
import { categoryGet, galleryGet, gelleryGetByCategory } from '../crud/UserService';

const Gallery = ({galleryData}) => {

    const [list,setList]=useState([]);
    const [imageList,setImageList]=useState([]);
    const [categoryList,setCategoryList]=useState([]);
    useEffect(()=>{
        galleryGet().then((resp)=>{
            console.log(resp);
            setList(resp);
        })
        .catch((error)=>{
            console.log(error);
        })
        categoryGet().then((resp)=>{
            console.log(resp);
            setCategoryList(resp);
        }).catch((error)=>{
            console.log(error);
        })

    },[])
    useEffect(()=>{
        setImageList(list);
    },[list]);

    const [model,setModel] =useState(false);
    const[tempImg,setTempImg]=useState('');
        const getImg=({imgSrc,caption})=>{
            setTempImg(()=>{
                return ({
                    imgSrc:imgSrc,
                    caption:caption
                })
            });
        setModel(true);
        }
    const filterItem = (categId)=>{
        gelleryGetByCategory(categId).then((resp)=>{
            setImageList(resp);
        }).catch((error)=>{
            console.log("error occured",error);
        })
        
    }

  return (
    <>
        <div id="gallery-section">
        <div className={model?"model open":"model"}>
            <figure>
                <img src={tempImg.imgSrc} alt={tempImg.caption} />
                <figcaption>{tempImg.caption} </figcaption>
            </figure>
            <IoClose onClick={()=>setModel(false)}/>
        </div>

            <h1 className='heading'>Gallery</h1>
            <div className='gallery-category-section'>
                <button onClick={()=>setImageList(list)} >All</button>

                {
                    categoryList.map((category,idx)=>{
                        return <button onClick={()=>filterItem(category.categoryId)} key={idx}>{category.categoryName}</button>
                
                    })
                }
            </div>
            
            <div className="gallery-main">
                {
                    imageList.map((image,idx)=>{
                        const {galleryLink:link,galleryCaption:caption,galleryAlt:alt}=image;
                        return (<div className='pics' key={idx} onClick={()=>getImg({link,caption})}>
                                    <img  src={link} alt={alt} className='gallery-image' loading='lazy' />
                                </div>)
                    })
                }
            </div>
        </div>        
    </>
  )
}

export default Gallery
