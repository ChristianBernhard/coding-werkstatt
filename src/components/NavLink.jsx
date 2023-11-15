import Link from 'next/link'

export function NavLink({ href, children, target, rel }) {
  return (
    <Link
      href={href} target={target} rel={rel}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
