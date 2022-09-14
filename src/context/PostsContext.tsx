import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../server/api'

interface PostsContextProvideProps {
  children: ReactNode
}

interface UserProps {
  html_url: string
  name: string
  followers: number
  company: string
  login: string
  bio: string
  avatar_url: string
}

interface PostProp {
  body: string
  repository_url: string
  number: number
  title: string
  created_at: Date
  comments: number
}

interface PostContextProps {
  user?: UserProps
  loadPost: (query?: string) => Promise<void>
  posts: PostProp[]
}

export const PostsContext = createContext({} as PostContextProps)

const USER_NAME = 'lobo4321'
const REPO = 'github-blog'

export function PostsContextProvider({ children }: PostsContextProvideProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [posts, setPosts] = useState<PostProp[]>([])

  async function loadUser() {
    const response = await api.get('/users/lobo4321')

    setUser(response.data)
  }

  async function loadPost(query: string = '') {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${USER_NAME}/${REPO}`,
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <PostsContext.Provider value={{ user, loadPost, posts }}>
      {children}
    </PostsContext.Provider>
  )
}
