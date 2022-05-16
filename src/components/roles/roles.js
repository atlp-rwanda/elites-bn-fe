import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import { sideBarData } from '../layouts/dashboardLayout/adminMenuData';
import { DataGrid } from '@mui/x-data-grid';
import { usersAction, userRoles, updateRoles } from '../../redux/actions/usersAction';
import { connect } from 'react-redux';
import { Button, selectClasses } from '@mui/material';
import useAutocomplete from '@mui/material/useAutocomplete';
import { Box, style } from '@mui/system';

const Roles = (props) => {

  // const [rows, setRows] = useState(initialRows);
  // const changed = handleChange();

  const roles = () => {
    const data = props.users.roles;
    let arr = []
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].name);
    }
    console.log(arr);
    return arr;
  };
  
  const getRoles = roles();

  const columns = [
    {
      field: 'names',
      headerName: 'Names',
      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },

    // {
    //   field: 'edit',
    //   headerName: 'edit',
    //   width: 200,
    //   headerClassName: 'super-app-theme--header',
    //   headerAlign: 'center',
    //   renderCell: () => (
    //     <Autocomplete
    //       id="asynchronous-demo"
    //       options={roles()}
          
    //       sx={{ width: '100%', border: 'none' }}
    //       style={{ border: 'none', width: '100%' }}
    //       renderInput={(params) => (
    //         <TextField {...params} style={{ width: '100%', border: 'none', height: '100%'}} />
    //       )}
    //     />
    //   ),
    //   // onClick={handleClickOpen}
    // },
    {
      field: 'role',
      headerName: 'Role',
      editable: true,
      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      type: 'singleSelect',
      valueOptions: getRoles,
      onchange:{onChangeHandle},
    },

    {
      field: 'manager',
      headerName: 'Manager',
      width: 250,
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
          role: data[i].Role.name,
          manager: data[i].ManagerId.names,
        });
      } else {
        emptyArray.push({
          id: data[i].id,
          names: data[i].names,
          email: data[i].email,
          role: data[i].Role.name,
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

    const rolesFunction = async () => {
      await props.userRoles();
    };
    rolesFunction();
  }, []);

  // dispatch update email
  const onChangeHandle = async(email) =>{
    await props.updateRoles(email);
  }

  return (
    <>
      <Sidebar sideBarData={sideBarData} />
      <TopBar />
      <div style={{ height: '80vh', width: '78vw', marginLeft: '20%' }}>
        <Box
          sx={{
            height: '80vh',
            width: '78vw',
            backgroundColor: '#ffffff',
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
            pageSize={7}
            onCellEditCommit = {(params)=> {
              console.dir(params.email);
              return params.email}}
            rowsPerPageOptions={[8]}
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
  userRoles,
  updateRoles,
})(Roles);
