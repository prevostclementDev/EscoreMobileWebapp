<template>
    <h1><span class="Line"></span> <span class="title" :style="'color:'+color+';'"><span>E</span>score</span> <span :style="'background-color:'+color+';'" class="Line"></span></h1>
</template>

<script>
export default {
  name: 'title',
  props : {

    color : '',

  }
}
</script>

<style lang="scss" scoped>
    h1 {

      margin: 10px 10px 5px 10px;

      font-family: Neuropol;
      color: #003049;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .Line {

        width: 25%;
        height: 2px;
        background-color: #F77F00;

        &:last-child {

          background-color: #003049;

        }

      }

      .title {

        span {

          color: #F77F00;

        }

      }

    }
</style>