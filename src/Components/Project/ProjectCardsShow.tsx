import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'

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

	const addNewProject = (project: Project) =>
		setProjectData(prev => prev.concat(project))

	return (
		<div>
			<AddProject addNewProject={addNewProject} />

			<Grid container>
				{projectData.map(project => (
					<ProjectCard {...project} key={project.id} />
				))}
			</Grid>
		</div>
	)
}

export default ProjectCardsShow
