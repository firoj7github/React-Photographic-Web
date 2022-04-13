import React from 'react';
import './Package.css'
import logo from '../../image/main-camera.png'
import icon2 from '../../image/action.png'
import icon3 from '../../image/airpod.png'
import icon4 from '../../image/drone.png'
import icon5 from '../../image/lights.png'
import icon6 from '../../image/mic.png'
import icon7 from '../../image/setup.png'
import icon8 from '../../image/single-light.png'
import icon9 from '../../image/tripod.png'
import icon10 from '../../image/camera.png'



const Package = () => {
    return (
        <main>
            <section className ="all-side">
               <div  className="blogs">
                   
                    <div  className="blog-1">
                        <div  className="tumble">
                           <img src={icon9} alt="" />
                           <div  className="tumble-info">
                              <h2>Flex Tripod</h2>
                              <p>$20.25</p>
                            
                              <h6>Location point</h6>
                              <h6>Improvement</h6>
                              <h6>Point to point action!</h6>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="blog-1">
                        <div className="tumble">
                        <img src={icon6} alt="" />
                         <div className="tumble-info">
                             <h2>Microphone</h2>
                             <p>$30.48</p>
                            
                             <h6>Gaming point</h6>
                             <h6>brying</h6>
                             <h6>Music and song moment!</h6>
                         </div>
                        </div>
                        
                        
                    </div>
                    <div className="blog-1">
                        <div className="tumble">
                        <img src={icon3} alt="" />
                         <div className="tumble-info">
                             <h2>Air buds</h2>
                             <p>$50.10</p>
                            
                             <h6>Sky airpod</h6>
                             <h6>Magnetic</h6>
                             <h6>Birds and sky moment!</h6>
                         </div>
                        </div>
                        
                        
                    </div>
                    <div className="blog-2">
                        <div className="tumble">
                        <img src={icon5} alt="" />
                         <div className="tumble-info">
                            <h2>Light Setup</h2>
                            <p>$40.68</p>
                            
                             <h6>Debugging</h6>
                             <h6>Moment picup</h6>
                             <h6>Nature enjoy this system!</h6>
                         </div>
                        </div>
                        
                        
                    </div>
                    <div className="blog-2">
                        <div className="tumble">
                        <img src={icon10} alt="" />
                         <div className="tumble-info">
                             <h2>Action Camera</h2>
                             <p>$60.23</p>
                             
                             <h6>Sifting location</h6>
                             <h6>Action camera</h6>
                             <h6>Enjoy music and song!</h6>
                         </div>
                        </div>
                        
                        
                    </div>
                    <div className="blog-2">
                        <div className="tumble">
                        <img src={icon7} alt="" />
                          <div className="tumble-info">
                             <h2>Night Lighting</h2>
                             <p>$70.95</p>
                            
                             <h6>Wide ranging</h6>
                             <h6>Surprize</h6>
                             <h6>Everyman enjoy it so much!</h6>
                         </div>
                     </div>
                        
                        
                    </div>
                 
               
                
                </div>
                
            </section>
        </main>
    );
};

export default Package;