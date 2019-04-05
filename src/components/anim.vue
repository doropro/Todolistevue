<template>
<div ref="box" class="box text-center">
  <h1 class="title mb-5">My Todo Liste</h1>
</div>
</template>

<script>
import {
  TweenLite,
  TweenMax
} from 'gsap'

export default {
  mounted() {
    const {box} = this.$refs
    const timeline = new TimelineLite()

    TweenLite.to(box, 1, {
      x: 750,
      rotation: 0
    });
    TweenMax.to("h1.title", 3, {
      opacity: 0.6
    });
  }
}
</script>

<style >
.box {
  height: 60px;
  width: 300px;
  margin-top: -100px;
}

h1.title {
  font-family: 'Mrs Sheppards', cursive;
}
</style>
