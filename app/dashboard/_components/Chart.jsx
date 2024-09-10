import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'January', emissions: 50 },
    { name: 'February', emissions: 60 },
    { name: 'March', emissions: 70 },
    { name: 'April', emissions: 180 },
    { name: 'May', emissions: 190 },
    { name: 'June', emissions: 130 },
];

export const Chart = () => {
    return (
        <div>
            <ResponsiveContainer width={"100%"} minHeight={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="emissions" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
