import { Routes, Route } from "react-router-dom";
import FullBody from "../FullBody";
import LowerBody from "../LowerBody";
import UpperBody from "../UpperBody";
import { Formik, Field, Form } from 'formik';

const HeroOptions = () => {
    return (
    <div>
    {/*<h1>HeroOptions</h1>*/}
    <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <h2 id="exercise-group">Choose your workout:</h2>
          <div role="group" aria-labelledby="exercise-group">
            <label>
              <Field type="radio" name="exerciseOption" value="fullBody" />
              Full Body
            </label>
            <label>
              <Field type="radio" name="exerciseOption" value="UpperBody" />
              Upper Body
            </label>
            <label>
              <Field type="radio" name="exerciseOption" value="LowerBody" />
              Lower Body
            </label>
            {/*<div>Selected: {values.exerciseOption}</div>*/}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
      <FullBody />
  </div>
    );
};

export default HeroOptions;