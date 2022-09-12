import styled from 'styled-components'

export const ProfileCardContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme.base.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  height: 13.25rem;
  padding: 2rem 2rem 2rem 2.5rem;

  margin-top: -5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const InfoHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${(props) => props.theme.base.title};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.base.text};
  font-weight: 400;
  margin-top: 1rem;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
