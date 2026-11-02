"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { menuCategories, menuItems, type MenuCategory, type MenuItem } from "@/data/menu";
export function Menu() {
    const [activeCategory, setActiveCategory] = useState<MenuCategory>("Todos");
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const visibleItems = menuItems.filter((item) => activeCategory === "Todos" || item.category === activeCategory);
    useEffect(() => {
        if (!selectedItem) {
            previousFocusRef.current?.focus();
            previousFocusRef.current = null;
            return;
        }
        closeButtonRef.current?.focus();
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedItem(null);
                return;
            }
            if (event.key === "Tab") {
                const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])");
                if (!focusableElements?.length)
                    return;
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
                else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedItem]);
    useEffect(() => {
        const syncCategory = () => {
            const value = decodeURIComponent(window.location.hash.split('?categoria=')[1] || '');
            if (menuCategories.includes(value as MenuCategory)) {
                setActiveCategory(value as MenuCategory);
                document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' });
            }
        };
        syncCategory();
        window.addEventListener('hashchange', syncCategory);
        return () => window.removeEventListener('hashchange', syncCategory);
    }, []);
    useEffect(() => {
        if (!selectedItem)
            return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previous; };
    }, [selectedItem]);
    const openDetails = (item: MenuItem) => {
        previousFocusRef.current =
            document.activeElement instanceof HTMLElement ? document.activeElement : null;
        setSelectedItem(item);
    };
    return (<section aria-labelledby="menu-title" className="menu-section" id="cardapio">
      <div className="section-shell menu-shell">
        <div className="menu-heading">
          <div className="section-heading">
            <p className="eyebrow">DO CLÁSSICO AO CROCANTE</p>
            <h2 id="menu-title">
              Um cardápio de dar água na boca.
            </h2>
          </div>
          <p className="menu-intro">
            Encontre seu favorito. Explore as categorias e confira a composição de cada prato.
          </p>
        </div>
        <div aria-label="Categorias do cardápio" className="menu-filters" role="group">
          {menuCategories.map((category) => (<button aria-pressed={activeCategory === category} className={`filter-button${activeCategory === category ? " is-active" : ""}`} key={category} onClick={() => setActiveCategory(category)} type="button">
              {category}
            </button>))}
        </div>
        <div aria-live="polite" className="dish-grid">
          {visibleItems.map((item, index) => (<article className="dish-card" key={item.id}>
              <button aria-label={`Ver detalhes de ${item.name}`} className="dish-image-button" onClick={() => openDetails(item)} type="button">
                <Image alt={item.imageAlt} className={`dish-image dish-image-${index + 1}`} height={360} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" src={item.image} width={520}/>
                <span className="dish-image-caption">{item.note}</span>
                <span aria-hidden="true" className="dish-open">
                  ↗
                </span>
              </button>
              <div className="dish-copy">
                <p className="dish-category">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button className="text-link dish-link" onClick={() => openDetails(item)} type="button">
                  Ver composição <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>))}
        </div>
        <p className="menu-disclaimer">
          Conceito fictício · composições ilustrativas · sem preços ou oferta
          comercial
        </p>
      </div>
      {selectedItem && (<div className="dialog-backdrop" onClick={(event) => {
                if (event.target === event.currentTarget)
                    setSelectedItem(null);
            }}>
          <section aria-labelledby="dish-dialog-title" aria-modal="true" className="dish-dialog" ref={dialogRef} role="dialog">
            <button aria-label="Fechar detalhes" className="dialog-close" onClick={() => setSelectedItem(null)} ref={closeButtonRef} type="button">
              <span aria-hidden="true">×</span>
            </button>
            <p className="eyebrow">{selectedItem.category}</p>
            <h2 id="dish-dialog-title">{selectedItem.name}</h2>
            <p className="dialog-description">{selectedItem.details}</p>
            <p className="dialog-note">
              Conceito demonstrativo · {selectedItem.note.toLowerCase()}
            </p>
          </section>
        </div>)}
    </section>);
}
