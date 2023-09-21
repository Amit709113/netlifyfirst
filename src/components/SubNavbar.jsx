import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const SubNavbar = () => {
    const [showToggler,setShowToggler]=useState([false,false,false,false,false]);

  return (
    <>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink to={"/"} className="nav-link ">
                    Home
                    <span className="sr-only">(current)</span>
                </NavLink>
            </li>
            {/* nav inside nav */}

            <li className={showToggler[0]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [!prev[0],false,false,false,false,false]
                });
            }
            }>
                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[0]} name={0}>
                    Admission
                </a>
                <div className={showToggler[0]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>{/*include show class when it is clicked */}
                    <NavLink to={"/whydps/"} className="dropdown-item">
                        Why DPS
                    </NavLink>
                    <NavLink to={"/admprocedure"} className="dropdown-item">
                        Admission Procedure
                    </NavLink>
                    <NavLink to={"/feestructure"} className="dropdown-item">
                        Fee Structure
                    </NavLink>
                
                </div>
            </li>


            <li className={showToggler[1]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [false,!prev[1],false,false,false,false]
                });
            }
            }>
            {/* bgimg here */}

                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[1]} name={1}>
                    About Us
                </a>
                <div className={showToggler[1]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
                    <NavLink to={'/about'} className="dropdown-item">
                        School as a glance
                    </NavLink>
                    <NavLink to={"/principlemsg"} className="dropdown-item">
                        Principle Message
                    </NavLink>
                    <NavLink to={"/SchoolStatistic"} className="dropdown-item">
                        School statistics
                    </NavLink>
                    <NavLink to={"/staff"} className="dropdown-item">
                        The Staff
                    </NavLink>
                </div>
            </li>
        

            <li className={showToggler[2]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [false,false,!prev[2],false,false,false]
                });
            }
            }>
                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[2]} name={2}>
                    Academics
                </a>
                <div className={showToggler[2]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
                    <NavLink to={'/schoolstrength'} className="dropdown-item">
                        School Strength
                    </NavLink>
                    <NavLink to={'/listofholyday'} className="dropdown-item">
                        List of Holyday
                    </NavLink>
                </div>
            </li>

            <li className={showToggler[3]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [false,false,false,!prev[3],false,false]
                });
            }
            }>
                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[3]} name={3}>
                    Infrastructure
                </a>
                <div className={showToggler[3]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
                    <NavLink to={'/cslab'} className="dropdown-item">
                        Computer Lab
                    </NavLink>
                    <NavLink to={'/library'} className="dropdown-item">
                        Library(Knowledge Center)
                    </NavLink>
                    

                </div>
            </li>

            <li className={showToggler[4]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [false,false,false,false,!prev[4],false]

                });
            }
            }>
                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[4]} name={4}>
                    Facilities
                </a>
                <div className={showToggler[4]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
                    <NavLink to={'/transportation'} className="dropdown-item">
                        Transportation
                    </NavLink>
                    <NavLink to={'/abuscus'} className="dropdown-item">
                        Abuscus Classes
                    </NavLink>
                </div>
            </li>

            <li className="nav-item">
                <NavLink to={'/gallery'} className="nav-link">
                    Gallery
                </NavLink>
            </li>
            <li className={showToggler[4]?"nav-item dropdown show":"nav-item dropdown"}
            onClick={()=>{
                setShowToggler((prev)=>{
                    return [false,false,false,false,false,!prev[5]]

                });
            }
            }>
                <a className="nav-link dropdown-toggle "  id='navbar-dropdown-drops' role='buttton' aria-haspopup='true' aria-expanded={showToggler[5]} name={5}>
                    Sports
                </a>
                <div className={showToggler[5]?"dropdown-menu-top dropdown-menu show":"dropdown-menu"}>
                    <NavLink to={'/sports-teakwondo'} className="dropdown-item">
                        Teakwondo
                    </NavLink>
                </div>
            </li>
        </ul>
      
    </>
  )
}
export default SubNavbar
