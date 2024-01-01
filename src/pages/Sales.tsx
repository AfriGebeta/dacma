import React , {useState , useEffect} from "react"
import SalesTable from "../components/Table/SalesTable";


import { table } from "console";
function Sales(){


   
  
    return (
        <div className="flex flex-col py-12 px-10">
        <h2>Sales</h2>

        
        <div className="flex space-x-8 w-4/5">
           
            <SalesTable /> 
        </div>

    </div>
    )
}


export default Sales;

