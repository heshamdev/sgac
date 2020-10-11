<template>
  <v-container class="text-xl-h5">
    <v-row>
      <v-container>
        <v-carousel style="border-top-right-radius: 10px; border-top-left-radius: 10px;">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            cycle
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <div class="col s12" style="position: relative;">
              <div v-if="i == 0" class="right">
                <img src="/airport.png">
              </div>
              <div v-if="i == 0" style="color: #212121;">
                <h3><b>SGAC consulting</b></h3>
              </div>
              <v-col
                v-if="i == 0"
                sm="12"
                lg="10"
                md="10"
                style="position: absolute; bottom: -330px;"
              >
                <p>
                  <v-col style="color: white; text-align: justify;text-justify: inter-word;">
                    <b>SGAC Consulting</b> is an international engineering consultancy firm with international and local experience in various fields of design, projects feasibility studies, technical studies , tender documents, projects supervision for roads, bridges, transportation, airports, infrastructure, housing, public buildings and hospitality projects.
                  </v-col>
                </p>
              </v-col>
              <div v-if="i == 1" style="color: white;">
                <h1 class="black-text">
                  <b style="color: #fcb414; border-radius: 10px;" class="col">Geo TechnicalWork</b>
                </h1>
                <div
                  class="container hide-on-large-only"
                  style="
                 position: absolute; bottom: -368px;"
                >
                 <p>
                    <v-col style="color: white; text-align: justify;text-justify: inter-word;">
                    We use principles of soil and rock mechanics to investigate subsurface conditions and materials; determine the relevant physical/mechanical and chemical properties of these materials; evaluate stability of natural slopes and man-made soil deposits; assess risks posed by site conditions.
                  </v-col>
                 </p>
                </div>
              </div>
              <div v-if="i == 2" class="" style="color: white;">
                <h1 class="left white-text" style="position: absolute; bottom: -100px;">
                  <b style="color: white; background-color: rgba(0,0,0,0.3); border-radius: 10px;" class="col">Highways and roads networks</b>
                </h1>
                <div
                  class="container hide-on-large-only"
                  style="
                position: absolute; bottom: -426px;"
                >
                  <span style="text-align: justify;text-justify: inter-word;">
                    The road network consists of a system of interconnected paved carriage ways which are designed to carry buses, cars and goods vehicles; the road network generally forms the most basic level of transport infrastructure within urban areas, and will link with all other areas, both within and beyond the boundaries of the urban areas.
                  </span>
                </div>
              </div>
              <div v-if="i == 3" class="" style="color: white;">
                <h1 class="left white-text" style="position: absolute; bottom: -90px;">
                  <b style="color: white; background-color: rgba(0,0,0,0.2); border-radius: 10px;" class="col">Consulting Services for Airports</b>
                </h1>
                <div class="container hide-on-large-only" style=" position: absolute; bottom: -426px;">
                  <span style="text-align: justify;text-justify: inter-word;">
                    This enables SGAC to assist airports to develop their infrastructure (runways, taxiways, apron and other areas),managecompliance, and optimize capacity while ensuring the necessary level of safety.
                  </span>
                </div>
                <div class="container hide-on-small-only" style="position: absolute; bottom: -426px;">
                  <span style="text-align: justify;text-justify: inter-word;">
                    This enables SGAC to assist airports to develop their infrastructure (runways, taxiways, apron and other areas),managecompliance, and optimize capacity while ensuring the necessary level of safety.
                  </span>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <v-container
        class="d-none d-lg-flex d-md-flex"
        style="
    color: rgba(0, 0, 0, 0.87); border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;"
      >
        <v-col
          align="center"
          style="margin: 0 !important; padding:0 !important;"
        >
          <v-btn depressed class="mx-2" :color="projects ? 'blue' : 'white' " :class="[projects == true ? 'black':'']" @click="navi('projects')">
            Projects
          </v-btn>
          <v-btn depressed class="mx-2" :color="services ? 'blue' : 'white' " :class="[services == true ? 'black':'']" @click="navi('services')">
            Services
          </v-btn>
          <v-btn depressed class="mx-2" :color="clients ? 'blue' : 'white' " :class="[clients == true ? 'black':'']" @click="navi('clients')">
            Clients
          </v-btn>
          <v-btn depressed class="mx2" :color="jv ? 'blue' : 'white' " :class="[jv == true ? 'black':'']" @click="navi('jv')">
            J.V Partners
          </v-btn>
          <v-btn depressed class="mx-2" :color="about ? 'blue' : 'white' " :class="[about == true ? 'black':'']" @click="navi('about')">
            About
          </v-btn>
          <v-divider
            class="mx-4"
            style="margin-bottom: -1%;"
            vertical
          />
          <v-btn depressed color="black" style="color: white;" class="[joinus == true ? 'black':'']" @click="navi('joinus')">
            Join Us!
          </v-btn>
        </v-col>
      </v-container>
      <v-container
        class="d-flex d-sm-none"
        style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;"
      >
        <v-col>
          <v-btn depressed color="white" style="width:100%" @click="navi('projects')">
            Projects
          </v-btn>
          <v-btn depressed color="white" style="width:100%" @click="navi('services')">
            Services
          </v-btn>
          <v-btn depressed color="white" style="width:100%" @click="navi('about')">
            About
          </v-btn>
          <v-btn depressed color="white" style="width:100%" @click="navi('clients')">
            Clients
          </v-btn>
          <v-btn depressed color="white" style="width:100%" @click="navi('jv')">
            J.V Partners
          </v-btn>
          <v-btn depressed color="blue" style="width:100%" class="white-text right" @click="navi('joinus')">
            Join Us!
          </v-btn>
        </v-col>
      </v-container>
      <v-container>
        <v-row>
          <v-col
            class="z-depth-3"
            style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
          >
            <h2 style="color: #424242">
              Integration of Egypt's Transportation Plans 2030 with the New Silk Road Project
            </h2>
            <v-row>
              <v-col align="center" justify="center" sm="12" lg="7">
                <iframe
                  class="frame-vid"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/2YwsH0TIDnw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </v-col>
              <v-col sm="12" lg="5" align="center" justify="center">
                <v-row>
                  <v-col>
                    <v-img src="/silkroad.png" />
                  </v-col>
                  <v-col>
                    <b> Integration of Egypt’s Transportation Plans 2030 with the New Silk Road Project</b>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="projects" id="projects">
        <v-row>
          <v-col
            class="z-depth-3"
            style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
          >
            <h2 style="color: #424242">
              Our Projects
            </h2>
            <v-container>
              <v-tabs
                v-model="curTab"
                style="border-radius: 10px;"
                fixed-tabs
                background-color="indgo"
              >
                <v-tab>
                  Roads
                </v-tab>
                <v-tab>
                  Bridges
                </v-tab>
                <v-tab>
                  Buildings
                </v-tab>
                <v-tab>
                  Airports
                </v-tab>
              </v-tabs>
            </v-container>
            <div v-if="curTab == 0">
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                  @click="index = 0"
                >
                  <v-img
                    class="white--text align-end"
                    src="/middle ring.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Middle Ring road</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      style="background: white !important; background: rgba(255, 255, 255, 0.12) !important;"
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      From the intersection of Helwan to Corniche of the Nile • 24km (Five lanes per Direction)
                    </v-read-more-box>
                  </v-card-text>
                  <!--                   <v-container class="pa-0">
                    <v-col> -->
                  <!--    <v-dialog v-model="midRingDialog" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="midRingDialog = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                  <!--                     </v-col>
                  </v-container> -->
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                  @click="index1 = 0 "
                >
                  <v-img
                    class="white--text align-end"
                    src="/marina.png"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">South Marina</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>Connecting between AL-Almeen Road to Wadei Al Natroon Road, we have second sector. 20km (three Lanes per Direction).
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="sothMarinaDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="sothMarinaDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/north90.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">North 90</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Connecting between South 90 to Cairo –Suez • 11km (Five Lanes Per Direction)
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!--  <v-dialog v-model="north90Diag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="north90Diag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/mnagib1.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Mohamed Nageiub Axis</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Connected Between Old Attamina AIN Sokhna To Cairo Suez High way 10km (Five Lanes per Direction)
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!--  <v-dialog v-model="MNagibDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="MNagibDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/teneda3.jpg"
                    style="height: 250px;"
                    @click="index2 = 0"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Tenidah-Manfalout Road</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="tenedaDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="tenedaDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/assuit1.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Assiut-Sohag Road</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Connecting between Assiut city and Sohag city. 25 km (Three lanes – One way).
                      We put the best Solution to decrease cost and Reach The High potential of road to connect between Assiut and Sohag.
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="AssiutRoadDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="AssiutRoadDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/balanah.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Balanah-Kalabsha Road</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Connecting between Balanah and Kalabsha at Aswan city. 12 km.
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!--  <v-dialog v-model="balanahDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="balanahDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/comp.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">ROAD NETWORK FOR EAST TOWN COMPOUND</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h3><b class="text--primary">Roads</b></h3>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      EAST TOWN (SODIC)
                      <ul>
                        <li>Full design package for internal roads network.</li>
                        <li>Designing</li>
                      </ul>
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!--  <v-dialog v-model="compDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="compDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
              </v-row>
            </div>
            <div v-if="curTab == 1">
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/kafrelshekh.JPG"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">KAFR EL SHEIKH- DESOUK</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Bridges</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Kafr –Alshekh-Desouk Road Connecting between kafr Al-shekh To Desouk, and we have The First sector ’17 Structure facility 10k.m (Three lanes per Direction)
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="kafrDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="kafrDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/3july.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">3 JULY AXIS</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Bridges</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>Connecting between Port Said to Ismailia Desert road, (three lanes per Direction).
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="julyDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="julyDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/4bridge.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">4.5 Suez Road</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Bridges</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <ul>
                        <li> K.M4.5 BRIDGE 479m (PRESTRESSED BEAMS).</li>
                        <li> REPAIR OF OLD BRIDGE K.M 4.5.</li>
                      </ul>
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="wnosDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="wnosDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/mnagib.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">BAHR BAQR</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Bridges</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <ul>
                        <li>NORTH BRIDGE 570m (PRESTERSSED BEAMS-BOX SECTION- SLAB ON PILE).</li>
                        <li>SOUTH BRIDGE 580m (PRESTERSSED BEAMS-BOX SECTION- SLAB ON PILE).</li>
                      </ul>
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="bahrBakrDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="bahrBakrDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/maint.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">URGENT MAINTENANCE FOR CRITICAL RECTORIAL CONDITION BRIDGES</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Bridges</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p>
                        GARBLT owns 1706 bridge, 40% of it unsafe according to JICA report April 2014, the main problems for these bridges are the old age which exceeded more than 50 years, and the load carrying capacity which is 30 tons, the current average truch load reaches more than 120 tons for the reasons above, GARBLT started urgent plan for maintaining 400 bridges in the F.Y. 2014 to F.Y. 2015.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!--  <v-dialog v-model="urgentComp" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="urgentComp = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
              </v-row>
            </div>
            <div v-if="curTab == 2">
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/lepassage.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Le Passage Hotel</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Buildings</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p style="text-align: justify;text-justify: inter-word;">
                        Because of old age of the current HVAC system and the difficulties and
                        effectives of routine maintenance, there was a repetitive claims from the
                        clients. The operations department enforced to close some sectors from the
                        hotel room. So, There was a need to launch a phased upgrade project.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!--  <v-dialog v-model="lepassagDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="lepassagDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/academy.jpg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">THE EGYPTIAN AVIATION ACADEMY</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Buildings</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <ul>
                        The project has a distinguished circular lotus shape as a land mark for the
                        whole academy. It includes a number of facilities like:
                        <li>Academy HQ</li>
                        <li>Auditoriums</li>
                        <li>Lab rooms</li>
                        <li>Simulators</li>
                        <li>Administrative facilities</li>
                      </ul>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/capital.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Villas and residential buildings /New Administrative Capital</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Buildings</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Corp of Engineers planned a new Compound in new administrative capital in R2 area. They ask for preparing TOR, Supervision and shop drawing designs.
                    </v-read-more-box>
                  </v-card-text>
                  <v-container class="pa-0">
                    <v-col>
                      <!-- <v-dialog v-model="villasDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Tenidah-Manfalout Road</span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            />
                          </v-col>
                          <v-card-text>
                            <p>
                              Connecting between Manfalout at Assiut city and Tenidah at Siwa oases. 200 km (Two way-Two lane).<br>
                              We put the best Solution to decrease cost and Reach The High potential of road to connect between Tenidah and Manfalout.
                            </p>
                            <ul>
                              <b>Our Tasks:</b>
                              <li>Technical reports for the project.</li>
                              <li>Design Drawing. </li>
                              <li>QC/QA “Quality control & Quality assurance”. </li>
                              <li>Technical support to reach the best solutions.</li>
                            </ul>
                            <ul>
                              <li><b>Owner:</b> Central Agency for Reconstruction.</li>
                              <li><b>Address:</b> 1 Ismail Abaza Street, El kasr El aini Street, Cairo, Egypt.</li>
                              <li><b>Phone:</b> +2 02- 279 213 63</li>
                              <li><b>Duration:</b> 2018 – 2021</li>
                            </ul>
                          </v-card-text>
                          </v-img>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="villasDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index2 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                    </v-col>
                  </v-container>
                </v-col>
              </v-row>
            </div>
            <div v-if="curTab == 3">
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/gouna airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">EL GOUNA AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <ul>
                        Design and project Tender document preparation which include the following:
                        <li>Terminal building 100 pax/hr., concrete Apron, landscape with 10.000 m2.</li>
                        <li>Upgrade for the Main Runway</li>
                        <li>Connection with the main road.</li>
                        <li>Infra-structure networks (Water, Sewage, and Electricity</li>
                        <li>Project road networks for Parking lots and road connection s with current airport facilities and airfield.</li>
                      </ul>
                    </v-read-more-box>
                  </v-card-text>
                  <v-col>
                    <!-- <v-dialog v-model="gounaDiag" width="600px" align="center" justify="center">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary"
                            depressed
                            v-bind="attrs"
                            width="100%"
                            v-on="on"
                          >
                            Explore
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">
                              <b>
                                EL GOUNA AIRPORT
                              </b>
                            </span>
                          </v-card-title>
                          <v-col>
                            <v-img
                              src="teneda3.jpg
                        "
                            >
                          </v-img>
                        </v-col>
                             <v-card-text>
                            <h3>Project Description</h3>
                            <p>
                              <h5><b>Design and project Tender document preparation which include the following:</b></h5>
                              <ul>
                                <li>Terminal building 100 pax/hr, concrete Apron, landscape with 10.000 m2.</li>
                                <li>Upgrade for the Main Runway.</li>
                                <li>Connection with the main road.</li>
                                <li>Infra-structure networks (Water, Sewage, and Electricity)</li>
                                <li>Project road networks for Parking lots and road connection s with current airport facilities and airfield.</li>
                              </ul>
                              <h5>
                                <b>Consultancy Services:</b>
                              </h5>
                            <ul>
                              <li>Surveying Work, Geo-Technical Work.</li>
                              <li>Architectural and Structural design for Terminal Building.</li>
                              <li>Electro-Mechanical, light current and I.T design.</li>
                              <li>Technical Specification.</li>
                              <li>Tender document preparation.</li>
                              <li>Project Supervision.</li>
                              <li>Managing QA/QC for the project.</li>
                            </ul>
                            <h5>
                              <b>Time Duration: </b>
                            </h5>
                            FROM F.Y 2017 TO (under construction)
                            </p>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn color="blue darken-1" text @click="gounaDiag = false">
                              Close
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="index1 = 0">
                              Open Images
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog> -->
                  </v-col>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/cairo airport.png"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <small>CAIRO INTERNATIONAL AIRPORT TERMINAL HALL 4</small>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <ul>
                        Design and project Tender document preparation which include the following:
                        <li>Terminal building 100 pax/hr., concrete Apron, landscape with 60.000m2.</li>
                        <li>Connection with the main road (Salah Salem Road).</li>
                        <li>Infra-structure networks (Water, Sewage, and Electricity) .</li>
                        <li>Project road networks for Parking lots and road connection s with current airport facilities and airfield.</li>
                      </ul>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/assiut airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 12px">NEW TERMINAL BUILDING (T.B) FOR ASSIUT INTERNATIONAL AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p>
                        Assiut International airport owned a very old small terminal building (T.B), EAC Planned to build a new T.B with a capacity of 800 pax/hour according to state of that and save distinguished level of service to the users.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/alamin airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">AIR FIELD SERVICES FOR ALMEEN INTERNATIONAL AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      IAC planned to renew the certificate of the airport according to regulation of the Egyptian Aviation Authority (ECAA).
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/airport city.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">AIRPORT CITY AT CAIRO INTERNATIONAl AIRPORT (CAC)</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      CAC owns 10 millions m2 around airport facilities , CAC planned to invest in this area of land by building an airport city for unique location of airport in middle east region .
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/ras shokair.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">RAS SHOKAIR AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Runway Upgrade with 2200 m length and 45m width including Taxiways and Aprons.
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/abo el gharadik.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">ABO ELGHRADIK AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="30"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Runway upgraded with 2000 meters length and 30 meters width including Taxiways and Aprons.
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/gabal elzet.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">GAPAL EL ZEET AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      Runway upgrade with2200m length and 45m width including Taxiways and Aprons.
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/aswan airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">ASWAN INTERNATIONAL AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p>
                        The failure main runway at Aswan Airport highly affected the
                        operators, the runway was upgraded using polymer modified asphalt
                        at F.Y2003 to F.Y 2004.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/gouna road airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">Upgrading of main runway 34-16   Elgouna-Airport</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p>
                        Upgrade main runway 34-16 ,,connections taxiway
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/airfield.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">AIRFIELD FOR HURGHADA INTERNATIONAL AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p>
                        Main runway and connecting taxiways upgrade.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/october airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">AIR SHOWS STAGE IN OCTOBER AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p style="text-align: justify;text-justify: inter-word;">
                        Three stories main building , First story includes store houses ,Second
                        story includes lounges , and third story for stage which shaded by a space
                        truss roof .
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/sohag airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">SUHAG INTERNATIONAL AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p style="text-align: justify;text-justify: inter-word;">
                        It was a dream to citizens of Suhag to have an airport linked them with
                        foreign countries have a great number of their relatives , also to develop their
                        poor country.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/gouna road airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">AIRFIELD FOR ABO SIMBL INTERNATIONAL AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p style="text-align: justify;text-justify: inter-word;">
                        According to lack maintenance since 2000 , the raveling and withering
                        and thermal crack became serious which affected aircraft safety
                        because of FOD.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/october sport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">ROAD NETWORK & AIROSPORTS APRON IN OCTOBER AIRPORT</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p style="text-align: justify;text-justify: inter-word;">
                        New construction of (EAA) in October airport requires a road network
                        to connect airfield with the new facilities and existing ones.
                        Also, connecting the academy with the main highway Cairo/El wahat is
                        another requirement.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="3"
                  xl="3"
                >
                  <v-img
                    class="white--text align-end"
                    src="/october airport.jpeg"
                    style="height: 250px;"
                  >
                    <v-card-title style="background-color: rgba(0, 0, 0, 0.5);" class="pa-2">
                      <v-col align="center" class="pa-0">
                        <b style="font-size: 17px">NEW BUGESERA INTERNATION AIRPORT( NBIA ) REPUBLIC OF ROWANDA</b>
                      </v-col>
                    </v-card-title>
                  </v-img>

                  <v-card-subtitle class="pb-0">
                    <h2><b>Airports</b></h2>
                  </v-card-subtitle>

                  <v-card-text class="text--primary">
                    <v-read-more-box
                      max-height="35"
                    >
                      <button slot="readMore" class="pt-3">
                        <b>Read More &hellip;</b>
                      </button>
                      <template slot="readLess" class="pt-3">
                        <div>&hellip; <b>Show Less</b></div>
                      </template>
                      <p style="text-align: justify;text-justify: inter-word;">
                        According to the increase of demand on the air transport , the
                        Rwandan civil aviation authority decided to build a new airport
                        40 KM from the old one in new bug sera town.
                      </p>
                    </v-read-more-box>
                  </v-card-text>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="about" id="about">
        <v-row
          align="center"
          style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
        >
          <v-col sm="12" lg="2">
            <v-container>
              <v-col align="center" justify="center">
                <v-img src="/airport.png" width="100" />
              </v-col>
            </v-container>
          </v-col>
          <v-col justify="center" style="background-color: white; border-radius: 10px; padding-top:5px;">
            <v-col>
              <h2 style="color: #424242">
                About Us
              </h2>
            </v-col>
            <v-col>
              <p style="text-align: justify;text-justify: inter-word;">
                <b>SGAC Consulting</b> is an international engineering consultancy firm with international and local experience in various fields of design, projects feasibility studies, technical studies , tender documents, projects supervision for roads, bridges, transportation, airports, infrastructure, housing, public buildings and hospitality projects.
              </p>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="services" id="services">
        <h2 class="hide-on-small-only" style="color: #424242">
          Our Services
        </h2>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/surv1.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Surveying Work</b></h3>
            </v-card-subtitle>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/go1.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Geo-Technical Work</b></h3>
            </v-card-subtitle>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/struct.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Architectural and Structural <br> design for Terminal Building</b></h3>
            </v-card-subtitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/electro.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Electro-Mechanical & Light current <br> I.T design</b></h3>
            </v-card-subtitle>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/tech.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Technical Specification</b></h3>
            </v-card-subtitle>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/doc.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Tender document preparation</b></h3>
            </v-card-subtitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/net.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Roads Networks</b></h3>
            </v-card-subtitle>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/land.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Landscape Design</b></h3>
            </v-card-subtitle>
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
          >
            <v-img
              class="white--text align-end"
              src="/super.jpg"
              style="height: 250px;"
            />
            <v-card-subtitle class="pb-0 text-center">
              <h3><b class="text--primary">Project Supervision</b></h3>
            </v-card-subtitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            class="z-depth-3"
            style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
          >
            <v-row>
              <v-col lg="3" sm="12">
                <v-row>
                  <v-img
                    class="white--text align-end"
                    src="/high.jpg"
                    max-width="250"
                  />
                  </v-img>
                </v-row>
              </v-col>
              <v-col>
                <h2><b>Consulting Services for Highways :-</b></h2>
                <ul>
                  <li>
                    Full Highway Design Package.
                  </li>
                  <li>
                    Traffic and Transportation studies.
                  </li>
                  <li>
                    Functional and Structural Evaluation for roads.
                  </li>
                  <li>
                    Full Pavement Maintenance Package.
                  </li>
                  <li>
                    Mix Design for smart Pavements ( cold applications ).
                  </li>
                  <li>
                    Full supervision Package Covering all the related Disciplines.
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row style="padding-top: 10px;">
          <v-col
            class="z-depth-3"
            style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
          >
            <v-row>
              <v-col lg="3">
                <v-row>
                  <v-col lg="3" sm="12">
                    <v-row>
                      <v-img
                        class="white--text align-end"
                        src="/runwayserv.jpg"
                        max-width="250"
                      />
                      </v-img>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col lg="3" sm="12">
                    <v-row>
                      <v-img
                        class="white--text align-end"
                        src="/aeroplan.jpg"
                        max-width="250"
                      />
                      </v-img>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>

              <v-col>
                <h2>
                  <b>Consulting Services for Airports :-</b>
                </h2>
                <span style="margin-top: 15px; text-align: justify;text-justify: inter-word;">
                  SGAC has extensive knowledge in national and international specifications for the planning, design and operations for aerodromes (mainly ICAO – Standards and Recommended Practices).
                  This enables SGAC to assist airports to develop their infrastructure (runways, taxiways, apron and other areas), manage compliance, and optimize capacity while ensuring the necessary level of safety - including but not limited to:
                  <br>
                </span>
                <ul>
                  <li>
                    Airport Master Planning ( Airfield , Terminals , ATC , FFR , ...)
                  </li>
                  <li>
                    Full New Airport design package (Architectural . Civil , MEP , IT and Systems )
                  </li>
                  <li>
                    Full Design Package for the update and Rehabilitation.
                  </li>
                  <li>
                    Airport operation Planning in Conjunction with Construction Works.
                  </li>
                  <li>
                    Airfield Pavement Evaluation ( Structural Capacity – Functional and Physical).
                  </li>
                  <li>
                    Full supervision Package Covering all the related Disciplines.
                  </li>
                  <li>
                    Full Pavement Maintenance Package.
                  </li>
                  <li>
                    Mix Design for smart Pavements ( cold applications ).
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row style="padding-top: 10px;">
          <v-col
            class="z-depth-3"
            style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
          >
            <v-row>
              <v-col lg="3" sm="12">
                <v-row>
                  <v-col lg="3" sm="12">
                    <v-row>
                      <v-img
                        class="white--text align-end"
                        src="/Bridges.jpg"
                        max-width="250"
                      />
                      </v-img>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <h2>
                  <b>Consulting Services for Bridges :-</b>
                </h2>
                <ul>
                  <li>
                    Full Bridge Design Package.
                  </li>
                  <li>
                    Full Bridge Shop drawing Package.
                  </li>
                  <li>
                    Technical Specification.
                  </li>
                  <li>
                    Tender document preparation.
                  </li>
                  <li>
                    Project Supervision.
                  </li>
                  <li>
                    Managing QA/QC for the project.
                  </li>
                  <li>
                    Planning schedule.
                  </li>
                  <li>
                    Maintenance bridges.
                  </li>
                  <li>
                    Strengthening construction with over load.
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="clients" id="clients">
        <v-row style="padding-top: 10px;">
          <v-col
            class="z-depth-3"
            style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
          >
            <h2 style="color: #424242">
              Our Clients
            </h2>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/sodic.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">SODIC</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/vibro.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">VIBRO</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/arab tec.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">ARAB TECH</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/gouna.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">El GOUNA</b></h3>
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/cairo international airport.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">CAC</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/orascom.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">ORASCOM</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/samco.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">SAMCO</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/arabcont.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">ARAB CONTRACTORS</b></h3>
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/el nile.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">NILE FOR GENERAL ROADS PROJECTS</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/el hay2a el handsya ll kwat l mosalaha.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">ENGINEERING AUTHORITY OF THE ARMED FORCES</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/arabco.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">ARABCO</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/bin sammar.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">BINSAMAAR</b></h3>
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/el salam.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">AL SALAM</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/el sherka el 3almya.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">ALMIAH</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/clients/abo 3areeda.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">ABUARIDA SONS</b></h3>
                </v-card-subtitle>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="jv" id="jv">
        <v-row>
          <v-col
            class="z-depth-3"
            style="background-color: #fafafa;
    color: rgba(0, 0, 0, 0.87); padding: 20px; border-radius: 10px;"
          >
            <h2 style="color: #424242">
              Our J.V Partners
            </h2>
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/fabris.jpeg"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">Fabris & Partners</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/uts.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">United ATS</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/ital.png"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">FERROVIE ITALIANE</b></h3>
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/pinna.jpeg"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">Pinnacle</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  width="200"
                  src="/hend.jpeg"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">HENDRICKS</b></h3>
                </v-card-subtitle>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="12"
                lg="3"
                xl="3"
              >
                <v-img
                  class="white--text align-end"
                  src="/pega.jpeg"
                />
                <v-card-subtitle class="pb-0 text-center">
                  <h3><b class="text--primary">Pegasus</b></h3>
                </v-card-subtitle>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-if="joinus" id="joinus">
        <v-row>
          <v-col cols="12" sm="12" lg="3">
            <v-container>
              <v-col align="center" justify="center">
                <v-img src="/airport.png" width="100" />
              </v-col>
            </v-container>
          </v-col>
          <v-col sm="12" lg="9" justify="center" style="background-color: white; border-radius: 10px; padding-top:5px;">
            <v-col>
              <h2 style="color: #424242">
                Application
              </h2>
            </v-col>
            <v-col>
              <p style="text-align: justify;text-justify: inter-word;">
                SGAC Group employees plays a vital role in our success. Our dedicated team of employees are the best in their fields and we aim to give our people the best environments to work in.
                Our people work side by side with our international partners learning from different cultures and work practices, they make things happen, on time and on budget. <br>To join us, please send your cover letter and resume <b>to</b>: <a href="mailto:Hr@sgac-group.com">Hr@sgac-group.com</a>
              </p>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import vReadMoreBox from 'v-read-more-box'
// import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {

  name: 'SgacCons',
  components: {
    vReadMoreBox
    // VueGallerySlideshow
  },
  data () {
    return {
      curTab: '',
      index: null,
      index1: null,
      index2: null,
      items: [
        {
          src: 'ahram.png'
        },
        {
          src: 'geotech.jpg'
        },
        {
          src: 'parking.jpg'
        },
        {
          src: 'service.jpg'
        }
      ],
      about: false,
      midRingDialog: false,
      sothMarinaDiag: false,
      north90Diag: false,
      gounaDiag: false,
      MNagibDiag: false,
      tenedaDiag: false,
      villasDiag: false,
      AssiutRoadDiag: false,
      balanahDiag: false,
      compDiag: false,
      projects: true,
      services: false,
      clients: false,
      jv: false,
      joinus: false,
      news_caro: [
        {
          src: 'four.jpg'
        },
        {
          src: 'geotech.jpg'
        },
        {
          src: 'parking.jpg'
        },
        {
          src: 'service.jpg'
        }
      ],
      proj1: [
        'gouna road airport.jpeg',
        'aswan airport.jpeg',
        'gabal elzet.jpeg',
        'abo el gharadik.jpeg',
        'ras shokair.jpeg',
        'airport city.jpeg',
        'alamin airport.jpeg',
        'capital.jpeg',
        'gouna airport.png',
        'maint.jpg'
      ],
      proj2: [
        'teneda/1_teneda.jpg',
        'teneda/2_teneda.jpg',
        'teneda/3_teneda.jpg',
        'teneda/4_teneda.jpg',
        'teneda/5_teneda.jpg',
        'teneda/6_teneda.jpg',
        'teneda/7_teneda.jpg',
        'teneda/8_teneda.jpg',
        'teneda/9_teneda.jpg',
        'teneda/10_teneda.jpg'
      ],
      teneda: [
        'teneda/1_teneda.jpg',
        'teneda/2_teneda.jpg',
        'teneda/3_teneda.jpg',
        'teneda/4_teneda.jpg',
        'teneda/5_teneda.jpg',
        'teneda/6_teneda.jpg',
        'teneda/7_teneda.jpg',
        'teneda/8_teneda.jpg',
        'teneda/9_teneda.jpg',
        'teneda/10_teneda.jpg'
      ],
      gouna_airport: [
        'gouna_airport/1.jpg',
        'gouna_airport/2.jpg',
        'gouna_airport/3.jpg',
        'gouna_airport/4.jpg',
        'gouna_airport/5.jpg',
        'gouna_airport/6.jpg',
        'gouna_airport/7.jpg',
        'gouna_airport/8.jpg',
        'gouna_airport/9.jpg',
        'gouna_airport/10.jpg',
        'gouna_airport/11.jpg',
        'gouna_airport/12.jpg',
        'gouna_airport/13.jpg',
        'gouna_airport/14.jpg',
        'gouna_airport/15.jpg'
      ]
    }
  },
  mounted () {},
  methods: {
    logEvent (evt) {
      // eslint-disable-next-line
      console.log(evt);
    },
    logEventOuter (evt) {
      // eslint-disable-next-line
      console.log(evt);
    },
    async navi (state) {
      await this.navigate(state)
      if (this.joinus) { document.getElementById('joinus').scrollIntoView() }
      if (this.about) { document.getElementById('about').scrollIntoView() }
      if (this.projects) { document.getElementById('projects').scrollIntoView() }
      if (this.services) { document.getElementById('services').scrollIntoView() }
      if (this.clients) { document.getElementById('clients').scrollIntoView() }
      if (this.jv) { document.getElementById('jv').scrollIntoView() }
    },
    navigate (state) {
      if (state === 'about') {
        this.about = true
        this.projects = false
        this.services = false
        this.clients = false
        this.jv = false
        this.joinus = false
      }
      if (state === 'projects') {
        this.about = false
        this.projects = true
        this.services = false
        this.clients = false
        this.jv = false
        this.joinus = false
      }
      if (state === 'services') {
        this.about = false
        this.projects = false
        this.services = true
        this.clients = false
        this.jv = false
        this.joinus = false
      }
      if (state === 'clients') {
        this.about = false
        this.projects = false
        this.services = false
        this.clients = true
        this.jv = false
        this.joinus = false
      }
      if (state === 'jv') {
        this.about = false
        this.projects = false
        this.services = false
        this.clients = false
        this.jv = true
        this.joinus = false
      }
      if (state === 'joinus') {
        this.about = false
        this.projects = false
        this.services = false
        this.clients = false
        this.jv = false
        this.joinus = true
      }
    }
  }
}
</script>

<style lang="css" scoped>
.frame{
  background-color:#ddc;
  border:solid 2.5vmin #eee;
  border-bottom-color:#a1887f;
  border-left-color:#8d6e63;
  border-radius:2px;
  border-right-color:#8d6e63;
  border-top-color:#795548;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  box-sizing:border-box;
  text-align:center;
}
.frame-vid{
  background-color:#ddc;
  border:solid 2.5vmin #eee;
  border-bottom-color:#bdbdbd;
  border-left-color:#9e9e9e;
  border-radius:2px;
  border-right-color:#9e9e9e;
  border-top-color:#757575;
  box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
  box-sizing:border-box;
  text-align:center;
}
.cont{
  display: none;
}
</style>
