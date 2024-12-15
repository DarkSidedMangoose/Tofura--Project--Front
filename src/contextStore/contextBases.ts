import { createContext } from 'react'
import React, { useState } from 'react'

interface ContextType {
  bases: string
  setBases: (value: string) => void
}

export const ContextBases = createContext<ContextType>({
  bases: '',
  setBases: () => {},
})
