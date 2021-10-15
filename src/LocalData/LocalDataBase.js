export const dashboard_nav =[
    {
        id: 1,
        path: "/dashboard",
        pathname: "Dashboard",
        size: 'text-2xl',
        role: ['admin','user']
    },
    {
        id: 2,
        path: "/add-service",
        pathname: "Add Service",
        size: 'text-2xl',
        role: ['admin']
    },
    {
        id: 3,
        path: "/manage-services",
        pathname: "Manage Service",
        size: 'text-2xl',
        role: ['admin']
    },
    {
        id: 4,
        path: "/manage-reviews",
        pathname: "Manage Reviews",
        size: 'text-2xl',
        role: ['admin']
    },
    {
        id: 5,
        path: "/add-review",
        pathname: "Add Review",
        size: 'text-2xl',
        role: ['admin','user']
    },
    {
        id: 6,
        path: "/process-payment",
        pathname: "Order",
        size: 'text-2xl',
        role: ['user']
    },
    {
        id: 7,
        path: "/order-list",
        pathname: "Order List",
        size: 'text-2xl',
        role: ['admin']
    },
]