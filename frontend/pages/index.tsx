import React from 'react'
import Link from 'next/link'
import Footer from '../components/footer'
import Menu from '../components/menu'

function Index() {
  return (
    <div>
      <Menu />
      <section className="section">
        <div className="container">
          <h1 className="title is-3">cdruk</h1>
          <h2 className="subtitle is-4">
            Lekarzom w całej Polsce brakuje sprzętu. Potrzebna jest im teraz pomoc, aby mogli pomagać nam.
          </h2>
          <p className="subtitle is-4 has-text-weight-semibold">
            Masz drukarkę 3D? {' '}
            <Link href="/signup">
              <a className="button is-inline is-primary">Dołącz do akcji</a>
            </Link> {' '}
            i drukuj sprzęt dla pobliskich szpitali.
          </p>
          <p className="subtitle is-4 has-text-weight-semibold">
             W twoim szpitalu brakuje sprzętu? {' '}
             <Link href="/signup">
              <a className="button is-inline is-primary is-light">Zgłoś się do nas tutaj!</a>
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Index
