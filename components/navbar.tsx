import Link from 'next/link';

const links = [
  ['About Us', '/about'],
  ['Products', '/products'],
  ['Turf Solutions', '/turf-solutions'],
  ['Applications', '/applications'],
  ['Research & Technology', '/research-technology'],
  ['Knowledge Center', '/knowledge-center'],
  ['Downloads', '/downloads'],
  ['Contact', '/contact']
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-white/95 backdrop-blur">
      <div className="container-wrap flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-forest">Tirupathi Agro</Link>
        <nav className="hidden gap-5 text-sm lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="font-medium text-slate/80 transition hover:text-turf">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
