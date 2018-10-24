import React  from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import './ProductItem.css'

export default ({
  id,
  title,
  thumbnail,
}) => (
  <Card className="productItem">
    <CardActionArea>
      <CardMedia
        component="img"
        alt={title}
        height="120"
        image={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography variant="subtitle2">
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
    // <h2>{title}</h2>
    // <img src={thumbnail} alt={title} />
);
