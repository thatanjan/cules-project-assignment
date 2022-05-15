import data from 'data.json'
import { sortingOptions } from 'globalVars'

import { Projects } from 'types/Project'

import projectsReducer, { addProject } from './projectsReducer'

test('should return the initial state', () => {
	const { projects, sortType } = projectsReducer(undefined, {})

	expect(projects).toEqual(data)
	expect(sortType).toEqual(sortingOptions.dateDesc)
})

test('should add new Project', () => {
	const initialState = projectsReducer(undefined, {})

	const newProject = {
		id: 'a87e8618-7392-4ac2-b4d0-c6b9b8fb3304',
		name: 'Redux',
		url: 'https://github.com/facebook/react',
		rating: 5,
		created_at: '2021-11-19T13:46:36.211Z',
	}

	const laterState = projectsReducer(initialState, addProject(newProject))

	expect(laterState.projects).toEqual(initialState.projects.concat(newProject))
})

test('should first', () => {})
