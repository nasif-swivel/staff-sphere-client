"use client";
import React from "react";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "@/components/layout";
import EmployeeDetailsForm from "@/components/employeeDetailsForm";
import { Employee } from "@/global/types";
import { sendHttpRequest } from "@/services/network";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleAdd = (formValues: Employee) => {
    sendHttpRequest("POST", "/create", null, JSON.stringify(formValues))
      .then((res: AxiosResponse) => {
        if (res.status === 201) {
          router.push("/employee/list");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <EmployeeDetailsForm
        title="New Employee"
        initialValue={{
          empId: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          gender: "",
          image: "",
        }}
        handleSubmit={handleAdd}
      />
    </Layout>
  );
};

export default Page;
