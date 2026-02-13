'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-14 sm:h-16 md:h-[72px] w-auto bg-white rounded-lg px-2 py-1.5 flex items-center justify-center shadow-sm">
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

