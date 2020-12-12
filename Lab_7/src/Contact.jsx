import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import './Contact.css'
import { FormLabel, FormControl, Checkbox,InputLabel,Input } from '@material-ui/core';
import FormControllLabel from '@material-ui/core/FormControlLabel'

function Contact() {
    return (
        <div align="center">
                <form style={{ width: "50%" }}>
                    <h1>Contact Form</h1>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" type="text" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor="email">Message</InputLabel>
                        <Input id="email" multiline rows={4} />
                    </FormControl>

                    <Button variant="contained" color="primary" size="medium">
                        Send
                    </Button>
                </form>


        </div>
    )
}

export default Contact
