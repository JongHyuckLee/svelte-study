<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate, tick} from 'svelte'

    onMount(() => {
        console.log('onMount');
    });

    onDestroy(() => {
        console.log('onDestroy');
    });

    beforeUpdate(() => {
        console.log('beforeUpdate');
    });

    afterUpdate(() => {
        console.log('afterUpdate');
    });

    beforeUpdate(async () => {
       console.log("beforeUpdate with tick");
       await tick();
       console.log("tick ....")
    });

</script>
<div>라이프 사이클</div>