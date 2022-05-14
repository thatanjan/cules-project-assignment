import Box from '@mui/material/Box'

import { useProjects } from 'redux/hooks/baseHooks'

import ProjectCard from './ProjectCard'
import AddProject from './AddProject'
import SortProjects from './SortProjects'

const ProjectCardsShow = () => {
	const projects = useProjects()

	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					alignItems: 'start',
				}}
			>
				<AddProject />

				<SortProjects />
			</Box>

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
		</div>
	)
}

export default ProjectCardsShow
