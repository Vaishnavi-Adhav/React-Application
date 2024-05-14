 const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'Our Clients',
                url: 'clients.html',
            },
            {
                title: 'FAQ',
                url: 'faqs.html',
            },
        ],
    },

    {
        title: 'About',
        url: '/about.html',
    },
     {
         title: 'Register',
         url: '/register.html',
     },
];

export default menuItems;