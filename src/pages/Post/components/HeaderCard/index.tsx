import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../../../components/Link'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function HeaderCard() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <S.HeaderCardContainer>
      <header>
        <Link
          leftContent={
            <FontAwesomeIcon icon={faChevronLeft} color="#3294F8" size="lg" />
          }
          onClick={handleGoBack}
          isCursorActive={true}
        >
          Voltar
        </Link>
        <Link
          rightContent={
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              color="#3294F8"
              size="lg"
            />
          }
        >
          Ver No Github
        </Link>
      </header>
      <h2>JavaScript data types and data structures</h2>

      <S.FooterContainer>
        <S.IconWrapper>
          <FontAwesomeIcon
            icon={faGithub}
            color="#3A536B
"
            size="lg"
          />
          cameronwll
        </S.IconWrapper>
        <S.IconWrapper>
          <FontAwesomeIcon
            icon={faCalendarDay}
            color="#3A536B
"
            size="lg"
          />
          Há 1 dia
        </S.IconWrapper>
        <S.IconWrapper>
          <FontAwesomeIcon
            icon={faComment}
            color="#3A536B
"
            size="lg"
          />
          5 comentários
        </S.IconWrapper>
      </S.FooterContainer>
    </S.HeaderCardContainer>
  )
}
