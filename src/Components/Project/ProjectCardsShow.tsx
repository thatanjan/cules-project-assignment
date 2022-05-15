import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { useProjects, useAppDispatch } from 'redux/hooks/baseHooks'
import { resetProjects } from 'redux/reducers/projectsReducer'

import ProjectCard from './ProjectCard'
import AddProject from './AddProject'
import SortProjects from './SortProjects'

const ResetProjects = () => {
	const dispatch = useAppDispatch()

	return (
		<Button variant='contained' onClick={() => dispatch(resetProjects())}>
			Reset Projects
		</Button>
	)
}

const ProjectCardsShow = () => {
	const projects = useProjects()

	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: '2rem',

					'& button': {
						width: {
							xs: '100%',
							sm: 'auto',
						},
						marginBottom: {
							xs: '1rem',
							sm: '0',
						},
					},
				}}
			>
				<AddProject />

				<ResetProjects />

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
