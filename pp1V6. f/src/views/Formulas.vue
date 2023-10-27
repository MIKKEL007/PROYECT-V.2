<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>formula</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>
                        Calculos de {{ this.$route.params.formula }}
                    </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <div class="contenedor">
                        <div v-for="(formula, i) in formulas" :key="i">
                            <div class="card" v-if="formula.tipo === this.$route.params.formula">
                                <div class="imagen">
                                    <img :alt="formula.nombre" :src="formula.imagen" />
                                </div>
                                <div class="title">
                                    {{ formula.nombre }}
                                </div>
                                <ion-button :router-link="`/tabs/Procedimiento/${formula.nombre}`" color="success"
                                    size="large" expand="full">Seleccionar</ion-button>
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
    name: 'Formulas',
    components: {
        IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail, IonLabel, IonItem
    },
    computed: {
        formulas() {
            return this.$store.getters.getFormulas;
        },
    },
    mounted() {
        this.$store.dispatch('fetchFormulas');
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
    width: 450px;
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
}</style>