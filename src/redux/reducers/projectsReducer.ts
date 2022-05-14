import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Projects, Project } from 'types/Project'
import { getProjectData, storeProjectData } from 'utils/projectDataUtils'

import initialData from 'data.json'

const initialState = (() => {
	let projects = getProjectData()

	if (!projects) {
		storeProjectData(initialData)
		projects = initialData
	}

	const state = { projects, sorType: '' }

	return state
})()

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		addProject: (state, { payload }: PayloadAction<Project>) => {
			state.push(payload)
			storeProjectData(state)
		},
	},
})

export const { addProject } = projectsSlice.actions

export default projectsSlice.reducer
