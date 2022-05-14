import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Project, Projects } from 'types/Project'
import { getProjectData, storeProjectData } from 'utils/projectDataUtils'
import sortProjectsData from 'utils/sortProjects'

import { sortingOptions, SortType } from 'globalVars'
import initialData from 'data.json'

interface InitialState {
	projects: Projects
	sortType: SortType
}

const initialState: InitialState = (() => {
	let projects = getProjectData()

	if (!projects) {
		storeProjectData(initialData)
		projects = initialData
	}

	const sortType = sortingOptions.dateDesc

	projects = sortProjectsData({ projects, sortType })

	const state = { projects, sortType }

	return state
})()

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		addProject: ({ projects, sortType }, { payload }: PayloadAction<Project>) => {
			projects.push(payload)
			storeProjectData(projects)
			sortProjectsData({ projects, sortType })
		},
		deleteProject: (state, { payload }: PayloadAction<string>) => {
			const remaining = state.projects.filter(project => project.id !== payload)

			state.projects = remaining
			storeProjectData(remaining)
		},
		sortProjects: (state, { payload }: PayloadAction<SortType>) => {
			const { projects } = state

			state.sortType = payload

			sortProjectsData({ projects, sortType: payload })
		},
	},
})

export const { addProject, deleteProject, sortProjects } = projectsSlice.actions

export default projectsSlice.reducer
