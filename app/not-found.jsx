// Styles

// Public & Assets

// React/Next Functions
import Link from 'next/link'
// Context & Actions

// Componenets
import BtnLink from '../components/btns/btn-link/btn-link.component'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <BtnLink href='/'  paddingOfBtn='1rem 2rem'>Return Home</BtnLink>
    </div>
  )
}