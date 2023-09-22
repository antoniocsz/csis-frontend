import { Container } from '@/components/Container'
import { Header, Logo, NavBar } from '@/components/Header'

import { Content, Wrapper, Input } from './styles'
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
          <p style={{ color: 'white', fontWeight: 'bold' }} href="#">
            Procurar ocorrências
          </p>

          <div
            style={{
              padding: '8px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <label>Tags</label>
            <Input placeholder="Tags" />

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Input placeholder="Camera" />
              <Input placeholder="Data" />
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
