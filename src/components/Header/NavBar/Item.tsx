import Link from 'next/link'

type Props = {
  href: string
  title: string
}

export function Item({ href, title, ...rest }: Props) {
  return (
    <Link href={href} {...rest}>
      {title}
    </Link>
  )
}
