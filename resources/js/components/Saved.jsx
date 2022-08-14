import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

export default function Saved() {
  return (
    <Stack sx={{ width: '100%', mb: '15px' }} spacing={2}>
       <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Saved successfully <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}
