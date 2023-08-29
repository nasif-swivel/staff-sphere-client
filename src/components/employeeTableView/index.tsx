import React from "react";
import DataTable from "@/components/ui/dataTable";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { Employee } from "@/global/types";

const columns = [
  {
    id: "empId",
    label: "Employee Id",
  },
  {
    id: "image",
    label: "Photo",
    type: "image",
  },
  {
    id: "firstName",
    label: "First Name",
  },
  {
    id: "lastName",
    label: "Last Name",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "phoneNumber",
    label: "Number",
  },
  {
    id: "gender",
    label: "Gender",
  },
  {
    id: "actions",
    label: "Actions",
    type: "action",
  },
];

interface Props {
  employees: Employee[];
  onDelete: (empId: string) => void;
}

const EmployeeTableView: React.FC<Props> = ({ employees, onDelete }) => {
  return (
    <DataTable
      columns={columns}
      rows={employees}
      actions={(employee: Employee) => {
        return (
          <div className="flex w-full">
            <Link href={`/employee/edit/${employee.empId}`}>
              <IconButton aria-label="edit">
                <EditIcon color="action" />
              </IconButton>
            </Link>
            <IconButton
              aria-label="delete"
              onClick={() => onDelete(employee.empId)}
            >
              <DeleteIcon color="error" />
            </IconButton>
          </div>
        );
      }}
    />
  );
};

export default EmployeeTableView;
