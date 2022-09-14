import { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'

export function usePosts() {
  const context = useContext(PostsContext)
  return context
}
