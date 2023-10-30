import React , {useState} from "react"
import LineChart from "../components/Chart/LineChart"
import HomeCard from "../components/Card/HomeCard"


function Dashboard(){
    return (
        <div className="flex flex-col py-12 px-10">
            <h2>Dashboard</h2>

            <div className="flex space-x-8">
               <HomeCard/>
               <HomeCard/>
            </div>

            <div className="flex space-x-8">
                <HomeCard/>
               <HomeCard/>
            </div>

            <div className="flex space-x-8 w-4/5">
               
               <LineChart/>
            </div>

        </div>
    )
}

export default Dashboard