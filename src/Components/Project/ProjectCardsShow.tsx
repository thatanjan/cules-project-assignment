import Box from '@mui/material/Box'

import { useProjects } from 'redux/hooks/baseHooks'

import ProjectCard from './ProjectCard'

const ProjectCardsShow = () => {
	const projects = useProjects()

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: {
					xs: '1fr',
					md: 'repeat(2, 1fr)',
					lg: 'repeat(3, 1fr)',
				},
				gap: '1rem',
			}}
		>
			{projects.map(project => (
				<ProjectCard {...project} key={project.id} />
			))}
		</Box>
	)
}

export default ProjectCardsShow
