import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import css from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Full name must be at least 3 characters')
    .max(50, 'Full name must be 50 characters or less')
    .required('Is required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Phone number is invalid, please enter a phone number in correct format 999-99-99'
    )
    .required('Is required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ addContact }) {
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
        <Field type="text" className={css.input} name="name" id={nameFieldId} />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="div"
        />

        <label className={css.label} htmlFor={phoneFieldId}>
          Number
        </label>
        <Field
          type="tel"
          className={css.input}
          name="number"
          id={phoneFieldId}
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="div"
        />

        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
