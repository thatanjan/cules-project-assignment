import { configureStore } from '@reduxjs/toolkit'

import projectsReducer from './reducers/projectsReducer'

export const store = configureStore({
	reducer: {
		projects: projectsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
