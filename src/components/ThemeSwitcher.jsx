import { useState, useEffect, useCallback, useRef } from 'react'
import './ThemeSwitcher.css'

function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTheme, setCurrentTheme] = useState('dark')
  const iconRef = useRef(null)
  const menuRef = useRef(null)

  const themes = [
    { id: 'dark', name: 'Dark', colors: { primary: '#000000', secondary: '#ffffff' } },
    { id: 'light', name: 'Light', colors: { primary: '#ffffff', secondary: '#000000' } },
    { id: 'blue', name: 'Blue', colors: { primary: '#0f172a', secondary: '#3b82f6' } },
    { id: 'purple', name: 'Purple', colors: { primary: '#1e1b4b', secondary: '#a855f7' } },
    { id: 'green', name: 'Green', colors: { primary: '#14532d', secondary: '#22c55e' } },
    { id: 'red', name: 'Red', colors: { primary: '#450a0a', secondary: '#ef4444' } }
  ]

  const applyTheme = useCallback((themeId) => {
    const theme = themes.find(t => t.id === themeId)
    if (!theme) return

    const root = document.documentElement

    switch(themeId) {
      case 'dark':
        root.style.setProperty('--black', '#000000')
        root.style.setProperty('--white', '#ffffff')
        root.style.setProperty('--gray-100', '#f3f4f6')
        root.style.setProperty('--gray-200', '#e5e7eb')
        root.style.setProperty('--gray-300', '#d1d5db')
        root.style.setProperty('--gray-400', '#9ca3af')
        root.style.setProperty('--gray-500', '#6b7280')
        root.style.setProperty('--gray-600', '#4b5563')
        root.style.setProperty('--gray-700', '#374151')
        root.style.setProperty('--gray-800', '#1f2937')
        root.style.setProperty('--gray-900', '#111827')
        break
      case 'light':
        root.style.setProperty('--black', '#ffffff')
        root.style.setProperty('--white', '#000000')
        root.style.setProperty('--gray-100', '#111827')
        root.style.setProperty('--gray-200', '#1f2937')
        root.style.setProperty('--gray-300', '#374151')
        root.style.setProperty('--gray-400', '#4b5563')
        root.style.setProperty('--gray-500', '#6b7280')
        root.style.setProperty('--gray-600', '#9ca3af')
        root.style.setProperty('--gray-700', '#d1d5db')
        root.style.setProperty('--gray-800', '#e5e7eb')
        root.style.setProperty('--gray-900', '#f3f4f6')
        break
      case 'blue':
        root.style.setProperty('--black', '#0f172a')
        root.style.setProperty('--white', '#3b82f6')
        root.style.setProperty('--gray-100', '#dbeafe')
        root.style.setProperty('--gray-200', '#bfdbfe')
        root.style.setProperty('--gray-300', '#93c5fd')
        root.style.setProperty('--gray-400', '#60a5fa')
        root.style.setProperty('--gray-500', '#3b82f6')
        root.style.setProperty('--gray-600', '#2563eb')
        root.style.setProperty('--gray-700', '#1d4ed8')
        root.style.setProperty('--gray-800', '#1e3a8a')
        root.style.setProperty('--gray-900', '#1e293b')
        break
      case 'purple':
        root.style.setProperty('--black', '#1e1b4b')
        root.style.setProperty('--white', '#a855f7')
        root.style.setProperty('--gray-100', '#f3e8ff')
        root.style.setProperty('--gray-200', '#e9d5ff')
        root.style.setProperty('--gray-300', '#d8b4fe')
        root.style.setProperty('--gray-400', '#c084fc')
        root.style.setProperty('--gray-500', '#a855f7')
        root.style.setProperty('--gray-600', '#9333ea')
        root.style.setProperty('--gray-700', '#7e22ce')
        root.style.setProperty('--gray-800', '#6b21a8')
        root.style.setProperty('--gray-900', '#4c1d95')
        break
      case 'green':
        root.style.setProperty('--black', '#14532d')
        root.style.setProperty('--white', '#22c55e')
        root.style.setProperty('--gray-100', '#dcfce7')
        root.style.setProperty('--gray-200', '#bbf7d0')
        root.style.setProperty('--gray-300', '#86efac')
        root.style.setProperty('--gray-400', '#4ade80')
        root.style.setProperty('--gray-500', '#22c55e')
        root.style.setProperty('--gray-600', '#16a34a')
        root.style.setProperty('--gray-700', '#15803d')
        root.style.setProperty('--gray-800', '#166534')
        root.style.setProperty('--gray-900', '#14532d')
        break
      case 'red':
        root.style.setProperty('--black', '#450a0a')
        root.style.setProperty('--white', '#ef4444')
        root.style.setProperty('--gray-100', '#fee2e2')
        root.style.setProperty('--gray-200', '#fecaca')
        root.style.setProperty('--gray-300', '#fca5a5')
        root.style.setProperty('--gray-400', '#f87171')
        root.style.setProperty('--gray-500', '#ef4444')
        root.style.setProperty('--gray-600', '#dc2626')
        root.style.setProperty('--gray-700', '#b91c1c')
        root.style.setProperty('--gray-800', '#991b1b')
        root.style.setProperty('--gray-900', '#7f1d1d')
        break
    }

    document.body.setAttribute('data-theme', themeId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'
    setCurrentTheme(savedTheme)
    applyTheme(savedTheme)
  }, [applyTheme])

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    localStorage.setItem('portfolio-theme', themeId)
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (iconRef.current) {
      iconRef.current.style.transform = !isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    }
  }

  return (
    <div className="theme-switcher" data-open={isOpen || undefined}>
      <button 
        className={`theme-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        title="Changer le thème"
        aria-label={isOpen ? 'Fermer les thèmes' : 'Ouvrir les thèmes'}
      >
        <span ref={iconRef} className="theme-icon">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <line x1="12" y1="2" x2="12" y2="5"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="5" y1="5" x2="7" y2="7"/>
            <line x1="17" y1="17" x2="19" y2="19"/>
            <line x1="2" y1="12" x2="5" y2="12"/>
            <line x1="19" y1="12" x2="22" y2="12"/>
            <line x1="5" y1="19" x2="7" y2="17"/>
            <line x1="17" y1="7" x2="19" y2="5"/>
          </svg>
        </span>
      </button>

      {isOpen && (
        <>
          <div className="theme-prelayer theme-prelayer-1" />
          <div className="theme-prelayer theme-prelayer-2" />
          <aside ref={menuRef} className="theme-menu">
            <div className="theme-menu-inner">
              <ul className="theme-list" role="list">
                {themes.map((theme, idx) => (
                  <li className="theme-item-wrap" key={theme.id}>
                    <button
                      className={`theme-item ${currentTheme === theme.id ? 'active' : ''}`}
                      onClick={() => handleThemeChange(theme.id)}
                      data-index={idx + 1}
                    >
                      <span className="theme-item-label">{theme.name}</span>
                      <div className="theme-preview">
                        <div className="preview-box" style={{ background: theme.colors.primary }} />
                        <div className="preview-box" style={{ background: theme.colors.secondary }} />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </>
      )}
    </div>
  )
}

export default ThemeSwitcher
