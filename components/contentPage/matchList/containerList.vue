<template>
    <div class="containerMatch">
      <Match />
      <Match />
      <Match />
    </div>
</template>

<script>
import { match } from 'assert';

export default {
    name: "containerList",
    components: { match }
}
</script>

<style  lang="scss" scoped>

  .containerMatch {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95%;
    height: fit-content;
    margin: 0 auto;
    padding: 20px 0;

  }

</style>