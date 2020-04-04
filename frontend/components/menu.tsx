/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store'
import { useRouter } from 'next/router'

function Menu() {
  const [isActive, setisActive] = useState(false)
  const isLogged = useSelector<{ isLogged: boolean }>((state) => state.isLogged)
  const dispatch = useDispatch()
  const router = useRouter()
  const logoutUser = () => {
    dispatch(logout())
    router.push('/')
  }

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">CDRUK</a>
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {!isLogged ? (
                <div className="buttons">
                  <Link href="/signup">
                    <a className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                  </Link>
                  <Link href="/login">
                    <a className="button is-light">Log in</a>
                  </Link>
                </div>
              ) : (
                <div className="buttons">
                  <button onClick={logoutUser} className="button is-light">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
