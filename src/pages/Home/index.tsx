import { PostCard } from './components/PostCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import * as S from './styles'

export function Home() {
  return (
    <div>
      <S.HomeContainer>
        <ProfileCard />

        <SearchForm />

        <S.PostsContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </S.PostsContainer>
      </S.HomeContainer>
    </div>
  )
}
