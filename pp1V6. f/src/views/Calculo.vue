<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Calculo de {{ this.$route.params.categoria }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card>
                <ion-card-header>
                </ion-card-header>
                <ion-card-content>
                    <div class="contenedor">
                        <div v-for="(Calculo, i) in Calculos" :key="i">
                            <div class="card" v-if="Calculo.tipo === this.$route.params.categoria">
                                <div class="imagen">
                                    <img :alt="Calculo.nombre" :src="Calculo.imagen" />
                                </div>
                                <div class="title">
                                    {{ Calculo.nombre }}
                                </div>
                                <div v-if="Calculo.formula == 'si'">
                                    <ion-button :router-link="`/tabs/Formulas/${Calculo.nombre}`" color="primary"
                                        size="large" expand="full">Explorar</ion-button>
                                </div>
                                <div v-else>
                                    <ion-button :router-link="`/tabs/Procedimiento/${Calculo.nombre}`" color="success"
                                        size="large" expand="full">Seleccionar</ion-button>
                                </div>

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
    name: 'Calculo',
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail, IonLabel, IonItem
    },
    computed: {
        Calculos() {
            return this.$store.getters.getCalculos;
        },
    },
    mounted() {
        this.$store.dispatch('fetchCalculos');
    },
}
</script>

<style scoped>
.contenedor {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
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

ion-header ion-toolbar {
    --background: #000;
    --color: #fff;
}

</style>