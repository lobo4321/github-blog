import styled from 'styled-components'

export const HeaderCardContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme.base.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  height: 10.5rem;
  padding: 2rem;

  margin-top: -5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    color: ${(props) => props.theme.base.title};
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.25rem;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin-top: 1rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
