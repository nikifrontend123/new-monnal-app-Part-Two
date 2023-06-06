export default {
    namespaced: true,
    state: {
        bottomNavMenuItems: [
            {
                id: 1,
                name: 'purchase',
                icon: 'bi bi-download',
                route: 'PurchasePage',

            },
            {
                id: 2,
                name: 'PO',
                icon: 'bi bi-journal-arrow-down',
                route: 'PurchasePo',

                // route: 'Supplier.parcel',
            },
            {
                id: 3,
                name: 'Store',
                icon: 'bi bi-box',
                route: 'StorePage',

                // route: 'Supplier.shipment',
            },
            {
                id: 4,
                name: 'SO',
                icon: 'bi bi-journal-arrow-up',
                route: 'PurchaseRunningSo',

                // route: 'Supplier.rejection',
            },
            {
                id: 5,
                name: 'Sales',
                icon: 'bi bi-upload',
                route: 'SalesPage',

                // route: 'Supplier.bills',
            },
        ],
        supplierLists: [
            {
                id: 1,
                imgDp: "images/fab1.png",
                name: "Himanshu Bakshi",
            },
            {
                id: 2,
                imgDp: "images/fab2.png",
                name: "Suashish",
            },
            {
                id: 3,
                imgDp: "images/fab3.png",
                name: "Prince Jain",
            },
            {
                id: 4,
                imgDp: "images/fab1.png",
                name: "Himanshu Bakshi",
            },
            {
                id: 5,
                imgDp: "images/fab2.png",
                name: "Suashish",
            },
        ],
        invoices: [
            {
                id: 1,
                date: "14/6",
                process: "Purchase in process",
                invoice: "12511255",
                text: 'origin',
                txtcolor: 'text-warning'
            },
            {
                id: 2,
                date: "14/6",
                process: "Purchase in Transit",
                invoice: "12511255",
                text: 'Pending',
                txtcolor: 'text-danger'
            },
            {
                id: 3,
                date: "14/6",
                process: "Purchase Delivered",
                invoice: "12511255",
                text: 'Amnt Due',
                txtcolor: 'text-info'
            },
            {
                id: 4,
                date: "14/6",
                process: "Purchase QC Passed",
                invoice: "12511255",
                text: 'Cancelled',
                txtcolor: 'text-secondary'
            },
            {
                id: 5,
                date: "14/6",
                process: "Purchase Cancelled",
                invoice: "12511255",
                text: 'Partly Clear',
                txtcolor: 'text-success'
            },
        ],
        pos: [
            {
                id: 1,
                img: "images/fb1.png",
                textcolor: "text-success",
                text: "Accepted",
                name: "Cheese Fabric",
                qty: "10,000",
                amt: 150,
                price: "80",
                moq: "5000",
                length: "",
                width: "2.5",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
            },
            {
                id: 2,
                img: "images/fb2.png",
                textcolor: "text-info",
                text: "Updated",
                name: "Cheese Fabric",
                qty: "10,000",
                amt: 150,
                price: "80",
                moq: "5000",
                length: "",
                width: "2.5",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
            },
            {
                id: 3,
                img: "images/fb3.png",
                textcolor: "text-danger",
                text: "Rejected",
                name: "Cheese Fabric",
                qty: "10,000",
                amt: 150,
                price: "80",
                moq: "5000",
                length: "",
                width: "2.5",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
            },
            {
                id: 4,
                img: "images/fb4.png",
                textcolor: "text-success",
                text: "Accepted",
                name: "Cheese Fabric",
                qty: "10,000",
                amt: 150,
                price: "80",
                moq: "5000 ",
                length: "",
                width: "2.5",
                gsm: "300",
                color: "White, Black, Custom",
                design: "Same as Image",
                construction: "8s X 6s",
                processes: "Print",
                Discription: "",
            },
        ],
        items: [
            {
                id: 1,
                color: 'bg-danger'
            },
            {
                id: 2,
                color: 'bg-warning'
            },
            {
                id: 3,
                color: 'bg-info'
            }
        ],
        runningsos:[
            {
                id:1,
                img:"images/fb1.png",
                fabid: '01-20-23188',
                qty: 800,
            },
            {
                id:2,
                img:"images/fb1.png",
                fabid:' 01-20-23188',
                qty: 800,
            },
            {
                id:3,
                img:"images/fb1.png",
                fabid: '01-20-23188',
                qty: 800,
            },
            {
                id:4,
                img:"images/fb1.png",
                fabid: '01-20-23188',
                qty: 800,
            },
        ],
        sales:[
            {
                id:1,
                img:"images/fab1.png",
                name: 'Mayra Creation',
                oid: 45852412,
                date:'',
                invoice:'',
                amt:'',
                totalamnt:'',
                PackagingType:'',
                package:'',
                weight:''
            },
            {
                id:2,
                img:"images/fab2.png",
                name: 'Md Asad',
                oid: 45852567,
                date:'',
                invoice:'',
                amt:'',
                totalamnt:'',
                PackagingType:'',
                package:'',
                weight:''
            },
            {
                id:3,
                img:"images/fab3.png",
                name: 'Manoj Dj',
                oid: 45852434,
                date:'',
                invoice:'',
                amt:'',
                totalamnt:'',
                PackagingType:'',
                package:'',
                weight:''
            },
            
           
        ],
        activeSale: {}
    },
    getters: {
        getBottomNavMenuItems(state) {
            return state.bottomNavMenuItems;
        },
        getSupplierLists(state) {
            return state.supplierLists;
        },
        getInvoices(state) {
            return state.invoices;
        },
        getPos(state) {
            return state.pos;
        },
        getPo(state) {
            return state.activePo;
        },
        getItems(state) {
            return state.items
        },
        getRunningsos(state) {
            return state.runningsos
        },
        getSales(state) {
            return state.sales
        },
        getSale(state) {
            return state.activeSale;
        },
    },
    mutations: {
        selectSale(state, sale) {
            state.activeSale = sale;
        },
        hideSale(state) {
            state.activeSale = {};
        },
        updateStore(state, value){
            state.sale = value;
        }

    },
    actions: {
        selectSale({ commit }, sale) {
            commit("selectSale", sale);
        },
        hideSale({ commit }) {
            commit("hideSale");
        },
        setInputValue({commit}, value) {
            commit('updateStore', value)
        }
    }

}