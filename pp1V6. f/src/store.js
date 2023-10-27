
import { createStore } from 'vuex';
import {AreaTrapecio,AreaFiguraPerspectiva,AreaCuadradoCopaCircularDoble,AreaCuadradoCopaCircular,AreaTrianguloEscaleno,AreaTrapezoide,AreaElipse,AreaTriangulo,AreaCuadrado,AreaRectangulo, AreaCirculo,VolumenPrismaRectangular,VolumenCilindro,VolumenTanqueRectangular,VolumenVolqueteTriangular,VolumenVolqueteTrapezoide,VolumenEsfera,VolumenMediaEsfera,VolumenPrisma,CalcularCantidadBloques,CalcularPesoBarraTuberiaRedonda,CalcularPesoBarraCuadrada,CalcularPesoBarraRedonda,LadrillosVolumen, LadrillosPared,LadrillosParedCircular,CalcularAsfalto,CalcularYeso,TanqueCircularHormigon, ConcretoColumnaRedonda,ProcContVol, LosaHormig, yeso, asfalto, superelevacion, AceroCalc, EncofradoCalc, TanqueCalc, DiagonalCalc, CimentacionCalc, ConcretaCalc, ColumnaCuadradaHormigon } from '@/utils/calcular.js';

export default createStore({
    state: {
        productos: [],
        procedimientos: [],
        calculos: [],
        CalculoCiviles: [],
        formulas: []
    },
    methods: {
    AreaTrapecio,AreaFiguraPerspectiva,AreaCuadradoCopaCircularDoble,AreaCuadradoCopaCircular,AreaTrianguloEscaleno,AreaTrapezoide,AreaElipse,AreaTriangulo,AreaCuadrado,AreaRectangulo, AreaCirculo,VolumenPrismaRectangular,VolumenCilindro,VolumenTanqueRectangular,VolumenVolqueteTriangular,VolumenVolqueteTrapezoide,VolumenEsfera,VolumenMediaEsfera,VolumenPrisma,CalcularCantidadBloques,CalcularPesoBarraTuberiaRedonda,CalcularPesoBarraCuadrada,CalcularPesoBarraRedonda, LadrillosVolumen, LadrillosPared, LadrillosParedCircular, CalcularAsfalto,CalcularYeso,TanqueCircularHormigon, ConcretoColumnaRedonda,  ProcContVol, LosaHormig, yeso, asfalto, superelevacion, AceroCalc, EncofradoCalc, TanqueCalc, DiagonalCalc, CimentacionCalc, ConcretaCalc
    },
    mutations: {
        SET_PRODUCTOS(state, productos) {
            state.productos = productos;
        },
        SET_PROCEDIMIENTOS(state, procedimientos) {
            state.procedimientos = procedimientos;
        },
        SET_CALCULOS(state, calculos) {
            state.calculos = calculos;
        },
        SET_CALCULOCIVILES(state, CalculoCiviles) {
            state.CalculoCiviles = CalculoCiviles;
        },
        SET_FORMULAS(state, formulas) {
            state.formulas = formulas;
        },
    },
    actions: {
        fetchProductos({ commit }) {
            const productos = [
                {
                    ArenaGravaTierra: [
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=cd4bd797-e725-4caa-aac4-23642c95748b&width=250&height=250&qa=75&cachingValidator=1650121904&ext=.jpg",
                            Field1_text: "ARENA PRECIO PUESTO EN TIENDAS SAN MIGUEL",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/cd4bd797-e725-4caa-aac4-23642c95748b?producto=arena%20precio%20puesto%20en%20tiendas%20san%20miguel",
                            Field2: 33.75
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=4f7257ad-eae6-4a91-abe7-d241055a3aaa&width=250&height=250&qa=75&cachingValidator=-1774004786&ext=.jpg",
                            Field1_text: "GRAVA EMBOLSADA N.º 1 PRECIO PUESTO EN TIENDAS SAN MIGUEL",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/4f7257ad-eae6-4a91-abe7-d241055a3aaa?producto=grava%20embolsada%20n.%C2%BA%201%20precio%20puesto%20en%20tiendas%20san%20miguel",
                            Field2: 66.25
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=062b4e38-1e17-412e-b756-e30d8660239b&width=250&height=250&qa=75&cachingValidator=450231866&ext=.jpg",
                            Field1_text: "ARENA EMBOLSADA PRECIO PUESTO EN TIENDAS SANTA ANA",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/062b4e38-1e17-412e-b756-e30d8660239b?producto=arena%20embolsada%20precio%20puesto%20en%20tiendas%20santa%20ana",
                            Field2: 40.85
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=6ca8bbff-1a86-4a69-b466-f226756bff95&width=250&height=250&qa=75&cachingValidator=-332175952&ext=.jpg",
                            Field1_text: "ARENA COLADA PRECIO PUESTO EN TIENDA SANTA ANA",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/6ca8bbff-1a86-4a69-b466-f226756bff95?producto=arena%20colada%20precio%20puesto%20en%20tienda%20santa%20ana",
                            Field2: 36.25
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=a506170b-153c-45db-b181-e43efc8621d9&width=250&height=250&qa=75&cachingValidator=-1773028802&ext=.jpg",
                            Field1_text: "GRAVA N.º 1 PRECIO PUESTO EN TIENDAS SAN MIGUEL",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/a506170b-153c-45db-b181-e43efc8621d9?producto=grava%20n.%C2%BA%201%20precio%20puesto%20en%20tiendas%20san%20miguel",
                            Field2: 47.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=ea3e391f-3d5a-4bd0-92e4-7954cf6fd31b&width=250&height=250&qa=75&cachingValidator=-845725420&ext=.jpg",
                            Field1_text: "GRAVA EMBOLSADA N.º 1 PRECIO PUESTO EN TIENDAS SAN SALVADOR",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/ea3e391f-3d5a-4bd0-92e4-7954cf6fd31b?producto=grava%20embolsada%20n.%C2%BA%201%20precio%20puesto%20en%20tiendas%20san%20salvador",
                            Field2: 69.95
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=9c2b471c-4ceb-4625-973b-c00c7d674187&width=250&height=250&qa=75&cachingValidator=1682429796&ext=.jpg",
                            Field1_text: "ARENA EMBOLSADA PRECIO PUESTO EN TIENDAS SAN MIGUEL",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/9c2b471c-4ceb-4625-973b-c00c7d674187?producto=arena%20embolsada%20precio%20puesto%20en%20tiendas%20san%20miguel",
                            Field2: 53.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=843315b9-3984-4983-adf7-4d8a08d8ae96&width=250&height=250&qa=75&cachingValidator=-1085995860&ext=.jpg",
                            Field1_text: "GRAVA N.º 1 PRECIO PUESTO EN TIENDA SONSONATE",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/843315b9-3984-4983-adf7-4d8a08d8ae96?producto=grava%20n.%C2%BA%201%20precio%20puesto%20en%20tienda%20sonsonate",
                            Field2: 47.95
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=8b0383b5-9393-4e84-9b8e-6c8e8e85bcd6&width=250&height=250&qa=75&cachingValidator=-2056135907&ext=.jpg",
                            Field1_text: "GRAVA N.º 1 PRECIO PUESTO EN TIENDAS SAN SALVADOR",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/8b0383b5-9393-4e84-9b8e-6c8e8e85bcd6?producto=grava%20n.%C2%BA%201%20precio%20puesto%20en%20tiendas%20san%20salvador",
                            Field2: 47.25
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=0baecddf-a413-48c2-a5b6-36a0b1d8d2f9&width=250&height=250&qa=75&cachingValidator=-366129779&ext=.jpg",
                            Field1_text: "ARENA EMBOLSADA PRECIO PUESTO EN TIENDA LOURDES",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/0baecddf-a413-48c2-a5b6-36a0b1d8d2f9?producto=arena%20embolsada%20precio%20puesto%20en%20tienda%20lourdes",
                            Field2: 39.95
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=d34a64d3-fe1a-4823-ac65-a8f2d37b8d84&width=250&height=250&qa=75&cachingValidator=-2055876311&ext=.jpg",
                            Field1_text: "GRAVA N.º 1 PRECIO PUESTO EN TIENDA SANTA ANA",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/d34a64d3-fe1a-4823-ac65-a8f2d37b8d84?producto=grava%20n.%C2%BA%201%20precio%20puesto%20en%20tienda%20santa%20ana",
                            Field2: 48.75
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=4c5fb145-8f86-45c1-9046-87d35fd816ae&width=250&height=250&qa=75&cachingValidator=1602701609&ext=.jpg",
                            Field1_text: "GRAVA N.º 1 PRECIO PUESTO EN TIENDA LOURDES",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/4c5fb145-8f86-45c1-9046-87d35fd816ae?producto=grava%20n.%C2%BA%201%20precio%20puesto%20en%20tienda%20lourdes",
                            Field2: 53.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=792b27a8-097d-4d63-84c1-77ae75461602&width=250&height=250&qa=75&cachingValidator=-2089806035&ext=.jpg",
                            Field1_text: "ARENA COLADA EMBOLSADA PRECIO PUESTO EN SAN SALVADOR",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/792b27a8-097d-4d63-84c1-77ae75461602?producto=arena%20colada%20embolsada%20precio%20puesto%20en%20san%20salvador",
                            Field2: 84.95
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=8d70df4e-ac70-4e41-8c5c-17940e1cad54&width=250&height=250&qa=75&cachingValidator=342792222&ext=.jpg",
                            Field1_text: "GRAVA N.°1 EMBOLSADA PRECIO PUESTO EN TIENDA LOURDES",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/8d70df4e-ac70-4e41-8c5c-17940e1cad54?producto=grava%20n.%C2%B01%20embolsada%20precio%20puesto%20en%20tienda%20lourdes",
                            Field2: 59.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=c28275c6-17fb-42bd-948b-1491d5b9e023&width=250&height=250&qa=75&cachingValidator=750056493&ext=.jpg",
                            Field1_text: "ARENA EMBOLSADA PRECIO PUESTO EN TIENDAS SAN SALVADOR",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/c28275c6-17fb-42bd-948b-1491d5b9e023?producto=arena%20embolsada%20precio%20puesto%20en%20tiendas%20san%20salvador",
                            Field2: 62.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=660d480f-fad6-4115-973a-92ce32113e90&width=250&height=250&qa=75&cachingValidator=-477055004&ext=.jpg",
                            Field1_text: "ARENA COLADA PRECIO PUESTO EN TIENDAS SAN SALVADOR",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/660d480f-fad6-4115-973a-92ce32113e90?producto=arena%20colada%20precio%20puesto%20en%20tiendas%20san%20salvador",
                            Field2: 36.50
                        }
                    ],
                    MezclasRepellos: [
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=9b623234-1978-4803-8e60-eb49c6d696ac&width=250&height=250&qa=75&cachingValidator=1726408375&ext=.jpg",
                            Field1_text: "CEMENTO MAESTRO ALBAÑILERIA GRIS 93.5L HOLCIM PRECIO PUESTO EN TIENDA SONSONATE",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/9b623234-1978-4803-8e60-eb49c6d696ac?producto=cemento%20maestro%20alba%C3%B1ileria%20gris%2093.5l%20holcim%20precio%20puesto%20en%20tienda%20sonsonate",
                            Field2: 7.90
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=63360ad8-036b-482c-a256-ba1d03193f3e&width=250&height=250&qa=75&cachingValidator=-1379360804&ext=.jpg",
                            Field1_text: "ESCALERA 2 BANDAS DOMESTICO DE ALUMINIO 200 LIBRA 6 FT TIPO III",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/63360ad8-036b-482c-a256-ba1d03193f3e?producto=escalera%202%20bandas%20domestico%20de%20aluminio%20200%20libra%206%20ft%20tipo%20iii",
                            Field2: 53.49
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=8972f0dc-9acb-4db2-9051-6cf07e9c8a50&width=250&height=250&qa=75&cachingValidator=415944844&ext=.jpg",
                            Field1_text: "CEMENTO PORTLAND FUERTE GRIS (93.5 LB) PRECIO PUESTO EN TIENDAS SAN SALVADOR",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/8972f0dc-9acb-4db2-9051-6cf07e9c8a50?producto=cemento%20portland%20fuerte%20gris%20%2893.5%20lb%29%20precio%20puesto%20en%20tiendas%20san%20salvador",
                            Field2: 9.15
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=39efa230-2044-4fcb-b0ea-653bff390060&width=250&height=250&qa=75&cachingValidator=486519441&ext=.jpg",
                            Field1_text: "DISCO DIAMANTE DE CORTE SEGMENTADO 9 PULGADAS PARA CONCRETO PSF",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/39efa230-2044-4fcb-b0ea-653bff390060?producto=disco%20diamante%20de%20corte%20segmentado%209%20pulgadas%20para%20concreto%20psf",
                            Field2: 28.90
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=2d52767e-547b-46c7-870b-0182f4c81f83&width=250&height=250&qa=75&cachingValidator=970217609&ext=.jpg",
                            Field1_text: "CEMENTO PORTLAND FUERTE GRIS 93.5 LB HOLCIM PRECIO PUESTO EN TIENDA SANTA ANA",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/2d52767e-547b-46c7-870b-0182f4c81f83?producto=cemento%20portland%20fuerte%20gris%2093.5%20lb%20holcim%20precio%20puesto%20en%20tienda%20santa%20ana",
                            Field2: 8.88
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=4378f675-4dc0-43e6-abe2-c6acefac56c7&width=250&height=250&qa=75&cachingValidator=1480609759&ext=.jpg",
                            Field1_text: "CEMENTO MAESTRO ALBAÑILERIA GRIS 93.5 LB HOLCIM PRECIO PUESTO EN TIENDAS SAN MIGUEL",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/4378f675-4dc0-43e6-abe2-c6acefac56c7?producto=cemento%20maestro%20alba%C3%B1ileria%20gris%2093.5%20lb%20holcim%20precio%20puesto%20en%20tiendas%20san%20miguel",
                            Field2: 8.20
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=772d2f2c-188c-444c-b4d9-b464bb8fe347&width=250&height=250&qa=75&cachingValidator=1570687756&ext=.jpg",
                            Field1_text: "RESPIRADOR MEDIA CARA TERMOPLÁSTICO T-M",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/772d2f2c-188c-444c-b4d9-b464bb8fe347?producto=respirador%20media%20cara%20termopl%C3%A1stico%20t-m",
                            Field2: 19.90
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=1b8efef9-ffce-48a0-b6d0-5f7b1cd1787b&width=250&height=250&qa=75&cachingValidator=-1354248455&ext=.jpg",
                            Field1_text: "CARTUCHO CONTRA VAPORES ORGÁNICOS",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/1b8efef9-ffce-48a0-b6d0-5f7b1cd1787b?producto=cartucho%20contra%20vapores%20org%C3%A1nicos",
                            Field2: 16.00
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=81a685f9-633d-4f0c-a251-c1f66f0543da&width=250&height=250&qa=75&cachingValidator=1420394500&ext=.jpg",
                            Field1_text: "SELLADOR POLIURETANO DURETÁN GRIS 300ML",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/81a685f9-633d-4f0c-a251-c1f66f0543da?producto=sellador%20poliuretano%20duret%C3%A1n%20gris%20300ml",
                            Field2: 6.00
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=964af7dd-f901-42e4-9288-26af77f16c66&width=250&height=250&qa=75&cachingValidator=-395794930&ext=.jpg",
                            Field1_text: "LUMINARIA EMPOTRAR REDONDO PANEL LED 6 WATTS LUZ BLANCA REDONDO BLANCO",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/964af7dd-f901-42e4-9288-26af77f16c66?producto=luminaria%20empotrar%20redondo%20panel%20led%206%20watts%20luz%20blanca%20redondo%20blanco",
                            Field2: 4.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=235bc4d9-b10a-4828-9566-96a4d76f4ca4&width=250&height=250&qa=75&cachingValidator=1873343202&ext=.jpg",
                            Field1_text: "PISTOLA ROCIADORA PARA PINTAR 450 W 110/120 V 3 PSI 800 ML",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/235bc4d9-b10a-4828-9566-96a4d76f4ca4?producto=pistola%20rociadora%20para%20pintar%20450%20w%20110%2F120%20v%203%20psi%20800%20ml",
                            Field2: 29.99
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=ac0a46f2-d6d9-41fe-9039-5d9fb5da209a&width=250&height=250&qa=75&cachingValidator=-522110677&ext=.jpg",
                            Field1_text: "FOCO LED ROSCA E27 20 WATTS LUZ BLANCA",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/ac0a46f2-d6d9-41fe-9039-5d9fb5da209a?producto=foco%20led%20rosca%20e27%2020%20watts%20luz%20blanca",
                            Field2: 3.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=ace25534-b1cd-4db3-bf42-5c734c7defd3&width=250&height=250&qa=75&cachingValidator=312613279&ext=.jpg",
                            Field1_text: "REPUESTO ACCESORIO TANQUE INODORO FLUIDMASTER 200AK133",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/ace25534-b1cd-4db3-bf42-5c734c7defd3?producto=repuesto%20accesorio%20tanque%20inodoro%20fluidmaster%20200ak133",
                            Field2: 15.50
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=feb48110-d8ea-4fad-b8d0-0ccc60207277&width=250&height=250&qa=75&cachingValidator=-894586242&ext=.jpg",
                            Field1_text: "CEMENTO PORTLAND FUERTE GRIS 93.5L HOLCIM PRECIO PUESTO EN TIENDA SONSONATE",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/feb48110-d8ea-4fad-b8d0-0ccc60207277?producto=cemento%20portland%20fuerte%20gris%2093.5l%20holcim%20precio%20puesto%20en%20tienda%20sonsonate",
                            Field2: 8.98
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=be44b9e9-9453-4303-861b-a7001f34b349&width=250&height=250&qa=75&cachingValidator=-1154730757&ext=.jpg",
                            Field1_text: "HIERRO REDONDO CORRUGADO 3/8 PLG (9.5 MM) 6 M GRADO 40 N.º 3",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/be44b9e9-9453-4303-861b-a7001f34b349?producto=hierro%20redondo%20corrugado%203%2F8%20plg%20%289.5%20mm%29%206%20m%20grado%2040%20n.%C2%BA%203",
                            Field2: 4.09
                        },
                        {
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=1b3c9fc7-1515-416a-a2d7-b140f50d95c3&width=250&height=250&qa=75&cachingValidator=-637348485&ext=.jpg",
                            Field1_text: "SELLADOR POLIURETANO DURETAN BLANCO 300ML",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/1b3c9fc7-1515-416a-a2d7-b140f50d95c3?producto=sellador%20poliuretano%20duretan%20blanco%20300ml",
                            Field2: 6.00
                        }
                    ],
                    ladrillos: [
                        {
                            Price: 0.40,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 49141306",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=936a078e-7bc0-4e82-aa20-2309852b502c&width=250&height=250&qa=75&cachingValidator=1126282044&ext=.jpg",
                            Field1_text: "LADRILLO OBRA ROJO 7 CM PRECIO PUESTO EN TIENDA SONSONATE",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/936a078e-7bc0-4e82-aa20-2309852b502c?producto=ladrillo%20obra%20rojo%207%20cm%20precio%20puesto%20en%20tienda%20sonsonate",
                            Field2: 0.40
                        },
                        {
                            Price: 0.42,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 550945",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=26e79dc4-74dd-4d69-8fe3-1880a6814d45&width=250&height=250&qa=75&cachingValidator=-1452037476&ext=.jpg",
                            Field1_text: "LADRILLO OBRA ROJO 7 CM PRECIO PUESTO EN TIENDA SANTA ANA",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/26e79dc4-74dd-4d69-8fe3-1880a6814d45?producto=ladrillo%20obra%20rojo%207%20cm%20precio%20puesto%20en%20tienda%20santa%20ana",
                            Field2: 0.42
                        },
                        {
                            Price: 0.42,
                            bottom: "",
                            inf: "",
                            textprimary: "",
                            Number: "CODIGO 3570406",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=2a97cc4a-25d4-47bc-a5ba-b2f7435b2e6d&width=250&height=250&qa=75&cachingValidator=1576524193&ext=.jpg",
                            Field1_text: "LADRILLO OBRA ROJO 7 CM PRECIO PUESTO EN TIENDAS SAN SALVADOR",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/2a97cc4a-25d4-47bc-a5ba-b2f7435b2e6d?producto=ladrillo%20obra%20rojo%207%20cm%20precio%20puesto%20en%20tiendas%20san%20salvador",
                            Field2: 0.42
                        },
                        {
                            Price: 0.42,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 545397",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=a3f2573a-8e86-4ac3-be20-dfcd70244de9&width=250&height=250&qa=75&cachingValidator=138508125&ext=.jpg",
                            Field1_text: "LADRILLO OBRA ROJO 7 CM PRECIO PUESTO EN TIENDA LOURDES",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/a3f2573a-8e86-4ac3-be20-dfcd70244de9?producto=ladrillo%20obra%20rojo%207%20cm%20precio%20puesto%20en%20tienda%20lourdes",
                            Field2: 0.42
                        },
                        {
                            Price: 5.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 3330024",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=e8bd3e6d-d813-469e-b178-50bf61d5198e&width=250&height=250&qa=75&cachingValidator=1348646302&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO 5X50X50 CENTÍMETROS GUIJARRO GRIS",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/e8bd3e6d-d813-469e-b178-50bf61d5198e?producto=ladrillo%20decorativo%205x50x50%20cent%C3%ADmetros%20guijarro%20gris",
                            Field2: 5.90
                        },
                        {
                            Price: 3.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 3331024",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=c2a47249-a812-45bb-8521-6b8ddea38443&width=250&height=250&qa=75&cachingValidator=-1562872205&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO 5X25X60 CENTÍMETROS BORDILLO GRIS",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/c2a47249-a812-45bb-8521-6b8ddea38443?producto=ladrillo%20decorativo%205x25x60%20cent%C3%ADmetros%20bordillo%20gris",
                            Field2: 3.90
                        },
                        {
                            Price: 3.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 3330224",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=0053313a-c2bb-4815-8388-77f8f3a2e024&width=250&height=250&qa=75&cachingValidator=-226103070&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO 5X37X37 CENTÍMETROS ESPANOL GRIS",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/0053313a-c2bb-4815-8388-77f8f3a2e024?producto=ladrillo%20decorativo%205x37x37%20cent%C3%ADmetros%20espanol%20gris",
                            Field2: 3.90
                        },
                        {
                            Price: 5.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 3331324",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=f9c9963e-b670-4924-be2d-f7f08bfa36f2&width=250&height=250&qa=75&cachingValidator=-1399472405&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO SASQUASH ROJO ",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/f9c9963e-b670-4924-be2d-f7f08bfa36f2?producto=ladrillo%20decorativo%20sasquash%20rojo%20",
                            Field2: 5.90
                        },
                        {
                            Price: 6.25,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 627457",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=4529789f-ee5e-4756-9b08-b9e9871bfc68&width=250&height=250&qa=75&cachingValidator=54321257&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO 5X50X50 CENTÍMETROS MONTREAL GRIS",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/4529789f-ee5e-4756-9b08-b9e9871bfc68?producto=ladrillo%20decorativo%205x50x50%20cent%C3%ADmetros%20montreal%20gris",
                            Field2: 6.25
                        },
                        {
                            Price: 5.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 628595",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=95d52feb-b41d-45ff-9fff-7bb6d598e911&width=250&height=250&qa=75&cachingValidator=1773899526&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO 5X50X50 CENTÍMETROS GLIFO GRIS",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/95d52feb-b41d-45ff-9fff-7bb6d598e911?producto=ladrillo%20decorativo%205x50x50%20cent%C3%ADmetros%20glifo%20gris",
                            Field2: 5.90
                        },
                        {
                            Price: 5.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 628596",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=4ac20d13-9455-49a0-ab21-f1f6bba9742a&width=250&height=250&qa=75&cachingValidator=-751712704&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO 5X50X50 CENTÍMETROS GLIFO ROJO",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/4ac20d13-9455-49a0-ab21-f1f6bba9742a?producto=ladrillo%20decorativo%205x50x50%20cent%C3%ADmetros%20glifo%20rojo",
                            Field2: 5.90
                        },
                        {
                            Price: 5.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 3330124",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=597739dc-e123-453c-87a2-ae66ca8ab841&width=250&height=250&qa=75&cachingValidator=-214001750&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO 5X50X50 CENTÍMETROS GUIJARRO ROJO",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/597739dc-e123-453c-87a2-ae66ca8ab841?producto=ladrillo%20decorativo%205x50x50%20cent%C3%ADmetros%20guijarro%20rojo",
                            Field2: 5.90
                        },
                        {
                            Price: 5.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 672246",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=3c0eb3c4-d8e9-4c9d-bd51-88f233ad2d35&width=250&height=250&qa=75&cachingValidator=-2025674409&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO BURBUJA ROJO 5X50X50",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/3c0eb3c4-d8e9-4c9d-bd51-88f233ad2d35?producto=ladrillo%20decorativo%20burbuja%20rojo%205x50x50",
                            Field2: 5.90
                        },
                        {
                            Price: 5.50,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 672243",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=0c1ce499-c80f-4558-b8c9-f78ea42ef240&width=250&height=250&qa=75&cachingValidator=1557559762&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO PAVER GRIS 2 5X50X50",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/0c1ce499-c80f-4558-b8c9-f78ea42ef240?producto=ladrillo%20decorativo%20paver%20gris%202%205x50x50",
                            Field2: 5.50
                        },
                        {
                            Price: 5.90,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 3331224",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=bc73b02c-e034-4ea8-b130-893dc6d75106&width=250&height=250&qa=75&cachingValidator=-1935657944&ext=.jpg",
                            Field1_text: "LADRILLO DECORATIVO SASQUASH GRIS",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/bc73b02c-e034-4ea8-b130-893dc6d75106?producto=ladrillo%20decorativo%20sasquash%20gris",
                            Field2: 5.90
                        },
                        {
                            Price: 6.75,
                            bottom: "UNIDAD: C/U",
                            inf: "Este producto no está disponible en la tienda seleccionada",
                            textprimary: "Ver disponibilidad en tiendas",
                            Number: "CODIGO 661480",
                            URL: "https://www.freundferreteria.com/Productos/GetImagenProductoPrincipal?idProducto=412859da-4749-40b6-a871-69832c29fa1c&width=250&height=250&qa=75&cachingValidator=-1571438796&ext=.jpg",
                            Field1_text: "LADRILLO DECORAATIVO LAJA GRIS 5X50X50 CM",
                            Field1_links: "https://www.freundferreteria.com/Productos/Detalle/412859da-4749-40b6-a871-69832c29fa1c?producto=ladrillo%20decoraativo%20laja%20gris%205x50x50%20cm",
                            Field2: 6.75
                        }
                    ]
                },
            ];
            commit('SET_PRODUCTOS', productos);
        },
        fetchProcedimientos({ commit }) {
            const procedimientos = [
                {id: 1,opcion:'Concreto por volumen', html:`

                <style>
                    .inputDis{
                        border:1px solid #59e;
                        border-radius:25px;
                        padding:5px;text-align:center;
                        width:80%;margin-bottom:10px
                    }

                    th{
                        border:1px solid #000;
                        padding:0 10px;
                        border-radius:5px
                    }
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px
                    }
                </style>
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Volumen de hormigon</label>
                            <input class="inputDis" id="volumenHormigon" type="number">
                            <label> m³</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Proporcion</label>
                        </th>
                    </tr>
                    <tr>

                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Arena</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                        <td>
                            <p>Agregado</p>
                            <input class="inputDis" id="Agre" type="number">
                        </td>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Cemento</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>1 bolsa de cemento</p>
                            <input class="inputDis" id="bolsCemt" type="number">
                            <label> kg</label>
                        </td>
                        <td>
                            <p>Volumen seco</p>
                            <input class="inputDis" id="volmSec" type="number">
                        </td>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="Cant" type="number">
                            </td>
                        </tr>
                    <tr>
                        <td colspan="2">
                            <p>Ferrreteria</p>
                            <select  id="tfer" class="inputDis">
                                <option value="">SELECCIONE</option>

                                <option value="f">Freund</option>
                                <option value="v">Vidrí</option>
                            </select>


                        </td>


                        <td><p>Relacion Agua-Cemento</p><input class="inputDis" id="RelAguCemt" type="number"></td></tr><tr><td colspan="3"><p>Precio del concreto</p><input class="inputDis" id="PrecConc" type="number"><label> Por m³</label></td></tr></table><p></p><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Volumen de hormigon</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Volumen de hormigon seco</td><td><p><span id="resultado2"></span></p></td><td>m3</td></tr><tr><td>Peso de cemento</td><td><p><span id="resultado3"></span></p></td><td>kg</td></tr><tr><td>Cemento</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Agregado</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Agua</td><td><p><span id="resultado7"></span></p></td><td>litro</td></tr><tr><td>Bolsas de cemento</td><td><p><span id="resultado8"></span></p></td><td>bolsos</td></tr><tr><td>Coste de bolsas de cemento</td><td><p><span id="resultado9"></span></p></td><td>$</td></tr><tr><td>Coste concreto</td><td><p><span id="resultado10"></span></p></td><td>$</td></tr><tr><td>Peso de hormigon</td><td><p><span id="resultado11"></span></p></td><td>Kg</td></tr></table>
            `, imagen: '/C2/concreto.jpg',calculo: ProcContVol, comprar: '',imprimir: ''
                },
                {id: 2,opcion:'Losa de hormigon', html: `

                <style>
                    .inputDis{
                        border:1px solid #59e;
                        border-radius:25px;
                        padding:5px;text-align:center;
                        width:80%;margin-bottom:10px
                    }

                    th{
                        border:1px solid #000;
                        padding:0 10px;
                        border-radius:5px
                    }
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px
                    }
                </style>
                <table>
                    <tr>
                        <th>
                            <label>Longitud L</label>
                            <input class="inputDis" id="largo" type="number">
                            <label> m</label>
                        </th>
                        <th>
                            <label>Ancho W</label>
                            <input class="inputDis" id="ancho" type="number">
                            <label> m</label>
                        </th>
                        <th>
                        <label>Grosor T</label>
                        <input class="inputDis" id="profundidad" type="number">
                        <label> m</label>
                    </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Proporcion</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Arena</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                        <td>
                            <p>Agregado</p>
                            <input class="inputDis" id="Agre" type="number">
                        </td>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Cemento</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>1 bolsa de cemento</p>
                            <input class="inputDis" id="bolsCemt" type="number">
                            <label> kg</label>
                        </td>
                        <td>
                            <p>Volumen seco</p>
                            <input class="inputDis" id="volmSec" type="number">
                        </td>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="Cant" type="number">
                            </td>
                        </tr>
                    <tr>
                        <td colspan="2">
                            <p>Ferrreteria</p>
                            <select  id="tfer" class="inputDis">
                                <option value="">SELECCIONE</option>

                                <option value="f">Freund</option>
                                <option value="v">Vidrí</option>
                            </select>


                        </td>


                        <td><p>Relacion Agua-Cemento</p><input class="inputDis" id="RelAguCemt" type="number"></td></tr><tr><td colspan="3"><p>Precio del concreto</p><input class="inputDis" id="PrecConc" type="number"><label> Por m³</label></td></tr></table><p></p><table><tr><th>Material</th><th>Cantidad</th><th>Unidad</th></tr><tr><td>Volumen de hormigon</td><td><p><span id="resultado1"></span></p></td><td>m3</td></tr><tr><td>Volumen de hormigon seco</td><td><p><span id="resultado2"></span></p></td><td>m3</td></tr><tr><td>Peso de cemento</td><td><p><span id="resultado3"></span></p></td><td>kg</td></tr><tr><td>Cemento</td><td><p><span id="resultado4"></span></p></td><td>m3</td></tr><tr><td>Arena</td><td><p><span id="resultado5"></span></p></td><td>m3</td></tr><tr><td>Agregado</td><td><p><span id="resultado6"></span></p></td><td>m3</td></tr><tr><td>Agua</td><td><p><span id="resultado7"></span></p></td><td>litro</td></tr><tr><td>Bolsas de cemento</td><td><p><span id="resultado8"></span></p></td><td>bolsos</td></tr><tr><td>Coste de bolsas de cemento</td><td><p><span id="resultado9"></span></p></td><td>$</td></tr><tr><td>Coste concreto</td><td><p><span id="resultado10"></span></p></td><td>$</td></tr><tr><td>Peso de hormigon</td><td><p><span id="resultado11"></span></p></td><td>Kg</td></tr></table>
            `, imagen: '/C2/losa1.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 3,opcion:'Columna cuadrada de hormigon', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                </style>
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Lado A</label>
                            <input class="inputDis" id="ladoA" type="number">
                            <label> cm</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Lado B</label>
                            <input class="inputDis" id="ladoB" type="number">
                            <label> cm</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Altura H</label>
                            <input class="inputDis" id="ladoH" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Proporcion</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Area</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                        <td>
                            <p>Agregado</p>
                            <input class="inputDis" id="Agre" type="number">
                        </td>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Cemento</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>1 bolsa de cemento</p>
                            <input class="inputDis" id="bolsCemt" type="number">
                        </td>
                        <td>
                            <p>Volumen seco</p>
                            <input class="inputDis" id="volmSec" type="number">
                        </td>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="Cant" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p>Precio de 1 bolsa de cemento en ferreteria</p>
                            <select  id="tfer" class="inputDis">
                                <option value="">SELECCIONE</option>

                                <option value="f">Freund</option>
                                <option value="v">Vidrí</option>
                            </select>
                        </td>
                        <td>
                            <p>Relación agua cemento</p>
                            <input class="inputDis" id="relAC" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>Precio del concreto</p>
                            <input class="inputDis" id="PrecConc" type="number">
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen de hormigón</td>
                        <td>
                            <p><span id="resultado"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Volumen de hormigón seco</td>
                        <td>
                            <p><span id="resultado2"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Peso de cemento</td>
                        <td>
                            <p><span id="resultado3"></span>
                        </td>
                        <td>kg</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado4"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado5"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Agregado</td>
                        <td>
                            <p><span id="resultado6"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Agua</td>
                        <td>
                            <p><span id="resultado7"></span>
                        </td>
                        <td>litro</td>
                    </tr>
                    <tr>
                        <td>Bolsas de cemento</td>
                        <td>
                            <p><span id="resultado8"></span>
                        </td>
                        <td>bolsos</td>
                    </tr>
                    <tr>
                        <td>Coste de bolsas de cemento</td>
                        <td>
                            <p><span id="resultado9"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Coste concreto</td>
                        <td>
                            <p><span id="resultado10"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Peso de hormigón</td>
                        <td>
                            <p><span id="resultado11"></span>
                        </td>
                        <td>Kg</td>
                    </tr>
                </table>
                `, imagen: '/C2/Chormigon.png',calculo: ColumnaCuadradaHormigon, comprar: '',imprimir: ''
                },
                {id: 4,opcion:'Concreto de columna redonda', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                </style>
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Diametro D</label>
                            <input class="inputDis" id="DiamD" type="number"><label>  m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Altura H</label>
                            <input class="inputDis" id="AltuH" type="number"><label>  m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Proporcion</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Area</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                        <td>
                            <p>Agregado</p>
                            <input class="inputDis" id="Agre" type="number">
                        </td>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Cemento</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>1 bolsa de cemento</p>
                            <input class="inputDis" id="bolsCemt" type="number">
                        </td>
                        <td>
                            <p>Volumen seco</p>
                            <input class="inputDis" id="volmSec" type="number">
                        </td>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="Cant" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                        <p>Precio de 1 bolsa de cemento en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>

                            <option value="f">Freund</option>
                            <option value="v">Vidrí</option>
                        </select>
                        </td>
                        <td>
                            <p>Relacion agua cemento</p>
                            <input class="inputDis" id="relAC" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>Precio del concreto</p>
                            <input class="inputDis" id="PrecConc" type="number">
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen de hormigón</td>
                        <td>
                            <p><span id="resultado"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Volumen de hormigón seco</td>
                        <td>
                            <p><span id="resultado2"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Peso de cemento</td>
                        <td>
                            <p><span id="resultado3"></span>
                        </td>
                        <td>kg</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado4"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado5"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Agregado</td>
                        <td>
                            <p><span id="resultado6"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Agua</td>
                        <td>
                            <p><span id="resultado7"></span>
                        </td>
                        <td>litro</td>
                    </tr>
                    <tr>
                        <td>Bolsas de cemento</td>
                        <td>
                            <p><span id="resultado8"></span>
                        </td>
                        <td>bolsos</td>
                    </tr>
                    <tr>
                        <td>Coste de bolsas de cemento</td>
                        <td>
                            <p><span id="resultado9"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Coste concreto</td>
                        <td>
                            <p><span id="resultado10"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Peso de hormigón</td>
                        <td>
                            <p><span id="resultado11"></span>
                        </td>
                        <td>Kg</td>
                    </tr>
                </table>
                `, imagen: '/C2/redonda2.png',calculo: ConcretoColumnaRedonda, comprar: '',imprimir: ''
                },
                {id: 5,opcion:'Tanque circular de hormigon', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                </style>
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Diametro exterior d</label>
                            <input class="inputDis" id="diametro" type="number"><label>  m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Altura h</label><br>
                            <input class="inputDis" id="altura" type="number"><label>  m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Grosor t</label><br>
                            <input class="inputDis" id="grosor" type="number"><label>  mm</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Proporcion</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Area</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                        <td>
                            <p>Agregado</p>
                            <input class="inputDis" id="Agre" type="number">
                        </td>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Cemento</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>1 bolsa de cemento</p>
                            <input class="inputDis" id="bolsCemt" type="number">
                        </td>
                        <td>
                            <p>Volumen seco</p>
                            <input class="inputDis" id="volmSec" type="number">
                        </td>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="Cant" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                        <p>Precio de 1 bolsa de cemento en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>

                            <option value="f">Freund</option>
                            <option value="v">Vidrí</option>
                        </select>
                        </td>
                        <td>
                            <p>Relacion agua cemento</p>
                            <input class="inputDis" id="relAC" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>Precio del concreto</p>
                            <input class="inputDis" id="PrecConc" type="number">
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen de hormigón</td>
                        <td>
                            <p><span id="resultado1"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Volumen de hormigón seco</td>
                        <td>
                            <p><span id="resultado2"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Peso de cemento</td>
                        <td>
                            <p><span id="resultado3"></span>
                        </td>
                        <td>kg</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado4"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado5"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Agregado</td>
                        <td>
                            <p><span id="resultado6"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Agua</td>
                        <td>
                            <p><span id="resultado7"></span>
                        </td>
                        <td>litro</td>
                    </tr>
                    <tr>
                        <td>Bolsas de cemento</td>
                        <td>
                            <p><span id="resultado8"></span>
                        </td>
                        <td>bolsos</td>
                    </tr>
                    <tr>
                        <td>Coste de bolsas de cemento</td>
                        <td>
                            <p><span id="resultado9"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Coste concreto</td>
                        <td>
                            <p><span id="resultado10"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Peso de hormigón</td>
                        <td>
                            <p><span id="resultado11"></span>
                        </td>
                        <td>Kg</td>
                    </tr>
                </table>
                `, imagen: '/C2/tanque.jpg',calculo: TanqueCircularHormigon, comprar: '',imprimir: ''
                },
                {id: 6,opcion:'Ladrillos por volumen', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                </style>
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Volumen de pared</label>
                            <input class="inputDis" id="VolmPard" type="number"><label> m3</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>Longitud L</p>
                            <input class="inputDis" id="LongL" type="number"><label> cm</label>
                        </td>
                        <td>
                            <p>Altura H</p>
                            <input class="inputDis" id="AltuH" type="number"><label> cm</label>
                        </td>
                        <td>
                            <p>Grosor T</p>
                            <input class="inputDis" id="GrosT" type="number"><label> cm</label>
                        </td>
                    </tr>
                    <tr>
                        <td colspan = "2">
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Arena</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                            <p>Precio de 1 ladrillo en ferreteria</p>
                            <select  id="tfer" class="inputDis">
                                <option value="">SELECCIONE</option>
                                <option value="f">Freund</option>
                            </select>
                           <label> Unitario</label>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen Pared</td>
                        <td>
                            <p><span id="resultado1"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Numero de ladrillos</td>
                        <td>
                            <p><span id="resultado2"></span>
                        </td>
                        <td>Ladrillos</td>
                    </tr>
                    <tr>
                        <td>Costo de ladrillos</td>
                        <td>
                            <p><span id="resultado3"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Mortero seco</td>
                        <td>
                            <p><span id="resultado4"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado5"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado6"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado7"></span>
                        </td>
                        <td>kg</td>
                    </tr>
                </table>
                `, imagen: '/Imagenes/Contenidos/Ladrillo.png',calculo: LadrillosVolumen, comprar: '',imprimir: ''
                },
                {id: 7,opcion:'Ladrillos de pared', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                </style>
                <table>
                    <tr>
                        <td>Dimensiones del muro</td>
                        <td>Dimensiones del ladrillo</td>
                    <tr>
                    <tr>
                        <td>
                            <label>Longitud L</label>
                            <input class="inputDis" id="longL1" type="number">
                        </td>
                        <td>
                            <label>Longitud L</label>
                            <input class="inputDis" id="LongL2" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Altura H</label>
                            <input class="inputDis" id="AltuH1" type="number">
                        </td>
                        <td>
                            <p>Altura H</p>
                            <input class="inputDis" id="AltuH2" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Grosto T</p>
                            <input class="inputDis" id="GrosT1" type="number">
                        </td>
                        <td>
                            <p>Grosor T</p>
                            <input class="inputDis" id="GrosT2" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan = "2">Radio del mortero y cantidad</td>
                    <tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Arena</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan = "3">Área de deducción de ventana o puerta</td>
                    <tr>
                    <tr>
                        <td colspan="3">
                            <p>Restar área</p>
                            <input class="inputDis" id="ResAren" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                        <p>Precio de 1 ladrillo en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>
                            <option value="f">Freund</option>
                        </select>
                       <label> Unitario</label>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen Pared</td>
                        <td>
                            <p><span id="resultado1"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Numero de ladrillos</td>
                        <td>
                            <p><span id="resultado2"></span>
                        </td>
                        <td>Ladrillos</td>
                    </tr>
                    <tr>
                        <td>Costo de ladrillos</td>
                        <td>
                            <p><span id="resultado3"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Mortero seco</td>
                        <td>
                            <p><span id="resultado4"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado5"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado6"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado7"></span>
                        </td>
                        <td>kg</td>
                    </tr>
                </table>
                `, imagen: '/Imagenes/Contenidos/Pared.png',calculo: LadrillosPared, comprar: '',imprimir: ''
                },
                {id: 8,opcion:'Ladrillos de pared circular', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                </style>
                <table>
                    <tr>
                        <td>Dimensiones del muro circular</td>
                        <td>Dimensiones del ladrillo</td>
                    <tr>
                    <tr>
                        <td>
                            <label>Diametro L</label>
                            <input class="inputDis" id="diam1" type="number">
                        </td>
                        <td>
                            <label>Longitud L</label>
                            <input class="inputDis" id="LongL2" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Altura H</label>
                            <input class="inputDis" id="AltuH1" type="number">
                        </td>
                        <td>
                            <p>Altura H</p>
                            <input class="inputDis" id="AltuH2" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Grosto T</p>
                            <input class="inputDis" id="GrosT1" type="number">
                        </td>
                        <td>
                            <p>Grosor T</p>
                            <input class="inputDis" id="GrosT2" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan = "2">Radio del mortero y cantidad</td>
                    <tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Arena</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan = "3">Área de deducción de ventana o puerta</td>
                    <tr>
                    <tr>
                        <td colspan="3">
                            <p>Restar área</p>
                            <input class="inputDis" id="ResAren" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                        <p>Precio de 1 ladrillo en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>
                            <option value="f">Freund</option>
                        </select>
                       <label> Unitario</label>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen Pared</td>
                        <td>
                            <p><span id="resultado1"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Numero de ladrillos</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>Ladrillos</td>
                    </tr>
                    <tr>
                        <td>Costo de ladrillos</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Mortero seco</td>
                        <td>
                            <p><span id="resultado4"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado5"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado6"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado7"></span></p>
                        </td>
                        <td>kg</td>
                    </tr>
                </table>
                `, imagen: '/Imagenes/Contenidos/Circular.png',calculo: LadrillosParedCircular, comprar: '',imprimir: ''
                },
                {id: 9,opcion:'Bloques', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                    table {
                        margin: 0.5rem 0;
                    }
                    #allw{
                        width: 80%;
                    }
                    #divtab{
                        margin-right:auto;
                        margin-left:auto;

                    }
                </style>

                <table id="divtab">
                    <tr>
                        <td>
                           <p>Dimension de la pared:</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Longitud L</label>
                            <input class="inputDis" id="LongitudP" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Altura h</label><br>
                            <input class="inputDis" id="AlturaP" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Grosor T</p>
                            <input class="inputDis" id="GrosorP" type="number">
                        </td>
                    </tr>
                    </table>

                    <table id="divtab">
                    <tr>
                        <td>
                           <p>Dimension del bloque: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Longitud L</label>
                            <input class="inputDis" id="LongitudB" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Altura h</label><br>
                            <input class="inputDis" id="AlturaB" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Grosor T</p>
                            <input class="inputDis" id="GrosorB" type="number">
                        </td>
                    </tr>
                    </table>

                    <table id="allw">
                    <tr>
                        <td colspan="3"> 
                        <p>Proporcion y cantidad de mortero: </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Arena</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="Cant" type="number">
                        </td>
                    </tr>
                    </table>

                    <table id="allw">
                    <tr>
                        <td> 
                        <p>Área de puerta o ventana de deduccion: </p>
                        </td>
                    </tr>
                    <tr>
                    <td colspan="3">
                        <p>Restar Area</p>
                        <input class="inputDis" id="areaPuertaVentana" type="number">
                        <label> m2</label>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                    <p>Precio de 1 ladrillo en ferreteria</p>
                    <select  id="tfer" class="inputDis">
                        <option value="">SELECCIONE</option>
                        <option value="f">Freund</option>
                    </select>
                        <label> $</label>
                    </td>
                </tr>
                    </table>
                <table id="allw">
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen Pared</td>
                        <td>
                            <p><span id="resultado1"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Numero de Bloques</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>Bloques</td>
                    </tr>
                    <tr>
                        <td>Costo de Bloques</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Mortero seco</td>
                        <td>
                            <p><span id="resultado4"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado5"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado6"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado7"></span></p>
                        </td>
                        <td>kg</td>
                    </tr>
                </table>
                `, imagen: '/C2/bloque2.jpg',calculo: CalcularCantidadBloques, comprar: '',imprimir: ''
                },
                // {id: 10,opcion:'Peso unitario seco', html: `
                // <style>
                //     .inputDis {
                //         border: 1px solid #59e;
                //         border-radius: 25px;
                //         padding: 5px;
                //         text-align: center;
                //         width: 80%;
                //         margin-bottom: 10px;
                //     }
                //     th {
                //         border: 1px solid #000;
                //         padding: 0 10px;
                //         border-radius: 5px;
                //     }
                //     td {
                //         border: 1px solid #000;
                //         text-align: center;
                //         border-radius: 5px;
                //     }
                // </style>

                // <table>
                //     <tr>
                //         <td>
                //             <label>Gravedad específica del suelo</label>
                //             <input class="inputDis" id="GravEspSuel" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <label>Peso unitario</label>
                //             <input class="inputDis" id="PesoUnit" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <label>Porción de vacío</label>
                //             <input class="inputDis" id="PorcVaci" type="number">
                //         </td>
                //     </tr>
                // </table>

                // <table>
                //     <tr>
                //         <th>Material</th>
                //         <th>Cantidad</th>
                //         <th>Unidad</th>
                //     </tr>
                //     <tr>
                //         <td>Peso unitario seco</td>
                //         <td>
                //             <p><span id="resultado1"></span></p>
                //         </td>
                //         <td>N/m3</td>
                //     </tr>
                // </table>
                // `, imagen: '/C2/pesoseco.png',calculo: LosaHormig, comprar: '',imprimir: ''
                // },
                // {id: 11,opcion:'Peso unitario humedad', html: `
                // <style>
                //     .inputDis {
                //         border: 1px solid #59e;
                //         border-radius: 25px;
                //         padding: 5px;
                //         text-align: center;
                //         width: 80%;
                //         margin-bottom: 10px;
                //     }
                //     th {
                //         border: 1px solid #000;
                //         padding: 0 10px;
                //         border-radius: 5px;
                //     }
                //     td {
                //         border: 1px solid #000;
                //         text-align: center;
                //         border-radius: 5px;
                //     }
                // </style>

                // <table>
                //     <tr>
                //         <td>
                //             <label>Contenido de humedad</label>
                //             <input class="inputDis" id="ContHume" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <label>Gravedad específica del suelo</label>
                //             <input class="inputDis" id="GravEspSuel" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <label>Peso unitario de agua</label>
                //             <input class "inputDis" id="PesoUnitAgua" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <label>Porción de vacío</label>
                //             <input class="inputDis" id="PorcVaci" type="number">
                //         </td>
                //     </tr>
                // </table>

                // <table>
                //     <tr>
                //         <th>Material</th>
                //         <th>Cantidad</th>
                //         <th>Unidad</th>
                //     </tr>
                //     <tr>
                //         <td>Peso unitario seco</td>
                //         <td>
                //             <p><span id="resultado1"></span></p>
                //         </td>
                //         <td>N/m3</td>
                //     </tr>
                // </table>
                // `, imagen: '/C2/Phume.png',calculo: LosaHormig, comprar: '',imprimir: ''
                // },
                // {id: 12,opcion:'Capacidad portante de cimientacion circular', html: `
                // <style>
                //     .inputDis {
                //         border: 1px solid #59e;
                //         border-radius: 25px;
                //         padding: 5px;
                //         text-align: center;
                //         width: 80%;
                //         margin-bottom: 10px;
                //     }
                //     th {
                //         border: 1px solid #000;
                //         padding: 0 10px;
                //         border-radius: 5px;
                //     }
                //     td {
                //         border: 1px solid #000;
                //         text-align: center;
                //         border-radius: 5px;
                //     }
                // </style>

                // <table>
                //     <tr>
                //         <td>
                //             <label>Cohesión Efectiva</label>
                //             <input class="inputDis" id="CoheEfec" type="number">
                //         </td>
                //         <td>
                //             <label>Factor de Capacidad de Carga N_C</label>
                //             <input class="inputDis" id="FactCapCarNC" type="number">
                //         </td>
                //         <td>
                //             <label>Esfuerzo Efectivo Vertical</label>
                //             <input class="inputDis" id="EsfuEfecVet" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <label>Factor de Capacidad de Carga N_q</label>
                //             <input class="inputDis" id="FactCapCarNq" type="number">
                //         </td>
                //         <td>
                //             <label>Peso Unitario Efectivo</label>
                //             <input class="inputDis" id="PesoUniEfec" type="number">
                //         </td>
                //         <td>
                //             <label>Peso o Diámetro de la Cimentación</label>
                //             <input class="inputDis" id="PesoDiamCime" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td colspan="3">
                //             <label>Factor de Capacidad de Redondeo N_γ</label>
                //             <input class="inputDis" id="FactCapaRondNga" type="number">
                //         </td>
                //     </tr>
                // </table>

                // <table>
                //     <tr>
                //         <th>Material</th>
                //         <th>Cantidad</th>
                //         <th>Unidad</th>
                //     </tr>
                //     <tr>
                //         <td>Capacidad de Carga</td>
                //         <td>
                //             <p><span id="resultado1"></span></p>
                //         </td>
                //         <td>N/m3</td>
                //     </tr>
                // </table>
                // `, imagen: '/C2/cimiento2.png',calculo: LosaHormig, comprar: '',imprimir: ''
                // },
                // {id: 13,opcion:'Capacidad portante de cimiento continua', html: `
                // <style>
                //     .inputDis {
                //         border: 1px solid #59e;
                //         border-radius: 25px;
                //         padding: 5px;
                //         text-align: center;
                //         width: 80%;
                //         margin-bottom: 10px;
                //     }
                //     th {
                //         border: 1px solid #000;
                //         padding: 0 10px;
                //         border-radius: 5px;
                //     }
                //     td {
                //         border: 1px solid #000;
                //         text-align: center;
                //         border-radius: 5px;
                //     }
                // </style>

                // <table>
                //     <tr>
                //         <td>
                //             <label>Cohesión Efectiva</label>
                //             <input class="inputDis" id="CoheEfec" type="number">
                //         </td>
                //         <td>
                //             <label>Factor de Capacidad de Carga N_C</label>
                //             <input class="inputDis" id="FactCapCarNC" type="number">
                //         </td>
                //         <td>
                //             <label>Esfuerzo Efectivo Vertical</label>
                //             <input class="inputDis" id="EsfuEfecVet" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td>
                //             <label>Factor de Capacidad de Carga N_q</label>
                //             <input class "inputDis" id="FactCapCarNq" type="number">
                //         </td>
                //         <td>
                //             <label>Peso Unitario Efectivo</label>
                //             <input class="inputDis" id="PesoUniEfec" type="number">
                //         </td>
                //         <td>
                //             <label>Peso o Diámetro de la Cimentación</label>
                //             <input class="inputDis" id="PesoDiamCime" type="number">
                //         </td>
                //     </tr>
                //     <tr>
                //         <td colspan="3">
                //             <label>Factor de Capacidad de Redondeo N_γ</label>
                //             <input class="inputDis" id="FactCapaRondNga" type="number">
                //         </td>
                //     </tr>
                // </table>

                // <table>
                //     <tr>
                //         <th>Material</th>
                //         <th>Cantidad</th>
                //         <th>Unidad</th>
                //     </tr>
                //     <tr>
                //         <td>Capacidad de Carga</td>
                //         <td>
                //             <p><span id="resultado1"></span></p>
                //         </td>
                //         <td>N/m3</td>
                //     </tr>
                // </table>
                // `, imagen: '/C2/cimiento3.png',calculo: LosaHormig, comprar: '',imprimir: ''
                // },
                {id: 14,opcion:'Super Elevación cálculo', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                </style>

                        <h1>Super Elevación</h1>
                        <table>
                            <tr>
                                <td>
                                    <label for="velocidad">Velocidad del coche</label>
                                    <input class="inputDis" type="number" id="velocidad">
                                </td>
                                <td>
                                    <label for="radio">Radio de la carretera</label>
                                    <input class="inputDis" type="number" id="radio">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <label for="respuestay">Respuesta</label>
                                    <input class="inputDis" type="text" id="respuestase">
                                </td>
                            </tr>
                        </table>
                `, imagen: '/C2/ele3.jpg',calculo: superelevacion, comprar: '',imprimir: ''
                },
                {id: 15,opcion:'Barra de hélice', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/BarraElice.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 16,opcion:'Yeso',html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                    table {
                        margin:0.4rem 0;
                    }

                    #second td,th{
                        padding:0.2rem;
                    }
                </style>
                <table>
                    <tr>
                        <th >
                            <label>Longitud L</label>
                            <input class="inputDis" id="longitud" type="number">
                        </th>
                        <th >
                            <label>Ancho W</label><br>
                            <input class="inputDis" id="ancho" type="number">
                        </th>
                        <th >
                            <label>Yeso Grosor</label><br>
                            <input class="inputDis" id="grosor" type="number">
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>Cemento</p>
                            <input class="inputDis" id="Cemt" type="number">
                        </td>
                        <td>
                            <p>Arena</p>
                            <input class="inputDis" id="Aren" type="number">
                        </td>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="Cant" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>1 bolsa de cemento</p>
                            <input class="inputDis" id="bolsCemt" type="number">
                        </td>
                        <td>
                            <p>Volumen seco</p>
                            <input class="inputDis" id="volmSec" type="number">
                        </td>
                        <td>
                            <p>Desperdicio</p>
                            <input class="inputDis" id="desperdicio" type="number">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">
                        <p>Precio de 1 bolsa de cemento en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>

                            <option value="f">Freund</option>
                            <option value="v">Vidrí</option>
                        </select>
                        </td>

                    </tr>
                </table>
                <table id="second">
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Mortero</td>
                        <td>
                            <p><span id="resultado1"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Mortero seco</td>
                        <td>
                            <p><span id="resultado2"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Peso de cemento</td>
                        <td>
                            <p><span id="resultado3"></span>
                        </td>
                        <td>kg</td>
                    </tr>
                    <tr>
                        <td>Cemento</td>
                        <td>
                            <p><span id="resultado4"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Arena</td>
                        <td>
                            <p><span id="resultado5"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Area de yeso</td>
                        <td>
                            <p><span id="resultado6"></span>
                        </td>
                        <td>m2</td>
                    </tr>
                    <tr>
                        <td>Bolsas de cemento</td>
                        <td>
                            <p><span id="resultado7"></span>
                        </td>
                        <td>bolsos</td>
                    </tr>
                    <tr>
                        <td>Coste de bolsas de cemento</td>
                        <td>
                            <p><span id="resultado8"></span>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Coste del yeso</td>
                        <td>
                            <p><span id="resultado9"></span>
                        </td>
                        <td>$</td>
                    </tr>

                </table>
                `,imagen: '/C2/yesoo.png',calculo: CalcularYeso,comprar: '',imprimir: ''
                },
                {id: 17,opcion:'Relleno', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/relleno2.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 18,opcion:'Excavación', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/excavacion2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 19,opcion:'Pintar', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/pintar.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 20,opcion:'Relleno de taludes cálculo', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/talu2.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 21,opcion:'Asfalto', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 0 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                    }
                    table {
                        margin:0.4rem 0;
                    }

                    #second td,th{
                        padding:0.2rem;
                    }
                </style>
                <table>
                    <tr>
                        <th >
                            <label>Longitud L</label>
                            <input class="inputDis" id="longitud" type="number">
                        </th>
                        <th >
                            <label>Ancho W</label><br>
                            <input class="inputDis" id="ancho" type="number">
                        </th>
                        <th >
                            <label>Grosor</label><br>
                            <input class="inputDis" id="grosor" type="number">
                        </th>
                    </tr>

                    <tr>
                        <td>
                            <p>1 bolsa de cemento</p>
                            <input class="inputDis" id="bolsCemt" type="number">
                        </td>
                        <td>
                            <p>Volumen seco</p>
                            <input class="inputDis" id="volmSec" type="number">
                        </td>
                        <td>
                            <p>Desperdicio</p>
                            <input class="inputDis" id="desperdicio" type="number">
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <p>Cantidad de toneladas</p>
                        <input class="inputDis" id="cantidad" type="number">
                    </td>
                        <td colspan="3">
                        <p>Precio de 1 tonelada en distribuidoras</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>

                            <option value="d">DISA</option>
                            <option value="a">ASFALCA</option>
                        </select>
                        </td>


                    </tr>
                </table>
                <table id="second">
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen</td>
                        <td>
                            <p><span id="resultado1"></span>
                        </td>
                        <td>m3</td>
                    </tr>
                    <tr>
                        <td>Asfalto</td>
                        <td>
                            <p><span id="resultado2"></span>
                        </td>
                        <td>ton</td>
                    </tr>
                    <tr>
                        <td>Coste total</td>
                        <td>
                            <p><span id="resultado3"></span>
                        </td>
                        <td>kg</td>
                    </tr>
                </table>
                `, imagen: '/C2/asfalto2.png',calculo: CalcularAsfalto, comprar: '',imprimir: ''
                },
                {id: 22,opcion:'Azulejos', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/azulejos.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 23,opcion:'Terrazo', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/terrazo1.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 24,opcion:'Ladrillos de piso', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/piso.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 25,opcion:'anti termitas', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/termas.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 26,opcion:'Acero', html:`
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px; /* Aumenté el padding */
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px; /* Aumenté el padding */
                    }
                </style>

                <table>
                    <tr>
                        <th colspan="3">
                            <label>Diametro (D)</label>
                            <input class="inputDis" id="diamAc" type="number">
                            <label> mm</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Longitud (L)</label>
                            <input class="inputDis" id="longAc" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <p>Cantidad</p>
                            <input class="inputDis" id="cant" type="number">
                            <label> #</label>
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <p>Precio de  encofrado </p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>
                            <option value="f">Freund</option>
                        </select>
                            <label> $</label>
                        </th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Peso en Kg</td>
                        <td>
                            <p><span id="resultado"></span></p>
                        </td>
                        <td>Kg</td>
                    </tr>
                    <tr>
                        <td>Peso en Lb</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>Lb</td>
                    </tr>
                    <tr>
                        <td>Peso en Toneladas</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>T</td>
                    </tr>
                    <tr>
                        <td>Costo Total</td>
                        <td>
                            <p><span id="resultado4"></span></p>
                        </td>
                        <td>$</td>
                    </tr>
                </table>
                `, imagen: '/C2/acero1.png',calculo: AceroCalc, comprar: '',imprimir: ''
                },
                {id: 27,opcion:'Encofrado', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px; /* Aumenté el padding */
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px; /* Aumenté el padding */
                    }
                </style>

                <table>
                    <tr>
                        <th colspan="3">
                            <label>Longitud</label><br>
                            <input class="inputDis" id="longEnc" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Ancho</label><br>
                            <input class="inputDis" id="anchoEnc" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                    <tr>
                        <th>
                        <p>Precio de  encofrado </p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>
                            <option value="l">Laudo Arbitral</option>
                        </select>
                            <label> $</label>
                        </th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            <p><span id="resultado"></span></p>
                        </td>
                        <td>m³</td>
                    </tr>
                    <tr>
                        <td>Coste Total</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>$</td>
                    </tr>
                </table>
                `, imagen: '/C2/formulario.jpg',calculo: EncofradoCalc, comprar: '',imprimir: ''
                },
                {id: 28,opcion:'Tanque de agua', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px;
                    }
                </style>

                <table>
                    <tr>
                        <th colspan="3">
                            <label>Diametro</label>
                            <input class="inputDis" id="diamTanque" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Altura</label><br>
                            <input class="inputDis" id="alturaTanque" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Volumen</td>
                        <td>
                            <p><span id="resultado"></span></p>
                        </td>
                        <td>m³</td>
                    </tr>
                    <tr>
                        <td>Cantidad de agua (Lt)</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>Lt</td>
                    </tr>
                    <tr>
                        <td>Cantidad de agua (Gal)</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>Gal</td>
                    </tr>
                </table>
                `, imagen: '/C2/tanque.jpg',calculo: TanqueCalc, comprar: '',imprimir: ''
                },
                {id: 29,opcion:'BOQ', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/bqq.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 30,opcion:'Diagonal', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px;
                    }
                </style>

                <table>
                    <tr>
                        <th colspan="3">
                            <label>Lado B</label><br>
                            <input class="inputDis" id="ladoB" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Lado H</label><br>
                            <input class="inputDis" id="ladoH" type="number">
                            <label> m</label>
                        </th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Lado C</td>
                        <td>
                            <p><span id="resultado"></span></p>
                        </td>
                        <td>m</td>
                    </tr>
                </table>
                `, imagen: '/C2/diagonal.jpg',calculo: DiagonalCalc, comprar: '',imprimir: ''
                },
                {id: 31,opcion:'Profundidad de la cimentación', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px;
                    }
                </style>

                <table>
                    <tr>
                        <th colspan="3">
                            <label>Carga de la estructura</label>
                            <input class="inputDis" id="cargaEstr" type="number">
                            <label> kN/m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Densidad del suelo</label>
                            <input class="inputDis" id="densidadSuelo" type="number">
                            <label> kN/m</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Ángulo de reposo</label>
                            <input class="inputDis" id="anguloReposo" type="number">
                            <label> φ</label>
                        </th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Profundidad</td>
                        <td>
                            <p><span id="resultado"></span></p>
                        </td>
                        <td>m</td>
                    </tr>
                </table>
                `, imagen: '/C2/pro.fundacion.png',calculo: CimentacionCalc, comprar: '',imprimir: ''
                },
                {id: 32,opcion:'Prueba concreta', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px;
                    }
                </style>

                <table>
                    <tr>
                        <th colspan="3">
                            <label>Diametro del cilindro</label>
                            <input class="inputDis" id="diametroCilindro" type="number">
                            <label> mm</label>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <label>Valor de resistencia a la compresión</label>
                            <input class="inputDis" id="valorResistencia" type="number">
                            <label> kN/m</label>
                        </th>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Área</td>
                        <td>
                            <p><span id="resultado"></span></p>
                        </td>
                        <td>cm²</td>
                    </tr>
                    <tr>
                        <td>Fuerza de compresión concreta</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>kg/cm²</td>
                    </tr>
                    <tr>
                        <td>Fuerza de compresión concreta</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>psi</td>
                    </tr>
                </table>
                `, imagen: '/C2/pruebaconcreta.jpg',calculo: ConcretaCalc, comprar: '',imprimir: ''
                },
                {id: 33,opcion:'Losa Simple', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/losaSimple.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                //aca voy//
                {id: 34,opcion:'Losa Unidireccional', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/losaUni.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 35,opcion:'Losa de dos vías', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/losaDos.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 36,opcion:'columna de 4 barras', html: `
                <p>colocar html aqui </p>
                `, imagen: '/RCC1.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 37,opcion:'columna de 6 barras', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/6Barras.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 38,opcion:'columna redonda', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/redonda2.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 39,opcion:'Simple viga de soporte', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/soporte.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 40,opcion:'Viga en voladizo', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/viga.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 41,opcion:'Viga fija soportada', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/vigaFija.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 42,opcion:'Viga fija fija', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/vigaFija2.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 43,opcion:'Pandeo critico de columna', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/pandeo.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 44,opcion:'carga segura', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/cargaSe.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 45,opcion:'N/A', html: `
                <p>N/A</p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 46,opcion:'Peso de barra redonda', html:`
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px;
                    }
                    table {
                        width: 80%;
                        margin: 0.5rem 0;
                    }
                </style>

                <table>
                <tr>
                    <th colspan="3">
                        <label>Tipo de material</label><br>
                        <input class="inputDis" id="tipmat" type="text" value="Acero" readonly>
                      
                    </th>
                </tr>
                    <tr>
                        <th >
                            <label>Diametro</label><br>
                            <input class="inputDis" id="diametro" type="number">
                            <label> mm</label>
                        </th>
                   
                        <th>
                            <label>Longitud</label><br>
                            <input class="inputDis" id="longitud" type="number">
                            <label> m</label>
                        </th>
                   
                        <th >
                            <label>Pieza(#)</label><br>
                            <input class="inputDis" id="pieza" type="number">
                           
                        </th>
                    </tr>
                    <tr>
                    <td colspan="3">
                    <p>Precio por kg en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>
                            <option value="f">Freund</option>
                            <option value="v">Vidrí</option>
                        </select>
                        </td>
                        </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Peso en Kg</td>
                        <td>
                            <p><span id="resultado1"></span></p>
                        </td>
                        <td>kg</td>
                    </tr>
                    <tr>
                        <td>Peso en libras</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>lb</td>
                    </tr>
                    <tr>
                        <td>Peso en toneladas</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>ton</td>
                    </tr>
                    <tr>
                        <td>Coste Total</td>
                        <td>
                            <p><span id="resultado4"></span></p>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Volumen de 1 pieza</td>
                        <td>
                            <p><span id="resultado5"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>


                </table>
                `, imagen: '/Imagenes/Contenidos/Barra.png',calculo: CalcularPesoBarraRedonda, comprar: '',imprimir: ''
                },
                {id: 47,opcion:'Peso de barra cuadrada', html: `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px;
                    }
                    table {
                        width: 80%;
                        margin: 0.5rem 0;
                    }
                </style>

                <table>
                <tr>
                    <th colspan="3">
                        <label>Tipo de material</label><br>
                        <input class="inputDis" id="tipmat" type="text" value="Acero" readonly>
                      
                    </th>
                </tr>
                    <tr>
                        <th >
                            <label>Lado A</label><br>
                            <input class="inputDis" id="lado" type="number">
                            <label> mm</label>
                        </th>
                   
                        <th>
                            <label>Longitud</label><br>
                            <input class="inputDis" id="longitud" type="number">
                            <label> m</label>
                        </th>
                   
                        <th >
                            <label>Pieza(#)</label><br>
                            <input class="inputDis" id="pieza" type="number">
                           
                        </th>
                    </tr>
                    <tr>
                    <td colspan="3">
                    <p>Precio por kg en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>
                            <option value="f">Freund</option>
                            <option value="v">Vidrí</option>
                        </select>
                        </td>
                        </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Peso en Kg</td>
                        <td>
                            <p><span id="resultado1"></span></p>
                        </td>
                        <td>kg</td>
                    </tr>
                    <tr>
                        <td>Peso en libras</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>lb</td>
                    </tr>
                    <tr>
                        <td>Peso en toneladas</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>ton</td>
                    </tr>
                    <tr>
                        <td>Coste Total</td>
                        <td>
                            <p><span id="resultado4"></span></p>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Volumen de 1 pieza</td>
                        <td>
                            <p><span id="resultado5"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>


                </table>
                `, imagen: '/Imagenes/Contenidos/Cuadrada.png',calculo: CalcularPesoBarraCuadrada, comprar: '',imprimir: ''
                },
                {id: 48,opcion:'Peso de barra de tubería', html:  `
                <style>
                    .inputDis {
                        border: 1px solid #59e;
                        border-radius: 25px;
                        padding: 5px;
                        text-align: center;
                        width: 80%;
                        margin-bottom: 10px;
                    }
                    th {
                        border: 1px solid #000;
                        padding: 10px;
                        border-radius: 5px;
                    }
                    td {
                        border: 1px solid #000;
                        text-align: center;
                        border-radius: 5px;
                        padding: 10px;
                    }
                    table {
                        width: 80%;
                        margin: 0.5rem 0;
                    }
                </style>

                <table>
                <tr>
                    <th colspan="4">
                        <label>Tipo de material</label><br>
                        <input class="inputDis" id="tipmat" type="text" value="Acero" readonly>
                      
                    </th>
                </tr>
                    <tr>
                        <th >
                            <label>Diametro (mm)</label><br>
                            <input class="inputDis" id="diametro" type="number">
                            
                        </th>
                   
                        <th>
                            <label>Longitud (mts)</label><br>
                            <input class="inputDis" id="longitud" type="number">
                           
                        </th>
                        <th>
                        <label>Grosor (mm)</label><br>
                        <input class="inputDis" id="grosor" type="number">
                        
                    </th>
                   
                        <th >
                            <label>Pieza(#)</label><br>
                            <input class="inputDis" id="pieza" type="number">
                           
                        </th>
                    </tr>
                    <tr>
                    <td colspan="4">
                    <p>Precio por kg en ferreteria</p>
                        <select  id="tfer" class="inputDis">
                            <option value="">SELECCIONE</option>
                            <option value="f">Freund</option>
                            <option value="v">Vidrí</option>
                        </select>
                        </td>
                        </tr>
                </table>
                <table>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Unidad</th>
                    </tr>
                    <tr>
                        <td>Peso en Kg</td>
                        <td>
                            <p><span id="resultado1"></span></p>
                        </td>
                        <td>kg</td>
                    </tr>
                    <tr>
                        <td>Peso en libras</td>
                        <td>
                            <p><span id="resultado2"></span></p>
                        </td>
                        <td>lb</td>
                    </tr>
                    <tr>
                        <td>Peso en toneladas</td>
                        <td>
                            <p><span id="resultado3"></span></p>
                        </td>
                        <td>ton</td>
                    </tr>
                    <tr>
                        <td>Coste Total</td>
                        <td>
                            <p><span id="resultado4"></span></p>
                        </td>
                        <td>$</td>
                    </tr>
                    <tr>
                        <td>Volumen de 1 pieza</td>
                        <td>
                            <p><span id="resultado5"></span></p>
                        </td>
                        <td>m3</td>
                    </tr>


                </table>
                `, imagen: '/Imagenes/Contenidos/Pipa.png',calculo: CalcularPesoBarraTuberiaRedonda, comprar: '',imprimir: ''
                },
                {id: 50,opcion:'Peso de barra hexagonal', html: `
                <p>colocar html aqui </p>
                `, imagen: '/C2/hexagonal.png',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                //-----------------
                // VOLUMEN Y AREA
                // ----------------
                {id: 51,opcion:'Rectangulo Prismatico', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th>
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                        <th>
                            <label>Largo </label>
                            <input class="inputDis" id="largo" type="number">
                        </th>
                        <th>
                            <label>Ancho </label>
                            <input class="inputDis" id="ancho" type="number">
                        </th>
                        
                    </tr>
                        <tr>
                            <th colspan="3">Volumen</th>
                            
                        </tr>
                        <tr>
                            <td colspan="3"><span id="resultado1"></span></td>
                            
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Rectangulo_Prisma.png',calculo: VolumenPrismaRectangular, comprar: '',imprimir: ''
                },
                {id: 52,opcion:'Cilindro', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th>
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                        <th>
                            <label>Diametro </label>
                            <input class="inputDis" id="diametro" type="number">
                        </th>
                        
                        
                    </tr>
                    
                        <tr>
                            <th colspan="2">Volumen</th>
                            
                        </tr>
                        <tr>
                            <td colspan="3"><span id="resultado1"></span></td>
                            
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Cilindro.png',calculo: VolumenCilindro, comprar: '',imprimir: ''
                },
                {id: 53,opcion:'Tanque rectangular', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th>
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                        <th>
                            <label>Largo </label>
                            <input class="inputDis" id="largo" type="number">
                        </th>
                        <th>
                            <label>Ancho </label>
                            <input class="inputDis" id="ancho" type="number">
                        </th>
                        
                    </tr>
                    
                        <tr>
                            <th colspan="3">Volumen</th>
                            
                        </tr>
                        <tr>
                            <td colspan="3"><span id="resultado1"></span></td>
                            
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Tanque_Rectangular.png',calculo: VolumenTanqueRectangular, comprar: '',imprimir: ''
                },
                {id: 54,opcion:'Descargador triangular', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th>
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                        <th>
                            <label>Ancho </label>
                            <input class="inputDis" id="ancho" type="number">
                        </th>
                        <th>
                            <label>Largo 1</label>
                            <input class="inputDis" id="largo_uno" type="number">
                        </th><th>
                            <label>Largo 2</label>
                            <input class="inputDis" id="largo_dos" type="number">
                        </th>
                        
                    </tr>
                    
                        <tr>
                            <th colspan="4">Volumen</th>
                            
                        </tr>
                        <tr>
                            <td colspan="4"><span id="resultado1"></span></td>
                            
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Volcador_Triangular.png',calculo: VolumenVolqueteTriangular, comprar: '',imprimir: ''
                },
                {id: 55,opcion:'Volquete trapezoidal', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th>
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                        <th>
                            <label>Ancho </label>
                            <input class="inputDis" id="ancho" type="number">
                        </th>
                        <th>
                            <label>Largo 1</label>
                            <input class="inputDis" id="largo_uno" type="number">
                        </th>
                        <th>
                            <label>Largo 2</label>
                            <input class="inputDis" id="largo_dos" type="number">
                        </th>
                        
                    </tr>

                        <tr>
                            <th colspan="4">Volumen</th>
                            
                        </tr>
                        <tr>
                            <td colspan="4"><span id="resultado1"></span></td>
                            
                        </tr>   
                    </table>
                `, imagen: '/img2.jpg',calculo: VolumenVolqueteTrapezoide, comprar: '',imprimir: ''
                },
                {id: 56,opcion:'Esfera', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="4">
                            <label>Diametro </label>
                            <input class="inputDis" id="diametro" type="number">
                        </th>
                        
                    </tr>
                    <tr>
                        <th colspan="4">Volumen</th>
                    </tr>
                    <tr>
                        <td colspan="4"><span id="resultado1"></span></td>
                        
                    </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Esfera.png',calculo: VolumenEsfera, comprar: '',imprimir: ''
                },
                {id: 61,opcion:'Media Esfera', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table >
                    <tr>
                        <th colspan="3">
                            <label>Diametro </label>
                            <input class="inputDis" id="diametro" type="number">
                        </th>
                        
                    </tr>
                    <tr>
                        <th>Volumen</th>
                    </tr>
                    <tr>
                        <td><span id="resultado1"></span></td>
                        
                    </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Media_Esfera.png',calculo: VolumenMediaEsfera, comprar: '',imprimir: ''
                },
                {id: 62,opcion:'Prisma', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th>
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                        <th>
                            <label>Lado 1 </label>
                            <input class="inputDis" id="lado_uno" type="number">
                        </th>
                        <th>
                            <label>Lado 2 </label>
                            <input class="inputDis" id="lado_dos" type="number">
                        </th>
                    </tr>
                        <tr>
                            <th colspan="3">Volumen</th>
                        </tr>
                        <tr>
                            <td colspan="3"><span id="resultado1"></span></td>
                            
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Prisma_Trapezoide.png',calculo: VolumenPrisma, comprar: '',imprimir: ''
                },
                {id: 63,opcion:'Circulo', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Radio </label>
                            <input class="inputDis" id="radioCirculo" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>

                `, imagen: '/Imagenes/Contenidos/Circulo.png',calculo: AreaCirculo, comprar: '',imprimir: ''
                },
                {id: 64,opcion:'Cuadrado', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Lado </label>
                            <input class="inputDis" id="lado" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Cuadrado.png',calculo: AreaCuadrado, comprar: '',imprimir: ''
                },
                {id: 65,opcion:'Rectangulo', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Base </label>
                            <input class="inputDis" id="base" type="number">
                        </th>
                        <th colspan="3">
                            <label>Altura </label>
                            <input class="inputDis" id="altura" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Rectangulo.png',calculo: AreaRectangulo, comprar: '',imprimir: ''
                },
                {id: 66,opcion:'Triangulo', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Base </label>
                            <input class="inputDis" id="base" type="number">
                        </th>
                        <th colspan="3">
                            <label>Altura </label>
                            <input class="inputDis" id="altura" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Triangulo.png',calculo: AreaTriangulo, comprar: '',imprimir: ''
                },
                {id: 67,opcion:'Trapezoide', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Base </label>
                            <input class="inputDis" id="base" type="number">
                        </th>
                        <th colspan="3">
                            <label>Altura </label>
                            <input class="inputDis" id="altura" type="number">
                        </th>
                        <th colspan="3">
                            <label>Copa </label>
                            <input class="inputDis" id="copa" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Trapezoide.png',calculo: AreaTrapezoide, comprar: '',imprimir: ''
                },
                {id: 68,opcion:'Elipse', html: `
                <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Radio 1</label>
                            <input class="inputDis" id="radio_uno" type="number">
                        </th>
                        <th colspan="3">
                            <label>Radio 2</label>
                            <input class="inputDis" id="radio_dos" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Elipse.png',calculo: AreaElipse, comprar: '',imprimir: ''
                },
                {id: 69,opcion:'Forma 1', html: `
                                    <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Largo </label>
                            <input class="inputDis" id="largo" type="number">
                        </th>
                        <th colspan="3">
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="">NO HAY</span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Escaleno.png',calculo: AreaTrianguloEscaleno, comprar: '',imprimir: ''
                },
                {id: 70,opcion:'Forma 2', html: `
                                    <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Largo </label>
                            <input class="inputDis" id="largo" type="number">
                        </th>
                        <th colspan="3">
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Forma_2.png',calculo: AreaCuadradoCopaCircular, comprar: '',imprimir: ''
                },
                {id: 71,opcion:'Forma 3', html: `
                                    <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Largo </label>
                            <input class="inputDis" id="largo" type="number">
                        </th>
                        <th colspan="3">
                            <label>Alto </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Forma_3.png',calculo: AreaCuadradoCopaCircularDoble, comprar: '',imprimir: ''
                },
                {id: 72,opcion:'Forma 4', html: `
                                    <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Lado 1</label>
                            <input class="inputDis" id="lado_1" type="number">
                        </th>
                        <th colspan="3">
                            <label>Lado 2</label>
                            <input class="inputDis" id="lado_2" type="number">
                        </th>
                        <th colspan="3">
                            <label>Lado 3</label>
                            <input class="inputDis" id="lado_3" type="number">
                        </th>
                        <th colspan="3">
                            <label>Lado 4</label>
                            <input class="inputDis" id="lado_4" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"></span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Forma_4.png',calculo: AreaFiguraPerspectiva, comprar: '',imprimir: ''
                },
                {id: 73,opcion:'Forma 5', html: `
                                    <style>
                    .inputDis{
                        border:1px solid #59e;border-radius:25px;
                        padding:5px;text-align:center;width:80%;
                        margin-bottom:10px}th{border:1px solid #000;
                        padding:10px;border-radius:5px
                    }
                        
                    td{
                        border:1px solid #000;
                        text-align:center;
                        border-radius:5px;
                        height:2rem;
                    }
                </style>
                
                <table>
                    <tr>
                        <th colspan="3">
                            <label>Base </label>
                            <input class="inputDis" id="base" type="number">
                        </th>
                        <th colspan="3">
                            <label>Altura </label>
                            <input class="inputDis" id="alto" type="number">
                        </th>
                        <th colspan="3">
                            <label>Copa </label>
                            <input class="inputDis" id="copa" type="number">
                        </th>
                    </tr>
                    
                    </table>
                    
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Perimetro</th>
                            
                        </tr>
                        <tr>
                            <td><span id="resultado1"></span></td>
                            <td><span id="resultado2"> NO HAY</span></td>
                        </tr>   
                    </table>
                `, imagen: '/Imagenes/Contenidos/Forma_5.png',calculo: AreaTrapecio, comprar: '',imprimir: ''
                },
                {id: 74,opcion:'Longitud', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 75,opcion:'Area', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 76,opcion:'Volumen', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 77,opcion:'Peso', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 78,opcion:'Presion', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 79,opcion:'Angulo', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 80,opcion:'Poder', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 81,opcion:'Fuerza', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 82,opcion:'Trabajo', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 83,opcion:'Temperatura', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 84,opcion:'Velocidad', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 85,opcion:'Tiempo', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 86,opcion:'Combustible', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 87,opcion:'Voltaje', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
                {id: 88,opcion:'Datos', html: `
                <p>colocar html aqui </p>
                `, imagen: '/img2.jpg',calculo: LosaHormig, comprar: '',imprimir: ''
                },
            ];
            commit('SET_PROCEDIMIENTOS', procedimientos);
        },
        fetchCalculos({ commit }) {
            const calculos = [
                {id: 1,formula: 'si',tipo:'Cantidad', nombre: 'Concreto', imagen: '/Imagenes/SubTitulos/Concreto.png'},
                {id: 2,formula: 'si',tipo:'Cantidad', nombre: 'Ladrillos', imagen: '/Imagenes/SubTitulos/Ladrillo.png'},
                {id: 3,formula: 'no',tipo:'Cantidad', nombre: 'Bloques', imagen: '/Imagenes/SubTitulos/Bloque.png'},
                // {id: 4,formula: 'si',tipo:'Cantidad', nombre: 'Mecánica de suelos cálculo', imagen: '/C2/MSuelos.png'},
                {id: 5,formula: 'no',tipo:'Cantidad', nombre: 'Super Elevación cálculo', imagen: '/Imagenes/SubTitulos/Super_Elevacion.png'},
                // {id: 6,formula: 'no',tipo:'Cantidad', nombre: 'Barra de hélice', imagen: '/C2/BarraElice.jpg'},
                {id: 7,formula: 'no',tipo:'Cantidad', nombre: 'Yeso', imagen: '/Imagenes/SubTitulos/Yeso.png'},
                //{id: 8,formula: 'no',tipo:'Cantidad', nombre: 'Relleno', imagen: '/C2/relleno.png'},
                //{id: 9,formula: 'no',tipo:'Cantidad', nombre: 'Excavación', imagen: '/C2/excavacion2.jpg'},
                //{id: 10,formula: 'no',tipo:'Cantidad', nombre: 'Pintar', imagen: '/C2/pintar2.jpg'},
                //{id: 11,formula: 'no',tipo:'Cantidad', nombre: 'Relleno de taludes cálculo', imagen: '/C2/talu2.png'},
                {id: 12,formula: 'no',tipo:'Cantidad', nombre: 'Asfalto', imagen: '/Imagenes/SubTitulos/Asfalto.png'},
                //{id: 13,formula: 'no',tipo:'Cantidad', nombre: 'Azulejos', imagen: '/C2/azulejos.jpg'},
                //{id: 14,formula: 'no',tipo:'Cantidad', nombre: 'Terrazo', imagen: '/C2/terrazo1.jpg'},
                //{id: 15,formula: 'no',tipo:'Cantidad', nombre: 'Ladrillos de piso', imagen: '/C2/piso.jpg'},
                //{id: 16,formula: 'no',tipo:'Cantidad', nombre: 'anti termitas', imagen: '/C2/termas.png'},
                {id: 17,formula: 'no',tipo:'Cantidad', nombre: 'Acero', imagen: '/Imagenes/SubTitulos/Barras.png'},
                {id: 18,formula: 'no',tipo:'Cantidad', nombre: 'Encofrado', imagen: '/Imagenes/SubTitulos/Encofrado.png'},
                {id: 19,formula: 'no',tipo:'Cantidad', nombre: 'Tanque de agua', imagen: '/Imagenes/SubTitulos/Tanque.png'},
                //{id: 20,formula: 'no',tipo:'Cantidad', nombre: 'BOQ', imagen: '/C2/bqq.jpg'},
                {id: 21,formula: 'no',tipo:'Cantidad', nombre: 'Diagonal', imagen: '/Imagenes/SubTitulos/Diagonal.png'},
                {id: 22,formula: 'no',tipo:'Cantidad', nombre: 'Profundidad de la cimentación', imagen: '/Imagenes/SubTitulos/Profundidad.png'},
                {id: 23,formula: 'no',tipo:'Cantidad', nombre: 'Prueba concreta', imagen: '/Imagenes/SubTitulos/Prueba.png'},
                //{id: 24,formula: 'no',tipo:'RCC', nombre: 'Losa Simple', imagen: '/C2/losaSimple.png'},
                //{id: 25,formula: 'no',tipo:'RCC', nombre: 'Losa Unidireccional', imagen: '/C2/losaUni.png'},
                //{id: 26,formula: 'no',tipo:'RCC', nombre: 'Losa de dos vías', imagen: '/C2/losaDos.png'},
                //{id: 27,formula: 'no',tipo:'RCC', nombre: 'columna de 4 barras', imagen: '/RCC1.png'},
                //{id: 28,formula: 'no',tipo:'RCC', nombre: 'columna de 6 barras', imagen: '/C2/6Barras.png'},
                //{id: 29,formula: 'no',tipo:'RCC', nombre: 'columna redonda', imagen: '/C2/redonda2.png'},
                // {id: 30,formula: 'no',tipo:'Estructura', nombre: 'Simple viga de soporte', imagen: '/C2/soporte.png'},
                // {id: 31,formula: 'no',tipo:'Estructura', nombre: 'Viga en voladizo', imagen: '/C2/viga.png'},
                // {id: 32,formula: 'no',tipo:'Estructura', nombre: 'Viga fija soportada', imagen: '/C2/vigaFija.png'},
                // {id: 33,formula: 'no',tipo:'Estructura', nombre: 'Viga fija fija', imagen: '/C2/vigaFija2.png'},
                // {id: 34,formula: 'no',tipo:'Estructura', nombre: 'Pandeo critico de columna', imagen: '/C2/pandeo.png'},
                // {id: 35,formula: 'no',tipo:'Estructura', nombre: 'carga segura', imagen: '/C2/cargaSe.png'},
                // {id: 36,formula: 'no',tipo:'Nuevos Calculos', nombre: 'N/A', imagen: '/img2.jpg'},
                {id: 37,formula: 'no',tipo:'Metal', nombre: 'Peso de barra redonda', imagen: '/Imagenes/Contenidos/Barra.png'},
                {id: 38,formula: 'no',tipo:'Metal', nombre: 'Peso de barra cuadrada', imagen: '/Imagenes/Contenidos/Cuadrada.png'},
                {id: 39,formula: 'no',tipo:'Metal', nombre: 'Peso de barra de tubería', imagen: '/Imagenes/Contenidos/Pipa.png'},
                // {id: 40,formula: 'no',tipo:'Metal', nombre: 'Peso de barra hexagonal', imagen: '/C2/hexagonal.png'},
                {id: 41,formula: 'no',tipo:'Volumen', nombre: 'Rectangulo Prismatico', imagen: '/Imagenes/SubTitulos/Rectangulo_Prisma.png'},
                {id: 42,formula: 'no',tipo:'Volumen', nombre: 'Cilindro', imagen: '/Imagenes/SubTitulos/Cilindro.png'},
                {id: 43,formula: 'no',tipo:'Volumen', nombre: 'Tanque rectangular', imagen: '/Imagenes/SubTitulos/Tanque_Rectangular.png'},
                {id: 44,formula: 'no',tipo:'Volumen', nombre: 'Descargador triangular', imagen: '/Imagenes/SubTitulos/Volcador_Triangular.png'},
                //{id: 45,formula: 'no',tipo:'Volumen', nombre: 'Volquete trapezoidal', imagen: '/Imagenes/SubTitulos/Volquete_Trapezoide.png'},
                {id: 46,formula: 'no',tipo:'Volumen', nombre: 'Esfera', imagen: '/Imagenes/SubTitulos/Esfera.png'},
                //{id: 47,formula: 'no',tipo:'Volumen', nombre: 'ConoEsfera', imagen: '/img2.jpg'},
                //{id: 48,formula: 'no',tipo:'Volumen', nombre: 'Frustum Cono', imagen: '/img2.jpg'},
                //{id: 49,formula: 'no',tipo:'Volumen', nombre: 'Cono parabólico', imagen: '/img2.jpg'},
                //{id: 50,formula: 'no',tipo:'Volumen', nombre: 'Cubo', imagen: '/img2.jpg'},
                {id: 51,formula: 'no',tipo:'Volumen', nombre: 'Media Esfera', imagen: '/Imagenes/SubTitulos/Media_Esfera.png'},
                {id: 52,formula: 'no',tipo:'Volumen', nombre: 'Prisma', imagen: '/Imagenes/SubTitulos/Prisma_Trapezoide.png'},
                {id: 53,formula: 'no',tipo:'Área', nombre: 'Circulo', imagen: '/Imagenes/Contenidos/Circulo.png'},
                {id: 54,formula: 'no',tipo:'Área', nombre: 'Cuadrado', imagen: '/Imagenes/Contenidos/Cuadrado.png'},
                {id: 55,formula: 'no',tipo:'Área', nombre: 'Rectangulo', imagen: '/Imagenes/Contenidos/Rectangulo.png'},
                {id: 56,formula: 'no',tipo:'Área', nombre: 'Triangulo', imagen: '/Imagenes/Contenidos/Triangulo.png'},
                {id: 57,formula: 'no',tipo:'Área', nombre: 'Trapezoide', imagen: '/Imagenes/Contenidos/Trapezoide.png'},
                {id: 58,formula: 'no',tipo:'Área', nombre: 'Elipse', imagen: '/Imagenes/Contenidos/Elipse.png'},
                {id: 59,formula: 'no',tipo:'Área', nombre: 'Forma 1', imagen: '/Imagenes/Contenidos/Escaleno.png'},
                {id: 60,formula: 'no',tipo:'Área', nombre: 'Forma 2', imagen: '/Imagenes/Contenidos/Forma_2.png'},
                {id: 61,formula: 'no',tipo:'Área', nombre: 'Forma 3', imagen: '/Imagenes/Contenidos/Forma_3.png'},
                {id: 62,formula: 'no',tipo:'Área', nombre: 'Forma 4', imagen: '/Imagenes/Contenidos/Forma_4.png'},
                {id: 63,formula: 'no',tipo:'Área', nombre: 'Forma 5', imagen: '/Imagenes/Contenidos/Forma_5.png'},
                // {id: 64,formula: 'no',tipo:'Conversion', nombre: 'Longitud', imagen: '/img2.jpg'},
                // {id: 65,formula: 'no',tipo:'Conversion', nombre: 'Area', imagen: '/img2.jpg'},
                // {id: 66,formula: 'no',tipo:'Conversion', nombre: 'Volumen', imagen: '/img2.jpg'},
                // {id: 67,formula: 'no',tipo:'Conversion', nombre: 'Peso', imagen: '/img2.jpg'},
                // {id: 68,formula: 'no',tipo:'Conversion', nombre: 'Presion', imagen: '/img2.jpg'},
                // {id: 69,formula: 'no',tipo:'Conversion', nombre: 'Angulo', imagen: '/img2.jpg'},
                // {id: 70,formula: 'no',tipo:'Conversion', nombre: 'Poder', imagen: '/img2.jpg'},
                // {id: 71,formula: 'no',tipo:'Conversion', nombre: 'Fuerza', imagen: '/img2.jpg'},
                // {id: 72,formula: 'no',tipo:'Conversion', nombre: 'Trabajo', imagen: '/img2.jpg'},
                // {id: 73,formula: 'no',tipo:'Conversion', nombre: 'Temperatura', imagen: '/img2.jpg'},
                // {id: 74,formula: 'no',tipo:'Conversion', nombre: 'Velocidad', imagen: '/img2.jpg'},
                // {id: 75,formula: 'no',tipo:'Conversion', nombre: 'Tiempo', imagen: '/img2.jpg'},
                // {id: 76,formula: 'no',tipo:'Conversion', nombre: 'Combustible', imagen: '/img2.jpg'},
                // {id: 77,formula: 'no',tipo:'Conversion', nombre: 'Voltaje', imagen: '/img2.jpg'},
                // {id: 78,formula: 'no',tipo:'Conversion', nombre: 'Datos', imagen: '/img2.jpg'},
            ];
            commit('SET_CALCULOS', calculos);
        },
        fetchCalculoCiviles({ commit }) {
            const CalculoCiviles = [
                { id: 1, nombre: "Cantidad", imagen: "/cantidad.png", boton: "Ver opciones" },
                // { id: 2, nombre: "RCC", imagen: "/RCC1.png" },
                // { id: 3, nombre: "Estructura", imagen: "/estructura.png" },
                // { id: 4, nombre: "Nuevos Cálculos", imagen: "/Ncalculos.png" },
                { id: 5, nombre: "Metal", imagen: "/metal.png", boton: "Ver opciones"},
                { id: 6, nombre: "Volumen", imagen: "/volumen.png", boton: "Ver opciones" },
                { id: 7, nombre: "Área", imagen: "/area.png", boton: "Ver opciones" },
                // { id: 8, nombre: "Conversión", imagen: "/conversion.png" },
            ];
            commit('SET_CALCULOCIVILES', CalculoCiviles);
        },
        fetchFormulas({ commit }) {
            const formulas = [
                {id: 1,tipo:'Concreto', nombre: 'Concreto por volumen', imagen: '/C2/concreto.png'},
                {id: 2,tipo:'Concreto', nombre: 'Losa de hormigon', imagen: '/C2/losa.png'},
                {id: 3,tipo:'Concreto', nombre: 'Columna cuadrada de hormigon', imagen: '/C2/colum.png'},
                {id: 4,tipo:'Concreto', nombre: 'Concreto de columna redonda', imagen: '/C2/redonda.png'},
                {id: 5,tipo:'Concreto', nombre: 'Tanque circular de hormigon', imagen: '/C2/tanqueci.png'},
                {id: 6,tipo:'Ladrillos', nombre: 'Ladrillos por volumen', imagen: '/Imagenes/Contenidos/Ladrillo.png'},
                {id: 7,tipo:'Ladrillos', nombre: 'Ladrillos de pared', imagen: '/Imagenes/Contenidos/Pared.png'},
                {id: 8,tipo:'Ladrillos', nombre: 'Ladrillos de pared circular', imagen: '/Imagenes/Contenidos/Circular.png'},
                // {id: 9,tipo:'Mecánica de suelos cálculo', nombre: 'Peso unitario seco', imagen: '/C2/pesoseco.png'},
                // {id: 10,tipo:'Mecánica de suelos cálculo', nombre: 'Peso unitario humedad', imagen: '/C2/cimiento.jpg'},
                // {id: 11,tipo:'Mecánica de suelos cálculo', nombre: 'Capacidad portante de cimientacion circular', imagen: '/C2/pesohume.png'},
                // {id: 12,tipo:'Mecánica de suelos cálculo', nombre: 'Capacidad portante de cimiento continua', imagen: '/C2/ci4.png'},
            ];
            commit('SET_FORMULAS', formulas);
        },
    },
    getters: {
        getProductos: (state) => state.productos,
        getProcedimientos: (state) => state.procedimientos,
        getCalculos: (state) => state.calculos,
        getCalculoCiviles: (state) => state.CalculoCiviles,
        getFormulas: (state) => state.formulas,
    },
    beforeUnmount() {
    },
    unmounted() {
    }
});
