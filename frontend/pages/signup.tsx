import React from 'react'
import Footer from '../components/footer'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { signup } from '../store'

function Signup() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm() // initialise the hook
  const onSubmit = ({ email, password }) => {
    dispatch(signup(email, password))
  }

  return (
    <div>
      <div className="selection">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">CDRUK</a>
          </Link>
        </div>
        <div className="container">
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
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
      </div>
      <Footer />
    </div>
  )
}

export default connect()(Signup)
