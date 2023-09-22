import { NavBar } from './styles'

import { Item } from './Item'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export function Root({ children }: Props) {
  return (
    <NavBar>
      <Item href="/" title="Ínicio" />
      <Item href="/ocurrences" title="Ocorrências" />
      <Item href="/statistics" title="Estatisticas" />
      <Item href="/contact" title="Contato" />
      {children}
    </NavBar>
  )
}
