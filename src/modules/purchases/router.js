export default [
    {
        path: "/purchases",
        component: () => import("./PurchaseModule.vue"),
        children: [
            {
                path: "/purchase",
                name: 'PurchasePage',
                component: () => import("./views/PurchasePage.vue")
            },
            {
                path: "/purchase-invoice/:supplierListId",
                name: 'PurchaseInvoice',
                component: () => import("./views/PurchaseInvoice.vue")
            },
            {
                path: "/purchase-po",
                name: 'PurchasePo',
                component: () => import("./views/PurchasePo.vue")
            },
            {
                path: "/purchase-po-detail",
                name: 'PurchasePoDetail',
                component: () => import("./views/PurchasePoDetail.vue")
            },
            {
                path: "/store",
                name: 'StorePage',
                component: () => import("./views/StorePage.vue")
            },
            {
                path: "/purchase-running-so",
                name: 'PurchaseRunningSo',
                component: () => import("./views/PurchaseRunningSo.vue")
            },
            {
                path: "/sales",
                name: 'SalesPage',
                component: () => import("./views/SalesPage.vue")
            },
            {
                path: "/purchase-so-detail/:runningsoId",
                name: 'PurchaseSoDetail',
                component: () => import("./views/PurchaseSoDetail.vue")
            },
        ]
    }
]