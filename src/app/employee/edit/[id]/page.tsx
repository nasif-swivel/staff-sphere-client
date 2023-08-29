"use client";
import React, { useEffect, useState } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { Card, CircularProgress } from "@mui/material";
import Layout from "@/components/layout";
import EmployeeDetailsForm from "@/components/employeeDetailsForm";
import { sendHttpRequest } from "@/services/network";
import { Employee } from "@/global/types";
import { useRouter } from "next/navigation";

type Params = { id: string };

interface Props {
  params: Params;
}

const Page: React.FC<Props> = ({ params }) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [employee, setEmployee] = useState<Employee>();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = () => {
    setLoading(true);
    sendHttpRequest("GET", "/employee", { empId: params.id })
      .then((res: AxiosResponse) => {
        setLoading(false);
        if (res.status === 200) {
          setEmployee(res.data.employee);
        }
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleSaveEdit = (formValues: Employee) => {
    sendHttpRequest("PUT", "/update", null, JSON.stringify(formValues))
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          router.push("/employee/list");
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      {loading ? (
        <Card
          className="mt-10 ml-auto mr-auto p-5 flex justify-center items-center"
          sx={{ width: 475 }}
        >
          <CircularProgress />
        </Card>
      ) : (
        employee && (
          <EmployeeDetailsForm
            title="Editing Details"
            initialValue={{
              empId: employee.empId,
              firstName: employee.firstName,
              lastName: employee.lastName,
              email: employee.email,
              phoneNumber: employee.phoneNumber,
              gender: employee.gender,
              image: employee.image,
            }}
            handleSubmit={handleSaveEdit}
            isEdit={true}
          />
        )
      )}
    </Layout>
  );
};

export default Page;
