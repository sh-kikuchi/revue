<template>
  <div class="work-page">
    <h1 class="page-title text-center mt-4">Works</h1>
    <v-card tag="div" class="ma-5">
      <v-tabs pararell>
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          ポートフォリオ
        </v-tab>
        <!-- <v-tab>
          <v-icon left> mdi-briefcase </v-icon>
          おしごと
        </v-tab> -->
        <v-tab>
          <v-icon left> mdi-account-multiple </v-icon>
          ユニット活動
        </v-tab>
        <v-tab-item>
          <PersonalWork></PersonalWork>
        </v-tab-item>
        <!-- <v-tab-item>
          <MainJob></MainJob>
        </v-tab-item> -->
        <v-tab-item>
          <TeamWork></TeamWork>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>
<script>
import PersonalWork from "../components/work/PersonalWork";
import MainJob from "../components/work/MainJob";
import TeamWork from "../components/work/TeamWork";

export default {
  name: "Work",

  components: {
    PersonalWork,
    MainJob,
    TeamWork,
  },
};
</script>
<style scoped>
.work-page {
  max-width: 820px;
  margin: 0 auto;
}
</style>
