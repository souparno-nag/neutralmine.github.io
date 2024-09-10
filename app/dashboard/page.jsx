// components/BarChart.js
"use client"
import React, { useEffect, useState } from 'react';
import Detail from './_components/Detail';
import { Chart } from './_components/Chart';
import Cookies from 'js-cookie';


const user = {
    id: "USER12345678",
    name: "Priyesh Kumar Jha",
    companyName: "GreenCoal Plant",
    location: {
        place: "Bangalore, India",
        coordinates: [12.9716, 77.5946] // Bangalore, India (longitude, latitude)
    },
    governmentId: "GOV12345678",
    environmentalLicenseNumber: "ELN98765432",
    createdAt: "2024-09-08T10:15:30.000Z",
    updatedAt: "2024-09-08T10:15:30.000Z"
}


export default function Dashboard() {


    // const token = Cookies.get('token');
    // const userName = Cookies.get('userName');
    // console.log(userName.name)

    return (
        <div >
            {/* <div>{JSON.stringify(userName.name)}</div> */}
            <Detail user={user} />
            {/* // <div style={{ width: '100%', height: 400 }}> */}
            <Chart />
            {/* // </div> */}
        </div>
    );
};

