<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-title>Calculadora de Materiales</ion-title>
        <ion-buttons slot="end">
          <ion-button :router-link="`/tabs/CalculoCivil`" expand="full">Empezar Ahora</ion-button>
          <ion-button expand="full">Aprender Más</ion-button>
        </ion-buttons>
      </ion-toolbar> -->
    </ion-header>

    <ion-content>
      <!-- Carrusel -->
      <ion-img src="/public/Inicio/contruccion.jpg" class="carousel-image"
        style="width: 100%; height: 50vh; object-fit: cover;" />



      <div class="divider"></div>


      <div class="info-cards-container">
        <ion-card class="info-card">
          <ion-card-header>
            <ion-card-title class="info-title">Ahorra tiempo y recursos en tus proyectos.</ion-card-title>
          </ion-card-header>
          <ion-card-content class="info-description">
            <ion-icon name="cube" class="info-icon"></ion-icon>
            <p>Calcula, mide y convierte de manera eficiente.</p>
          </ion-card-content>
        </ion-card>

        <ion-card class="info-card">
          <ion-card-header>
            <ion-card-title class="info-title">Facilita tus tareas de arquitectura.</ion-card-title>
          </ion-card-header>
          <ion-card-content class="info-description">
            <ion-icon name="construct" class="info-icon"></ion-icon>
            <p>Calcula materiales, mide áreas y convierte unidades.</p>
          </ion-card-content>
        </ion-card>

        <ion-card class="info-card">
          <ion-card-header>
            <ion-card-title class="info-title">Más que una calculadora, una herramienta integral.</ion-card-title>
          </ion-card-header>
          <ion-card-content class="info-description">
            <ion-icon name="hammer" class="info-icon"></ion-icon>
            <p>Simplifica tu trabajo con nuestras funciones.</p>
          </ion-card-content>
        </ion-card>
      </div>

      <div class="divider"></div>

      <div class="card-container">
        <ion-card v-for="(image, index) in images" :key="index" class="rounded-card">
          <ion-img :src="image" class="rounded-image"></ion-img>
        </ion-card>
      </div>

      <div class="divider"></div>



      <div class="marketing-section">
        <div class="left-content">

          <br>
          <div class="marketing-card special-offers">
            <h3>¡Especial para Arquitectos!</h3>
            <p class="offer-description">Optimiza tus proyectos con nuestra aplicación. Suscríbete hoy y obtén un
              <strong>descuento del 15%</strong> en tu primera suscripción anual. ¡Ahorra tiempo y recursos en tus
              cálculos de materiales!</p>
            <a href="#" class="cta-button">Aprovecha la Oferta</a>
          </div>

        </div>
        <div class="marketing-video">
          <video controls width="640" height="360">
            <source src="/public/video.mp4" type="video/mp4" autoplay>
            Tu navegador no admite la reproducción de video.
          </video>
          <br><br>
          <div class="social-icons">
            <h3>Síguenos!</h3>
            <div class="social-icon-container">
              <a href="enlace-de-tu-red-social" target="_blank">
                <img src="/public/Inicio/Fece.png" alt="Facebook" style="width: 40px;" />
              </a>

              <a href="enlace-de-tu-red-social" target="_blank">
                <img src="/public/Inicio/tw.png" alt="Twitter" style="width: 40px;" />
              </a>
            </div>
          </div>

        </div>
        <div class="right-content">
          <div class="full-screen-newsletter">
            <div class="newsletter">
              <h3>Suscríbete a Nuestro Boletín</h3>
              <p>Recibe las últimas actualizaciones y noticias sobre nuestra aplicación directamente en tu bandeja de
                entrada.</p>
              <form>
                <input style="color: #333;" type="email" placeholder="Tu dirección de correo electrónico" />
                <button>Suscribirse</button>
              </form>
            </div>
          </div>
        </div>

      </div>



      <!-- tarjetas -->

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonContent, IonToolbar, IonButton } from "@ionic/vue";


const images = [
  "/public/bloque.jpg",
  "/public/area.png",
  "/public/estructura.png",
  "/public/conversion.png",
  "/public/metal.png",
];

const carouselOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
};
</script>



<style scoped>
.feature-list {
  list-style-type: disc;
  text-align: left;
  margin-left: 20px;
}

.logo-container {
  text-align: center;
}

.logo-img {
  width: 200px;
  height: 100px;
}

.options-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.options-container ion-button {
  flex: 1;
  margin: 0 10px;
}

.most-sold {
  text-align: center;
  margin: 20px 0;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.card-group {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.rounded-card {
  text-align: center;
  border-radius: 100px;
  overflow: hidden;
  width: 200px;
  height: 200px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(3, 0, 14, 0.882);
  border: 4px solid #ffff08;

}

.rounded-image {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.carousel-image {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
  margin: 0 10px;
  width: 300px;
  height: 200px;
  transition: transform 0.5s;
  cursor: pointer;
  border-radius: 3px;
}

.carousel-image:hover {
  transform: scale(1.1);
}

ion-content {
  background-color: #333;
  color: white;
}

.divider {
  height: 1px;
  background-color: #c2bfbf;
  margin: 20px 0;
}

.info-cards-container {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.info-card {
  border-radius: 10px;
  background: linear-gradient(135deg, #e66215, #cce108);
  color: white;
  width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.info-card:hover {
  transform: scale(1.05);
}

.info-icon {
  font-size: 0rem;
  margin: 0px 0;
}

.info-title {
  font-size: 1.5rem;
  text-align: center;
  margin: 5px 0;
}

.info-description {
  font-size: 0rem;
  text-align: center;
  margin: 0px 0;
}

.marketing-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}




.special-offers {
  background-color: #b65c07;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}

h3 {
  font-size: 1.8rem;
  margin: 0;
}

.offer-description {
  font-size: 1.2rem;
  margin: 10px 0;
}

strong {
  font-weight: bold;
  color: #ffdb58;
}

.cta-button {
  display: inline-block;
  background-color: #ffdb58;
  color: #0e0201;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #463125;
}





.full-screen-newsletter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #072642;
  color: white;
  text-align: center;
}

.newsletter {
  max-width: 400px;
  padding: 20px;
}

h3 {
  font-size: 1.5rem;
  margin: 10px 0;
}

p {
  font-size: 1rem;
}

input[type="email"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

button {
  background-color: #e66215;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #cc8400;
}

.marketing-section {
  display: flex;
  justify-content: space-between;
}

.left-content {
  flex: 1;
  padding: 20px;
  background-color: #f2f2f2;
}

.right-content {
  flex: 1;
  padding: 20px;
  background-color: #e2e2e2;
}

.social-icons {
  text-align: center;
}

.social-icon-container {
  display: inline-block;
}
</style>

