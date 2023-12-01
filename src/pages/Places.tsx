import React , {useEffect , useState} from "react"
import { baseurl } from "../constant/url";

import PlacesTable from "../components/Table/PlacesTable";

function Places(){
    const [placedata, setPlaceData] = useState([]);

    useEffect(() => {
        fetch(baseurl + "/places")
            .then((response) =>{
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            }) 
            .then((data) => {
                setPlaceData(data);
            })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);

    return (
        <div className="flex flex-col py-12 px-10">
        <h2>Places</h2>

        
        <div className="flex space-x-8 w-4/5">
           
           <PlacesTable placedata = {placedata}/>
        </div>

    </div>
    )
}


export default Places;

//1205