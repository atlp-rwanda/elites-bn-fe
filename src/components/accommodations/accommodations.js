/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import getAccommodations from '../../redux/actions/accommodationsActions';

class accommodations extends Component {
  componentDidMount() {
    this.props.getAccommodations();
  }

  render() {
    const { accommodations } = this.props.accommodations;
    console.log(accommodations);

    return (
      <div className='accommodation'>
        <ButtonGroup>
          <Button color='primary' variant='contained'>
            PRIMARY
          </Button>
          <Button color='secondary' variant='contained'>
            SECONDARY
          </Button>
          <Button color='info' variant='contained'>
            INFO
          </Button>
          <Button color='error' variant='contained'>
            ERROR
          </Button>
          <Button color='success' variant='contained'>
            SUCCESS
          </Button>
          <Button color='success' variant='outlined'>
            OUTLINED
          </Button>
        </ButtonGroup>
        {accommodations.map((accommodation) => (
          <React.Fragment key={accommodation.id}>
            <h6>{accommodation.accommodationName}</h6>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ accommodations: state.accommodations });

export default connect(mapStateToProps, { getAccommodations })(accommodations);
