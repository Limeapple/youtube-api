import React from 'react'
import {Paper, Typography } from "@material-ui/core"
const VideoDetail= ({ video }) => {
  if(!video) return <div>Loading...</div>
  console.log(video)
  const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
    return(
    <React.Fragment>
    <div style={{padding:15}}>
      <Paper style={{height:"60vh",}}>
        <iframe frameBorder="0" height="100%" width="100%" title ="Video Player" src={videoSrc}/>
      </Paper>
      <Paper elevation={6} style={{padding:10}}>
      <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
      <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
      <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </div>
    </React.Fragment>
  )
}

export default VideoDetail
