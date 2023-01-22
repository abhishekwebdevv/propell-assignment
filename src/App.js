import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from '@mui/material'
import axios from 'axios'
import theme from './theme'

import Dashboard from './Screens/Dashboard'
import Nav from './components/Navigation/Nav'

function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [screen, setScreen] = useState('portfolio')

  const fetchData = async () => {
    setLoading(true)
    const data = await axios.get(
      'https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7'
    )

    setData(data.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading || !data) return <p>Loading</p>

  return (
    <ThemeProvider theme={theme}>
      <Nav screen={screen} setScreen={setScreen}>
        {screen === 'home' && <h4>Home</h4>}
        {screen === 'portfolio' && <Dashboard data={data} />}
        {screen === 'profile' && <h4>Profile</h4>}
      </Nav>
    </ThemeProvider>
  )
}

export default App
