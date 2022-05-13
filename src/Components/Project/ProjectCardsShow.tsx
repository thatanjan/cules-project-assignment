import { useEffect, useState } from 'react'

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
			{projectData.map(project => (
				<ProjectCard {...project} key={project.id} />
			))}
		</div>
	)
}

export default ProjectCardsShow
