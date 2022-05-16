/* eslint-disable */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BasicModal from './RequestDetailsModal';
import setTripRequests from '../../redux/actions/tripRequestsActions';
import SkeletonTable from './SkeletonTable';
import setLocations from '../../redux/actions/locationsActions';
import './requestsTable.scss';

const RequestsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTripRequest, setCurrentTripRequest] = useState('');
  /// ///////
  let userColumns;
  let rows;
  const token = JSON.parse(localStorage.getItem('userToken'))?.accesstoken;
  const entireState = useSelector((state) => state);
  const tripRequestsState = entireState.allTripRequests;
  const locationsState = entireState.allLocations;
  const curentUserState = entireState.currentUser;
  const { currentUser } = curentUserState;

  const { tripRequests, loading } = tripRequestsState;
  const { locations } = locationsState;
  const dispatch = useDispatch();

  const fetchTripRequests = async () => {
    const res = await axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/trips', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(setTripRequests(res.data.payload));
  };

  const handleDelete = async (id) => {
    const res = await axios
      .delete(
        `https://elites-barefoot-nomad.herokuapp.com/api/v1/trips/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
    console.log(
      `%cdelete clicked id:${id}`,
      'color:green;font-size:20px;background-color:white',
      res
    );
  };

  const fetchLLocations = async () => {
    const res = await axios
      .get('https://elites-barefoot-nomad.herokuapp.com/api/v1/locations')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setLocations(res.data.payload));
  };

  useEffect(() => {
    fetchTripRequests();
    fetchLLocations();
  }, []);

  /// ////////////

  userColumns =
    currentUser.roleId === 5
      ? [
          { field: 'id', headerName: 'ID', width: 100 },
          {
            field: 'departLocation',
            headerName: 'Depart Location',
            width: 200,
          },
          {
            field: 'tripReason',
            headerName: 'Trip Reason',
            width: 260,
          },
          {
            field: 'status',
            headerName: 'Status',
            width: 160,
            renderCell: (params) => (
              <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
              </div>
            ),
          },
          {
            field: 'action',
            headerName: 'Actions',
            width: 250,
            renderCell: (params) => (
              <div className="cellAction">
                <div
                  className="viewButton"
                  onClick={() => {
                    setCurrentTripRequest(params.row.id);
                    setShowModal(true);
                  }}
                >
                  View
                </div>
                {params.row.status == 'pending' && (
                  <div
                    className="deleteButton"
                    onClick={() => handleDelete(params.row.id)}
                  >
                    Delete
                  </div>
                )}
              </div>
            ),
          },
        ]
      : [
          { field: 'id', headerName: 'ID', width: 60 },
          {
            field: 'user',
            headerName: 'Trip Owner',
            width: 200,
            renderCell: (params) => (
              <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.user}
              </div>
            ),
          },
          {
            field: 'departLocation',
            headerName: 'Depart Location',
            width: 150,
          },
          {
            field: 'tripReason',
            headerName: 'Trip Reason',
            width: 260,
          },
          {
            field: 'status',
            headerName: 'Status',
            width: 160,
            renderCell: (params) => (
              <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
              </div>
            ),
          },
          {
            field: 'action',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
              <div className="cellAction">
                <div
                  className="viewButton"
                  onClick={() => {
                    setCurrentTripRequest(params.row.id);
                    setShowModal(true);
                  }}
                >
                  View
                </div>
              </div>
            ),
          },
        ];
  if (Array.isArray(tripRequests) && tripRequests.length > 0) {
    rows = tripRequests.map((request) => {
      let departLocation;
      for (let i = 0; i < locations.length; i++) {
        if (locations[i].id === request.departLocation) {
          departLocation = locations[i].locationName;
        }
      }
      return {
        id: request.id,
        user: request.names,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU',
        departLocation,
        tripReason: request.tripReason,
        status: request.status,
      };
    });
  }

  if (rows) {
    return (
      <>
        <div className="datatable">
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid
                className="datagrid"
                rows={rows}
                columns={userColumns}
                pageSize={8}
                rowsPerPageOptions={[6]}
                disableSelectionOnClick
                sx={{ backgroundColor: 'white' }}
              />
            </div>
          </div>
        </div>
        <BasicModal
          show={showModal}
          close={() => setShowModal(false)}
          tripRequest={currentTripRequest}
        />
      </>
    );
  }
  if (!loading && !rows) {
    return (
      <div
        className="datatable"
        style={{
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" sx={{ color: 'blue' }}>
          You don&apos;t have any trip request yet!
        </Typography>
      </div>
    );
  }
  return <SkeletonTable />;
};

export default RequestsTable;
