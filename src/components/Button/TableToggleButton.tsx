import React , {useState} from 'react'

function TableToggleButton(){


    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
      setIsChecked(!isChecked);
    };



    return(
        <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <div className={`toggle-path  w-14 h-7 rounded-full shadow-inner ${isChecked ? 'bg-gray-300' : 'bg-green-400'}`}></div>
          <div
            className={`toggle-circle absolute w-6 h-6   mt-[-47%] rounded-full shadow-md transition-transform ${
                isChecked ? 'translate-x-full bg-green-300' : 'translate-x-0 bg-gray-300'
            }`}
          ></div>
        </div>
   
      </label>
    )
}

export default TableToggleButton