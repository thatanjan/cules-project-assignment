import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import { getProjectData, storeProjectData } from 'utils/projectDataUtils'

import { Projects } from 'types/Project'

import initialData from 'data.json'

import ProjectCard from './ProjectCard'

type Props = {}

const ProjectCardsShow = (props: Props) => {
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
			{projectData.map(() => (
				<ProjectCard key={nanoid()} />
			))}
		</div>
	)
}

export default ProjectCardsShow
