import * as S from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from '../../../../components/Link'
import { usePosts } from '../../../../hooks/usePosts'

export function ProfileCard() {
  const { user } = usePosts()

  return (
    <S.ProfileCardContainer>
      <img src={user?.avatar_url} alt="Avatar" />
      <S.InfoHeaderContainer>
        <div>
          <header>
            <h1>{user?.name}</h1>

            <Link
              rightContent={
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  color="#3294F8"
                  size="lg"
                />
              }
              href={user?.html_url}
              target="_blank"
            >
              Github
            </Link>
          </header>
          <S.Description>{user?.bio}</S.Description>
        </div>
        <S.FooterContainer>
          <S.IconWrapper>
            <FontAwesomeIcon icon={faGithub} color="#C4D4E3" size="lg" />
            <p>{user?.login}</p>
          </S.IconWrapper>
          <S.IconWrapper>
            <FontAwesomeIcon icon={faBuilding} color="#C4D4E3" size="sm" />
            <p>{user?.company}</p>
          </S.IconWrapper>
          <S.IconWrapper>
            <FontAwesomeIcon icon={faUserGroup} color="#C4D4E3" size="sm" />
            <p>
              {user?.followers === 1
                ? `${user?.followers} seguidor`
                : `${user?.followers} seguidores`}
            </p>
          </S.IconWrapper>
        </S.FooterContainer>
      </S.InfoHeaderContainer>
    </S.ProfileCardContainer>
  )
}
