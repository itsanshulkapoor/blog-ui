'use client'

import ThemeImage from './ThemeImage'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Code With Kaps">
      <div className="flex items-center">
        <ThemeImage
          lightSrc="/static/images/code with kaps large light transparent.svg"
          darkSrc="/static/images/code with kaps large transparent.svg"
          width={50}
          height={50}
          alt="Code with Kaps"
          className="h-auto"
          priority
        />
      </div>
    </Link>
  )
}
