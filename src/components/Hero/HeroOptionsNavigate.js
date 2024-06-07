import { Routes, Route } from "react-router-dom";
import FullBody from "../FullBody";
import LowerBody from "../LowerBody";
import UpperBody from "../UpperBody";
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const HeroOptions = () => {
  const navigate = useNavigate();
  
    return (
    <div>
    <h1>HeroOptions</h1>
    <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={(values) => {
          const path = `/${values.exerciseOption}`; // Dynamic path based on selection
          navigate(path);
        }}
    >
      {({ values }) => (
        <Form>
          <div id="exercise-group">Choose your workout:</div>
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
            <div>Picked: {values.exerciseOption}</div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
      
  </div>
    );
};

export default HeroOptions;