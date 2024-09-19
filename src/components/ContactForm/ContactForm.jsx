import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

export default function ContactForm({ addContact }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number is not valid')
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    addContact({ ...values, id: nanoid() });
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="div"
        />

        <label className={css.label} htmlFor={phoneFieldId}>
          Number
        </label>
        <Field type="tel" name="number" id={phoneFieldId} />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="div"
        />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
