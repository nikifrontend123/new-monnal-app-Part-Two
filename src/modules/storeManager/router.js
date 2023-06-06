export default [
    {
        path: "/storeManager",
        component: () => import("./StoreManagerModule.vue"),
        children: [
            {
                path: "/receipts",
                name: 'ReceiptsPage',
                component: () => import("./views/ReceiptsPage.vue")
            },
            {
                path: "/grn",
                name: 'StoreGrn',
                component: () => import("./views/StoreGrn.vue")
            },
            {
                path: "/gdn",
                name: 'StoreGdn',
                component: () => import("./views/StoreGdn.vue")
            },
            {
                path: "/delivery",
                name: 'DeliveryPage',
                component: () => import("./views/DeliveryPage.vue")
            },
            {
                path: "/store",
                name: 'StorePage',
                component: () => import("./views/StorePage.vue")
            },

        ]
    }
]