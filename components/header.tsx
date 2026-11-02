"use client";
import { useState } from "react";
const links = [
    { href: "#especialidades", label: "Especialidades" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#conceito", label: "Sobre" },
    { href: "#perguntas", label: "Perguntas" },
];
export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (<header className="site-header">
      <div className="header-inner">
        <a aria-label="OROMAKE — início" className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <span className="brand-name">ORO<span>MAKE</span></span>
          <span className="brand-subtitle">JAPANESE KITCHEN</span>
        </a>
        <button aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} type="button">
          <span />
          <span />
        </button>
        <nav aria-label="Navegação principal" className={`primary-navigation${menuOpen ? " is-open" : ""}`} id="primary-navigation">
          {links.map((link) => (<a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>))}
          <a className="nav-cta" href="#cardapio" onClick={() => setMenuOpen(false)}>
            Ver cardápio <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>);
}
