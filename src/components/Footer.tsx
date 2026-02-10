const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg text-foreground mb-2">
          Bhadram <span className="text-primary">Yoga</span>
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-wider mb-1">
          Ivana Gasser · Profesora diplomada de Yoga SYV/EYU
        </p>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
