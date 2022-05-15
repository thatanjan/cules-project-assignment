import data from 'data.json'
import { sortingOptions } from 'globalVars'

import projectsReducer, { addProject } from './projectsReducer'

test('should return the initial state', () => {
	const { projects, sortType } = projectsReducer(undefined, {})

	expect(projects).toEqual(data)
	expect(sortType).toEqual(sortingOptions.dateDesc)
})

test('should first', () => {})
