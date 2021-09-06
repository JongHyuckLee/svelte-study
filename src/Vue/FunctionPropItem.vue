<template>
  <div>
    <button value="Vue" @click="$emit('onAlert', 'Vue Alert', $event)">alert 호출하기</button>
    <button value="Vue2" @click="(e)=>onAlert2('Vue2', e)">alert 호출하기2</button>
<!--    //<div @click="(e) => alert('aa')">text</div> vm에 alert가 없으므로 alert가 동작하지 않음.-->
  </div>
</template>

<script>
export default {
  name: "FunctionPropItem",
  props: {
    onAlert2: Function
  },

}
</script>
