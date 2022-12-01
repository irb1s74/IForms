import {FC} from 'react';
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

interface BarChartProps {
    data: { name: string, value: number }[]
}

const BarStats: FC<BarChartProps> = ({data}) => {
    return (
        <BarChart
            width={600}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            barSize={20}
        >
            <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Bar dataKey="value" fill="#8884d8" background={{fill: '#eee'}}/>
        </BarChart>
    );
};

export default BarStats;
