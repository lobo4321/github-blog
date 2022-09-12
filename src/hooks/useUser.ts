import { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'

export function useUser() {
  const context = useContext(PostsContext)
  return context
}
