import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useProjects = () =>
	useAppSelector(state => state.projects.projects)

export const useSortType = () =>
	useAppSelector(state => state.projects.sortType)
