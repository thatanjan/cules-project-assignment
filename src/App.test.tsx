import { render, screen } from '@testing-library/react'
import App from './App'

test('renders title text', () => {
	render(<App />)

	const titleNode = screen.getByText('Cules Project')

	expect(titleNode).toBeInTheDocument()
	expect(titleNode.tagName.toLowerCase()).toBe('h1')
})
