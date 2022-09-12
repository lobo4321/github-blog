import styled from 'styled-components'

import { LinkProps } from './typings'

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  transition: 0.2s;

  cursor: ${(props) => (props.isCursorActive === true ? 'pointer' : 'default')};

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
