'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image, { ImageProps } from 'next/image'

interface ThemeImageProps extends Omit<ImageProps, 'src'> {
  lightSrc: string
  darkSrc: string
}

export default function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  ...props
}: ThemeImageProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid hydration mismatch by only rendering after mounting
  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const src = currentTheme === 'dark' ? darkSrc : lightSrc

  return <Image src={src} alt={alt} width={width} height={height} {...props} />
}
