export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-earth/40 py-8">
      <div className="container-wrap flex flex-col justify-between gap-4 text-sm text-slate/75 md:flex-row">
        <p>© {new Date().getFullYear()} Tirupathi Agro. Premium Turf Agronomy Solutions.</p>
        <p>Scientifically engineered inputs for golf, sports, and landscape turf.</p>
      </div>
    </footer>
  );
}
