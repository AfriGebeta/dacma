import React from "react"

import PlacesTable from "../components/Table/PlacesTable";

function Places(){
    return (
        <div className="flex flex-col py-12 px-10">
        <h2>Dashboard</h2>

        
        <div className="flex space-x-8 w-4/5">
           
           <PlacesTable/>
        </div>

    </div>
    )
}


export default Places;

//1205