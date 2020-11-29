import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
{
    path: "/",
    name: "Welcome_Index",
    component: () =>
        import(/* webpackChunkName: "" */ "../views/Welcome/_Index.vue") // Lazy loading
    },
  {
    path: "/applications",
    name: "Applications_Index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications/_Index.vue") // Lazy loading
  },
  {
    path: "/applications/featured",
    name: "Applications_ListFeatured",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications/ListFeatured.vue") // Lazy loading
  },
  {
    path: "/applications/all",
    name: "Applications_ListAll",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications/ListAll.vue") // Lazy loading
  },
  {
    path: "/applications/create",
    name: "Applications_Create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications/Create.vue") // Lazy loading
  },
  {
    path: "/applications/edit",
    name: "Applications_Edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications/Edit.vue") // Lazy loading
  },
  {
    path: "/skills",
    name: "Skills_Index",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills/_Index.vue") // Lazy loading
  },
  {
    path: "/skills/create",
    name: "Skills_Create",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills/Create.vue") // Lazy loading
  },
  {
    path: "/skills/edit",
    name: "Skills_Edit",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills/Edit.vue") // Lazy loading
  },
  {
    path: "/skills/simple",
    name: "Skills_ListAll",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills/ListAll.vue") // Lazy loading
  },
  {
    path: "/contact",
    name: "Contact_Index",
    component: () =>
      import(/* webpackChunkName: "add" */ "../views/Contact/_Index.vue") // Lazy loading
  }
];

const router = new VueRouter({
  routes
});

export default router;
