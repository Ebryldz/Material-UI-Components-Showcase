import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cloud from '../images/cloud.png';

function MUICard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Cloud Website"
                height="250"
                image={Cloud}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cloud Website
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This restaurant website was made by Ebru Yıldız using html, css, bootstrap and javascript.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MUICard;
