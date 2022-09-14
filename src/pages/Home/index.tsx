import { useEffect } from 'react'
import { usePosts } from '../../hooks/usePosts'
import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  const { loadPost, posts } = usePosts()

  useEffect(() => {
    loadPost()
  }, [loadPost])

  return (
    <div>
      <S.HomeContainer>
        <ProfileCard />

        <SearchForm loadPosts={loadPost} />

        <S.PostsContainer>
          {posts.map((post) => (
            <PostCard
              key={post.number}
              body={post.body}
              createdAt={post.created_at}
              number={post.number}
              title={post.title}
            />
          ))}
        </S.PostsContainer>
      </S.HomeContainer>
    </div>
  )
}
