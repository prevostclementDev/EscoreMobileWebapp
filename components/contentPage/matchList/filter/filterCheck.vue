<template>
    <div class="globalFilterCheck">
        <label for="checkbox1" tabindex="1" class="label">
          <input class="checkbox" type="checkbox" id="checkbox1">
          <p>{{ title }}</p>
          </label>
      </div>
</template>

<script>
export default {
  name: 'filterCheck',
  methods : {

    imgSrc($imgName) {

      return require('~/assets/img/' + $imgName);

    },

  },
  props : {

    title : "",
    filterType : ""

  }
}
</script>

<style lang="scss" scoped>

  .globalFilterCheck {

    display: flex;
    align-items: center;
    margin: 10px 0;

    &:first-child {

    margin-top: 20px;

  }

    .label {

      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      p {

        margin-left: 15px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 11px;

      }
    }

    input[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      margin: 0;

      font: inherit;
      width: 3.15em;
      height: 3.15em;
      border-radius: 50%;
      transform: translateY(-0.075em);

      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;

      display: grid;
      place-content: center;

    }

    input[type="checkbox"]::before {
        content: "";
        width: 2.20em;
        height: 2.20em;
        border-radius: 8px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        background-color: rgb(0, 0, 0);
      }

      input[type="checkbox"]:checked::before {
        transform: scale(1);
      }
      

  }

</style>