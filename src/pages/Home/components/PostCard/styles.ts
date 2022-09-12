import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  min-width: 26rem;
  width: 26rem;

  cursor: pointer;

  max-height: 16.25rem;
  min-height: 16.25rem;
  padding: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme.base.post};
  border: 2px solid transparent;
  transition: 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.base.label};
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    h2 {
      color: ${(props) => props.theme.base.title};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 32px;
      width: 70%;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.base.span};
      line-height: 22px;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-height: 25.6px;
  }
`
