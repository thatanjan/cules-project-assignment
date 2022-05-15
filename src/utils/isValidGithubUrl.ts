const isValidGithubUrl = (url: string) => {
	try {
		const newUrl = new URL(url)

		if (!newUrl || newUrl.hostname !== 'github.com') return false
	} catch (error) {
		return false
	}

	return true
}

export default isValidGithubUrl
