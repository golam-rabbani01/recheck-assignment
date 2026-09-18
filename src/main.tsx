import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// App.jsx is a JavaScript module without TypeScript declarations.
// @ts-expect-error The component is intentionally imported from JS.
import App from './App.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
