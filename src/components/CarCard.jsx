import React from "react";
import "../styles/CarCard.css";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillFuelPumpDieselFill} from "react-icons/bs";
import { BsSpeedometer} from "react-icons/bs";
import {PiSteeringWheelDuotone } from "react-icons/pi";
const CarCard = ({car}) => {
  return (
    <div className="car-card">
      <img
        src={car.image}
        alt="img"
      />
      <div className="carname">
        <p>{car.name}</p>
        <p>{car.model}</p>
      </div>

    <div style={{display:"flex", paddingLeft:"30px", justifyContent:"space-between" , width:"330px", alignItems:"center"}}>
        <div style={{width:"169px",padding:"20px"}}>
          <div style={{ display: "flex", marginBottom:"10px" }}>
            <BsFillPeopleFill style={{marginRight:"10px" , color:"#0d47a1"}} />
            <p> 4 Peoples</p>
          </div>
          <div style={{ display: "flex"}}>
            <BsSpeedometer style={{marginRight:"10px" , color:"#0d47a1"}}  />
            <p>6.1 km/hrs</p>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", marginBottom:"10px"  }}>
            <BsFillFuelPumpDieselFill style={{marginRight:"10px", color:"#0d47a1"}}  />
            <p>Hybride</p>
          </div>
          <div style={{ display: "flex" }}>
            <PiSteeringWheelDuotone style={{marginRight:"10px" , color:"#0d47a1"}}  />
            <p>Automatics</p>
          </div>
        </div>
      </div>
      <hr style={{opacity:"50%"}} />
      <div style={{display:"flex" , justifyContent:"space-between", paddingLeft:"50px", paddingRight:"50px"}}>
        <p style={{marginTop:"20px"}}>$440/months</p>
        <div style={{display:"flex", alignContent:"center", width:"100px", justifyContent:"space-between"}}>
             <AiOutlineHeart style={{margin:"20px", color:"#0d47a1"}}/>
            <button style={{backgroundColor:"blue", color:"white", width:"99px", height:"40px", marginRight:"-35px", marginTop:"10px", borderRadius:"5px"}}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
