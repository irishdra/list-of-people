import {
  ADD_RECORD,
  DELETE_RECORD,
} from './actionTypes';

const initialState = {
  records: [],
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD: {
      const {record, recordId} = action.payload;

      return {
        ...state,
        records: [...state.records, {id: recordId, ...record}],
      };
    }

    case DELETE_RECORD: {
      const {recordId} = action.payload;

      const newRecords = state.records.filter(
          (record) => record.id !== recordId,
      );

      return {
        ...state,
        records: [...newRecords],
      };
    }

    default:
      return state;
  };
};

export default recordReducer;
