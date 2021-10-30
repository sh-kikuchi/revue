<template>
  <div id="book">
    <h1 class="page-title">Book</h1>
    <h3 class="page-sub-title">Google APIで検索</h3>
    <div>
      <v-text-field
        class="search-input"
        label="タイトルや著者で検索して下さい"
        v-model="keyword"
        hide-details="auto"
        color="success"
        loading
      ></v-text-field>
    </div>
    <v-layout justify-center>
      {{ message }}
    </v-layout>
    <v-container>
      <v-row dense>
        <v-col v-for="(item, index) in items" :key="index" cols sm="12" md="6">
          <v-card class="book-card mt-3" style="height: 100%">
            <v-row>
              <v-col cols sm="12" md="6">
                <v-layout justify-center>
                  <a v-bind:href="item.volumeInfo.previewLink" target="_blank">
                    <img
                      class="card-image"
                      d-block
                      d-flex="center"
                      v-bind:src="item.volumeInfo.imageLinks.thumbnail"
                    />
                  </a>
                </v-layout>
              </v-col>
              <v-col cols sm="12" md="6">
                <v-card-title class="card-title">{{
                  item.volumeInfo.title
                }}</v-card-title>
                <v-card-text card-text>
                  <span v-for="author in item.volumeInfo.authors" :key="author">
                    {{ author }}
                  </span>
                </v-card-text>
                <v-card-text card-text>{{
                  item.volumeInfo.publisher
                }}</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "book",
  data() {
    return {
      items: [],
      keyword: "",
      message: "",
    };
  },
  watch: {
    keyword: function () {
      this.message = "Please Wait...";
      this.debounceGetAnswer();
    },
  },
  created: function () {
    this.debounceGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer: function () {
      if (this.keyword === "") {
        this.items = null;
        this.message = "";
        return;
      }
      this.message = "Searching";
      var vm = this;
      var params = { page: 1, per_page: 30, query: this.keyword };
      console.log(params);
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=search/" + params.query
        )
        .then(function (response) {
          vm.items = response.data.items;
        })
        .catch(function (error) {
          vm.message = "Error!" + error;
        })
        .finally(function () {
          vm.message = "";
        });
    },
  },
};
</script>

<style scoped>
.search-input {
  width: 300px;
  margin: 0 auto;
}
.card-title {
  font-size: 14px;
}
.card-text {
  font-size: 12px;
}
</style>
