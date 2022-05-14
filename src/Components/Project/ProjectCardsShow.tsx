import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { getProjectData, storeProjectData } from 'utils/projectDataUtils'

import { Projects, Project } from 'types/Project'

import initialData from 'data.json'

import ProjectCard from './ProjectCard'
import AddProject from './AddProject'

const ProjectCardsShow = () => {
	const [projectData, setProjectData] = useState<Projects>([])

	useEffect(() => {
		let data = getProjectData()

		if (!data) {
			storeProjectData(initialData)
			data = initialData
		}

		setProjectData(data as Projects)
	}, [])

	const addNewProject = (project: Project) => {
		const newProjects = projectData.concat(project)

		setProjectData(newProjects)
		storeProjectData(newProjects)
	}

	const deleteProject = (id: string) => {
		const remaining = projectData.filter(project => project.id !== id)

		setProjectData(remaining)
		storeProjectData(remaining)
	}

	return (
		<div>
			<AddProject addNewProject={addNewProject} />

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
				{projectData.map(project => (
					<ProjectCard deleteProject={deleteProject} {...project} key={project.id} />
				))}
			</Box>
		</div>
	)
}

export default ProjectCardsShow
