import * as S from './styles'

import LogoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={LogoImg} alt="Logo" />
    </S.HeaderContainer>
  )
}
