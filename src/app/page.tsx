import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-3">
      <Typography variant="h2" component="h2">
        Welcome to Staff Sphere
      </Typography>
      <Typography variant="h5" component="h5">
        Your Employee Management Portal
      </Typography>
      <Link href="/employee/list" className="mt-10">
        <Button variant="outlined">Continue</Button>
      </Link>
    </div>
  );
};

export default Home;
