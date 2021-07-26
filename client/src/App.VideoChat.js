  
import React from 'react';
import { Typography, AppBar } from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer/videoPlayer';
import SideBar from './components/Sidebar/sideBar';
import Notifications from './components/Notifications/Notification';


import useStyles from './AppStyles';

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography variant="h2" align="center">Video Chat</Typography>
			</AppBar>
			<VideoPlayer />
			<SideBar>
				<Notifications />
			</SideBar>
		</div>
	);
}

export default App;
