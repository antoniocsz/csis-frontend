'use client'

import {
  Content,
  ItemContainer,
  ItemSubtitle,
  ItemTitle,
  SideBar,
  SubItemContainer,
  Wrapper,
} from './styles'

import { Container } from '@/components/Container'
import { Header, Logo, NavBar } from '@/components/Header'
import { useOccurrence } from '@/hooks/useOccurence'

import Link from 'next/link'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(
  () => import('@/components/Map').then((map) => map.Map),
  {
    ssr: false,
  },
)

export default function Home() {
  const { occurences } = useOccurrence()

  return (
    <Container>
      <Header>
        <Logo />
        <NavBar.Root />
      </Header>

      <Content>
        <SideBar>
          <Link href="/ocurrences">Últimas Ocorrências</Link>

          {occurences.map((ocurrence) => (
            <ItemContainer key={ocurrence.id}>
              <ItemTitle href={`/ocurrences/${ocurrence.id}`}>
                {ocurrence.type}
              </ItemTitle>
              <SubItemContainer>
                <ItemSubtitle>{ocurrence.date}</ItemSubtitle>
                <ItemSubtitle>{ocurrence.status}</ItemSubtitle>
              </SubItemContainer>
            </ItemContainer>
          ))}
        </SideBar>

        <Wrapper>
          <a href="#">Mapa</a>
          <DynamicMap />
        </Wrapper>
      </Content>
    </Container>
  )
}
