import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

function HeroOptions({ onSubmit }) {
  return (
    <Formik
      initialValues={{ option: "" }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values.option);
          setSubmitting(false);
        }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
            <div id="exercise-group">Choose your workout:</div>
            <div role="group" aria-labelledby="exercise-group">
              <Field type="radio" name="option" value="fullBody" />
              <label for="fullBody">Full Body</label>
              <br />
              <Field type="radio" name="option" value="upperBody" />
              <label for="upperBody">Upper Body</label>
              <br />
              <Field type="radio" name="option" value="lowerBody" />
              <label for="lowerBody">Lower Body</label>
            </div>

            <button type="submit">Submit</button>
          </Form>
      )}
    </Formik>
  );
}

export default HeroOptions;
