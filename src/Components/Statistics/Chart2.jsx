import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {
      name: 'Jan-Feb',
      uv: 10000,
      pv: 8400,
      amt: 2400,
    },
    {
      name: 'Mar-Apr',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'May-Jun',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Jul-Aug',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Sep-Oct',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Nov-Dec',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },


 

   

  ];

const Chart2 = () => {
  return (
    <>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>


    </>
  )
}

export default Chart2