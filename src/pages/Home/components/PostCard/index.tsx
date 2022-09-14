import * as S from './styles'

interface PostCardProps {
  number: number
  title: string
  createdAt: Date
  body: string
}

export function PostCard({ body, createdAt, number, title }: PostCardProps) {
  return (
    <S.PostCardContainer to={`/post/${number}`}>
      <header>
        <h2>{title}</h2>
        <p>{createdAt}</p>
      </header>
      <p>{body}</p>
    </S.PostCardContainer>
  )
}
