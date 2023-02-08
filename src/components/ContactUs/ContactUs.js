import { TextField, Grid, Button } from '@material-ui/core'
import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contactUs'>
        <div>
        <form className='inputForm'>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                  <Button type="submit" variant="contained" style={{background:'goldenrod', borderRadius:0, padding:'10px 20px'}}>Submit</Button>
              </Grid>
            </form>
        </div>
    </div>
  )
}

export default ContactUs