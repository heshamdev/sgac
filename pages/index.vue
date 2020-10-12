<template>
  <div>
    <v-container>
      <v-container>
        <v-img src="road-min.png" style="border-radius: 5px;" :aspect-ratio="27/10" />
      </v-container>
      <v-row class="text-xl-h5">
        <v-col cols="12" sm="12" md="12" lg="6">
          <v-col style="padding-top: 50px;">
            <v-img
              class="white--text align-end frame"
              src="drsaad.jpg"
              :aspect-ratio="23/10"
            />
            <v-container align="end" class="black--text pa-0 fill-height">
              <v-col>
                <div class="subheading">
                  <b>Dr.Saad ElGioshy</b>
                </div>
                <div class="">
                  Founder & Chairman of The Boards
                </div>
              </v-col>
            </v-container>
            </v-img>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          style=" color: rgba(0, 0, 0, 0.87);border-radius: 10px;"
        >
          <h1 style="text-align: center; color: #424242;">
            Who We Are? <v-icon color="#f2b15f">
              mdi-worker
            </v-icon>
          </h1>
          <v-col justify="center" align-self="center">
            <span style=" color: #333; background-color: white;text-align: justify;text-justify: inter-word; border-left: 3px solid black; padding-left: 10px;">
              <b>SGAC Group</b> was established in the year 1998 by Dr. Saad Elgioshy, as an engineering group and now it includes many companies that work in various fields such as education, information technology and various fields of engineering consultancy such as airports, roads, bridges, tunnels, transportation, construction and infrastructure, and the group also includes companies working in The field of construction, contracting and smart road maintenance.
              Also, the group has many international alliances with multiple international entities in various fields, and the group is currently working on many projects in Egypt, the Gulf region and North Africa.
            </span>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <hr>
    </v-container>
    <v-container class="text-xl-h5" >
      <v-row @mouseover="hover = true" @mouseleave="hover = false">
        <v-col
        >
          <h1 style="color: #424242">
            News
          </h1>
          <v-row>
            <v-carousel
              :cycle="!hover"
              height="400"
              hide-delimiter-background
              show-arrows
              dark
            >
              <v-carousel-item>
                <v-row
                  class="fill-height"
                  align="center"
                >
                  <v-col align="center" sm="12" lg="4">
                    <img src="macroni.jpg" width="300">
                  </v-col>
                  <v-col sm="12" lg="8" style="color: black">
                    <h2 style="text-align: justify;text-justify: inter-word; padding-right:70px;">
                      MOU Agreement: new GMU branch at the Italian University Campus in Egypt.
                    </h2>
                    <span style="font-size: 90%; text-align: justify;text-justify: inter-word; padding-right:70px;">
                      Professor Alessandra Spremolla Briganti, Rector of Guglielmo Marconi University in Rome, Italy, Dr. Saad Mohamed Elgioshy, President of SGAC.SCP (SGAC For Education, Culture and Projects) and Prof. Vincenzo Naso, Director of CIRPS (Centro Interuniversitario di Ricerca Per 10 Sviluppo Sostenibile — Inter-university Research Centre for Sustainable Development), signed a memorandum of understanding that foresees the regulation of cultural, educational, academic and technical collaboration between the parties, in accordance with the provisions of the Egyptian Law no.162 of 2018 and with the Ministerial decree no. 4200 for 2018.
                    </span>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row
                  class="fill-height"
                  align="center"
                >
                  <v-col align="center" class="fill-height" sm="12" lg="4">
                    <v-col>
                      <img src="spc.png">
                    </v-col>
                    <v-col>
                      <img src="logo.svg">
                    </v-col>
                  </v-col>
                  <v-col lg="8" style="color: black;">
                    <h2>
                      Ten Italian Universities Propose European University Complex in the New Capital
                    </h2>
                    <p style="text-align: justify;text-justify: inter-word; padding-right:70px;">
                      The Higher Education Ministry is studying an offer from 10 Italian universities to build a European university complex in the new administrative capital, which could open within two years if approved, minister Khaled Abdel Ghaffar said, according to Al Mal. A German university is already being constructed in the new capital.
                    </p>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <hr>
    </v-container>
        <v-container class="text-xl-h5">
      <v-row>
        <v-col
          class="z-depth-3"
          style="padding: 20px;"
        >
          <h1 class="hide-on-small-only" style="color: #424242">
            Media
          </h1>
          <v-row>
             <v-col
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                 <vue-plyr>
                      <div data-plyr-provider="youtube" data-plyr-embed-id="2YwsH0TIDnw" />
                    </vue-plyr>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p style="text-align: left;text-justify: inter-word;">Integration of Egypt’s Transportation Plan 2030 with the New Silk Road Project</p>
                </v-col>
              </v-row>
            </v-col>
            <v-divider
              class="d-sm-none d-md-flex d-none d-sm-flex"
              vertical
            />
            <v-col
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                 <vue-plyr>
                      <div data-plyr-provider="youtube" data-plyr-embed-id="mdx1bhLmE_g" />
                    </vue-plyr>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p style="text-align: left;text-justify: inter-word;">Dr. Saad El-Gioshy, Chairman of the SGAC Group, participated in the Shell Entrepreneurship and Technology Conference.</p>
                </v-col>
              </v-row>
            </v-col>
            <v-divider
              class="d-sm-none d-md-flex d-none d-sm-flex"
              vertical
            />
            <v-col
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                   <vue-plyr>
                      <div data-plyr-provider="youtube" data-plyr-embed-id="sJHLPbAyXx0" />
                    </vue-plyr>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p style="text-align: left ;text-justify: inter-word;">Dr. Khaled Abd El Ghaffar Minister of Higher Education and Scientific Research of Egypt Describes the New Project of The Italian Universities Campus in Egypt.</p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <hr>
    </v-container>
    <v-container class="text-xl-h5">
      <v-row>
        <v-col
          class="z-depth-3"
          style="padding: 20px;"
        >
          <h1 class="hide-on-small-only" style="color: #424242">
            Our Companies
          </h1>
          <v-row>
            <v-col
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                  <v-img class="" src="airport.png" width="130" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3>SGAC Engineering Counslting <br> <small>For Trasnport, Roads & Airports</small> </h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn @click="$router.push('/sgac_cons')">
                    Explore
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-divider
              class="d-sm-none d-md-flex d-none d-sm-flex"
              vertical
            />
            <v-col
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                  <v-img src="spc.png" width="270" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3>Misr Italia <br> <small> for Education Culture And Projects</small> </h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn>
                    Opening Soon
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-divider
              class="d-sm-none d-md-flex d-none d-sm-flex"
              vertical
            />
            <v-col
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                  <v-img src="cairo house.png" style="border-radius: 10px;" width="120" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3>Cairo House <br> <small> for Constructions</small> </h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn>
                    Opening Soon
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-divider
              class="d-sm-none d-md-flex d-none d-sm-flex"
              vertical
            />
            <v-col
              align="center"
              justify="center"
            >
              <v-row>
                <v-col>
                  <v-img src="it.png" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <br>
                  <br>
                  <h3>SGAC IT <br> <small> fo Information Technology Solutions</small> </h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn>
                    Opening Soon
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <hr>
    </v-container>
    <v-container class="text-xl-h5">
      <v-row
        class="z-depth-3"
        style="padding: 20px;"
      >
        <v-col>
          <v-col>
            <h1 style="color: #424242">
              Contact Us
            </h1>
          </v-col>
          <v-container>
            <v-col align="left" justify="center" style="font-size: 18px;">
              <ul>
                <li>
                  <b>Headquarter</b> :  <a href="https://www.google.com/maps/@30.050711,31.4718117,1696m/data=!3m2!1e3!4b1!4m2!7m1!2e1?hl=en">Villa 79 ,El-Banafseg 7 -New Cairo - Egypt</a>
                </li>
                <li>
                  <b>Phone</b>: <a href="tel:+201200604716">+201200604716</a> / <a href="tel:+201003607504">+201003607504</a>
                </li>
                <li>
                  <b>Land line</b> : <a href="tel:+20223078884">+20223078884</a>
                </li>
                <li>
                  <b>Email</b>: <a href="mailto:info@sgac-group.com">info@sgac-group.com</a>
                </li>
                <li>
                  <b>HR Email</b>: <a href="mailto:hr@sgac-group.com">hr@sgac-group.com</a>
                </li>
              </ul>
            </v-col>
          </v-container>
        </v-col>
        <v-col>
          <v-col>
            <h1 style="color: #424242">
              Our Location
            </h1>
          </v-col>
          <v-col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7383.691351376226!2d31.471811699999996!3d30.050711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1597585711311!5m2!1sen!2sus"
              width="100%"
              height="250"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {

  components: {
  },
  data () {
    return {
      hover: false,
      index: null,
      items: [
        {
          src: 'road-min.png'
        }
      ]
    }
  }
}
</script>
<style>
.containers {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}
.frame{
  border:solid 2vmin #eee;
  border-bottom-color:#424242;
  border-left-color:#616161;
  border-radius:2px;
  border-right-color:#616161;
  border-top-color:#212121;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  box-sizing:border-box;
}
.frame-vid{
  background-color:#00b3ff;
  border:solid 1vmin #00b3ff;
  border-bottom-color:#00b3ff;
  border-left-color:#00b3ff;
  border-radius:2px;
  border-right-color:#00b3ff;
  border-top-color:#00b3ff;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  box-sizing:border-box;
  text-align:center;
}
</style>
