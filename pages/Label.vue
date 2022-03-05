<template>
  <div id="labels">
    <h1 class="page-title mt-2">Labels</h1>
    <div class="text-center">
      <span class="pc">▼ 入力してENTER </span>
      <input
        class="input-category pa-2"
        placeholder="カテゴリーを追加する"
        @keyup.enter="addCategory"
      />
      <v-btn class="ma-2" outlined color="red" @click="reset">
        保存データクリア
      </v-btn>
    </div>

    <div class="label-content pa-5">
      <div>
        <draggable class="d-flex">
          <v-card
            v-for="(category, index) in categories"
            :key="index"
            width="300"
            tag="div"
            class="ma-2 label-list"
          >
            <v-list-item-title
              class="category-title d-flex justify-space-between pr-3 pl-3"
            >
              <div></div>
              <div>{{ category.title }}</div>
              <div>
                <button class="btn btn-danger" @click="deleteCategory(index)">
                  ✖
                </button>
              </div>
            </v-list-item-title>
            <draggable>
              <v-list-item
                v-for="(item, index) in category.items"
                :key="index"
                :category_id="category.category_id"
                tag="div"
                class="item-border d-flex justify-space-between"
              >
                <div></div>
                <div>{{ item.text }}</div>
                <div>
                  <button
                    class="btn btn-danger"
                    @click="deleteItem(category.category_id, index)"
                  >
                    ✖
                  </button>
                </div>
              </v-list-item>
            </draggable>
            <v-list-item class="pa-0">
              <input
                class="input-item"
                placeholder="アイテムを追加する"
                @keyup.enter="addItem($event, category.category_id)"
              />
            </v-list-item>
          </v-card>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  computed: {
    categories() {
      return this.$store.state.label.categories;
    },
  },
  methods: {
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
    addItem: function (e, prm) {
      if (e.target.value == "") {
        return;
      } else {
        this.$store.dispatch("label/addItem", {
          text: e.target.value,
          category_id: prm,
        });
        e.target.value = "";
      }
    },
    deleteCategory: function (prm) {
      if (confirm("本当にこのカテゴリーを削除しますか？")) {
        this.$store.dispatch("label/deleteCategory", {
          category_id: prm,
        });
      }
    },
    deleteItem: function (c_prm, i_prm) {
      if (confirm("本当にこのアイテムを削除しますか？")) {
        this.$store.dispatch("label/deleteItem", {
          category_id: c_prm,
          item_id: i_prm,
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
  width: 100%;
  display: flex;
  border-bottom: 1px dotted black;
  word-break: break-all;
}
</style>
