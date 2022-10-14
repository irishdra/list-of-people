import React from 'react';
import {Controller} from 'react-hook-form';
import {TextField} from '@mui/material';

export const FormTextField = ({
  name,
  control,
  label,
  type,
  register,
  registerOptions,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {onChange, value},
        fieldState: {error},
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          type={type}
          variant="standard"
          {...register(name, registerOptions)}
        />
      )}
    />
  );
};
