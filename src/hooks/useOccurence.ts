import { useContext } from 'react'

import { OccurrenceContext } from '@/contexts/OcurrenceContext'

export function useOccurrence() {
  const context = useContext(OccurrenceContext)

  return context
}
