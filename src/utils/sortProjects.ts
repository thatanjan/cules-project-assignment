import { sortingOptions, SortType } from 'globalVars'

import { Projects } from 'types/Project'

interface Params {
	projects: Projects
	sortType: SortType
}

const sortProjects = ({ sortType, projects }: Params): Projects => {
	if (sortType! in sortingOptions) return projects

	switch (sortType) {
		case sortingOptions.ratingAsc:
			return projects.sort((a, b) => a.rating - b.rating)

		case sortingOptions.ratingDesc:
			return projects.sort((a, b) => b.rating - a.rating)

		case sortingOptions.dateAsc:
			return projects.sort((a, b) => {
				const dateA = new Date(a.created_at)
				const dateB = new Date(b.created_at)
				return dateA.getTime() - dateB.getTime()
			})

		case sortingOptions.dateDesc:
			return projects.sort((a, b) => {
				const dateA = new Date(a.created_at)
				const dateB = new Date(b.created_at)
				return dateB.getTime() - dateA.getTime()
			})

		default:
			return projects.sort((a, b) => a.rating - b.rating)
	}
}

export default sortProjects
