import { PROJECTS } from 'globalVars'

import { Projects } from 'types/Project'

const storeProjectData = (projectData: Projects) =>
	localStorage.setItem(PROJECTS, JSON.stringify(projectData))

const getProjectData = (): Projects | null => {
	const projectData = localStorage.getItem(PROJECTS)

	return projectData ? JSON.parse(projectData) : null
}

export { storeProjectData, getProjectData }
