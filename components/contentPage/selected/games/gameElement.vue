<template>
    <nuxtLink :to="link" class="gameElement">
        <img :src="imgSrc" alt="">
    </nuxtLink>
</template>

<script>
export default {
  name: 'gameElement',
  props : {
    imgSrc : "",
    link : "",
  }
}
</script>

<style lang="scss" scoped>

  .gameElement {

    width: calc(100% / 2 - 10px);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 8px;
    margin: 20px 0 0 0;

    img {

      width: 100%;
      height: 100%;
      object-fit: contain;

    }

  }

</style>
