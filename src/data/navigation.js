export const navigation = [
  { 
    href: '/', 
    label: 'Welcome', 
    class: 'current' 
  },
  {
    label: 'Layouts',
    layouts: [
      { href: '/left-sidebar', label: 'Left Sidebar' },
      { href: '/right-sidebar', label: 'Right Sidebar' },
      { href: '/no-sidebar', label: 'No Sidebar' },
      { href: '/contact', label: 'Contact' },
      {
        label: 'Submenu',
        submenu: [
          { href: '', label: 'Dolore Sed' },
          { href: '', label: 'Consequat' },
          { href: '', label: 'Lorem Magna' },
          { href: '', label: 'Sed Magna' },
          { href: '', label: 'Ipsum Nisl' },
        ],
      },
    ],
  },
  {
	label: 'Sign Up',
	href: '#',
	class: 'button primary',
  }
];
