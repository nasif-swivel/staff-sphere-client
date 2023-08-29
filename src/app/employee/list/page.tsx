"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EmployeeCardView from "@/components/employeeCardView";
import EmployeeTableView from "@/components/employeeTableView";
import Layout from "@/components/layout";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableIcon from "@mui/icons-material/TableRows";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { sendHttpRequest } from "@/services/network";
import { Box, CircularProgress, Paper } from "@mui/material";
import { Employee } from "@/global/types";
import { AxiosResponse, AxiosError } from "axios";
import { setViewMode } from "@/redux/features/viewModeSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const viewMode = useAppSelector((state) => state.viewMode.mode);

  const [loading, setLoading] = useState<boolean>(true);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    setLoading(true);
    sendHttpRequest("GET", "/employees")
      .then((res: AxiosResponse) => {
        setLoading(false);
        if (res.status === 200) {
          setEmployees(res.data.employees);
        }
      })
      .catch((err: AxiosError) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleDelete = (empId: string) => {
    sendHttpRequest(
      "POST",
      "/delete",
      null,
      JSON.stringify({
        empId: empId,
      })
    )
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          fetchEmployees();
        }
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const renderContent = () => {
    if (loading) {
      return (
        <Box sx={{ width: "100%" }}>
          <Paper
            className="flex justify-center items-center flex-col"
            sx={{ width: "100%", mb: 2, minHeight: 100 }}
          >
            <CircularProgress />
          </Paper>
        </Box>
      );
    } else if (viewMode === "table") {
      return (
        <EmployeeTableView employees={employees} onDelete={handleDelete} />
      );
    } else {
      return <EmployeeCardView employees={employees} onDelete={handleDelete} />;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 ml-auto">
          <Link href="/employee/add">
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<AddIcon color="secondary" />}
            >
              Add
            </Button>
          </Link>
          <Button
            onClick={() =>
              dispatch(setViewMode(viewMode === "grid" ? "table" : "grid"))
            }
            variant="outlined"
            endIcon={viewMode === "grid" ? <TableIcon /> : <DashboardIcon />}
            className="max-w-fit"
          >
            {viewMode === "grid" ? "Table View" : "Grid View"}
          </Button>
        </div>
        {renderContent()}
      </div>
    </Layout>
  );
};

export default Page;
