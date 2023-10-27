<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Productos</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                    </ion-card-title>
                    <ion-card-subtitle>Listado de Productos FREUND</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <div class="contenedor" v-for="(Producto, i) in Productos" :key="i">
                        <div class="card" v-for="(AreGraTi, j) in Producto.ArenaGravaTierra" :key="j">
                            <div class="box">
                                <img class="imagen" :src="AreGraTi.URL" alt="">
                            </div>
                            <div class="box">
                                <div class="info">{{ AreGraTi.Field1_text }}</div>
                            <div class="precio">{{ AreGraTi.Field2 }}</div>
                            </div>
                        </div>
                        <div class="card" v-for="(MezcRepe, j) in Producto.MezclasRepellos" :key="j">
                            <div class="box">
                                <img class="imagen" :src="MezcRepe.URL" alt="">
                            </div>
                            <div class="box">
                                <div class="info">{{ MezcRepe.Field1_text }}</div>
                            <div class="precio">{{ MezcRepe.Field2 }}</div>
                            </div>
                        </div>
                        <div class="card" v-for="(ladrillo, j) in Producto.ladrillos" :key="j">
                            <div class="box">
                                <img class="imagen" :src="ladrillo.URL" alt="">
                            </div>
                            <div class="box">
                                <div class="info">{{ ladrillo.Field1_text }}</div>
                            <div class="precio">{{ ladrillo.Field2 }}</div>
                            </div>
                        </div>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail, IonLabel, IonItem } from '@ionic/vue'
export default {
    name: 'Productos',
    data() {
        return {
            informacion: ''
        }
    },
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail, IonLabel, IonItem
    },

    computed: {
        Productos() {
            return this.$store.getters.getProductos;

        },
    },
    mounted() {
        this.$store.dispatch('fetchProductos');
    },
}
</script>

<style scoped>
.contenedor {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    border: none;
    background-color: #FFF;
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    padding: 10px;
    justify-content: space-between;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}
.box{
    width: 45%;
}
.imagen {
    height: 125px;
    width: 100%;
    margin: auto;
}

img {
    border: 1px solid transparent;
    border-radius: 25px;
    width: 100%;
    height: 100%;
}
.info{
    color: #A04000;
    font-size: 1rem;
}

.precio{
    color: #46a204;
    font-size: 2rem;
}
.html {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.title {
    text-decoration: none;
    color: #A04000;
    text-align: center;
    margin: 5px;
}

.sub-title {
    text-decoration: none;
    color: #E59866;
    text-align: center;
    margin: 5px;
}
</style>