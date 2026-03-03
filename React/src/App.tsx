import { List,  ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
	const [activities, setActivities] = useState<Activity[]>([]);
	useEffect(() => {
		fetch('http://localhost:5279/api/activities')
		.then(response => response.json())
		.then(data => setActivities(data))

		return () => {}
	}, [])
	return (
		<>
			<Typography variant="h3" className="app">Reactivities</Typography>
			<List>
				{activities.map(activity => (
					<ListItem key={activity.id}>
						<ListItemText>{activity.title}</ListItemText>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default App
