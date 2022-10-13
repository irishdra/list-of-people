import React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const rows = [
  {
    id: 1,
    firstName: 'Frozen',
    lastName: 'Yogurt',
    phone: '095',
    gender: true,
    age: 100,
  },
  {
    id: 2,
    firstName: 'Ice cream',
    lastName: 'Sandwich',
    phone: '096',
    gender: false,
    age: 7,
  },
  {
    id: 3,
    firstName: 'Ice cream',
    lastName: 'Sandwich',
    phone: '096',
    gender: false,
    age: 7,
  },
  {
    id: 4,
    firstName: 'Ice cream',
    lastName: 'Sandwich',
    phone: '096',
    gender: false,
    age: 7,
  },
  {
    id: 5,
    firstName: 'Ice cream',
    lastName: 'Sandwich',
    phone: '096',
    gender: false,
    age: 7,
  },
  {
    id: 6,
    firstName: 'Ice cream',
    lastName: 'Sandwich',
    phone: '096',
    gender: false,
    age: 7,
  },
  {
    id: 7,
    firstName: 'Ice cream',
    lastName: 'Sandwich',
    phone: '096',
    gender: false,
    age: 7,
  },
];

const columns = [
  {field: 'id', headerName: 'ID', width: 70},
  {field: 'firstName', headerName: 'First Name', width: 130},
  {field: 'lastName', headerName: 'Last Name', width: 130},
  {field: 'phone', headerName: 'Phone', width: 130},
  {field: 'gender', headerName: 'Gender', width: 130},
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];

export const List = () => {
  return (
    <div style={{height: 280, width: '85%', margin: '0 auto'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
