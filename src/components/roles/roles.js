import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import { sideBarData } from '../layouts/dashboardLayout/adminMenuData';
import { DataGrid } from '@mui/x-data-grid';
import { usersAction } from '../../redux/actions/usersAction';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import useAutocomplete from '@mui/material/useAutocomplete';
import { Box } from '@mui/system';

const Roles = (props) => {
  const roles = [
    { label: 'Travel Admin' },
    { label: 'requester' },
    { label: 'Manager' },
    { label: 'Super Admin' },
    { label: 'requester' },
    { label: 'Manager' },
    { label: 'Super Admin' },
  ];

  const columns = [
    {
      field: 'names',
      headerName: 'Names',
      width: 150,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 250,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },

    {
      field: 'role',
      headerName: 'Role',
      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      renderCell: () => (
        <Autocomplete
          multiple
          id="asynchronous-demo"
          options={roles}
          sx={{ width: 300 }}
          style={{ border: 'none', width: 300 }}
          renderInput={(params) => (
            <TextField {...params} style={{ width: '300px' }} />
          )}
        />
      ),
      // onClick={handleClickOpen}
    },
    {
      field: 'manager',
      headerName: 'Manager',
      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
  ];

  const getRowSpacing = React.useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 5,
      bottom: params.isLastVisible ? 0 : 5,
    };
  }, []);

  const rows = () => {
    let data = props.users.users;
    const emptyArray = [];
    for (let i = 1; i < data.length; i++) {
      if (data[i].ManagerId !== null) {
        emptyArray.push({
          id: data[i].id,
          names: data[i].names,
          email: data[i].email,
          role: data[i].roleId,
          manager: data[i].ManagerId.names,
        });
      } else {
        emptyArray.push({
          id: data[i].id,
          names: data[i].names,
          email: data[i].email,
          role: data[i].roleId,
          manager: data[i].ManagerId,
        });
      }
    }
    return emptyArray;
  };
  const row = rows();

  useEffect(() => {
    const func = async () => {
      await props.usersAction();
    };
    func();
  }, []);

  return (
    <>
      <Sidebar sideBarData={sideBarData} />
      <TopBar />
      <div style={{ height: '80vh', width: '70vw', marginLeft: '20%' }}>
        <Box 
        sx={{
          height: '80vh',
          width: '70vw',
          '& .super-app-theme--header': {
            backgroundColor: '#07539F',
            color: 'white',
            fontWeight: '600',
          },
        }}
        >

        <DataGrid
          rows={row}
          getRowSpacing={getRowSpacing}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          style={{textAlign: 'center'}}
        />
        </Box>
        
      </div>
    </>
  );
};

const mapStatesToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStatesToProps, {
  usersAction,
})(Roles);
