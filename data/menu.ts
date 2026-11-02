export const menuCategories = ['Todos', 'Combinados', 'Sashimis', 'Uramakis', 'Temakis', 'Hot rolls'] as const;
export type MenuCategory = typeof menuCategories[number];
export type MenuItem = {
    id: string;
    name: string;
    category: MenuCategory;
    description: string;
    details: string;
    image: string;
    imageAlt: string;
    note: string;
};
export const menuItems: readonly MenuItem[] = [
    { id: 'combinado-casa', name: 'Combinado da casa', category: 'Combinados', description: 'Sashimis, niguiris e rolls em uma seleção para compartilhar.', details: 'Sugestão demonstrativa: 10 sashimis, 6 niguiris e 14 rolls variados. A fotografia é uma referência visual e não representa a quantidade descrita.', image: '/images/combinado-small.webp', imageAlt: 'Combinado com peças variadas de sushi e sashimi', note: '30 peças · exemplo' },
    { id: 'sashimi-salmao', name: 'Sashimi de salmão', category: 'Sashimis', description: 'Fatias de salmão, com a delicadeza de um clássico japonês.', details: 'Sugestão demonstrativa: 10 fatias de salmão, acompanhadas de limão. Foto de referência; apresentação e porção ilustrativas.', image: '/images/sashimi-small.webp', imageAlt: 'Fatias de salmão com limão e folhas verdes', note: '10 cortes · exemplo' },
    { id: 'uramaki-especial', name: 'Uramaki especial', category: 'Uramakis', description: 'Arroz por fora, peixe picado e um toque de cebolinha.', details: 'Sugestão demonstrativa: 8 rolls de arroz e alga nori com cobertura de peixe picado e cebolinha. Foto de referência; ingredientes ilustrativos.', image: '/images/uramaki-small.webp', imageAlt: 'Uramakis com peixe picado e cebolinha em bandeja', note: '8 peças · exemplo' },
    { id: 'temaki-salmao', name: 'Temaki de salmão', category: 'Temakis', description: 'Salmão, arroz e cebolinha envolvidos em alga nori.', details: 'Sugestão demonstrativa: 1 cone de nori com arroz japonês, salmão picado, cebolinha e molho. Foto de referência; composição ilustrativa.', image: '/images/temaki-small.webp', imageAlt: 'Mão segurando temaki de salmão com cebolinha e molho', note: '1 unidade · exemplo' },
    { id: 'hot-roll', name: 'Hot roll crocante', category: 'Hot rolls', description: 'Roll empanado, recheio cremoso e crocância a cada mordida.', details: 'Sugestão demonstrativa: 8 rolls de arroz e nori empanados, com salmão e cream cheese. Foto de referência; composição ilustrativa.', image: '/images/hot-roll-small.webp', imageAlt: 'Hot rolls empanados em uma travessa branca', note: '8 peças · exemplo' }
];

