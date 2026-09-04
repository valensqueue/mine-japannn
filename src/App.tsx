import React from 'react'

interface AppProps {
  onBack: () => void
}

export default function App({ onBack }: AppProps) {
  return (
    <div className="page">
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
      }}>
        <h1 style={{ margin: 0 }}>Mine Japan App</h1>
        <button
          onClick={onBack}
          className="desktop-open"
          style={{
            cursor: 'pointer',
            border: 'none',
            fontSize: 'var(--text-footnote)',
            padding: '8px 16px',
          }}
        >
          ← Back
        </button>
      </header>

      <main className="content" style={{
        maxWidth: '600px',
        gap: '30px',
      }}>
        <section className="copy" style={{
          width: '100%',
          gap: '20px',
        }}>
          <h2 style={{
            color: 'var(--title)',
            fontSize: 'var(--text-title)',
            fontWeight: 'var(--weight-semibold)',
            textAlign: 'center',
          }}>
            P2P Connectivity Platform
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
          }}>
            {['Pink', 'Blue', 'Green', 'Yellow'].map((color, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px 16px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform var(--duration-snappy) var(--ease-snappy)',
                  background: `var(--${color.toLowerCase()}-light)`,
                  color: `var(--${color.toLowerCase()}-dark)`,
                  fontWeight: 'var(--weight-semibold)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                }}
              >
                <div>{color}</div>
                <div style={{ fontSize: 'var(--text-footnote)', opacity: 0.7 }}>Module</div>
              </div>
            ))}
          </div>
        </section>

        <section className="copy" style={{
          width: '100%',
          background: 'rgba(255, 255, 255, 0.3)',
          padding: '24px',
          borderRadius: '12px',
          gap: '12px',
        }}>
          <h3 style={{
            color: 'var(--title)',
            fontSize: 'var(--text-title)',
            fontWeight: 'var(--weight-semibold)',
            margin: '0 0 12px 0',
          }}>
            Features
          </h3>
          <ul style={{
            color: 'var(--brown)',
            margin: '0',
            paddingLeft: '20px',
            lineHeight: '1.8',
          }}>
            <li>Real-time P2P communication</li>
            <li>Secure data sharing</li>
            <li>Multi-device support</li>
            <li>Low latency connections</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
