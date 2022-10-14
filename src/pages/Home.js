import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from '@mui/material';
import {v4 as uuidv4} from 'uuid';

import {addRecord, deleteRecord} from '../store/actions';

import {Form} from '../components/form/Form';
import {List} from '../components/list/List';

const Home = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records);

  const onAddNewRecord = (data) => {
    const newId = uuidv4();
    dispatch(addRecord(data, newId));
  };

  const onDeleteRecord = (recordId) => {
    dispatch(deleteRecord(recordId));
  };

  return (
    <Container>
      <Form onSubmit={onAddNewRecord} />
      <List data={records} onDelete={onDeleteRecord} />
    </Container>
  );
};

export default Home;
