import React , {useState , useEffect} from "react"
import SalesTable from "../components/Table/SalesTable";
import { baseurl } from "../constant/url";
function Sales(){


    const [userdata, setUserData] = useState([]);

    useEffect(() => {
        fetch(baseurl + "/profiles")
            .then((response) =>{
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            }) 
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);


    return (
        <div className="flex flex-col py-12 px-10">
        <h2>Sales</h2>

        
        <div className="flex space-x-8 w-4/5">
           
            <SalesTable userdata={userdata}/> 
        </div>

    </div>
    )
}


export default Sales;

