import styled from 'styled-components'

import HeaderBackgroundImage from '../../assets/header-background.png'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 18.5rem;
  background: url(${HeaderBackgroundImage});

  img {
    height: 6.125rem;
    width: 9.25rem;
    margin-bottom: 2.875rem;
  }
`
