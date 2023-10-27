<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom" color="dark">
                <ion-tab-button tab="inicio" href="/tabs/inicio">
                    <ion-icon :icon="home"></ion-icon>
                    <ion-label>Inicio</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="CalculoCivil" href="/tabs/CalculoCivil">
                    <ion-icon :icon="grid"></ion-icon>
                    <ion-label>CalculoCivil</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="Productos" href="/tabs/Productos">
                    <ion-icon :icon="grid"></ion-icon>
                    <ion-label>Productos</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
<script>
    import { IonPage, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon , IonLabel} from "@ionic/vue"
    import { home , grid } from "ionicons/icons"
    export default {
        name: 'Tabs',
        components: {
            IonPage, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet, IonIcon, IonLabel
        },
        data(){
            return{
                home , grid
            }
        }
    }
</script>

