import { React, Component } from 'react'
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from "@material-ui/core/Button";
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { TextField, Paper, Typography } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function Zapychacz(props) { // data from apicall in json format. id, name username

  return (
    <div>
      <Paper >
        {/* <Typography variant='h4' > 3 elementy a tak naprawadę nic  <EmojiEmotionsIcon /> </Typography> */}
      </Paper>
      <Paper >
        <Table >

          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Username</TableCell>

            </TableRow>
          </TableHead>

          {/* https://jsonplaceholder.typicode.com/users */}
          <TableBody>
          { props.data.map((elementInJson,idx,arr)=>{
                console.log(elementInJson);
                <TableRow  key={idx}>
                    <TableCell component="th" scope="row" > { elementInJson.id } </TableCell>
                    <TableCell align="right">{ elementInJson.name }</TableCell>
                    <TableCell align="right">{ elementInJson.username }</TableCell>
                </TableRow>
             })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Zapychacz

