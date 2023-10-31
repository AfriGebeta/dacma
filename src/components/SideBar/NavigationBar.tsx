import React, { useState } from "react";
import { Link } from 'react-router-dom';

const navLinks = [
  {
    name: "Home",
    icon: "",
    link : "/"
  },
  {
    name: "Sales",
    icon: "",
    link : "sales"
  },
  {
    name: "Places",
    icon: "",
    link : "places"
  },
  {
    name: "Mapview",
    icon: "",
    link : "mapview"
  }
]

function NavigationBar() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  return (
    <div className="px-10 py-12 flex flex-col border border-r-1 w-1/5 h-screen">
      <div className="logo-div flex space-x-3 items-center">
        <span>GebetaMaps</span>
      </div>
      <div className="mt-9 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <Link to={index === 0 ? '/' : `/${item.link.toLowerCase()}`} key={index}
          >
            <div
              className={activeNavIndex === index ? "bg-green-100 p-2" : ""}
              onClick={() => { setActiveNavIndex(index) }}
            >
              <span> {item?.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavigationBar;






