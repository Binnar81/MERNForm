import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import { Button, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadButton = ({ name, ...rest }) => {
  const [field, meta, helpers] = useField(name);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.currentTarget.files[0];
    setFile(selectedFile);
    helpers.setValue(selectedFile);
  };

  return (
    <Formik initialValues={{ [name]: null }} onSubmit={(values) => console.log(values)}>
      {({ isSubmitting }) => (
        <Form>
          <Box display="flex" alignItems="center">
            <Button variant="contained" component="label" startIcon={<CloudUploadIcon />} disabled={isSubmitting} {...rest}>
              Upload Attachment File
              <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
            </Button>
            {file && <span style={{ marginLeft: '1rem' }}>{file.name}</span>}
            {meta.touched && meta.error && <span style={{ marginLeft: '1rem', color: 'red' }}>{meta.error}</span>}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FileUploadButton;
