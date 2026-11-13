import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const collections = [
  { name: 'Fresh Bouquets', type: 'Thoughtful flowers for every moment', palette: 'cream', flowers: ['✿', '❀', '●'] },
  { name: 'Cakes & Flowers', type: 'A sweeter kind of surprise', palette: 'rose', flowers: ['✿', '✿', '✾'] },
  { name: 'Gift Baskets', type: 'Made to feel personal', palette: 'peach', flowers: ['❀', '✾', '●'] },
  { name: 'Gajray', type: 'Beautifully made for celebrations', palette: 'cream', flowers: ['❀', '✿', '●'] },
  { name: 'Wedding & Event Décor', type: 'Flowers for your biggest days', palette: 'rose', flowers: ['✾', '❀', '✿'] },
  { name: 'Custom Surprises', type: 'Tell us the moment—we’ll help make it', palette: 'peach', flowers: ['✿', '✾', '❀'] },
]
const whatsapp = 'https://wa.me/923051900091?text=Hello%20Kohinoor%20Flower%20Studio%2C%20I%20would%20like%20to%20place%20an%20order.'

function FlowerMark() {
  return <span className="flower-mark" aria-hidden="true">✦</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const [enquiry, setEnquiry] = useState({ name: '', phone: '', city: '', occasion: '', date: '', budget: '', message: '' })
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }
  const notify = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 3200)
  }
  const submitEnquiry = (event) => {
    event.preventDefault()
    const details = `Hello Kohinoor Flower Studio, I would like to enquire.%0A%0AName: ${enquiry.name}%0APhone: ${enquiry.phone}%0ACity: ${enquiry.city}%0AOccasion: ${enquiry.occasion}%0ARequired date: ${enquiry.date}%0ABudget range: ${enquiry.budget}%0ADetails: ${enquiry.message}`
    window.open(`https://wa.me/923051900091?text=${details}`, '_blank', 'noopener,noreferrer')
  }

  return <>
    <header className="site-header">
      <button className="brand" onClick={() => scrollTo('home')} aria-label="Kohinoor Flower Studio home">
        <FlowerMark /><span>Kohinoor</span><small>FLOWER STUDIO</small>
      </button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu <i /></button>
      <nav className={menuOpen ? 'open' : ''}>
        <button onClick={() => scrollTo('shop')}>Collections</button>
        <button onClick={() => scrollTo('occasions')}>Occasions</button>
        <button onClick={() => scrollTo('about')}>Our story</button>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Order on WhatsApp <span>↗</span></a>
      </nav>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">KOHINOOR CITY · FAISALABAD</p>
          <h1>Flowers and gifts<br />for <em>every special moment.</em></h1>
          <p className="intro">Fresh bouquets, personalised gifts and beautiful floral décor—made for the people and moments you never want to forget.</p>
          <div className="hero-actions">
            <a className="button dark" href={whatsapp} target="_blank" rel="noreferrer">Order on WhatsApp <span>→</span></a>
            <button className="text-link" onClick={() => scrollTo('shop')}>View collections <span>↓</span></button>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract flower arrangement illustration">
          <div className="sun" />
          <div className="vase" />
          <div className="stem stem-1" /><div className="stem stem-2" /><div className="stem stem-3" />
          <div className="bloom bloom-1">✿</div><div className="bloom bloom-2">✿</div><div className="bloom bloom-3">❀</div><div className="bloom bloom-4">✾</div>
          <div className="leaf leaf-1" /><div className="leaf leaf-2" /><div className="leaf leaf-3" />
          <p className="art-note">BY AMJAD MUNIR<br />MADE WITH CARE</p>
        </div>
      </section>

      <section className="promise-strip">
        <span>Fresh flowers</span><FlowerMark /><span>Custom gifts</span><FlowerMark /><span>Event décor</span><FlowerMark /><span>Surprises made personal</span>
      </section>

      <section className="collection section" id="shop">
        <div className="section-heading"><div><p className="eyebrow">OUR COLLECTIONS</p><h2>Something lovely<br /><em>for every reason.</em></h2></div><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Ask about a custom order <span>→</span></a></div>
        <div className="cards">
          {collections.map((item) => <article className={`product-card ${item.palette}`} key={item.name}>
            <div className="product-art">{item.flowers.map((f, i) => <span key={i}>{f}</span>)}</div>
            <div className="product-info"><div><h3>{item.name}</h3><p>{item.type}</p></div></div>
            <a className="card-button" href={whatsapp} target="_blank" rel="noreferrer">Enquire on WhatsApp <span>→</span></a>
          </article>)}
        </div>
      </section>

      <section className="occasions" id="occasions">
        <div className="occasion-copy"><p className="eyebrow">FLOWERS, ON YOUR TERMS</p><h2>There’s always<br />an <em>occasion.</em></h2><p>From a birthday surprise to a beautiful bridal moment, share the occasion and we’ll help shape the details.</p><a className="button light" href={whatsapp} target="_blank" rel="noreferrer">Plan something beautiful <span>→</span></a></div>
        <div className="occasion-list"><button onClick={() => scrollTo('contact')}><span>01</span> Birthday <b>↗</b></button><button onClick={() => scrollTo('contact')}><span>02</span> Anniversary <b>↗</b></button><button onClick={() => scrollTo('contact')}><span>03</span> Wedding & bridal <b>↗</b></button><button onClick={() => scrollTo('contact')}><span>04</span> Baby welcome & just because <b>↗</b></button></div>
      </section>

      <section className="story section" id="about">
        <div className="story-quote"><FlowerMark /><blockquote>“A beautiful surprise begins with a thoughtful detail.”</blockquote><p>— KOHINOOR FLOWER STUDIO BY AMJAD MUNIR</p></div>
        <div className="story-copy"><p className="eyebrow">HOW IT WORKS</p><h2>Simple to order.<br /><em>Special to receive.</em></h2><p><b>01. Pick a collection.</b> Tell us your occasion, city, required date and what you have in mind. <b>02. Confirm the details.</b> We’ll help shape the design and your order. <b>03. Delivery or pickup.</b> Delivery availability is confirmed with your order.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Start your enquiry <span>→</span></a></div>
      </section>

      <section className="contact" id="contact"><div><p className="eyebrow">FAISALABAD & BEYOND</p><h2>What can we<br /><em>make for you?</em></h2><p>Based in Kohinoor City, Faisalabad. Selected-city delivery may be available on request—please confirm coverage and timing when ordering.</p></div><form className="enquiry-form" onSubmit={submitEnquiry}><label>Name<input required value={enquiry.name} onChange={e => setEnquiry({...enquiry, name:e.target.value})} /></label><label>Phone<input required type="tel" value={enquiry.phone} onChange={e => setEnquiry({...enquiry, phone:e.target.value})} /></label><label>City<input required value={enquiry.city} onChange={e => setEnquiry({...enquiry, city:e.target.value})} /></label><label>Occasion<select value={enquiry.occasion} onChange={e => setEnquiry({...enquiry, occasion:e.target.value})}><option value="">Select an occasion</option><option>Birthday</option><option>Anniversary</option><option>Wedding / bridal</option><option>Baby welcome</option><option>Just because</option><option>Other</option></select></label><label>Required date<input type="date" value={enquiry.date} onChange={e => setEnquiry({...enquiry, date:e.target.value})} /></label><label>Budget range<input placeholder="Optional" value={enquiry.budget} onChange={e => setEnquiry({...enquiry, budget:e.target.value})} /></label><label className="full">Tell us what you have in mind<textarea rows="3" value={enquiry.message} onChange={e => setEnquiry({...enquiry, message:e.target.value})} /></label><button className="button dark full" type="submit">Send enquiry on WhatsApp <span>→</span></button></form></section>
    </main>
    <footer><div className="footer-brand"><FlowerMark /><span>Kohinoor</span><small>FLOWER STUDIO</small></div><p>Kohinoor City, Faisalabad, Pakistan</p><div><a href="tel:03051900091">0305 1900091</a><a href="https://www.instagram.com/kohinoorflowerstudio/" target="_blank" rel="noreferrer">Instagram ↗</a></div></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp">◔ <span>Order on WhatsApp</span></a>
    {notice && <div className="toast" role="status">{notice}</div>}
  </>
}

createRoot(document.getElementById('root')).render(<App />)
