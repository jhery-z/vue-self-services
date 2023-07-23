<template>
  <div class="grid-container">
    <div class="left-item">
      <label for="dynamicCheckbox">Rating 4 ke atas</label>
    </div>
    <br>
    <div class="right-item">
      <input type="checkbox" id="dynamicCheckbox" v-model="isChecked1">
    </div>
    <div class="left-item">
      <label for="dynamicCheckbox">Stock Tersedia</label>
    </div>
    <br>
    <div class="right-item">
      <input type="checkbox" id="dynamicCheckbox" v-model="isChecked2">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked1: false,
      isChecked2: false
    };
  }
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 10px;
  border: 1px solid #e1e1e1;
}

.left-item {
  text-decoration: none;
  justify-self: start;
}

.right-item {
  text-decoration: none;
  justify-self: end;
}
</style>