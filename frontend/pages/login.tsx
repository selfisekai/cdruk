import React from 'react'
import Footer from '../components/footer'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login } from '../store'
import Navbar from '../components/navbar'

function Login() {
  const isLogged = useSelector<{ isLogged: boolean }>((state) => state.isLogged)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm() // initialise the hook
  const onSubmit = ({ email, password }) => {
    dispatch(login(email, password))
  }

  return (
    <>
      <Navbar/>
      <div className="section main is-centered">
        {!isLogged ? (
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
                    value="Login"
                  />
                </p>
              </div>
            </form>
          </div>
        ) : (
          <Link href="/">
            <a>Hi, Go back to home page</a>
          </Link>
        )}
      </div>

      <Footer/>
    </>
  )
}

export default connect()(Login)
