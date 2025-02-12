import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`

const Input = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`

const Button = styled.button`
  background: #667eea;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #5a67d8;
  }
`

const AvatarDisplay = styled.div`
  margin-top: 2rem;
  text-align: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #f7fafc;
  }
`

const ErrorMessage = styled.div`
  color: #e53e3e;
  margin-top: 1rem;
  text-align: center;
`

function AvatarGenerator() {
  const [description, setDescription] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [error, setError] = useState('')

  const generateAvatar = () => {
    try {
      if (!description.trim()) {
        setError('Please enter a description')
        return
      }

      // Generate avatar URL using DiceBear API
      const seed = encodeURIComponent(description.trim().toLowerCase())
      const style = 'lorelei'
      const options = [
        'radius=50',
        'backgroundColor=b6e3f4',
        'size=200'
      ]
      
      const url = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&${options.join('&')}`
      setAvatarUrl(url)
      setError('')
    } catch (err) {
      setError('Failed to generate avatar. Please try again.')
      console.error('Avatar generation error:', err)
    }
  }

  return (
    <Container>
      <Input
        placeholder="Enter text to generate an avatar (e.g., 'John Doe')"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={generateAvatar}>Generate Avatar</Button>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {avatarUrl && (
        <AvatarDisplay>
          <img src={avatarUrl} alt="Generated avatar" />
        </AvatarDisplay>
      )}
    </Container>
  )
}

export default AvatarGenerator
