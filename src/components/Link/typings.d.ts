import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  leftContent?: ReactNode
  children?: ReactNode
  rightContent?: ReactNode
  isCursorActive?: boolean
}
