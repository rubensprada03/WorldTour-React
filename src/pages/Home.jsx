import React from 'react'
import Header from '../components/header/Header'
import SearchContent from '../components/SearchContent/SearchContent'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <SearchContent onSubmit={() => {
        
      }}/>
    </div>
  )
}

export default Home