import React from 'react'
import Footer from '../components/footer'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { signup } from '../store'
import { useRouter } from 'next/router'

function Signup() {
  const isLogged = useSelector<{ isLogged: boolean }>((state) => state.isLogged)
  const router = useRouter()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm() // initialise the hook
  const onSubmit = ({ email, name, password }) => {
    dispatch(signup(email, name, password))
    router.push('/')
  }

  return (
    <div>
      <div className="selection">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">CDRUK</a>
          </Link>
        </div>
        {!isLogged ? (
          <div className="container">
            <section className="hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                      <p className="control has-icons-left has-icons-right">
                        <input
                          className="input"
                          type="text"
                          placeholder="Name"
                          ref={register({ required: true })}
                          name="name"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                          <i className="fas fa-check"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control has-icons-left has-icons-right">
                        <input
                          className="input"
                          type="email"
                          placeholder="Email"
                          ref={register({ required: true })}
                          name="email"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                          <i className="fas fa-check"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control has-icons-left">
                        <input
                          ref={register({ required: true })}
                          className="input"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control">
                        <input
                          className="button is-primary"
                          type="submit"
                          value="Sign Up"
                        />
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <Link href="/">
            <a>Hi, Go back to home page</a>
          </Link>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default connect()(Signup)
