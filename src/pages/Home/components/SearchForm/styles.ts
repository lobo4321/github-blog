import styled from 'styled-components'

export const FormContainer = styled.form`
  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme.base.subTitle};
      font-weight: 700;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.base.span};
      font-weight: 400;
    }
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.base.border};
    background: ${(props) => props.theme.base.input};
    height: 3.125rem;
    color: ${(props) => props.theme.base.text};
    font-size: 1rem;

    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme.base.label};
    }
  }
`
