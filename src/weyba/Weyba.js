// src/SpaFlyer.js
// import React from 'react';
// import './weyba.css';
// import banner from '../images/banner-cut.jpg'; // import the uploaded image here
// import weybanature from "../images/hira-weyba-nature.jpg"

// const Weyba = () => {
//   return (
    
//     <div className="flyer-container">
        
//       <img src={banner} alt="Flyer" className="flyer-image" />
//       <section className='hello'><p>hello </p></section>
//       <div className="flyer-content">
//         <h1><h1>Hira Weyba Tis</h1></h1>
        
//         <h2>Great Nature Spa</h2>
//         <div className="services">
//           <h3>Our Service</h3>
//           <ul>
//             <li>Body Scrub</li>
//             <img src={weybanature} alt="Flyer" className="massage" />
//             <li>Traditional Steam</li>
//             <li>Yoni Steam</li>
//           </ul>
//         </div>
//         <div className="additional-info">
//           <p>Relaxing Your Body</p>
//           <p>Traditional Ethiopian Steam</p>
//           <p>By Appointment Only</p>
//           <p>Call: 240 593 7064</p>
//           <p>Location: Columbus, OH</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weyba;
import React from 'react'
import './weyba.css';
import banner from '../images/banner-cut.jpg';
import weybanature from "../images/hira-weyba-nature.jpg"
import massage from '../images/massageimge.jpg'
import weybaimg from "../images/weyba.jpg"
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

function weyba() {
  return (
    <div>
        
      <div className='hira'>ℌ𝔦𝔯𝔞 𝔚𝔢𝔶𝔟𝔞 𝔗𝔦𝔰</div>
      <div className='banner'>
        <img src={banner} alt="Flyer" className="flyer-image" />
      </div>
      <div className='service'>
        <div className='weybaTis'>𝒲𝑒𝓎𝒷𝒶 𝒯𝒾𝓈</div>
        <div className='servicelist'>𝕷𝖊𝖙 𝖀𝖘𝖊 𝕹𝖆𝖙𝖚𝖗𝖊 𝖜𝖎𝖙𝖍 𝕺𝖚𝖗 𝕰𝖘𝖕𝖊𝖈𝖎𝖆𝖑 𝕾𝖊𝖗𝖛𝖎𝖈𝖊</div>
        <div className='weyba-tis'>
          <div><img src={weybanature} alt="Flyer" className="weybanature" /></div>
        
            <div className='weyba-tis-source'>
              <div>
                
                
                  <div className='nature' ><h3>𝒩𝒶𝓉𝓊𝓇𝒶𝓁 𝑅𝑒𝓂𝑒𝒹𝓎 𝒶𝓃𝒹 𝒲𝒾𝓁𝒹 𝐻𝑒𝓇𝒷</h3> </div>
                  <div className='naturetwo'><h3>𝐵𝑜𝒹𝓎 𝒮𝒸𝓇𝒶𝒷</h3></div>
                  <div className='nature'><h3>𝒯𝓇𝒶𝒹𝒾𝓉𝒾𝑜𝓃𝒶𝓁 𝒮𝓉𝓇𝑒𝒶𝓂</h3> </div>

                
              </div>

            </div>
            <div><img src={weybaimg} alt="Flyer" className="weybaimage" /></div>
        </div>
      </div>
      <div className='sectionTwo'>
      <div className='massagelist'>𝕸𝖆𝖘𝖘𝖆𝖌𝖊</div>
      <div className='relaxbody'>𝕽𝖊𝖑𝖆𝖝𝖎𝖓𝖌 𝖄𝖔𝖚𝖗 𝕭𝖔𝖉𝖞</div>
      <div className='message'>
        <div >
          <div className='mind'>𝐼𝓃𝒸𝓇𝑒𝒶𝓈𝑒 𝒫𝑒𝒶𝒸𝑒 𝑜𝒻 𝑀𝒾𝓃𝒹</div>
          <div className='joint'>𝒫𝓇𝑜𝓅𝓉𝑒𝓈 𝒥𝑜𝒾𝓃𝓉 𝓂𝓊𝓈𝒸𝓁𝑒</div>
        </div>
        <div>
          <img src={massage} alt="Flyer" className="massageimage" />
        </div>
        <div>
          <div className='blood'>𝐼𝓂𝓅𝓇𝑜𝓋𝑒 𝐵𝓁𝑜𝑜𝒹 𝒞𝒾𝓇𝒸𝓊𝓁𝒶𝓉𝒾𝑜𝓃</div>
          <div className='poster'>𝐼𝓂𝓅𝓇𝑜𝓋𝑒 𝐵𝑜𝒹𝓎 𝒫𝑜𝓈𝓉𝑒𝓇</div>
        </div>
        
        
        
        
      </div>
      
      
      
      </div>
      <div className='footer'>
      <div className="additional-info">
        
        
        <CiFacebook size={38}/>
        <FaInstagram size={38}/>
        <RiYoutubeLine size={38} />
        
      </div>
      <div className='contact'>
        <div>Contact us:</div>
        <div>For Appointment and Direction</div>
        <div>Call: 0911771444 / 0913173152</div>
        <div>Location: Awasa, Ethiopia</div>
      </div>
      </div>
      
      
        
        
        
    </div>
  )
}

export default weyba
