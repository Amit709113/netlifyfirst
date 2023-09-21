import React from 'react'

const MainContentForFeeStructure = ({reqData}) => {
    const{feeTable,subHeading}=reqData
    const[heading,...feeDetails]=feeTable
    
  return (
    <div style={{overflowX:"auto"}}>
      <table>
        <caption> Fee Structure</caption>
        <thead>
            <tr style={{background:"#9b039b61"}}>
                {
                    heading.map((item,idx)=>{
                        return <th key={idx}> {item} </th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                feeDetails.map((item,idx)=>{
                    return <tr key={idx}>
                            {
                                item.map((fees,i)=>{
                                    return <td key={i}>{fees}</td>
                                })
                            }
                        </tr>    
                })
            }
            
        </tbody>
      </table>
      <p style={{fontSize:"12px",fontWeight:"600"}}>{subHeading}</p>
    </div>
  )
}

export default MainContentForFeeStructure
