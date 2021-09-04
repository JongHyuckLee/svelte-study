

<script>
import Item from "./Item";
export default {
  components: {Item},
  data: function () {
    return {
      name: 'Vue',
      inputValue: '',
      list: ['item1', 'item2']
    }
  },
  methods: {
    onClick() {
      this.list.push(this.inputValue);
    }
  }
}
</script>

<template>
  <main>
    <h1>Hello {{name}}</h1>
    <p>Visit the {{name}}!!.</p>
    <input type="text" placeholder="입력" v-model="inputValue">
    <button v-on:click="onClick">입력</button>
    <div>입력 값 : {{inputValue}}</div>

    <Item v-for="text in list" v-bind:text="text"/>

  </main>
</template>

<style>
main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

h1 {
  color: #47C83E;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}
input {
  margin-bottom: 10px;
  margin-top: 20px;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>