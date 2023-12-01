import React, { useState, useMemo, useCallback } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import Popup from './../Popup/Popup';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import TableToggleButton from '../Button/TableToggleButton';
import Dropdown from "../Dropdown/Dropdown" 

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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter} = useTable({columns,data,},useGlobalFilter);

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
