import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function LoginButton( { label } ) {
  return (
    <Stack spacing={2} direction="row">

      <Button variant="contained">{label}</Button>

    </Stack>
  );
}