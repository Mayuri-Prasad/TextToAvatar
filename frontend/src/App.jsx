import { useState } from 'react'
import styled from 'styled-components'
import AvatarGenerator from './components/AvatarGenerator'

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`

function App() {
  return (
    <AppContainer>
      <Title>Text to Avatar Generator</Title>
      <AvatarGenerator />
    </AppContainer>
  )
}

export default App
