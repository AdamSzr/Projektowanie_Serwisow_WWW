import React from 'react'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button  from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import deszcz from './deszcz.jpg'
import { TextField, Paper, Typography, AppBar, Tab, Avatar,Box,Grid,CardActionArea } from '@material-ui/core';

function Home(props) {
    return (
      <div className="style_galery">
        {props.data.map((element,idx,arr)=>{
          return ( <Card className='card_style'>
          <CardActionArea>
          <Typography gutterBottom variant="h5"  align='center'>
               {element['title']}
              </Typography>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              src= {element['src']} 
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography component="p"> {element['description']}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        )
        })}
      </div>
      
    )
}

export default Home


