import React from 'react'
import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import icons from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/NavBar.module.css'

let username = 'Takuma Yoneda'
let icons = [['fa-brands fa-github', 'https://github.com/takuma-yoneda', 'text-white'],
             ['fa-brands fa-twitter', 'https://twitter.com/takuma_yoneda', 'text-white'],
             ['fa-solid fa-book', "/posts", 'text-sky-300'],
             // ['fa-solid fa-envelope', 'mailto:takuma@ttic.edu'],
             ]

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <h1 className="text-[1.6em] font-light text-white">
        <Link className='text-white' href="/">
          {username}
        </Link>
      </h1>
      <nav>
        {icons.map((icon, idx) => (
          <Link href={icon[1]} key={idx}>
              <i className={`${icon[0]} ${icon[icon.length - 1]} text-xl p-4`} key={idx} />
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
