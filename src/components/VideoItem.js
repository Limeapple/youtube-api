import React from 'react'

import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem =({video, onVideoSelect})=>{
  return (
    <Grid item xs={12} style={{cursor:'pointer',paddingTop:15, paddingBottom:-13, }}>
      <Paper style={{display:'flex', alignItems:'center'}} onClick={()=>onVideoSelect(video)}>
        <img style={{marginRight:10}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}height="125" width="125"/>
        <Typography variant="subtitle1" style={{wordWrap: "break-word"}}><b>{video.snippet.title}</b></Typography>
      </Paper>
    </  Grid>
  )
}

export default VideoItem
