import { useState } from 'react'
import HomePage from './pages/home/home'
import ArchivePage from './pages/archive/archive'
import AboutPage from './pages/about/about'
import AccountPage from './pages/account/account'
import PostPage from './pages/post/post'
import IntroOverlay from './components/intro/index'

const userLogged = window.localStorage.getItem('userLogged')

if (userLogged === null) {
  window.localStorage.setItem('userLogged', 0)
  window.localStorage.setItem('storageType', 'local')
}

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
    if (page === 'Post') {
      return (
        <PostPage page={page} setPage={setPage} />
      )
    }
  }
  return (
    <>
      {validatePage(page, setPage)}
      <IntroOverlay />
    </>
  )
}

export default App
