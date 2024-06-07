import React from 'react';
import { LinePrimaryXAxis, LinePrimaryYAxis  , transformedData} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";



const LineChartGraph = () => {
  const { currentMode } = useStateContext();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={transformedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Germany" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="England" stroke="#82ca9d" />
        <Line type="monotone" dataKey="India" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartGraph;