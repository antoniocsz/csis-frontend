import { Container } from '@/components/Container'
import { Header, Logo, NavBar } from '@/components/Header'

import { Content, Wrapper } from './styles'
import { useOccurrence } from '@/hooks/useOccurence'

export default function Ocurrences() {
  const { occurences } = useOccurrence()

  return (
    <Container>
      <Header>
        <Logo />
        <NavBar.Root />
      </Header>

      <Content>
        <Wrapper>
          <a href="#">Procurar ocorrências</a>

          <div
            style={{
              padding: '8px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <input placeholder="Tags" />

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <input placeholder="Camera" />
              <input placeholder="Data" />
            </div>
          </div>

          <section>
            {occurences.map((ocurrence) => (
              <div key={ocurrence.id}>
                <h1 style={{ color: '#FFF' }}>{ocurrence.type}</h1>

                <button>OP</button>

                <div>
                  <p style={{ color: '#FFF' }}>{ocurrence.description}</p>
                </div>
              </div>
            ))}
          </section>
        </Wrapper>
      </Content>
    </Container>
  )
}
