import React , {useState} from "react"



const navLinks = [
    {
        name : "Home",
        icon : ""
    },
    {
        name : "Sales",
        icon : ""
    },
    {
        name : "Crowd",
        icon : ""
    },
    {
        name : "mapview",
        icon : ""
    }

]

function NavigationBar(){

    const [activeNavIndex , setActiveNavIndex] = useState(0)
    return (
        <div className="px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen">
            <div className="logo-div flex space-x-3 items-center">
                {/* <img src = {} /> */}
                <span>GebetaMaps</span>
            </div>
            <div className="mt-9 flex flex-col space-y-8">
                { navLinks.map((item , index) => 
                <div key={index}
                 className= {activeNavIndex === index ? "bg-green-100 p-2" : ""}
                 onClick={()=> {setActiveNavIndex(index)}}
                 >
                    <span> {item?.name}</span>
                </div> )}
            </div>
        </div>
    )
}


export default NavigationBar