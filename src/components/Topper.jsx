import { topperGet } from "../crud/UserService";
import React, {useEffect, useRef, useState } from "react";
const TOPPER_DELAY = 5000;
import "./Topper.css"


const Topper =  ({toppers}) => {
    
  
  const [topperList,setTopperList]=useState([]);
  const topperTimeoutRef = useRef(null);
  const [topperDelay, setTopperDelay] = useState(100);
  const [topperIndex, setTopperIndex] = useState(0);

  const setTopperSlide=((idx)=>{setTopperIndex(idx)})
  useEffect(() => setTopperDelay(TOPPER_DELAY), []);

  useEffect(()=>{
    //fetchdata
    topperGet().then((resp)=>{
        setTopperList(resp);
    }).catch((error)=>{
        console.log(error);
    })
    
  },[])

  useEffect(() => {

    topperTimeoutRef.current = setTimeout( () =>
        setTopperIndex((prevIndex) =>
          prevIndex === topperList.length - 1 ? 0 : prevIndex + 1 ), topperDelay
    );

    return () => clearTimeout(topperTimeoutRef.current);
  }, [ topperIndex, topperDelay]);

  return (
  <>
    <section className='topper-info'>
        <div className='container'>
            <div className='row1'>
               <div className='topper_heading'> What our Toppers say </div>
            </div>
        </div>
    </section>

      <div id="topper-section" className="section-three-main-div">
        <div  className="section-three-sub-div-one" >
          <div className="quotes-img quotes-img-right"></div>
          
            {
              topperList.map(({topperName,topperYear,topperFeedback,topperLink,topperScore},idx)=>{
                  return <div className={topperIndex===idx ? `feedback-text main-quotes-div`: `feedback-text main-quotes-div not-visible`}  key={idx}>
                          <div className="para">{topperFeedback}</div>
                          <div> <img src={topperLink} alt={topperName} className="profile-image"/>  </div >
                          <div className= "subText">{topperName}</div>
                          <div className= "subDeg">{topperYear}  ( {topperScore} %) </div>
                      </div>
              })    
            }
            <div className="quotes-img quotes-img-left" ></div>
        </div>

        <div className="indicator-btn-parent">
          <span className="indicators">
            {topperList.map((_,idx)=>{
              return (
              <button 
                key={idx} 
                onClick={()=>setTopperSlide(idx)} 
                className={topperIndex===idx?'indicator':"indicator indicator-inactive"}>
              </button>
              )
            })}
          </span>
        </div>
      </div>
    </>  
  );
};
export default Topper
  