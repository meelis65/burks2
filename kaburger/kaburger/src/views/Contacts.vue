<template>
<body>
  <div class="container">
    <div class="row menu">
      <Navbar />
    </div>
    <div class="row">
    <img class="banner" src="/img/ka-burx.jpg" alt="logo" />
    </div>
</div>
<div class="container">
  <div class="row contacts">
    <div class="col">
  <h1 class="font-weight-bold">Kontaktid</h1>
    <div class="address">
      <h2>Aadress: Aadress 123, Viljandi</h2>
    </div>
    
    <div class= "telephone">
      <h2>Telefon: 512 3456</h2>
    </div>

    <div class= "email">
      <h2>E-mail: kaburger@gmail.com</h2>
    </div>

    <div class="open">
      <h2>Oleme avatud:</h2>
      <div class="hours">
    <h3> E-R 10-20</h3>
    <h3> L-P 10-22</h3>
      </div>
    </div>
  </div> 
  </div>
  <div class="footer">
      <Footer /> 
       </div>
      </div>
  </body>
</template>

<script>

import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {

  name: "Contacts",
  components: {
    Footer, 
    Navbar,
  },
};

</script>


<style scoped>
.menu {
  background-color: #F8BD7F;
}

body {
background-color: #FACFAD;
}

.contacts {
  background-color: #F2AA7E;
}

.banner {
  width: 1650px;
  height: 288px;
  padding: 0px;
}
</style>