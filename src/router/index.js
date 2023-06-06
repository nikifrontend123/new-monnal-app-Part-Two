import { createRouter, createWebHistory } from "vue-router";
import PurchasesModuleRoutes from '../modules/purchases/router'
import StoreManagerModuleRoutes from '../modules/storeManager/router'


const routes = [
  {
    path: "/",
    name: 'HomePage',
    component: () => import("../views/HomePage.vue")
  },
  ...PurchasesModuleRoutes,
  ...StoreManagerModuleRoutes,
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
