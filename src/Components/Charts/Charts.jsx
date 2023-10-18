import React from 'react'
import 
{ BarChart, Bar, XAxis, ResponsiveContainer} 
from 'recharts';

const Charts = () => {

    const data = [
        {
          name: 'Jan',
          pv: 5000,
          amt: 2400,
        },
        {
          name: 'Feb',
          pv: 4000,
          amt: 2210,
        },
        {
          name: 'Mar',
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          pv: 6000,
          amt: 2000,
        },
        {
          name: 'May',
          pv: 7000,
          amt: 2181,
        },
        {
          name: 'Jun',
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',          
          pv: 7000,
          amt: 2100,
        },
        {
            name: 'Aug',          
            pv: 9800,
            amt: 2100,
        },
        {
            name: 'Sep',          
            pv: 9000,
            amt: 2100,
        },
        {
            name: 'Oct',          
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Nov',          
            pv: 3300,
            amt: 2100,
        },
        {
            name: 'Dec',          
            pv: 4000,
            amt: 2100,
        },
      ];

  return (
    <>
        <div className='charts shadow rounded p-2'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >  
                <XAxis dataKey="name" />
                <Bar dataKey="pv" fill="#e4ecf0" />
                
                </BarChart>
            </ResponsiveContainer>
        </div>
    </>
  )
}

export default Charts
