import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList  } from "./VideoPlayerComponents";
import youtube from "./api/youtube";


const APP = (props) => {

	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });
  

	const handleSubmit = async(searchTerm) =>{
		const { data: { items: videos } } = await youtube.get("search", {
			params: {
			  part: "snippet",
			  maxResults: 5,
			  // TODO - add a new API key.
			  key: "Api Key In google developers console ",
			  q: searchTerm,
			}
		  });
		  console.log(videos)
		  setVideos(videos);
		  setSelectedVideo(videos[0]);
		
	}
  return(
	<Grid style={{ justifyContent: "center" }} container spacing={10}>
		<Grid item xs={11}>
			<Grid container spacing={10}>
				<Grid item xs={12}>
					<SearchBar onSubmit={handleSubmit}/>
				</Grid>
				<Grid item xs={8}>
					<VideoDetail  video={selectedVideo}/>
				</Grid>
				<Grid item xs={4}>
					<VideoList videos={videos} onVideoSelect={setSelectedVideo} />
				</Grid>
			</Grid>
		</Grid>
	</Grid>
   )

 }

export default APP