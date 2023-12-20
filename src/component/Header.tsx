import {useState, useEffect} from 'react'
import './Header.css'

function Header() {
  const [page, setPage] = useState('')

  useEffect(() => {
    setPage(location.pathname)
  })

  return (
    <header>
      <div id='header-wrapper'>
          <ul>
              <li><a className={page == '/' ? 'selected' : 'unselected'} href='/'>TOP</a></li>
              {/* <li><a className={page == '/profile' ? 'selected' : 'unselected'} href='profile'>PROFILE</a></li> */}
              <li><a className={page == '/skill' ? 'selected' : 'unselected'} href='skill'>SKILL</a></li>
              <li><a className={page == '/work' ? 'selected' : 'unselected'} href='work'>WORK</a></li>
          </ul>
      </div>
    </header>
  )
}

export default Header
  