import {ADD_RECORD, DELETE_RECORD} from './actionTypes';

export const addRecord = (record, recordId) => ({
  type: ADD_RECORD,
  payload: {
    record,
    recordId,
  },
});

export const deleteRecord = (recordId) => ({
  type: DELETE_RECORD,
  payload: {
    recordId,
  },
});
