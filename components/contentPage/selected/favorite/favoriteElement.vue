<template>
    <nuxtLink to="/" class="favoriteElement">
        <img :src="imgSrc" alt="">
        <p>{{ name }}</p>
    </nuxtLink>
</template>

<script>
export default {
  name: 'favoriteElement',
  props : {
    name : "",
    imgSrc : "",
  }
}
</script>

<style lang="scss" scoped>

  .favoriteElement {

    width: calc(100% / 3 - 10px);
    background-color: white;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 10px 20px;

    text-decoration: none;

    img {

      width: 68px;
      height: 68px;
      object-fit: contain;
      object-position: center;

    }

    p {

      color: #003049;
      margin-top: 5px;

    }

  }

</style>