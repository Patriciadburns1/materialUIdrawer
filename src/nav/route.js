import React from 'react';

export default [
    {
        "navPath": "/",
        "breadcrumb": ()=><div>Home</div>,
        "icon": "Home",
        exact: true,
        "id": "0",
        "title": "Home"
    },
    {
        "navPath": "/product",
        "breadcrumb": ()=><div>Products</div>,
        // exact: false,
        "icon": "Products",
        "id": "1",
        "title": "Products"
    },
    {
        "navPath": "/services",
        "breadcrumb": ()=><h2> Services </h2>,
        "icon": "Services",
        "id": "2",
        "title": "Services"
    },
    {
        "navPath": "/member-list",
        "breadcrumb": ()=><h2> Member List </h2>,
        "icon": "Member List",
        "id": "3",
        "title": "Member List"
    },
    {
        "navPath": "/contact-us",
        "breadcrumb": ()=><h2>Contact Us</h2>,
        "icon": "Contact Us",
        "id": "4",
        "title": "Contact Us"
    },

]