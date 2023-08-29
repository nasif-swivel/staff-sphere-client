import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextInput from "@/components/ui/textInput";
import Link from "next/link";
import SelectInput from "@/components/ui/selectInput";

const NewEmployeeSchema = Yup.object().shape({
  empId: Yup.string().required("Required"),
  firstName: Yup.string()
    .min(6, "Minimum 6 characters!")
    .max(10, "Maximum 10 characters!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed!")
    .required("Required"),
  lastName: Yup.string()
    .min(6, "Minimum 6 characters!")
    .max(10, "Maximum 10 characters!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed!")
    .required("Required"),
  email: Yup.string().email("Invalid email!").required("Required"),
  phoneNumber: Yup.string()
    .matches(
      /^(?:\+?94)?(?:0|94)(?:[123456789])\d{8}$/,
      "Invalid phone number!"
    )
    .required("Required"),
  gender: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
});

interface Props {
  handleSubmit: (values: any) => void;
  initialValue: any;
  isEdit?: boolean;
  title: string;
}

const EmployeeDetailsForm: React.FC<Props> = ({
  handleSubmit,
  initialValue,
  isEdit = false,
  title,
}) => {
  return (
    <Card className="mt-10 ml-auto mr-auto p-5" sx={{ width: 475 }}>
      <CardHeader title={title} />
      <CardContent>
        <Formik
          initialValues={initialValue}
          validateOnBlur={false}
          validateOnChange={false}
          validationSchema={NewEmployeeSchema}
          onSubmit={handleSubmit}
        >
          {({ handleBlur, handleChange, values }) => {
            return (
              <Form className="flex flex-col gap-5">
                <Field
                  component={TextInput}
                  label="Id"
                  name="empId"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.empId}
                />
                <Field
                  component={TextInput}
                  label="First Name"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                />
                <Field
                  component={TextInput}
                  label="Last Name"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                />
                <Field
                  component={TextInput}
                  label="Email"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <Field
                  component={TextInput}
                  label="Phone Number"
                  name="phoneNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                />
                <Field
                  component={SelectInput}
                  label="Gender"
                  name="gender"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.gender}
                  items={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                />
                <Field
                  component={TextInput}
                  label="Profile Photo"
                  name="image"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.image}
                />
                <div className="flex justify-between">
                  <Link href="/employee/list">
                    <Button variant="outlined" color="primary">
                      Back
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    className="w-max"
                    variant="outlined"
                    color="success"
                  >
                    {isEdit ? "Save" : "Add"}
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default EmployeeDetailsForm;
