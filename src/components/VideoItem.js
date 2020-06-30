import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({video, onVideoSelect})=> {
return (

<Grid  item xs={12}>

<Paper style={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}} onClick={()=>onVideoSelect(video)}>
<img style={{marginRight:'30px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
</Paper>
<Typography variant="subtitle1"> <b>{video.snippet.title}</b> </Typography>

 
</Grid>

);
}

export default VideoItem;
