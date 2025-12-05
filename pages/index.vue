<template>
  <layout>
    <home-hero-slider />
    <category-area />
    <trending-products />
    <shop-banner/>
    <sale-off-product/>
    <client-brand-slider/>
    <blog-area/>
    <subscribe-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeroSlider from "../components/hero-banner/HomeHeroSlider.vue";
import Layout from "../layout/Layout.vue";
import CategoryArea from "../components/category/CategoryArea.vue";
import TrendingProducts from "../components/products/TrendingProducts.vue";
import ShopBanner from "../components/shop-banner/ShopBanner.vue";
import SaleOffProduct from "../components/products/SaleOffProduct.vue";
import ClientBrandSlider from "../components/client-brands/ClientBrandSlider.vue";
import BlogArea from "../components/blogs/BlogArea.vue";
import SubscribeArea from "../components/subscribe/SubscribeArea.vue";

export default defineComponent({
  components: {
    Layout,
    HomeHeroSlider,
    CategoryArea,
    TrendingProducts,
    ShopBanner,
    SaleOffProduct,
    ClientBrandSlider,
    BlogArea,
    SubscribeArea,
  },
  setup() {
    useHead({
      title: "Home Main - Outstock Clean, Minimal eCommerce Vue Nuxt 3 Template",
    });
  },
});
</script>
