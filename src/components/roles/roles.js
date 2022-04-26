import React, { useState, useEffect } from 'react';
import Sidebar from '../layouts/dashboardLayout/Sidebar';
import TopBar from '../layouts/dashboardLayout/TopBar';
import { DataGrid } from '@mui/x-data-grid';
import {
  usersAction,
  userRoles,
  updateRoles,
} from '../../redux/actions/usersAction';
import { connect } from 'react-redux';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Roles = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [snackbar, setSnackbar] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [oldRole, setOldRole] = React.useState('');
  const [newRole, setNewRole] = React.useState('');

  const handleCloseModel = () => {
    setOpen(false);
  };

  const roles = () => {
    const data = props.users.roles;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].name);
    }
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
      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },

    {
      field: 'role',
      headerName: 'Role',

      width: 300,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      type: 'singleSelect',

      renderCell: (params) => (
        <Autocomplete
          id="asynchronous-demo"
          options={roles()}
          disableClearable
          value={params.value}
          onChange={(e) => {
            setEmail(params.row.email);
            setOldRole(params.value);
            setNewRole(e.target.outerText);
            processRowUpdate();
          }}
          onTouchCancelCapture={async () => {
            setOpen(false);
            await setSnackbar({
              children: `Oops, Role can not be null! `,
              severity: 'error',
            });
          }}
          sx={{ width: '100%', border: 'none' }}
          style={{ border: 'none', width: '100%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              style={{ width: '100%', border: 'none', height: '100%'}}
            />
          )}
        />
      ),
    },
    {
      field: 'manager',
      headerName: 'Manager',
      width: 250,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
  ];

  console.log(email, oldRole, newRole);

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

  const getRoleId = (roleName) => {
    const getRolesArr = props.users.roles;
    let role = [];
    for (let i = 0; i < getRolesArr.length; i++) {
      role = getRolesArr[i];
      if (role.name == roleName) {
        return role.id;
      }
    }
    return false;
  };

  // update role

  const processRowUpdate = React.useCallback(async () => {
    setOpen(true);
    return true;
  });

  const handleNo = async () => {
    setOpen(false);
    await setSnackbar({ children: `Role not updated `, severity: 'info' });
  };

  const handleYes = async () => {
    try {
      console.log(oldRole);
      const role = getRoleId(newRole);
      if (newRole === undefined) {
        await setSnackbar({
          children: `Role can not be undefined, please select new role `,
          severity: 'error',
        });
      } else {
        const response = await props.updateRoles(role, email);
        await setSnackbar({
          children: `Role successfully updated from ${oldRole} to ${newRole} `,
          severity: 'success',
        });
        window.location.reload();
      }

      setOpen(false);
    } catch (error) {
      console.log(error);
      setOpen(false);
      setSnackbar({ children: "Role can't be empty", severity: 'error' });
      setGetRolesMutation(null);
    }
  };

  // call the row function

  const row = rows();
  useEffect(() => {
    const func = async () => {
      setIsLoading(true);
      await props.usersAction();
      setIsLoading(false);
    };
    func();

    const rolesFunction = async () => {
      await props.userRoles();
    };
    rolesFunction();
  }, []);

  const handleProcessRowUpdateError = React.useCallback((error) => {
    console.log(error.message);
  }, []);

  return (
    <>
      <Sidebar />
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
            '& .editTooltip': {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'center',
              marginLeft: '25%',
            },
          }}
        >
          <DataGrid
            rows={row}
            getRowSpacing={getRowSpacing}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            processRowUpdate={processRowUpdate}
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModel={processRowUpdate}
            onProcessRowUpdateError={handleProcessRowUpdateError}
            loading={isLoading}
            disableSelectionOnClick={true}
          />
          {!!snackbar && (
            <Snackbar
              open
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              onClose={handleCloseSnackbar}
              autoHideDuration={6000}
            >
              <Alert {...snackbar} onClose={handleCloseSnackbar} />
            </Snackbar>
          )}
        </Box>
      </div>

      <Dialog
        open={open}
        onClose={handleCloseModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are you sure you want to update role?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo}>No</Button>
          <Button onClick={handleYes} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
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
