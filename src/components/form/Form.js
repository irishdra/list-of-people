import React from 'react';
import {useForm} from 'react-hook-form';
import {Paper, Button, Container} from '@mui/material';

import {FormTextField} from './form-elements/FormTextField';
import {FormRadioGroup} from './form-elements/FormRadioGroup';

import {formRegisterOptions} from '../../common/constants/formRegisterOptions';
import {
  formGenderRadioGroupOptions,
} from '../../common/constants/formGenderRadioGroupOptions';

const defaultValues = {
  firstName: '',
  lastName: '',
  phone: '',
  gender: 'male',
  age: 0,
};

export const Form = ({onSubmit}) => {
  const methods = useForm({defaultValues: defaultValues});
  const {register, handleSubmit, reset, control} = methods;

  const beforeSubmit = (data) => {
    const newRecord = {
      ...data,
      gender: data.gender === 'male',
    };

    onSubmit(newRecord);
    reset();
  };

  return (
    <Paper
      style={{
        maxWidth: '600px',
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: '10px auto',
      }}
    >
      <FormTextField
        name="firstName"
        control={control}
        label="First Name"
        register={register}
        registerOptions={formRegisterOptions.firstName}
      />
      <FormTextField
        name="lastName"
        control={control}
        label="Last Name"
        register={register}
        registerOptions={formRegisterOptions.lastName}
      />
      <FormTextField
        name="phone"
        control={control}
        label="Phone"
        register={register}
        registerOptions={formRegisterOptions.phone}
      />
      <FormRadioGroup
        name="gender"
        control={control}
        label="Gender"
        options={formGenderRadioGroupOptions}
      />
      <FormTextField
        name="age"
        control={control}
        label="Age"
        type="number"
        register={register}
        registerOptions={formRegisterOptions.age}
      />
      <Container
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
          padding: '0',
        }}
      >
        <Button
          onClick={handleSubmit(beforeSubmit)}
          variant="contained"
        >
          Add record
        </Button>
        <Button onClick={() => reset()} variant="outlined">Reset</Button>
      </Container>
    </Paper>
  );
};
