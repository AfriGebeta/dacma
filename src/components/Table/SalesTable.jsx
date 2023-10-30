import React, { useState, useMemo, useCallback } from 'react';
import { useTable, useGlobalFilter } from 'react-table';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import TableToggleButton from '../Button/TableToggleButton';

// Example data
const data = [
  { id: 1, name: 'John', age: 25 ,  phone : '0929111582' , email : "ab@gmail.com" , acive : <TableToggleButton/>},
  { id: 1, name: 'Abebe', age: 25 ,  phone : '0929111582' , email : "ab@gmail.com" , acive :  <TableToggleButton/>},
  { id: 1, name: 'Beso', age: 25 ,  phone : '0929111582' , email : "ab@gmail.com" , acive :  <TableToggleButton/>},
  { id: 1, name: 'Bela', age: 25 ,  phone : '0929111582' , email : "ab@gmail.com" , acive :  <TableToggleButton/>},
  { id: 1, name: 'Ende', age: 25 ,  phone : '0929111582' , email : "ab@gmail.com" , acive :  <TableToggleButton/>},
  { id: 1, name: 'Kezas', age: 25 ,  phone : '0929111582' , email : "ab@gmail.com" , acive :  <TableToggleButton/>},

  
];

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Active', accessor: 'acive' },
  
  // Define more columns as needed
];

const SalesTable = () => {
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

export default SalesTable;
