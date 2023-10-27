<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Procedimiento</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">

            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        Procedimiento {{ this.$route.params.tipo }}
                    </ion-card-title>
                    <ion-card-subtitle>Listado de Procedimientos</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <div class="contenedor">
                        <div v-for="(Procedimiento, i) in Procedimientos" :key="i">
                            <div class="card" v-if="Procedimiento.opcion === this.$route.params.tipo">
                                <div class="imagen">
                                    <img :src="Procedimiento.imagen" />
                                </div>
                                <div class="html" v-html="Procedimiento.html"></div>
                                <ion-button class="boton" @click="Procedimiento.comprar">comprar</ion-button>
                                <ion-button class="boton" @click="Procedimiento.calculo">Calcular</ion-button>
                                <ion-button class="boton" @click="Procedimiento.imprimir">imprimir</ion-button>
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
    name: 'Procedimiento',
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail, IonLabel, IonItem
    },
    computed: {
        Procedimientos() {
            return this.$store.getters.getProcedimientos;
        },
    },
    mounted() {
        this.$store.dispatch('fetchProcedimientos');
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
    border: 1px solid #000;
    width: 700px;
    padding: 10px;
    margin: 10px;
    text-align: center;
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