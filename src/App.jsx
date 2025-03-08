import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [plans, setPlans] = useState([])
  const [clients, setClients] = useState({})

  useEffect(() => {
    // Fetch VPN plans
    fetch('/api/plans')
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(err => console.error('Error fetching plans:', err));

    // Fetch VPN clients
    fetch('/api/clients')
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(err => console.error('Error fetching clients:', err));
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Mr.Gnome VPN Service</h1>
        <p>Fast, Secure, and Reliable VPN Service</p>
      </header>

      <section className="plans-section">
        <h2>VPN Plans</h2>
        <div className="plans-grid">
          {plans.map(plan => (
            <div key={plan.id} className="plan-card">
              <h3>{plan.name}</h3>
              <p className="plan-details">{plan.details}</p>
              <p className="plan-price">{plan.price}T</p>
              <a 
                href="https://t.me/vpnshop2000bot" 
                target="_blank" 
                className="telegram-button"
              >
                Purchase on Telegram
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="clients-section">
        <h2>Download VPN Clients</h2>
        <div className="clients-grid">
          {clients.android && (
            <div className="client-card">
              <h3>Android</h3>
              <a href={clients.android} target="_blank" className="download-button">
                Download for Android
              </a>
            </div>
          )}
          {clients.windows && (
            <div className="client-card">
              <h3>Windows</h3>
              <a href={clients.windows} target="_blank" className="download-button">
                Download for Windows
              </a>
            </div>
          )}
          {clients.mac && (
            <div className="client-card">
              <h3>macOS</h3>
              <a href={clients.mac} target="_blank" className="download-button">
                Download for macOS
              </a>
            </div>
          )}
        </div>
      </section>

      <footer>
        <p>Need help? Contact our support on Telegram: @firstgnome</p>
      </footer>
    </div>
  )
}

export default App
