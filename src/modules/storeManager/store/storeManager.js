export default {
    namespaced: true,
    state: {
        bottomNavMenuItems: [
            {
                id: 1,
                name: 'Recepts',
                icon: 'bi bi-journal-arrow-down',
                route: 'ReceiptsPage',
            },
            {
                id: 2,
                name: 'GRN',
                icon: 'bi bi-download',
                route: 'StoreGrn',
            },
            {
                id: 3,
                name: 'Store',
                icon: 'bi bi-box',
                route: 'StorePage',
            },
            {
                id: 4,
                name: 'GDN',
                icon: 'bi bi-journal-arrow-up',
                route: 'StoreGdn',
            },
            {
                id: 5,
                name: 'Deliveries',
                icon: 'bi bi-upload',
                route: 'DeliveryPage',
            },
        ],
        receipts: [
            {
                id: 1,
                txt: 'A01',
                lr: 1523459237,
                num: '110,85,60,25,54,15',
                colors: [
                    {
                        id: 1,
                        img: 'images/fb1.png',
                        po: '1523658529-A',
                        bundle: '110,85,60,75',
                    },
                    {
                        is: 2,
                        img: 'images/fb1.png',
                        po: '1523658529-B',
                        bundle: '110,85,60,75',
                    },
                    {
                        id: 3,
                        img: 'images/fb1.png',
                        po: '1523658529-C',
                        bundle: '110,85,60,75',
                    },
                ]
            },
            {
                id: 2,
                txt: 'A02',
                lr: 1523459237,
                num: '110,85,60,25,54,15',
                colors: [
                    {
                        id: 1,
                        img: 'images/fb1.png',
                        po: '1523658529-A',
                        bundle: '110,85,60,75'
                    },
                    {
                        is: 2,
                        img: 'images/fb1.png',
                        po: '1523658529-B',
                        bundle: '110,85'
                    },
                    {
                        id: 3,
                        img: 'images/fb1.png',
                        po: '1523658529-C',
                        bundle: '110,85'
                    },
                ]

            },
            {
                id: 3,
                txt: 'A03',
                lr: 1523459237,
                num: '110,85,60,25,54,15',
                colors: [
                    {
                        id: 1,
                        img: 'images/fb1.png',
                        po: '1523658529-A',
                        bundle: '110,85,60,75',
                    },
                    {
                        is: 2,
                        img: 'images/fb1.png',
                        po: '1523658529-A',
                        bundle: '110,85,60,75',
                    },
                    {
                        id: 3,
                        img: 'images/fb1.png',
                        po: '1523658529-A',
                        bundle: '110,85,60,75',
                    },
                ]

            }
        ],
        storegrns: [
            {
                id: 1,
                img: "images/fb1.png",
                po: "1523658529-A",
                qty: "10,000",
                bundle: "100",
            },
            {
                id: 2,
                img: "images/fb2.png",
                po: "1523658529-B",
                qty: "10,000",
                bundle: "100",
            },
            {
                id: 3,
                img: "images/fb3.png",
                po: "1523658529-A",
                qty: "10,000",
                bundle: "100",
            },
            {
                id: 4,
                img: "images/fb1.png",
                po: "1523658529-B",
                qty: "10,000",
                bundle: "100",
            },
            {
                id: 5,
                img: "images/fb2.png",
                po: "1523658529-C",
                qty: "10,000",
                bundle: "100",
            },
        ],
        storegdns: [
            {
                id: 1,
                img: "images/fb1.png",
                so: "1523658529",
                qty: "10,000 mtr",
                bundle: "100",
                color:'btn btn-warning',
                btn:'Arrange'
            },
            {
                id: 2,
                img: "images/fb2.png",
                so: "1523658529",
                qty: "10,000",
                bundle: "100",
                color:'btn btn-warning',
                btn:'Arrange'
            },
            {
                id: 3,
                img: "images/fb3.png",
                so: "1523658529",
                qty: "10,000",
                bundle: "100",
                color:'btn btn-success',
                btn:'Available'
            },
            {
                id: 4,
                img: "images/fb1.png",
                so: "1523658529",
                qty: "10,000",
                bundle: "100",
                color:'btn btn-success',
                btn:'Available'
            },
            {
                id: 5,
                img: "images/fb2.png",
                so: "1523658529",
                qty: "10,000",
                bundle: "100",
                color:'btn btn-warning',
                btn:'Arrange'
            },
        ],
    },
    getters: {
        getBottomNavMenuItems(state) {
            return state.bottomNavMenuItems;
        },
        getReceipts(state) {
            return state.receipts;
        },
        getStoregrn(state) {
            return state.storegrns;
        },
        getStoregdn(state) {
            return state.storegdns;
        },
    },
    mutations: {},
    actions: {},
}