import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({img,alt,title,place,time}) {
  return (
    <Card sx={{ maxWidth: 385,backgroundColor: 'rgba(255, 255, 255, 0.5) ' 
, transition:'all .3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    } 
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={alt}
        />
           <CardContent sx={{padding:'10px'}} >
          <Typography gutterBottom variant="h4" component="div"   sx={{ fontFamily: 'Oswald' }}>
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div"  sx={{ fontFamily: 'Oswald' }}>
            {place}
          </Typography>
          <Typography sx={{fontStyle:'italic'}}>
            {time}
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
  );
}
