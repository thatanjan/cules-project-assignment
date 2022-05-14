import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { getProjectData, storeProjectData } from 'utils/projectDataUtils'

import { Projects, Project } from 'types/Project'

import initialData from 'data.json'

import { useProjects } from 'redux/hooks/baseHooks'

import ProjectCard from './ProjectCard'
import AddProject from './AddProject'
import SortProjects from './SortProjects'

const ProjectCardsShow = () => {
	const [projectData, setProjectData] = useState<Projects>([])

	const projects = useProjects()

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

			<SortProjects />

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
					<ProjectCard deleteProject={deleteProject} {...project} key={project.id} />
				))}
			</Box>
		</div>
	)
}

export default ProjectCardsShow
