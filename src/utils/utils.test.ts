import { sortingOptions } from 'globalVars'

import { Projects } from 'types/Project'

import sortProjects from './sortProjects'
import isValidGithubUrl from './isValidGithubUrl'

test('isValidGithubUrl function', () => {
	const url = 'culescoding.space'
	const url2 = 'http://github.com/'

	const func = isValidGithubUrl

	expect(func(url)).toBe(false)

	expect(func(url2)).toBe(true)

	expect(func('')).toBe(false)

	expect(func('https:dfdfasdfsjohfosajl')).toBe(false)
})

test('sortProjects function', () => {
	const project1 = {
		name: 'confession',
		url: '',
		rating: 4,
		id: 'dfdssasd',
		created_at: '2020-05-05',
	}

	const project2 = {
		name: 'cules coding',
		url: '',
		rating: 1,
		id: 'dfdssasd',
		created_at: '2010-05-05',
	}

	const projects: Projects = [project1, project2]

	const case1 = sortProjects({ projects, sortType: sortingOptions.ratingAsc })

	expect(case1[0].rating).toBe(1)
	expect(case1[1].name).toBe('confession')
	expect(case1[0]).toBe(project2)

	const case2 = sortProjects({ projects, sortType: sortingOptions.ratingDesc })

	expect(case2[0]).toBe(project1)

	const case3 = sortProjects({ projects, sortType: sortingOptions.dateAsc })

	expect(case3[0]).toBe(project2)

	const case4 = sortProjects({ projects, sortType: sortingOptions.nameAsc })

	expect(case4[0]).toBe(project1)
})
