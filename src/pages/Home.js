import React from 'react';
import {Container} from '@mui/material';

import {Form} from '../components/form/Form';
import {List} from '../components/list/List';

const Home = () => {
  const addNewRecord = (data) => {
    console.log('onSubmit', data);
  };

  return (
    <Container>
      <Form onSubmit={addNewRecord} />
      <List />
    </Container>
  );
};

export default Home;
