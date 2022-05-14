import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Project, Projects } from 'types/Project'
import { getProjectData, storeProjectData } from 'utils/projectDataUtils'

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

	const state = { projects, sortType: sortingOptions.dateAsc }

	return state
})()

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		addProject: ({ projects }, { payload }: PayloadAction<Project>) => {
			projects.push(payload)
			storeProjectData(projects)
		},
		deleteProject: (state, { payload }: PayloadAction<string>) => {
			const remaining = state.projects.filter(project => project.id !== payload)

			state.projects = remaining
			storeProjectData(remaining)
		},
	},
})

export const { addProject, deleteProject } = projectsSlice.actions

export default projectsSlice.reducer
