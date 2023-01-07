<template>
    <div class="containerMatch">
        <match v-for="match in getMatchList" :matchData="match" />
    </div>
</template>

<script>
export default {
    name: "containerList",
    computed : {

      getMatchList() {

        return this.$store.state.matchList.allMatch;

      }

    },
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