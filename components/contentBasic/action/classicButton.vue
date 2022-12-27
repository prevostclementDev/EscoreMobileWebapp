<template>
    <button @click.prevent="didAction" class="btnBasic">
      <img :src="imgButton" alt="">
      <input  v-if="calendar" type="date" name="" id="">
    </button>
</template>

<script>
export default {
  name: 'classicButton',
  props : {

    imgButton : "",
    action : "",
    calendar : false,

  },
  methods : {

    didAction() {

      this.$store.commit('action/'+this.action);

    }

  }
}
</script>

<style lang="scss">

  .btnBasic {

    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 8px;
    outline: none;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 5px;
    position: relative;
    cursor: pointer;

    img {

      width : 50%;
      height: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);


    }

    input {

      width: 100%;
      height: 100%;
      opacity: 0;

    }

  }

</style>