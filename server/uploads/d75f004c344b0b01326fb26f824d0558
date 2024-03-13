// ItemForm.js
import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { TextField, Button } from '@mui/material';

const ItemForm = () => {
  return (
    <Formik
      initialValues={{ items: [{ itemName: '', itemDescription: '', rate: '', qty: '', lineTotal: '' }] }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="items">
            {({ insert, remove, push }) => (
              <>
                {values.items.length > 0 &&
                  values.items.map((item, index) => (
                    <div key={index}>
                      <Field name={`items.${index}.itemName`} as={TextField} label="Item Name" fullWidth />
                      <Field name={`items.${index}.itemDescription`} as={TextField} label="Item Description" fullWidth />
                      <Field name={`items.${index}.rate`} as={TextField} label="Rate" type="number" fullWidth />
                      <Field name={`items.${index}.qty`} as={TextField} label="Qty" type="number" fullWidth />
                      <Field name={`items.${index}.lineTotal`} as={TextField} label="Line Total" type="number" fullWidth />
                    </div>
                  ))}
                <Button variant="contained" color="primary" onClick={push} fullWidth>
                  + Add Line Item
                </Button>
              </>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default ItemForm;