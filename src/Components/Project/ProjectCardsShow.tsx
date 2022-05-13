import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'

import { getProjectData, storeProjectData } from 'utils/projectDataUtils'

import { Projects } from 'types/Project'

import initialData from 'data.json'

import ProjectCard from './ProjectCard'

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

	return (
		<div>
			<Grid container>
				{projectData.map(project => (
					<ProjectCard {...project} key={project.id} />
				))}
			</Grid>
		</div>
	)
}

export default ProjectCardsShow
