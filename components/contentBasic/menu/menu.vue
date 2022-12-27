<template>
  <transition name="fade">
    <div class="popUpMenu" v-if="openPopUp">
        <div class="closePart">
          <classicButton :imgButton="imgButton('popUpCloseIcone.svg')" action="UnDisplayMenu" />
        </div>
        <div class="groupLinkPart">
          <div class="groupLink">
            <p class="titlePart">
              Nos jeux
            </p>
            <ul class="menuLinkPart">
              <li><NuxtLink @click="closeMenu" to="/match/valorant">Valorant</NuxtLink></li>
              <li><NuxtLink @click="closeMenu" to="/match/lol">League of legends</NuxtLink></li>
              <li><NuxtLink @click="closeMenu" to="/match/rl">Rocket League</NuxtLink></li>
            </ul>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'menu',
  methods : {
    imgButton($imgName) {
      return require('~/assets/img/' + $imgName);
    },
    closeMenu() {
      this.$store.commit('action/UnDisplayMenu');
    }
  },
  computed : {

    openPopUp() {

      return this.$store.state.action.menuOpen;

    }

  }
}
</script>

<style lang="scss" scoped>

  .popUpMenu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    padding: 15px;

    .closePart {

        display: flex;
        justify-content: flex-end;
        align-items: center;

    }

    .groupLinkPart {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;
        color: #021C29;
        

        .groupLink {

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 10px 0;
            border-bottom: 1px solid #021C29;
            padding: 15px 0 0;
            width: 100%;

            .titlePart {

              font-weight: 700;
              font-size: 30px;
              margin-bottom: 25px;
              font-family: 'Open sans', sans-serif;

            }

            .menuLinkPart {

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 70%;

                li {

                    width: 100%;

                    &:last-child {

                      a  {

                        border-bottom: none;


                      }

                    }

                    a {

                        text-align: center;
                        color: #021C29;
                        text-decoration: none;
                        font-family: 'Open sans', sans-serif;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 11px;
                        display: block;
                        padding: 30px 0;
                        border-bottom: 1px solid #021C29;
                        width: 100%;

                    }

                }

            }

        }

    }

  }

</style>