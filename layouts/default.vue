<template>
  <v-app dark class="text-xl-h5 new-font">
    <v-row>
      <v-app-bar
        style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; background-color: rgba(255,255,255,0.9);"
        fixed
        app
      >
        <div style="margin-top: 1px; ">
          <a @click="$router.push('/')">
            <img src="sgacLogo1.png" width="150">
          </a>
        </div>
        <v-spacer />
        <div class="d-flex d-sm-none">
          <v-menu
            left
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="show-on-small"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                @click="() => {}"
              >
                <v-list-item-title @click="$router.push('/sgac_cons')">
                  SGAC Consulting
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="() => {}"
              >
                <v-list-item-title>
                  Misr Italia
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="() => {}"
              >
                <v-list-item-title>
                  Cairo House
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="() => {}"
              >
                <v-list-item-title>
                  SGACIT
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <div class="d-sm-none d-md-flex d-none d-sm-flex" >
          <v-btn depressed color="white" @click="$router.push('/')" style="background-color: rgba(255,255,255,0) !important;">
            Home
          </v-btn>
          <v-btn depressed color="white" @click="$router.push('/sgac_cons')" style="background-color: rgba(255,255,255,0) !important;">
            SGAC Consulting
          </v-btn>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed v-bind="attrs" color="white" v-on="on" style="background-color: rgba(255,255,255,0) !important;">
                <span>Misr Italia &nbsp;</span><span style="background-color: #d32f2f; padding: 10px;" />
                <span style="background-color: white; padding: 10px;" />
                <span style="background-color: green; padding: 10px;" />
              </v-btn>
            </template>
            <span>Opening Soon</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed v-bind="attrs" color="white" v-on="on" style="background-color: rgba(255,255,255,0) !important;">
                Cairo House
              </v-btn>
            </template>
            <span>Opening Soon</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed v-bind="attrs" color="white" v-on="on" style="background-color: rgba(255,255,255,0) !important;">
                SGAC.IT
              </v-btn>
            </template>
            <span>Opening Soon</span>
          </v-tooltip>
          <v-divider
            class="mx-4 hide-on-small-only"
            vertical
          />
          <v-btn depressed color="white" @click="facebook()">
            <v-icon color="#078ef2">
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn depressed color="white" @click="isntagram()">
            <v-icon color="#f2b15f">
              mdi-instagram
            </v-icon>
          </v-btn>
        </div>
      </v-app-bar>
    </v-row>
    <v-main>
      <nuxt />
    </v-main>
    <v-container>
      <v-footer
        style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
        :absolute="!fixed"
        app
      >
        <v-col justify="center" align="center">
          <span class="center">Created BY SGAC - Group  &copy; {{ new Date().getFullYear() }}</span>
        </v-col>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      items: [
        {
          src: 'nature-2.png'
        },
        {
          src: 'nature.png'
        },
        {
          src: 'nature-3.png'
        },
        {
          src: 'nature-4.png'
        }
      ]
    }
  },
  methods: {
    facebook () {
      window.location.href = 'https://www.facebook.com/sgacconsultancy'
    },
    isntagram () {
      window.location.href = 'https://www.instagram.com/sgacconsulting/'
    }
  }
}
</script>
<style>
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/Nunito-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('~assets/fonts/Nunito-ExtraBoldItalic.ttf') format('truetype');
}
.new-font{font-family: 'Nunito'}
</style>
