import React from 'react';
import {   EmojiHappyIcon, GiftIcon, StarIcon, ThumbUpIcon } from '@heroicons/react/solid'
import './Home.css';

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
import icon11 from '../../image/coding.png'
import icon12 from '../../image/project.png'


import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';




const Home = () => {
    const data = [
        {
          year: '2015',
          earning: 4000,
          cost: 2400,
          budghet: 2400,
        },
        {
          year: '2016',
          earning: 3000,
          cost: 1398,
          budghet: 2210,
        },
        {
            year: '2017',
            earning: 2000,
            cost: 6800,
            budghet: 2290,
        },
        {
            year: '2018',
            earning: 2780,
            cost: 3908,
            budghet: 2000,
        },
        {
            year: '2019',
            earning: 1890,
            cost: 4800,
            budghet: 2181,
        },
        {
            year: '2020',
            earning: 2390,
            cost: 3800,
            budghet: 2500,
        },
        {
            year: '2021',
            earning: 3490,
            cost: 4300,
            budghet: 2100,
        },
      ];
    
    return (
        <div className='total'>
        <div className='home-section'>
            <div className="home-header">
              <h1>Start your journey as <br /> <small className='part'>Influencer </small> </h1>
              <p>The leading influencer marketing and branded content solution. We combine driven insights and creative strategy to produce meaningful relationships.Make a best site for your life.</p>
              <button className='home-btn'>Preview</button>
            </div>
            <div className="home-img">
               <img src={logo} alt="" /> 
            </div>
           
        </div>

        
        <session className="all-service">
        <div className="service-1">
           <img src={icon11} alt="" />
        </div>
        <div className="service-2">
            <h1>BEST SERVICE</h1>
            <h1>ANYTIME ANYWHERE</h1>
            <p>Desirous of making a career in Financial Management by obtaining the role of Accounting and Financial Analyst at a challenging organization to utilize my knowledge in financial planning, forecasting and reporting.</p>
            <a href="">Read the documentation</a>
        </div>

    </session>
    <session className="community">
          <div className="community-1">
              <h1>KNOW OUR</h1>
              <h1>GLOBAL COMMUNITY</h1>
              <p>Highly motivated and result-oriented individual seeking an entry-level managerial profile in your company to gain practical exposure along with implement my knowledge and expertise to ensure the success of the organisational goals.</p>
              <a href="">Read the documentation</a>
          </div>
          <div className="community-2">
              <img src={icon12} alt="" />
          </div>
    </session>
        <main>
            <section className ="all-side">
                <h3>Photographic Package</h3>
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


       



    <div className='container'>
            <h1 className ='dashboard-header'>Dashboard</h1>
          <div className="chart-section">
              <div className="chart-part">
                  <ComposedChart width={700} height={350} data={data}>
                      <XAxis datakey='year'></XAxis>
                      <YAxis></YAxis>
                  <Area type="monotone" dataKey="earning" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="cost" barSize={10} fill="#413ea0" />
  <Line type="monotone" dataKey="budghet" stroke="#ff7300" />
  <Tooltip></Tooltip>

                  </ComposedChart>
              </div>
              <div className="discuss-part">
               
                  <div className="part-1">
                 <StarIcon className='img-1'></StarIcon>
                 <div className='join'>
                 <p>17.5K</p>
                 <p>Client Review</p>
                 

                 </div>
                  
                  </div>
                  <div className="part-2">
                    <ThumbUpIcon className='img-1'></ThumbUpIcon>
                    <div className='join'>
                 <p>17.5K</p>
                 <p>Client Like</p>
                 

                 </div>
                    <div>
                 

                 </div>
                  </div>
                  <div className="part-3">
                 <EmojiHappyIcon className='img-1'></EmojiHappyIcon>
                 <div className='join'>
                 <p>17.5K</p>
                 <p>Client Happy</p>
                 

                 </div>
                 <div>
                 
                 </div>
                  </div>
                  <div className="part-4">
                  <GiftIcon className='img-1'></GiftIcon>
                  <div className='join'>
                 <p>17.5K</p>
                 <p>Client Award</p>
                 

                 </div>
                  </div>
              </div>
              </div>

              <div className="sample-cart">
                  <div className="sample-first">
                      <p className='reveneu'>$2250 Revenue</p>
                   <LineChart width={500} height={120} data={data}>
                  
                     <Line dataKey='cost'></Line>  
                   </LineChart>
                  </div>
                  <div className="sample-second">
                      
                  
                  <BarChart className='bar'
          width={500}
          height={150}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          
          <Tooltip />
          <Legend />
          <Bar dataKey="cost" fill="#8884d8" />
          <Bar dataKey="earning" fill="#82ca9d" />
        </BarChart>
                  </div>
                  </div>  
        </div>

        <div className="footer">
            <div className="footer-info">
                <h2>Influencer Product</h2>
                <h4>Copyright© 2020 influencer product</h4>
                <h4 class="info-title">All right reserved</h4>
            </div>
            <div className="footer-icon">
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-skype"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram-square"></i>
            </div>
        </div>
        </div>
    );
};

export default Home;