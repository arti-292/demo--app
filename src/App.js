
import React from "react";
import { Formik, useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import {
  userInfo,
  deleteItem,
  editItem,
  updateItem,
  cancleEdit
} from "./actions/index";

const initialValues = { name: "", mobile: "", address: "" };

function App() {
  const counter = useSelector((state) => state.counter);
  const { user, isEdit } = counter;
  const dispatch = useDispatch();
  const formik = useFormik({ initialValues });
  const formSubmit = (values, formikProps) => {
    dispatch(userInfo(values));
    formikProps.resetForm();
    formik.resetForm();
  };
  console.log(counter, "counter");

  const editForm = (item, index) => {
    console.log(index);
    formik.setValues(item);
    dispatch(editItem(index));
  };
  const updateForm = (item) => {
    dispatch(updateItem(item));
    formik.resetForm();
  };

  return (
    <div className="App">
      <Formik
        initialValues={formik.values}
        ß
        enableReinitialize={true}
        onSubmit={formSubmit}
      >
        {({ handleSubmit, handleChange, values }) => {
          return (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <label htmlFor="name">name &nbsp;</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              <br />
              <label htmlFor="mobile">mobile&nbsp;</label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                onChange={handleChange}
                value={values.mobile}
              />
              <br />
              <label htmlFor="address">Address&nbsp;</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleChange}
                value={values.address}
              />
              <br />

              <button type="submit" disabled={isEdit}>
                Submit
              </button>
              <button
                disabled={!isEdit}
                type="button"
                onClick={() => updateForm(values)}
              >
                Update
              </button>
              <button
                disabled={!isEdit}
                type="button"
                onClick={() => {
                  dispatch(cancleEdit());
                  formik.resetForm();
                }}
              >
                cancle
              </button>
            </form>
          );
        }}
      </Formik>
      <React.Fragment>
        {user.map((item, index) => (
          <h3 key={index}>
            <p>{item.name}</p>
            <p>{item.mobile}</p>
            <p>{item.address}</p>

            <button onClick={() => dispatch(deleteItem(index))}>delete</button>

            <button onClick={() => editForm(item, index)}>edit</button>
          </h3>
        ))}
      </React.Fragment>
    </div>
  );
}
export default App;


