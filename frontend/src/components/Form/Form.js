import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import makeStyles from "./style.js"
import FileBase  from 'react-file-base64'
function Form() {
  const classes = makeStyles();
  const [postData,setPostData] = useState({
    creator:"",message:"",title:"",tags:"",selectedFile:""
  })
  const handleSubmit = ()=>{

  }

  const clear = ()=>{

  }
  return (
    <Paper>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
          <Typography variant='h6'>Create a Memory</Typography>
          <TextField
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            value={postData.creator}
            onChange={(e)=>setPostData({...postData, creator:e.target.value})}
          />
          <TextField
            name='title'
            variant='outlined'
            label='Title'
            fullWidth
            value={postData.title}
            onChange={(e)=>setPostData({...postData,title:e.target.value})}
          />
          <TextField
            name='message'
            variant='outlined'
            label='Message'
            fullWidth
            value={postData.message}
            onChange={(e)=>setPostData({...postData,message:e.target.value})}
          />
          <TextField
            name='tags'
            variant='outlined'
            label='Tags'
            fullWidth
            value={postData.tags}
            onChange={(e)=>setPostData({...postData,tags:e.target.value})}
          />
          <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={(base64)=>setPostData({...postData,selectedFile:base64})}
              />
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color='primary' size='large' type='submit' fullWidth>Submit</Button>
          <Button variant="contained" color='secondary' size='medium' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form