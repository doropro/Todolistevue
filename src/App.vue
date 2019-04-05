<template>
<div id="app">

  <header class="offset-8 col-md-4">
    <anim2 />
  </header>

  <section>
    <anim />
    <todos />
  </section>
</div>
</template>

<script>
import anim from './components/anim.vue'
import todos from './components/todos.vue'
import anim2 from './components/anim2.vue'

export default {

  name: 'app',
  components: {
    anim,
    todos,
    anim2
  }

}
</script>
