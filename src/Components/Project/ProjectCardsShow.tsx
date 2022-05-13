import { nanoid } from 'nanoid'

import ProjectCard from './ProjectCard'

type Props = {}

const ProjectCardsShow = (props: Props) => (
	<div>
		{Array(10)
			.fill(0)
			.map(() => (
				<ProjectCard key={nanoid()} />
			))}
	</div>
)

export default ProjectCardsShow
