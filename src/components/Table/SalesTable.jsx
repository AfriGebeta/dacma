import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { baseurl , token  , myHeaders} from "./../../constant/url";

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import TableToggleButton from '../Button/TableToggleButton';




const columns  = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Active', accessor: 'acive' },
  
  // Define more columns as needed
];

const SalesTable = () => {

  const [userdata, setUserData] = useState([]);

  const prepareForTable  = (url_data ) => {
    let table_data = []
    for(let i=0; i < url_data.length; i++){
       table_data.push({ id: url_data[i].id, name: url_data[i].firstName + " " +url_data[i].lastName ,  phone : url_data[i].phoneNumber , email : url_data[i].email , acive : <TableToggleButton user_id = {url_data[i].id} active={url_data[i].active}/>})
    } 
    return table_data
}
useEffect(() => {
   fetch(baseurl + "/profiles" , {
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
         
           let table_formatted = prepareForTable(data.data)
           setUserData(table_formatted);
       })
       .catch((error) => {
       console.error("Error fetching data:", error);
   });
}, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter} = useTable({columns,data: userdata,},useGlobalFilter);

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

export default SalesTable;



