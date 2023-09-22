import { createContext, useState, ReactNode } from 'react'

type OccurenceDataProps = {
  id: number
  description: string
  date: string
  type: 'Incêndio' | 'Vandalismo' | 'Furto de Carro' | 'Alagamento'
  status: 'Aguardando' | 'Em andamento' | 'Concluída' | 'Cancelada'
}

type OccurenceContextDataProps = {
  occurences: OccurenceDataProps[]
}

export const OccurrenceContext = createContext<OccurenceContextDataProps>(
  {} as OccurenceContextDataProps,
)

type OccurenceProviderProps = {
  children: ReactNode
}

export function OccurenceProvider({ children }: OccurenceProviderProps) {
  const [occurences, setOccurreces] = useState<OccurenceDataProps[]>([
    {
      id: 0,
      type: 'Incêndio',
      description: `A camera 'NUMBER_CAMERA', detectou essa ocorrência do 'TIPO_OCORRENCIA', na data 'TIME_STAMP'`,
      date: '12/12/2022 11:15',
      status: 'Aguardando',
    },
    {
      id: 1,
      type: 'Furto de Carro',
      description: `A camera 'NUMBER_CAMERA', detectou essa ocorrência do 'TIPO_OCORRENCIA', na data 'TIME_STAMP'`,
      date: '12/12/2022 11:15',
      status: 'Aguardando',
    },
    {
      id: 2,
      type: 'Vandalismo',
      description: `A camera 'NUMBER_CAMERA', detectou essa ocorrência do 'TIPO_OCORRENCIA', na data 'TIME_STAMP'`,
      date: '12/12/2022 11:15',
      status: 'Aguardando',
    },
    {
      id: 4,
      type: 'Vandalismo',
      description: `A camera 'NUMBER_CAMERA', detectou essa ocorrência do 'TIPO_OCORRENCIA', na data 'TIME_STAMP'`,
      date: '12/12/2022 11:15',
      status: 'Aguardando',
    },
  ])

  return (
    <OccurrenceContext.Provider value={{ occurences }}>
      {children}
    </OccurrenceContext.Provider>
  )
}
