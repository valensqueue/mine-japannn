import React from 'react'

interface LandingProps {
  onGetStarted: () => void
}

export default function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="page">
      <header className="powered" aria-label="Powered by Grok">
        <span className="powered-by">Powered by</span>
        <span className="powered-brand">
          <span className="powered-grok">Mine Japan</span>
        </span>
      </header>

      <main className="content">
        <div className="ob" aria-hidden="true">
          <img
            className="ob-img ob-phone"
            src="/ob-phone.png"
            alt=""
          />
          <img
            className="ob-img ob-ipad"
            src="/ob-ipad.png"
            alt=""
          />
        </div>

        <section className="copy">
          <h1>Welcome to Mine Japan</h1>
          <p style={{ textAlign: 'center', color: 'var(--brown)', opacity: 0.8 }}>
            Explore P2P connectivity and data sharing
          </p>

          <div className="steps">
            <button
              onClick={onGetStarted}
              className="desktop-open"
              style={{
                cursor: 'pointer',
                border: 'none',
                fontSize: 'var(--text-body)',
                transition: 'var(--duration-snappy) var(--ease-snappy)',
              }}
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
