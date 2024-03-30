const BaseApparelComingSoon = () => {
  // TODO: Email Validation
  // TODO: Position Error Icon and Header

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
                    <form action="/">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                      />
                      {/* <img
                        className="error"
                        src="/images/icon-error.svg"
                        alt="Error Icon"
                      /> */}
                      <button type="submit">
                        <img src="/images/icon-arrow.svg" alt="Arrow Icon" />
                      </button>
                    </form>
                    <p>Please provide a valid email</p>
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
