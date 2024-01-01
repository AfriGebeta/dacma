import React, { useState, useMemo, useCallback , useEffect } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import Popup from './../Popup/Popup';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import TableToggleButton from '../Button/TableToggleButton';
import Dropdown from "../Dropdown/Dropdown" 
import { baseurl , token  , myHeaders} from "./../../constant/url";

// Example data
  const data = [
    { id : 1 , name :'edna mall' ,  latitude:'9.324' ,longitude:'8.4545' ,
      type : 'office' ,
      addedby : 'user1' ,
      address : <Dropdown/> ,
      status: 'not confirmed' }
    
  ];
  
  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Latitude', accessor: 'latitude' },
    { Header: 'Longitude', accessor: 'longitude' },
    { Header: 'type', accessor: 'type' },
    { Header: 'added by', accessor: 'addedby' },
    { Header: 'address', accessor: 'address' },
    { Header: 'status', accessor: 'status' },
  ];






const PlacesTable = ({placedata}) => {

  const [places_data , setPlaces] = useState([])

  const prepareForTable  = (url_data ) => {
    let table_data = []
    for(let i=0; i < url_data.length; i++){
      let _status = 'not confirmed'  
      if(url_data[i].approvedBy != null) _status = "confirmed"
  
      table_data.push({
        id : url_data[i].id , 
        name : url_data[i].names.official.EN ,  
        latitude:url_data[i].location.latitude  ,
        longitude:url_data[i].location.longitude  ,
        type : url_data[i].type ,
        addedby : url_data[i].addedBy.firstName + " " +  url_data[i].addedBy.lastName ,
        address : <Dropdown address = {url_data[i].address}/> ,
        status: _status
      })

    } 
    return table_data
  }

  useEffect(() => {
    fetch(baseurl + "/places" , {
        method : 'GET',
        headers : myHeaders
    })
        .then((response) =>{
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        }) 
        .then((data) => {
            console.log(data)
            let table_formatted = prepareForTable(data.data)
            setPlaces(table_formatted);
        })
        .catch((error) => {
        console.error("Error fetching data:", error);
    });
 }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter} = useTable({columns,data:places_data,},useGlobalFilter);

  const { globalFilter } = state;

  const handleFilterChange = useCallback((e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
  }, [setGlobalFilter]);




  return (
    <div className="container mx-auto mt-8 w-4/5"> {/* 80% of the screen width */}
      <input
        type="text"
        value={globalFilter || ''}
        onChange={handleFilterChange}
        placeholder="Search..."
        className="p-2 rounded border border-gray-300 shadow-md"
      />
     
      <table {...getTableProps()} className="mt-4 w-full bg-white rounded shadow-md"> {/* Set the table width to 100% */}
        <thead className="bg-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className='text-left'>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="px-4 py-2">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100 border-b">
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="px-4 py-2">
                      <span className='ml-[]'>{cell.render('Cell')} </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlacesTable;
