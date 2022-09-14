import { usePosts } from '../../../../hooks/usePosts'
import * as S from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  loadPosts: (query?: string) => Promise<void>
}

export function SearchForm({ loadPosts }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })
  const { posts } = usePosts()

  async function handleSearchPosts(data: SearchFormInput) {
    await loadPosts(data.query)
  }

  return (
    <S.FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h2>Publicações</h2>
        <p>{posts.length} publicações</p>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </S.FormContainer>
  )
}
