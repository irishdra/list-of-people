import React from 'react';
import {Container} from '@mui/material';

import {Form} from '../components/form/Form';

const Home = () => {
  const addNewRecord = (data) => {
    console.log('onSubmit', data);
  };

  return (
    <Container>
      <Form onSubmit={addNewRecord} />
    </Container>
  );
};

export default Home;
