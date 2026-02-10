const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg text-foreground mb-2">Namaste</p>
        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
