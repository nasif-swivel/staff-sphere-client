import React from "react";
import MediaCard from "@/components/ui/mediaCard";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { Box, Paper } from "@mui/material";
import { Employee } from "@/global/types";

interface Props {
  employees: Employee[];
  onDelete: (empId: string) => void;
}

const EmployeeCardView: React.FC<Props> = ({ employees, onDelete }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        className="flex justify-center items-center flex-wrap gap-x-5 gap-y-8 p-5"
        sx={{ width: "100%", mb: 2, minHeight: 100 }}
      >
        {employees.map((employee, index) => (
          <MediaCard
            actions={
              <div className="flex justify-end w-full">
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
            }
            content={
              <>
                <div className="font-medium text-lg">
                  {employee.firstName} {employee.lastName}
                </div>
                <div className="text-sm leading-6">{employee.email}</div>
                <div className="text-sm leading-6">{employee.phoneNumber}</div>
                <div className="text-sm leading-6">{employee.gender}</div>
              </>
            }
            customClassnames="w-72"
            imgURL={employee.image}
            key={index}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default EmployeeCardView;
