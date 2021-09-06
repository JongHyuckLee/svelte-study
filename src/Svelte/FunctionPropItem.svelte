
<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();
    export let onAlert

    function innerOnAlert () {
        dispatch('onAlert2', {
            text: 'Svelte2',
            value: 'Svelte Emit'
        })
    }
</script>

<button value="Svelte" on:click={(e) => onAlert('Svelte', e)}>alert 호출</button>
<button value="Svelte2" on:click={innerOnAlert}>alert 호출 2</button>
<button on:click={(e) => console.log("inner instance test")}>inner instance test</button>
<button on:click="{(e) => console.log('inner instance test2')}">inner instance test2</button>