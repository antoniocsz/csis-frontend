import Link from 'next/link'
import Image from 'next/image'

import logoMarca from '@/assets/LogoImage.svg'

export function Logo() {
  return (
    <Link href="/">
      <Image src={logoMarca} alt="csis Logo" />
    </Link>
  )
}
