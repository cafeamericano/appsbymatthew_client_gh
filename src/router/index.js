import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
{
    path: "/",
    component: () =>
        import(/* webpackChunkName: "" */ "../views/Welcome.vue") // Lazy loading
    },
  {
    path: "/applications",
    name: "Applications",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications.vue") // Lazy loading
  },
  {
    path: "/applications/featured",
    name: "Applications-Featured",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications-Featured.vue") // Lazy loading
  },
  {
    path: "/applications/all",
    name: "Applications-All",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications-All.vue") // Lazy loading
  },
  {
    path: "/applications/create",
    name: "Applications-Create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications-Create.vue") // Lazy loading
  },
  {
    path: "/applications/edit",
    name: "Applications-Edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Applications-Edit.vue") // Lazy loading
  },
  {
    path: "/skills",
    name: "Skills",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills.vue") // Lazy loading
  },
  {
    path: "/skills/create",
    name: "Skills-Create",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills-Create.vue") // Lazy loading
  },
  {
    path: "/skills/edit",
    name: "Skills-Edit",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills-Edit.vue") // Lazy loading
  },
  {
    path: "/skills/simple",
    name: "Skills-Simple",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/Skills-Simple.vue") // Lazy loading
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "add" */ "../views/Contact.vue") // Lazy loading
  }
];

const router = new VueRouter({
  routes
});

export default router;
