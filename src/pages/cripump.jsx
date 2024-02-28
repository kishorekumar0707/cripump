import React from "react";
import "../css/cripump.css";
import profile from "../asserts/logo.png";
import profile1 from "../asserts/1.png";
import profile2 from "../asserts/2.png";
import profile3 from "../asserts/3.png";




function Cripump() {
    return(
        <div id="cripump">
            <div className="logo">
              <img src={profile} alt = "" /> 
            </div>
            <div className="p1">
                <p> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
                    
            </div>
            <div className="p2">
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li><br></br>
   <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
	</li>
            </div>
            <div className="one">
                <img src={profile1} alt="" />
            </div>
            <div className="two">
                <img src={profile2} alt="" />
            </div>
            <div className="p3">
                <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
            <div className="p4">
                <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</p>
            </div>
            <div className="three">
                <img src={profile3} alt="" />
            </div>
            <div className="p5">
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <div className="line">
                <hr />
            </div>
            <div className="p6">
                <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            </div>
            <div className="p7">
                <span>CHEMICALS & PROCESS</span>
                <span>POWER</span>
                <span>WATER & WASTE WATER</span>
                <span>OILS & GAS</span>
                <span>PHARMA</span>
                <span>SUGARS & DISTILLERIES</span>
                <span>PAPER & PULP</span>
                <span>MARINE & DEFENCE</span>
                <span>METAL & MINING</span>
                <span>FOOD & BEVERAGE</span>
                <span>PETROCHEMICAL & REFINERIES</span>
                <span>SOLAR</span>
                <span>BUILDING</span>
                <span>HVAC</span>
                <span>FIRE FIGHTING</span>
                <span>AGRICULTURE & RESIDENTIAL</span>
            </div>
            <div className="bottom">
                <p>  p</p>
                <p>  p</p>
                <span><i class="fa-solid fa-square-phone"></i>Toll free 1800 200 1234</span>
                <span><i class="fa-brands fa-facebook"></i>www.facebook.com/cripumps </span>
                <span><i class="fa-solid fa-globe"></i>www.crigroups.com</span>
            </div>
        </div>
        
    )
}

export default Cripump