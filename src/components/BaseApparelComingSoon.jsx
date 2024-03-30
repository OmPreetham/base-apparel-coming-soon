import React, { useState } from 'react'

const BaseApparelComingSoon = () => {
  const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/

  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const toggleEmailChange = (value) => {
    setEmail(value)
    validateEmail(value)
  }

  const validateEmail = (email) => {
    if (!email.match(EMAIL_REGEX)) {
      setError(true)
      setSubscribed(false)
      return false
    } else {
      setError(false)
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setEmail('')
      return setSubscribed(true)
    }
    setSubscribed(false)
  }

  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <header>
          <h1>Base Apparel</h1>
          <img src="/images/logo.svg" alt="Base Apparel" />
        </header>
      </div>
      <main>
        <div className="layout-grid">
          <section>
            <div className="coming-soon-wrapper">
              <div className="coming-soon-layout">
                <article>
                  <div className="title-wrapper">
                    <h2>
                      We're <br />
                      <span>
                        coming <br />
                        soon
                      </span>
                    </h2>
                    <p>
                      Hello fellow shoppers! We're currently building our new
                      fashion store. Add your email below to stay up-to-date
                      with announcements and our launch deals.
                    </p>
                  </div>
                </article>
                <article>
                  <div className="form-wrapper">
                    <form onSubmit={handleSubmit} action="/">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => toggleEmailChange(e.target.value)}
                        id="email"
                        placeholder="Email Address"
                      />
                      <button type="submit">
                        <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
                      </button>
                      {error && (
                        <img
                          className="error"
                          src="/images/icon-error.svg"
                          alt="Error Icon"
                        />
                      )}
                    </form>
                    {error && <p>Please provide a valid email</p>}
                    {console.log(subscribed)}
                    {subscribed && (
                      <p>
                        You've subscribed for up-to-date notifications from us.
                      </p>
                    )}
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section>
            <div className="hero-wrapper"></div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default BaseApparelComingSoon
