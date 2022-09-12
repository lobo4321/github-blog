import * as S from './styles'
import { LinkProps } from './typings'

export function Link({
  children,
  leftContent,
  rightContent,
  isCursorActive = false,
  ...props
}: LinkProps) {
  return (
    <S.Link {...props} isCursorActive={isCursorActive}>
      {!!leftContent && leftContent}
      {children}
      {!!rightContent && rightContent}
    </S.Link>
  )
}
