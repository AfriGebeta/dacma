import React , {useState} from "react"
import LineChart from "../components/Chart/LineChart"


function Dashboard(){
    return (
        <div className="flex flex-col py-12 px-10">
            <h2>Dashboard</h2>

            <div className="flex space-x-8">
                <div className="w-2/5 h-[150px] border border-gray-200 round flex flex-col justify-center p-4">
                    <span>Building Estimation</span>
                    <span>2000000</span>
                </div>

                <div className="w-2/5 h-[150px] border border-gray-200 round flex flex-col justify-center p-4">
                    <span>Data Collected</span>
                    <span>10000</span>
                </div>
            </div>

            <div className="flex space-x-8">
                <div className="w-2/5 h-[150px] border border-gray-200 round flex flex-col justify-center p-4">
                    <span>weekly top provider</span>
                    <span>2000000</span>
                </div>

                <div className="w-2/5 h-[150px] border border-gray-200 round flex flex-col justify-center p-4">
                    <span>daily top provider</span>
                    <span>10000</span>
                </div>
            </div>

            <div className="flex space-x-8 w-4/5">
               
               <LineChart/>
            </div>

        </div>
    )
}

export default Dashboard