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

interface PostContextProps {
  user?: UserProps
}

export const PostsContext = createContext({} as PostContextProps)

export function PostsContextProvider({ children }: PostsContextProvideProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps)

  async function loadUser() {
    const response = await api.get('/users/lobo4321')

    setUser(response.data)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <PostsContext.Provider value={{ user }}>{children}</PostsContext.Provider>
  )
}
