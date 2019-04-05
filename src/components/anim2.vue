<template>

<div class="container1 mt-5">
  <img id="logo" src="https://www.icone-png.com/png/40/39705.png"/>
</div>

</template>

<script>
import { TweenMax} from 'gsap'

export default {
  mounted() {
  TweenMax.from("#logo", 3, {x:300, opacity:0, scale:0.5});
}
}
</script>

<style>

.container1 {
margin-left: auto;
margin-right: auto;
width: 20%;
}

#logo {
  width:180px;
  margin: auto;
}
</style>
