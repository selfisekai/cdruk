import React from 'react'
import Footer from '../components/footer'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { signup } from '../store'
import Navbar from '../components/navbar'

function Signup() {
  const isLogged = useSelector<{ isLogged: boolean }>((state) => state.isLogged)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm() // initialise the hook
  const onSubmit = ({ email, name, password }) => {
    dispatch(signup(email, name, password))
  }

  return (
    <>
      <Navbar/>
      <div className="main section is-centered">
        {!isLogged ? (
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

export default connect()(Signup)
