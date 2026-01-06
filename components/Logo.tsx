'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-16 sm:h-20 md:h-24 w-auto">
        <Image
          src="/logo.jpg"
          alt="Royalnex Sports Industries Logo"
          width={250}
          height={100}
          className="h-full w-auto object-contain"
          priority
          unoptimized
        />
      </div>
    </div>
  )
}

export default Logo

