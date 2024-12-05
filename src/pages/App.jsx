import {Container} from './styles'

import { Input } from '../components/Input'

import { ItemRepo } from '../components/ItemRepo'
import { Button } from '../components/Button'
import { useState } from 'react'
import { api } from '../services/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearch = async () => {
    const {data} = await api.get('repos/'+currentRepo)

    if(data.id){
      const isExists = repos.find(repo => repo.id === data.id)
      if(isExists){
        alert('Repositório já adicionado')
        return
      }
      setRepos(prev => [...prev, data])
      setCurrentRepo('')
    }
  }

  const handleRemove = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id))
  }

  return (
      <Container>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={72} height={72} alt='github' />

        <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearch}/>
        {repos.map(repo => <ItemRepo repo={repo} itemRemove={handleRemove}/>)}
      </Container>
  )
}

export default App
