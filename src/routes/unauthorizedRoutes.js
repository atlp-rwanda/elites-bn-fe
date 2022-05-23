import React from 'react';
import { Navigate, Route } from 'react-router';

const Unauthorized = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const token = JSON.parse(localStorage.getItem('userToken'));
  if (!token) {
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    );
  }
  return <Navigate to="/" />;
};

export default Unauthorized;
