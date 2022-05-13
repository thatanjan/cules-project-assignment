import Grid from '@mui/material/Grid'

import { Project } from 'types/Project'

const ProjectCard = ({ name }: Project) => (
	<Grid item xs={6}>
		{name}
	</Grid>
)

export default ProjectCard
