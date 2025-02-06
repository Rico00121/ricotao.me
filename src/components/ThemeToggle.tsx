'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiSun className="w-6 h-6" />
      ) : (
        <HiMoon className="w-6 h-6" />
      )}
    </button>
  )
} 