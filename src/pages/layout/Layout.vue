<template>
  <DashboardAppBar />
  <v-main class="fill-height">
    <NavigationDrawer :width="isMobile ? width : 250" />
    <v-container fluid v-show="!(isMobile && isDrawerVisible)">
      <router-view />
    </v-container>
  </v-main>
  <MyFooter/>
</template>

<script>
import NavigationDrawer from "@/components/navigationDrawer/NavigationDrawer";
import DashboardAppBar from "@/components/dashboardAppBar/DashboardAppBar.vue";
import MyFooter from "@/components/footer/Footer"

import { mapGetters } from "vuex";
export default {
  name: "Layout",
  components: {
    NavigationDrawer,
    DashboardAppBar,
    MyFooter
  },
  data() {
    return {
      isMobile: false,
      width: ""
    };
  },
  created() {
    this.setIsMobile(this.$vuetify.display.smAndDown);
  },
  methods: {
    setIsMobile(state) {
      this.isMobile = state
      this.width = this.$vuetify.display.width
    },
    handleResize() {
      this.setIsMobile(this.$vuetify.display.smAndDown);
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    ...mapGetters('drawer', ['isDrawerVisible'])
  },
};
</script>

<style src="./Layout.scss" lang="scss" scoped/>