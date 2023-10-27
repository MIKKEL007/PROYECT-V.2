<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    Calculo Civil
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="contenedor" >
                <div class="card" v-for="(CalculoCivil, i) in CalculoCiviles" :key="i">
                    <div class="imagen">
                        <img :src="CalculoCivil.imagen" :alt="CalculoCivil.nombre">
                    </div>
                    <ion-header>
                        <div class="title">
                            {{ CalculoCivil.nombre }}
                        </div>
                    </ion-header>
                    <ion-button :router-link="`/tabs/Calculo/${CalculoCivil.nombre}`" color="dark" size="large"
                        expand="full">{{ CalculoCivil.boton }}</ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton } from "@ionic/vue"
export default {
    name: "CalculoCivil",
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton
    },
    computed: {
        CalculoCiviles() {
            return this.$store.getters.getCalculoCiviles;
        },
    },
    mounted() {
        this.$store.dispatch('fetchCalculoCiviles');
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
    border: 1px solid #7a7474;
    width: 350px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(28, 92, 148, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}

.imagen {
    height: 300px;
    width: 90%;
    margin: auto;
}

img {
    border: 1px solid transparent;
    border-radius: 25px;
    width: 100%;
    height: 100%;
}

.title {
    text-decoration: none;
    color: #A04000;
    text-align: center;
    margin: 5px;
    font-size: 24px;
}

.sub-title {
    text-decoration: none;
    color: #E59866;
    text-align: center;
    margin: 5px;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

ion-button.custom-button {
    --background: #3498db;
    --color: #fff;
    --border-radius: 5px;
    font-weight: bold;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

ion-button.custom-button:hover {
    --background: #2980b9 !important;
}

/* Agrega esta regla para cambiar el color del header a negro */
ion-header ion-toolbar {
    --background: #000;
    --color: #fff;
}
</style>