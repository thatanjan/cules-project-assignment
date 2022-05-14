const PROJECTS = 'projects'

const sortingOptions = {
	dateAsc: 'Date (ascending)',
	dateDesc: 'Date (descending)',
	nameAsc: 'Name (ascending)',
	nameDesc: 'Name (descending)',
	ratingAsc: 'Rating (ascending)',
	ratingDesc: 'Rating (descending)',
} as const

export type SortType = typeof sortingOptions[keyof typeof sortingOptions]

export { PROJECTS, sortingOptions }
