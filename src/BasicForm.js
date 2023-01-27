import React from "react";
import { Formik, Field, Form } from "formik";
import { Button } from "@mui/material";

const BasicForm = ({ addTodo }) => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        todo: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addTodo(values.todo);
        resetForm({ todo: "" });
      }}
    >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="todo" name="todo" placeholder="TextHere" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  </div>
);

export default BasicForm;
