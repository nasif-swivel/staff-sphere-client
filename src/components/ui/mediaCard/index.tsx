import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

interface Props {
  actions?: React.ReactNode;
  content: React.ReactNode;
  customClassnames?: string;
  imgURL: string;
}

const MediaCard: React.FC<Props> = ({
  actions,
  content,
  customClassnames,
  imgURL,
}) => {
  return (
    <Card className={customClassnames} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imgURL} component="img" />
      <CardContent>{content}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default MediaCard;
