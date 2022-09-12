import * as S from './styles'

export function SearchForm() {
  return (
    <S.FormContainer>
      <header>
        <h2>Publicações</h2>
        <p>6 publicações</p>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </S.FormContainer>
  )
}
