// ItemForm.js
import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import { TextField, Button } from '@mui/material';

const ItemForm = () => {
  const initialValues = {
    items: [
      {
        itemName: '',
        itemDescription: '',
        rate: '',
        qty: '',
        lineTotal: ''
      }
    ]
  };

  const validate = (values) => {
    const errors = {};
    const itemErrors = [];

    values.items.forEach((item, index) => {
      if (!item.itemName) {
        itemErrors.push(`Item Name is required for line item ${index + 1}.`);
      }

      if (!item.rate || isNaN(item.rate)) {
        itemErrors.push(`Valid Rate is required for line item ${index + 1}.`);
      }

      if (!item.qty || isNaN(item.qty)) {
        itemErrors.push(`Valid Quantity is required for line item ${index + 1}.`);
      }

      if (!item.lineTotal || isNaN(item.lineTotal)) {
        itemErrors.push(`Valid Line Total is required for line item ${index + 1}.`);
      }
    });

    if (itemErrors.length > 0) {
      errors.items = itemErrors;
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ values, errors, isSubmitting, setFieldValue }) => (
        <Form>
          <FieldArray name="items">
            {({ insert, remove, push }) => (
              <>
                {values.items.length > 0 &&
                  values.items.map((item, index) => (
                    <div key={index}>
                      <Field name={`items.${index}.itemName`} as={TextField} label="Item Name" fullWidth />
                      <Field name={`items.${
