import { useState } from 'react'
import HomePage from './pages/home/home'
import ArchivePage from './pages/archive/archive'
import AboutPage from './pages/about/about'
import AccountPage from './pages/account/account'

function App () {
  const [page, setPage] = useState('Home')
  function validatePage (page, setPage) {
    if (page === 'Home') {
      return (
        <HomePage page={page} setPage={setPage} />
      )
    }
    if (page === 'Archive') {
      return (
        <ArchivePage page={page} setPage={setPage} />
      )
    }
    if (page === 'About') {
      return (
        <AboutPage page={page} setPage={setPage} />
      )
    }
    if (page === 'Account') {
      return (
        <AccountPage page={page} setPage={setPage} />
      )
    }
  }
  return (
    <>
      {validatePage(page, setPage)}
    </>
  )
}

export default App
