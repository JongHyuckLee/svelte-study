<script>
import Item from "./Item";
import FunctionPropItem from "./FunctionPropItem";
import LifeCycle from "./LifeCycle";
export default {
  components: {LifeCycle, FunctionPropItem, Item},
  data: function () {
    return {
      name: 'Vue',
      inputValue: '',
      list: ['item1', 'item2'],
      show: true
    }
  },
  methods: {
    onClick() {
      this.list.push(this.inputValue);
    },
    onAlert(text, e) {
      alert(`parameter : ${text}, event target value : ${e.target.value}`);
    },
    onAlert2(text, e) {
      alert(`parameter : ${text}, event target value : ${e.target.value}`);
    },
    removeLifeCycle() {
      this.show = false;
    }
  }
}
</script>

<template>
  <main>
    <h1>Hello {{name}}</h1>
<!--    <p @click="()=>console.log('click Vue')">Visit the {{name}}!!.</p> Vue instance 외부 global에 접근할 수 없음.-->
    <p>Visit the {{name}}!!.</p>
    <input type="text" placeholder="입력" v-model="inputValue">
    <button v-on:click="onClick">입력</button>
    <div>입력 값 : {{inputValue}}</div>

    <Item v-for="text in list" v-bind:text="text"/>
    <FunctionPropItem @onAlert="onAlert" v-bind:onAlert2="onAlert2"/>
    <LifeCycle v-if="show"/>
    <button  @click="removeLifeCycle">라이프사이클 컴포넌트 삭제</button>
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