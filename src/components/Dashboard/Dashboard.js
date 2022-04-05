import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
import {   EmojiHappyIcon, GiftIcon, StarIcon, ThumbUpIcon } from '@heroicons/react/solid'

const Dashboard = () => {
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
      const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
    return (
        <div className='container'>
          <div className="chart-section">
              <div className="chart-part">
                  <ComposedChart width={750} height={350} data={data}>
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
                  <div className="sample-1">
                      <p>$2250 Revenue</p>
                   <LineChart width={500} height={120} data={data}>
                  
                     <Line dataKey='cost'></Line>  
                   </LineChart>
                  </div>
                  <div className="sample-2">
                      
                  
                  <BarChart
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
    );
};

export default Dashboard;