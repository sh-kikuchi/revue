<template>
  <div id="labels">
    <h1 class="page-title mt-2">Labels</h1>
    <div class="text-center">
      <input
        class="input-category pa-2 ma-3"
        placeholder="Enterキーでカテゴリー追加"
        @keyup.enter="addCategory"
      />
      <v-btn class="ma-3" outlined color="red" @click="reset">
        保存データクリア
      </v-btn>
    </div>
    <!-- カテゴリー -->
    <draggable class="d-flex" v-model="categories">
      <category
        v-for="(category, index) in categories"
        :key="index"
        :title="category.title"
        :categoryIndex="index"
        :items="category.items"
        @change="shiftItem"
      />
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import category from "../components/label/category.vue";

export default {
  components: {
    draggable,
    category,
  },
  computed: {
    categories: {
      get: function () {
        return JSON.parse(JSON.stringify(this.$store.state.label.categories));
      },
      set: function (newCategories) {
        this.$store.dispatch("label/shiftCategory", {
          newCategories,
        });
      },
    },
  },
  methods: {
    shiftCategory: function () {
      this.$store.dispatch("label/shiftCategory", {
        categories: this.categories,
      });
    },
    shiftItem: function () {
      this.$store.dispatch("label/shiftItem", {
        categories: this.categories,
      });
    },
    reset: function () {
      if (
        confirm(
          "本当にクリアしますか？ ブラウザ（LocalStorage）に保存されているデータを消去します。"
        )
      ) {
        localStorage.removeItem("revueLabel");
        this.$router.go({ path: this.$router.currentRoute.path, force: true });
      }
    },
    addCategory: function (e) {
      if (e.target.value == "") {
        return;
      } else {
        this.$store.dispatch("label/addCategory", e.target.value);
        e.target.value = "";
      }
    },
    addItem: function (e, cardIndex) {
      if (e.target.value == "") {
        return;
      } else {
        this.$store.dispatch("label/addItem", {
          text: e.target.value,
          category_id: cardIndex,
        });
        e.target.value = "";
      }
    },
    deleteCategory: function (cardIndex) {
      if (confirm("本当にこのカテゴリーを削除しますか？")) {
        this.$store.dispatch("label/deleteCategory", {
          category_id: cardIndex,
        });
      }
    },
    deleteItem: function (cardIndex, itemIndex) {
      if (confirm("本当にこのアイテムを削除しますか？")) {
        this.$store.dispatch("label/deleteItem", {
          category_id: cardIndex,
          item_id: itemIndex,
        });
      }
    },
  },
};
</script>
<style scoped>
#labels {
  background-color: rgb(183, 204, 219);
  height: 100%;
  overflow-x: auto;
}
.input-category {
  width: 220px;
  background-color: rgb(241, 241, 243);
}
.label-content {
  display: flex;
}

/*ラベルの列 */
.label-list {
  height: 100%;
}

.category-title {
  font-size: 20px;
}
.input-item {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
}
.item-border {
  width: 300px;
  display: flex;
  border: 1px dotted black;
  word-break: break-all;
}
</style>
