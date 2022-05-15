const getRandomColors = () => {
	const { floor, random, abs } = Math

	const r = floor(random() * 256 - 1)
	const g = floor(random() * 256 - 1)
	const b = floor(random() * 256 - 1)

	const brightness = (r * 299 + g * 587 + b * 114) / 1000
	const lightText = (255 * 299 + 255 * 587 + 255 * 114) / 1000
	const darkText = (0 * 299 + 0 * 587 + 0 * 114) / 1000

	const backgroundColor = `rgb(${r},${g},${b})`

	let color = ''

	if (abs(brightness - lightText) > abs(brightness - darkText)) {
		color = 'rgb(255, 255, 255)'
	} else {
		color = 'rgb(0, 0, 0)'
	}

	return { backgroundColor, color }
}

export default getRandomColors
