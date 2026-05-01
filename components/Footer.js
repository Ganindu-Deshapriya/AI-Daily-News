export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>The Signal</span>
        <span className="pipe">|</span>
        <span>Powered by n8n + Next</span>
        <span className="pipe">|</span>
        <span className="logo-accent">GDesh.dev</span>
        <span className="pipe">|</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
