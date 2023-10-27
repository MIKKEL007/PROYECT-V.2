
import axios from 'axios';


export function ProcContVol() {
   /*
    * NOTAS SOBRE EL METODO


    * nombre CONCRETO POR VOLUMEN
    * modificado por MIKKEL
    * quite el campo precio bolsa cemento y coloque un select para determinar que valores se tomaran si freun o vidri
    */
   var volumenHormigon = parseInt(document.getElementById("volumenHormigon").value);
   var Cemt = parseInt(document.getElementById("Cemt").value);
   var Aren = parseInt(document.getElementById("Aren").value);
   var Agre = parseInt(document.getElementById("Agre").value);
   var bolsCemt = parseInt(document.getElementById("bolsCemt").value);
   var volmSec = parseInt(document.getElementById("volmSec").value); // desconozco su funcionamiento y uso
   var Cant = parseInt(document.getElementById("Cant").value); // desconozco su funcionamiento y uso
   // var precBolsCem = parseInt(document.getElementById("precBolsCem").value);
    var tfer = document.getElementById("tfer").value;

   var RelAguCemt = parseInt(document.getElementById("RelAguCemt").value);
   var PrecConc = parseInt(document.getElementById("PrecConc").value);

   // obtencion de precios
   axios.get('http://127.0.0.1:8000/api/v1/precios')
   .then(res =>{
       console.log(res);
       var VH = volumenHormigon;
       var VHS = VH * 1.54;
       var Peso_Cemento = Cemt * bolsCemt;
       var Cemento = Peso_Cemento / 2400; // Densidad del hormigón asumida: 2400 kg/m³
       var Cantidad_Cemento = VH * RelAguCemt;
       var Cantidad_Arena = Aren * RelAguCemt;
       var Cantidad_Agregado = Agre * RelAguCemt;
       var Cantidad_Agua = Cantidad_Cemento * RelAguCemt;
       var Bolsas_Cemento = Peso_Cemento / 50; // Asumiendo 1 bolsa de cemento = 50 kg

       //condicion sobre si quiere saber el precio de freund o vodri
       if (tfer === 'f') {
           var Coste_Bolsas_Cemento = Bolsas_Cemento * res.data.data[0].precio;
           console.log('');
       } else {
           var Coste_Bolsas_Cemento = Bolsas_Cemento * res.data.data[1].precio;
           console.log('');
       }

       var Coste_Concreto = VH * PrecConc; // aqui si se cambia se deberia de sumar el costa bolsas cemento __ABAJO EN EL COMENTARIO COMO QUEDARIA__
       // var Coste_Concreto = (VH * PrecConc) + Coste_Bolsas_Cemento


       var Peso_Hormigon = VH * 2400; // Densidad del hormigón asumida: 2400 kg/m³
   
       document.getElementById("resultado1").textContent = VH + " m³";
       document.getElementById("resultado2").textContent = VHS + " m³";
       document.getElementById("resultado3").textContent = Peso_Cemento + " kg";
       document.getElementById("resultado4").textContent = Cemento + " m³";
       document.getElementById("resultado5").textContent = Cantidad_Arena + " m³";
       document.getElementById("resultado6").textContent = Cantidad_Agregado + " m³";
       document.getElementById("resultado7").textContent = Cantidad_Agua + " litros";
       document.getElementById("resultado8").textContent = Bolsas_Cemento + " bolsos";
       document.getElementById("resultado9").textContent = Coste_Bolsas_Cemento.toFixed(2) + " $";
       document.getElementById("resultado10").textContent = Coste_Concreto + " $";
       document.getElementById("resultado11").textContent = Peso_Hormigon + " kg";
   })
   .catch(err => {
       console.log(err);
       var VH = volumenHormigon;
       var VHS = VH * 1.54;
       var Peso_Cemento = Cemt * bolsCemt;
       var Cemento = Peso_Cemento / 2400; // Densidad del hormigón asumida: 2400 kg/m³
       var Cantidad_Cemento = VH * RelAguCemt;
       var Cantidad_Arena = Aren * RelAguCemt;
       var Cantidad_Agregado = Agre * RelAguCemt;
       var Cantidad_Agua = Cantidad_Cemento * RelAguCemt;
       var Bolsas_Cemento = Peso_Cemento / 50; // Asumiendo 1 bolsa de cemento = 50 kg
       var Coste_Bolsas_Cemento = Bolsas_Cemento * precBolsCem;
       var Coste_Concreto = VH * PrecConc;
       var Peso_Hormigon = VH * 2400; // Densidad del hormigón asumida: 2400 kg/m³

       document.getElementById("resultado1").textContent = VH + " m³";
       document.getElementById("resultado2").textContent = VHS + " m³";
       document.getElementById("resultado3").textContent = Peso_Cemento + " kg";
       document.getElementById("resultado4").textContent = Cemento + " m³";
       document.getElementById("resultado5").textContent = Cantidad_Arena + " m³";
       document.getElementById("resultado6").textContent = Cantidad_Agregado + " m³";
       document.getElementById("resultado7").textContent = Cantidad_Agua + " litros";
       document.getElementById("resultado8").textContent = Bolsas_Cemento + " bolsos";
       document.getElementById("resultado9").textContent = Coste_Bolsas_Cemento + " $";
       document.getElementById("resultado10").textContent = Coste_Concreto + " $";
       document.getElementById("resultado11").textContent = Peso_Hormigon + " kg";
   })
  
}

export function LosaHormig() {

    /*
    * NOTAS SOBRE EL METODO
    * nombre CONCRETO POR VOLUMEN
    * modificado por MIKKEL
    * quite el campo precio bolsa cemento y coloque un select para determinar que valores se tomaran si freun o vidri
    */

    // variable
    var tfer = document.getElementById("tfer").value;
    
    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var profundidad = parseInt(document.getElementById("profundidad").value);
    
    // //procedimiento
   
   var volumenHormigon = largo * ancho * (profundidad / 100);
   var Cemt = parseInt(document.getElementById("Cemt").value);
   var Aren = parseInt(document.getElementById("Aren").value);
   var Agre = parseInt(document.getElementById("Agre").value);
   var bolsCemt = parseInt(document.getElementById("bolsCemt").value);
   var volmSec = parseInt(document.getElementById("volmSec").value); // desconozco su funcionamiento y uso
   var Cant = parseInt(document.getElementById("Cant").value); // desconozco su funcionamiento y uso
   // var precBolsCem = parseInt(document.getElementById("precBolsCem").value);

   var RelAguCemt = parseInt(document.getElementById("RelAguCemt").value);
   var PrecConc = parseInt(document.getElementById("PrecConc").value);

   // obtencion de precios
   axios.get('http://127.0.0.1:8000/api/v1/precios')
   .then(res =>{
       console.log(res);
       var VH = volumenHormigon;
       var VHS = VH * 1.54;
       var Peso_Cemento = Cemt * bolsCemt;
       var Cemento = Peso_Cemento / 2400; // Densidad del hormigón asumida: 2400 kg/m³
       var Cantidad_Cemento = VH * RelAguCemt;
       var Cantidad_Arena = Aren * RelAguCemt;
       var Cantidad_Agregado = Agre * RelAguCemt;
       var Cantidad_Agua = Cantidad_Cemento * RelAguCemt;
       var Bolsas_Cemento = Peso_Cemento / 50; // Asumiendo 1 bolsa de cemento = 50 kg
       var res1 = document.getElementById("resultado1")
       var res2 = document.getElementById("resultado2")
       var res3 = document.getElementById("resultado3")
       var res4 = document.getElementById("resultado4")
       var res5 = document.getElementById("resultado5")
       var res6 = document.getElementById("resultado6")
       var res7 = document.getElementById("resultado7")
       var res8 = document.getElementById("resultado8")
       var res9 = document.getElementById("resultado9")
       var res10 = document.getElementById("resultado10")
       var res11= document.getElementById("resultado11")

       //condicion sobre si quiere saber el precio de freund o vodri
       if (tfer === 'f') {
           var Coste_Bolsas_Cemento = Bolsas_Cemento * res.data.data[0].precio;
           console.log('');
       } else {
           var Coste_Bolsas_Cemento = Bolsas_Cemento * res.data.data[1].precio;
           console.log('');
       }

       var Coste_Concreto = VH * PrecConc; // aqui si se cambia se deberia de sumar el costa bolsas cemento __ABAJO EN EL COMENTARIO COMO QUEDARIA__
       // var Coste_Concreto = (VH * PrecConc) + Coste_Bolsas_Cemento


       var Peso_Hormigon = VH * 2400; // Densidad del hormigón asumida: 2400 kg/m³
   
       res1.textContent = VH + " m³";
       res2.textContent = VHS + " m³";
       res3.textContent = Peso_Cemento + " kg";
       res4.textContent = Cemento + " m³";
       res5.textContent = Cantidad_Arena + " m³";
       res6.textContent = Cantidad_Agregado + " m³";
       res7.textContent = Cantidad_Agua + " litros";
       res8.textContent = Bolsas_Cemento + " bolsos";
       res9.textContent = Coste_Bolsas_Cemento.toFixed(2) + " $";
       res10.textContent = Coste_Concreto + " $";
       res11.textContent = Peso_Hormigon + " kg";
    })
   .catch(err => {
       console.log(err);
       var VH = volumenHormigon;
       var VHS = VH * 1.54;
       var Peso_Cemento = Cemt * bolsCemt;
       var Cemento = Peso_Cemento / 2400; // Densidad del hormigón asumida: 2400 kg/m³
       var Cantidad_Cemento = VH * RelAguCemt;
       var Cantidad_Arena = Aren * RelAguCemt;
       var Cantidad_Agregado = Agre * RelAguCemt;
       var Cantidad_Agua = Cantidad_Cemento * RelAguCemt;
       var Bolsas_Cemento = Peso_Cemento / 50; // Asumiendo 1 bolsa de cemento = 50 kg
       var Coste_Bolsas_Cemento = Bolsas_Cemento * precBolsCem;
       var Coste_Concreto = VH * PrecConc;
       var Peso_Hormigon = VH * 2400; // Densidad del hormigón asumida: 2400 kg/m³

      
       res1.textContent = VH + " m³";

       res1.textContent = VHS + " m³";

       res1.textContent = Peso_Cemento + " kg";

       res1.textContent = Cemento + " m³";

       res1.textContent = Cantidad_Arena + " m³";

       res1.textContent = Cantidad_Agregado + " m³";

       res1.textContent = Cantidad_Agua + " litros";

       res1.textContent = Bolsas_Cemento + " bolsos";

       res1.textContent = Coste_Bolsas_Cemento + " $";

       res1.textContent = Coste_Concreto + " $";

       res1.textContent = Peso_Hormigon + " kg";
    })

}
export function ColumnaCuadradaHormigon(){

// Datos de entrada
var ladoA = parseFloat(document.getElementById("ladoA").value)/1000;// metros
var ladoB = parseFloat(document.getElementById("ladoB").value)/1000;// metros
var Altura = parseFloat(document.getElementById("ladoH").value);// metros

// Proporción de materiales (cemento:arena:agregado)
var proporcionCemento = parseFloat(document.getElementById("Cemt").value);
var proporcionArena = parseFloat(document.getElementById("Aren").value);
var proporcionAgregado = parseFloat(document.getElementById("Agre").value);

// Datos específico

var tfer = document.getElementById("tfer").value;

var pesoBolsaCemento = parseFloat(document.getElementById("bolsCemt").value);  // kg por bolsa
var volumenSeco = parseFloat(document.getElementById("volmSec").value);      // metros cúbicos por bolsa
var cantidadBolsasCemento = parseFloat(document.getElementById("Cant").value);
var precioBolsaCemento = 0;  // $ por bolsa se saca de la api
var relacionAguaCemento = parseFloat(document.getElementById("relAC").value);
var precioConcretoMetroCubico = parseFloat(document.getElementById("PrecConc").value);  // $ por metro cúbico


axios.get('http://127.0.0.1:8000/api/v1/precios')
   .then(res =>{
    console.log(res);
    // Calcular el volumen de hormigón seco
    var volumenHormigonSeco = ladoA * ladoB * Altura;

    // Calcular el peso total de cemento
    var pesoTotalCemento = proporcionCemento * cantidadBolsasCemento * pesoBolsaCemento;

    // Calcular el peso total de arena y agregado
    var pesoTotalArena = proporcionArena * pesoTotalCemento;
    var pesoTotalAgregado = proporcionAgregado * pesoTotalCemento;

    // Calcular el volumen de agua
    var volumenAgua = pesoTotalCemento / relacionAguaCemento;
    if (tfer === 'f') {
        precioBolsaCemento = res.data.data[0].precio;
        console.log('freund');
    } else {
        precioBolsaCemento  = res.data.data[1].precio;
        console.log('vidri');
    }
    // Calcular el costo total de materiales
    var costoTotalMateriales = (precioBolsaCemento * cantidadBolsasCemento) + (precioConcretoMetroCubico * volumenHormigonSeco);

    // Mostrar resultados
    document.getElementById("resultado").textContent = volumenHormigonSeco.toFixed(2) + " m³";
    document.getElementById("resultado2").textContent = volumenHormigonSeco.toFixed(2) + " m³";
    document.getElementById("resultado3").textContent = pesoTotalCemento.toFixed(2) + " kg";
    document.getElementById("resultado4").textContent = (pesoTotalCemento / 1000) + " m³";
    document.getElementById("resultado5").textContent = (pesoTotalArena / 1000) + " m³";
    document.getElementById("resultado6").textContent = (pesoTotalAgregado / 1000) + " m³";
    document.getElementById("resultado7").textContent = volumenAgua + " lts";
    document.getElementById("resultado8").textContent = cantidadBolsasCemento + " bls";
    document.getElementById("resultado9").textContent = (precioBolsaCemento * cantidadBolsasCemento).toFixed(2) + " $";
    document.getElementById("resultado10").textContent = costoTotalMateriales.toFixed(2) + " $";
    document.getElementById("resultado11").textContent =(pesoTotalCemento + pesoTotalArena + pesoTotalAgregado) + " kg";
   })
   .catch(err =>{
    console.log(err);
   });

}

export function ConcretoColumnaRedonda(){
        // Datos de entrada
    var diametro = parseFloat(document.getElementById("DiamD").value)  // metros
    var altura = parseFloat(document.getElementById("AltuH").value);   // metros

    // Calcular el radio a partir del diámetro
    var radio = diametro / 2;

    // Calcular el volumen de hormigón seco
    var volumenHormigonSeco = Math.PI * Math.pow(radio, 2) * altura;

    // Proporción de materiales (cemento:arena:agregado)
    var proporcionCemento = parseFloat(document.getElementById("Cemt").value);
    var proporcionArena = parseFloat(document.getElementById("Aren").value);
    var proporcionAgregado = parseFloat(document.getElementById("Agre").value);

    // Datos específicos

    var tfer = document.getElementById("tfer").value;

    var pesoBolsaCemento = parseFloat(document.getElementById("bolsCemt").value);  // kg por bolsa
    var volumenSeco = parseFloat(document.getElementById("volmSec").value);      // metros cúbicos por bolsa
    var cantidadBolsasCemento = parseFloat(document.getElementById("Cant").value);
    var precioBolsaCemento = 0;  // $ por bolsa se saca de la api
    var relacionAguaCemento = parseFloat(document.getElementById("relAC").value);
    var precioConcretoMetroCubico = parseFloat(document.getElementById("PrecConc").value);  // $ por metro cúbico
    
    
    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res =>{
     console.log(res);
    // Calcular el peso total de cemento
    var pesoTotalCemento = proporcionCemento * cantidadBolsasCemento * pesoBolsaCemento;

    // Calcular el peso total de arena y agregado
    var pesoTotalArena = proporcionArena * pesoTotalCemento;
    var pesoTotalAgregado = proporcionAgregado * pesoTotalCemento;

    // Calcular el volumen de agua
    var volumenAgua = pesoTotalCemento / relacionAguaCemento;
    var volumenAgua = pesoTotalCemento / relacionAguaCemento;
    if (tfer === 'f') {
        precioBolsaCemento = res.data.data[0].precio;
        console.log('freund');
    } else {
        precioBolsaCemento  = res.data.data[1].precio;
        console.log('vidri');
    }
    // Calcular el costo total de materiales
    var costoTotalMateriales = (precioBolsaCemento * cantidadBolsasCemento) + (precioConcretoMetroCubico * volumenHormigonSeco);

    // Mostrar resultados
    document.getElementById("resultado").textContent = volumenHormigonSeco.toFixed(2) + " m³";
    document.getElementById("resultado2").textContent = volumenHormigonSeco.toFixed(2) + " m³";
    document.getElementById("resultado3").textContent = pesoTotalCemento.toFixed(2) + " kg";
    document.getElementById("resultado4").textContent = (pesoTotalCemento / 1000) + " m³";
    document.getElementById("resultado5").textContent = (pesoTotalArena / 1000) + " m³";
    document.getElementById("resultado6").textContent = (pesoTotalAgregado / 1000) + " m³";
    document.getElementById("resultado7").textContent = volumenAgua + " lts";
    document.getElementById("resultado8").textContent = cantidadBolsasCemento + " bls";
    document.getElementById("resultado9").textContent = (precioBolsaCemento * cantidadBolsasCemento).toFixed(2) + " $";
    document.getElementById("resultado10").textContent = costoTotalMateriales.toFixed(2) + " $";
    document.getElementById("resultado11").textContent =(pesoTotalCemento + pesoTotalArena + pesoTotalAgregado) + " kg";
    })
    .catch(err =>{
        console.log(err);
    });
}

export function TanqueCircularHormigon() {
    // Datos de entrada
    var diametro = parseFloat(document.getElementById("diametro").value);  // metros
    var altura = parseFloat(document.getElementById("altura").value);      // metros
    var grosor = parseFloat(document.getElementById("grosor").value);      // metros
  
    // Calcular el radio interior y exterior
    var radioInterior = diametro / 2;
    var radioExterior = radioInterior + grosor;
  
    // Calcular el volumen de hormigón seco
    var volumenHormigonSeco = Math.PI * (Math.pow(radioExterior, 2) - Math.pow(radioInterior, 2)) * altura;
  
    // Proporción de materiales (cemento:arena:agregado)
    var proporcionCemento = parseFloat(document.getElementById("Cemt").value);
    var proporcionArena = parseFloat(document.getElementById("Aren").value);
    var proporcionAgregado = parseFloat(document.getElementById("Agre").value);
  
    // Datos específicos

    var tfer = document.getElementById("tfer").value;

    var pesoBolsaCemento = parseFloat(document.getElementById("bolsCemt").value);  // kg por bolsa
    var volumenSeco = parseFloat(document.getElementById("volmSec").value);      // metros cúbicos por bolsa
    var cantidadBolsasCemento = parseFloat(document.getElementById("Cant").value);
    var precioBolsaCemento = 0;  // $ por bolsa
    var relacionAguaCemento = parseFloat(document.getElementById("relAC").value);
    var precioConcretoMetroCubico = parseFloat(document.getElementById("PrecConc").value);  // $ por metro cúbico
  
    axios.get('http://127.0.0.1:8000/api/v1/precios')
      .then(res => {
        console.log(res);
        // Calcular el peso total de cemento
        var pesoTotalCemento = proporcionCemento * cantidadBolsasCemento * pesoBolsaCemento;
  
        // Calcular el peso total de arena y agregado
        var pesoTotalArena = proporcionArena * pesoTotalCemento;
        var pesoTotalAgregado = proporcionAgregado * pesoTotalCemento;
  
        // Calcular el volumen de agua
        var volumenAgua = pesoTotalCemento / relacionAguaCemento;
        if (tfer === 'f') {
            precioBolsaCemento = res.data.data[0].precio;
            console.log('freund');
        } else {
            precioBolsaCemento  = res.data.data[1].precio;
            console.log('vidri');
        }
        // Calcular el costo total de materiales
        var costoTotalMateriales = (precioBolsaCemento * cantidadBolsasCemento) + (precioConcretoMetroCubico * volumenHormigonSeco);
  
        // Mostrar resultados
        document.getElementById("resultado1").textContent = volumenHormigonSeco.toFixed(2) + " m³";
        document.getElementById("resultado2").textContent = volumenHormigonSeco.toFixed(2) + " m³";
        document.getElementById("resultado3").textContent = pesoTotalCemento.toFixed(2) + " kg";
        document.getElementById("resultado4").textContent = (pesoTotalCemento / 1000) + " m³";
        document.getElementById("resultado5").textContent = (pesoTotalArena / 1000) + " m³";
        document.getElementById("resultado6").textContent = (pesoTotalAgregado / 1000) + " m³";
        document.getElementById("resultado7").textContent = volumenAgua + " lts";
        document.getElementById("resultado8").textContent = cantidadBolsasCemento + " bls";
        document.getElementById("resultado9").textContent = (precioBolsaCemento * cantidadBolsasCemento).toFixed(2) + " $";
        document.getElementById("resultado10").textContent = costoTotalMateriales.toFixed(2) + " $";
        document.getElementById("resultado11").textContent = (pesoTotalCemento + pesoTotalArena + pesoTotalAgregado) + " kg";
      })
      .catch(err => {
        console.log(err);
      });
  }
 export  function CalcularYeso() {
    // Datos de entrada
    var longitud = parseFloat(document.getElementById("longitud").value);  // metros
    var ancho = parseFloat(document.getElementById("ancho").value);        // metros
    var grosorYeso = parseFloat(document.getElementById("grosor").value); // metros
  
    // Calcular el área de yeso (superficie a cubrir)
    var areaYeso = longitud * ancho;
  
    // Calcular el volumen de mortero seco
    var volumenMorteroSeco = areaYeso * grosorYeso;
  
   // Proporción de materiales (cemento:arena:agregado)
   var proporcionCemento = parseFloat(document.getElementById("Cemt").value);
   var proporcionArena = parseFloat(document.getElementById("Aren").value);
   

    // Datos específicos

    var tfer = document.getElementById("tfer").value;

    var pesoBolsaCemento = parseFloat(document.getElementById("bolsCemt").value);  // kg por bolsa
    var volumenSeco = parseFloat(document.getElementById("volmSec").value);      // metros cúbicos por bolsa
    var cantidadBolsasCemento = parseFloat(document.getElementById("Cant").value);
    var precioBolsaCemento = 0;  // $ por bolsa

    var desperdicioPorcentaje = parseFloat(document.getElementById("desperdicio").value);
    var precioYesoMetroCubico = 0;  // $ por metro cúbico

    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res => {
      console.log(res);
    // Calcular el volumen de mortero en metros cúbicos
    var volumenMortero = volumenMorteroSeco / (1 + desperdicioPorcentaje / 100);
  
    // Calcular el peso total de cemento
    var pesoTotalCemento = proporcionCemento * cantidadBolsasCemento * pesoBolsaCemento;
  
    // Calcular el peso total de arena
    var pesoTotalArena = proporcionArena * pesoTotalCemento;
   if (tfer === 'f') {
            precioBolsaCemento = res.data.data[0].precio;
            precioYesoMetroCubico = res.data.data[10].precio;
            console.log('freund');
        } else {
            precioBolsaCemento  = res.data.data[1].precio;
            precioYesoMetroCubico = res.data.data[12].precio;
            
            console.log('vidri');
        }
    // Calcular el costo total de materiales
    var costoTotalMateriales = (precioBolsaCemento * cantidadBolsasCemento) + (precioYesoMetroCubico * volumenMortero);
  
    // Mostrar resultados
    document.getElementById("resultado1").textContent = volumenMortero.toFixed(2) + " m³";
    document.getElementById("resultado2").textContent = volumenMorteroSeco.toFixed(2) + " m³";
    document.getElementById("resultado3").textContent = pesoTotalCemento.toFixed(2) + " kg";
    
    document.getElementById("resultado4").textContent = (pesoTotalCemento / 1000) + " m³";
    document.getElementById("resultado5").textContent = (pesoTotalArena / 1000) + " m³";
    document.getElementById("resultado6").textContent = areaYeso + " m²";
    document.getElementById("resultado7").textContent = cantidadBolsasCemento + " bolsas";
    document.getElementById("resultado8").textContent = (precioBolsaCemento * cantidadBolsasCemento).toFixed(2) + " $";
    document.getElementById("resultado9").textContent = costoTotalMateriales.toFixed(2) + " $";
    })
    .catch(err => {
    console.log(err);
    });  
}
export function CalcularAsfalto() {
    // Datos de entrada
    var longitud = parseFloat(document.getElementById("longitud").value);  // metros
    var ancho = parseFloat(document.getElementById("ancho").value);        // metros
    var grosor = parseFloat(document.getElementById("grosor").value)/1000;      // metros
  
    // Calcular el volumen en metros cúbicos
    var volumen = longitud * ancho * grosor;
  
    // Datos específicos
    var tfer = document.getElementById("tfer").value;

    var cantidadAsfalto = parseFloat(document.getElementById("cantidad").value);
    var precioPorTonelada = 0;  // $ por tonelada
    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res => {
      console.log(res);
    // Calcular la cantidad de asfalto en toneladas
    var asfaltoEnToneladas = volumen * cantidadAsfalto;
    if (tfer === 'd') {

        precioPorTonelada = res.data.data[13].precio;
        console.log('D');
    } else {
       
        precioPorTonelada = res.data.data[14].precio;
        
        console.log('A');
    }
    // Calcular el costo total
    var costoTotal = asfaltoEnToneladas * precioPorTonelada;
  
    // Mostrar resultados
    document.getElementById("resultado1").textContent = volumen.toFixed(2) + " m³";
    document.getElementById("resultado2").textContent = asfaltoEnToneladas.toFixed(2) + " toneladas";
    document.getElementById("resultado3").textContent = costoTotal.toFixed(2) + " $";
    })
    .catch(err => {
     console.log(err);
    }); 
}
/*----------------------------------------------------------------
*   METHODOS SIN FUNCION(NO BORRAR PA Q NO HAYA ERRORES DE COMILACION LUEGO)
*/
export function superelevacion() {
    let ve = parseFloat(document.getElementById("velocidad").value);
    let R = parseFloat(document.getElementById("radio").value);

    let response= Math.pow(ve,2) / (9.8 * R)
    document.getElementById("respuestase").value =response
}

export function yeso(){
    let a = parseFloat(document.getElementById("areay").value);
    let e = parseFloat(document.getElementById("espezory").value);
    let response= a * e;
    console.log( document.getElementById("respuestay"));
document.getElementById("respuestay").value =response.toString()

}
export function asfalto(){
let a = parseFloat(document.getElementById("areaa").value);
let e = parseFloat(document.getElementById("espezora").value);
let response= a * e;
document.getElementById("respuestaa").textContent =response
}
/*---------------------------------------------------------------- *
* ---------------------------------------------------------------- *
* ---------------------------------------------------------------- */

export function LadrillosParedCircular() {
    var diametroPared = parseFloat(document.getElementById("diam1").value);
    var altuPared = parseFloat(document.getElementById("AltuH1").value);
    var grosPared = parseFloat(document.getElementById("GrosT1").value);
    var longLadrillo = parseFloat(document.getElementById("LongL2").value);
    var altuLadrillo = parseFloat(document.getElementById("AltuH2").value);
    var grosLadrillo = parseFloat(document.getElementById("GrosT2").value);
    var cemento = parseFloat(document.getElementById("Cemt").value);
    var arena = parseFloat(document.getElementById("Aren").value);
    var resAren = parseFloat(document.getElementById("ResAren").value);
    var precioLadrillos = 0;
    const pi = 3.14159;
    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res => {
    // Calcular el volumen de la pared
    var volumenPared = pi * Math.pow((diametroPared/2), 2) * altuPared;
 
    // Calcular el número de ladrillos
    altuLadrillo = altuLadrillo/100;
    grosLadrillo = grosLadrillo/100;
    longLadrillo = longLadrillo/100;
    var volumenLadrillos = altuLadrillo * grosLadrillo * longLadrillo;
    var numLadrillos = volumenPared/volumenLadrillos;
 
    precioLadrillos = res.data.data[2].precio;

    // Calcular el costo de los ladrillos
    var precioLadrillos = numLadrillos * precioLadrillos;
 
    // Calcular el volumen de mortero seco
    var morteroSeco = (volumenPared * cemento) / (cemento + arena + resAren);
 
    // Calcular el volumen de cemento, arena y el peso de cemento
    var cementoM3 = morteroSeco * (cemento / (cemento + arena + resAren));
    var arenaM3 = morteroSeco * (arena / (cemento + arena + resAren));
    var cementoKg = (cemento * 1000)/50; // Convertir a kg
 
    document.getElementById("resultado1").textContent = volumenPared;
    document.getElementById("resultado2").textContent = numLadrillos.toFixed(2);
    document.getElementById("resultado3").textContent = precioLadrillos.toFixed(2);
    document.getElementById("resultado4").textContent = morteroSeco.toFixed(2);
    document.getElementById("resultado5").textContent = cementoM3.toFixed(2);
    document.getElementById("resultado6").textContent = arenaM3.toFixed(2);
    document.getElementById("resultado7").textContent = cementoKg.toFixed(2);
})
.catch(err => {
console.log(err);
}); 
}
 
export function LadrillosPared() {

    var longPared = parseFloat(document.getElementById("longL1").value);
    var altuPared = parseFloat(document.getElementById("AltuH1").value);
    var grosPared = parseFloat(document.getElementById("GrosT1").value);
    var longLadrillo = parseFloat(document.getElementById("LongL2").value);
    var altuLadrillo = parseFloat(document.getElementById("AltuH2").value);
    var grosLadrillo = parseFloat(document.getElementById("GrosT2").value);
    var cemento = parseFloat(document.getElementById("Cemt").value);
    var arena = parseFloat(document.getElementById("Aren").value);
    var resAren = parseFloat(document.getElementById("ResAren").value);
    var precioLadrillos = 0;
 
    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res => {
    // Calcular el volumen de la pared
    var volumenPared = (longPared * altuPared * grosPared);
 
    // Calcular el número de ladrillos
    altuLadrillo = altuLadrillo/100;
    grosLadrillo = grosLadrillo/100;
    longLadrillo = longLadrillo/100;
    var volumenLadrillos = altuLadrillo * grosLadrillo * longLadrillo;
    var numLadrillos = volumenPared/volumenLadrillos;
    precioLadrillos = res.data.data[2].precio;
    // Calcular el costo de los ladrillos
    var precioLadrillos = numLadrillos * precioLadrillos;
 
    // Calcular el volumen de mortero seco
    var morteroSeco = (volumenPared * cemento) / (cemento + arena + resAren);
 
    // Calcular el volumen de cemento, arena y el peso de cemento
    var cementoM3 = morteroSeco * (cemento / (cemento + arena + resAren));
    var arenaM3 = morteroSeco * (arena / (cemento + arena + resAren));
    var cementoKg = (cemento * 1000)/50; // Convertir a kg
 
    document.getElementById("resultado1").textContent = volumenPared;
    document.getElementById("resultado2").textContent = numLadrillos.toFixed(2);
    document.getElementById("resultado3").textContent = precioLadrillos.toFixed(2);
    document.getElementById("resultado4").textContent = morteroSeco.toFixed(2);
    document.getElementById("resultado5").textContent = cementoM3.toFixed(2);
    document.getElementById("resultado6").textContent = arenaM3.toFixed(2);
    document.getElementById("resultado7").textContent = cementoKg.toFixed(2);
    })
    .catch(err => {
    console.log(err);
    }); 
}
 
export function LadrillosVolumen() {

    var volPared = parseFloat(document.getElementById("VolmPard").value);
    var longitud = parseFloat(document.getElementById("LongL").value);
    var altura = parseFloat(document.getElementById("AltuH").value);
    var grosor = parseFloat(document.getElementById("GrosT").value);
    var cemento = parseFloat(document.getElementById("Cemt").value);
    var arena = parseFloat(document.getElementById("Aren").value);
    var precioLadrillos = 0;
   // Datos específicos
    var tfer = document.getElementById("tfer").value;
 
    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res => {
        console.log(res);
        altura = altura/100;
        grosor = grosor/100;
        longitud = longitud/100;
    
        var volumenPared = volPared;
        var volumenLadrillos = altura * grosor * longitud;
        var numLadrillos = volPared/volumenLadrillos;

        precioLadrillos = res.data.data[2].precio;

        var costoLadrillos = numLadrillos * precioLadrillos;
        var morteroSeco = volumenPared * (cemento + arena);
        var cementoM3 = volPared * (cemento/(arena+cemento));
        var arenaM3 = volPared * (arena/(arena+cemento));
        var cantidadCemento = cemento * 1440
        var cementoKg = cantidadCemento/50;
    
        document.getElementById("resultado1").textContent = volumenPared;
        document.getElementById("resultado2").textContent = numLadrillos.toFixed(2);
        document.getElementById("resultado3").textContent = costoLadrillos.toFixed(2);
        document.getElementById("resultado4").textContent = morteroSeco.toFixed(2);
        document.getElementById("resultado5").textContent = cementoM3.toFixed(2);
        document.getElementById("resultado6").textContent = arenaM3.toFixed(2);
        document.getElementById("resultado7").textContent = cementoKg.toFixed(2);
    })
    .catch(err => {
    console.log(err);
    }); 
}

// -----------------------------------------------------------------------------------
// 
// -----------------------------------------------------------------------------------


export function EncofradoCalc() {
    var anchoEncofrado = parseFloat(document.getElementById("anchoEnc").value);
    var longitudEncofrado = parseFloat(document.getElementById("longEnc").value);
    var precio = 0

    // Datos específicos
    var tfer = document.getElementById("tfer").value;

    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res => {
        console.log(res);
    var area = anchoEncofrado * longitudEncofrado;
    precio = res.data.data[8].precio;
    var precioEncofraado = area * precio;

    document.getElementById("resultado").textContent = area;
    document.getElementById("resultado2").textContent = precioEncofraado;
    })
    .catch(err => {
        console.log(err);
    });     

}

export function AceroCalc() {
    var diametroAcero = parseFloat(document.getElementById("diamAc").value);
    var longitudAcero = parseFloat(document.getElementById("longAc").value);
    var cantidad = parseFloat(document.getElementById("cant").value);
    var precio = 0;
    var densidadAcero = 7850;
    var pi = 3.14159;

    // Datos específicos
    var tfer = document.getElementById("tfer").value;
    axios.get('http://127.0.0.1:8000/api/v1/precios')
    .then(res => {
        console.log(res);
    diametroAcero = diametroAcero / 1000;


    var pesoKg =  (pi * Math.pow((diametroAcero/2), 2) * longitudAcero * densidadAcero) * cantidad ;
    pesoKg = pesoKg.toFixed(3);

    var pesoLb = pesoKg * 2.205;
    pesoLb = pesoLb.toFixed(3);
    
    var pesoT = pesoKg / 1000;
    pesoT = pesoT.toFixed(3);

    precio = res.data.data[8].precio;

    var precioAc = precio * pesoKg;
    precioAc = precioAc.toFixed(2)

    document.getElementById("resultado").textContent = pesoKg;
    document.getElementById("resultado2").textContent = pesoLb;
    document.getElementById("resultado3").textContent = pesoT;
    document.getElementById("resultado4").textContent = precioAc;
    })
    .catch(err => {
        console.log(err);
    });     

}

// -----------------------------------------------------------------------------------

export function ConcretaCalc() {
    var diametroCilindro = parseFloat(document.getElementById("diametroCilindro").value);
    var valorResistencia = parseFloat(document.getElementById("valorResistencia").value);
    var pi = 3.14159;



    var area = pi * Math.pow((diametroCilindro/2),2);
    area = area / 100;
    area = area.toFixed(3);
    

    var kgFuerza = valorResistencia * pi * Math.pow((diametroCilindro/2), 2) * 1000;
    var psiFuerza = kgFuerza * 0.1450377377;


    document.getElementById("resultado").textContent = area;
    document.getElementById("resultado2").textContent = kgFuerza;
    document.getElementById("resultado3").textContent = psiFuerza;


}


export function CimentacionCalc() {
    var cargaEstructura = parseFloat(document.getElementById("cargaEstr").value);
    var densidadSuelo = parseFloat(document.getElementById("densidadSuelo").value);
    var anguloReposo = parseFloat(document.getElementById("anguloReposo").value);
    const gravedad = 9.8;


    var anguloReposo = anguloReposo * (Math.PI/180)
    var profundidad = (cargaEstructura/(densidadSuelo*gravedad*(Math.tan(anguloReposo))));
    var profundidad = profundidad.toFixed(3)


    document.getElementById("resultado").textContent = profundidad;


}

export function DiagonalCalc() {
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoH = parseFloat(document.getElementById("ladoH").value);


    var ladoC = Math.sqrt(Math.pow(ladoB, 2) + Math.pow(ladoH, 2));
    var ladoC = ladoC.toFixed(1)


    document.getElementById("resultado").textContent = ladoC;


}

export function TanqueCalc() {
    var diametroTanque = parseFloat(document.getElementById("diamTanque").value);
    var alturaTanque = parseFloat(document.getElementById("alturaTanque").value);
    var pi = 3.14159;


    var volumen = pi * Math.pow((diametroTanque/2), 2) * alturaTanque;
    var volumenFix = volumen.toFixed(2)

    var agua = volumen * 1000;
    agua = agua.toFixed(2)

    var aguaGalon = agua / 3.785;
    aguaGalon = aguaGalon.toFixed(2)

    document.getElementById("resultado").textContent = volumenFix;
    document.getElementById("resultado2").textContent = agua;
    document.getElementById("resultado3").textContent = aguaGalon;

}

//---------------------------------------------------------------------------------------
//                                      AREA
//---------------------------------------------------------------------------------------


export function AreaCirculo() {
    var radioCirculo = parseInt(document.getElementById("radioCirculo").value);
    var pi = 3.14159;
    var area = pi * Math.pow(radioCirculo,2);
    var perimetro = 2 * pi * radioCirculo;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaCuadrado() {
    var lado = parseInt(document.getElementById("lado").value);
    var area = lado * lado;
    var perimetro = lado * 4;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaRectangulo() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var area = base * altura;
    var perimetro = (base * 2) + (altura * 2);
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaTriangulo() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var area = (base * altura)/2;



    var ladoC = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
    var ladoC = ladoC.toFixed(1)

    var perimetro = base + altura + ladoC;

    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaTrapezoide() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var copa = parseInt(document.getElementById("copa").value);
    var area = ((base + copa)/2) * altura;
    var lado = Math.sqrt(Math.pow(base - copa, 2) + Math.pow(altura, 2));
    var perimetro = (lado * 2) + base + copa;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}

export function AreaElipse() {
    var radio_uno = parseInt(document.getElementById("radio_uno").value);
    var radio_dos = parseInt(document.getElementById("radio_dos").value);
    var pi = 3.14159;
    var area = radio_uno * radio_dos * pi;
    var perimetro = 2 * pi * (Math.sqrt(Math.pow(radio_uno,2) * Math.pow(radio_dos,2)));
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";
}


// FIGURA #1
export function AreaTrianguloEscaleno() {
    var largo = parseInt(document.getElementById("largo").value);
    var alto = parseInt(document.getElementById("alto").value);
    var area = (largo * alto)/2;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    // NO HAY PERIMETRO ACTUALMENTE
}

// FIGURA #2
export function AreaCuadradoCopaCircular() {
    var largo = parseInt(document.getElementById("largo").value);
    var alto = parseInt(document.getElementById("alto").value);
    var pi = 3.14159;
    var area = (largo * alto) + ((pi * Math.pow(largo,2)/8));
    var perimetro = (alto * 2) + largo + ((pi * largo)/2);
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";   
}

// FIGURA #3
export function AreaCuadradoCopaCircularDoble() {
    var largo = parseInt(document.getElementById("largo").value);
    var alto = parseInt(document.getElementById("alto").value);
    var pi = 3.14159;
    var area = (largo * alto) + ((pi * Math.pow(largo,2)/4));
    var perimetro = (alto * 2) * (pi * largo);
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";   
}

// FIGURA #4
export function AreaFiguraPerspectiva() {
    var lado_uno = parseInt(document.getElementById("lado_1").value);
    var lado_dos = parseInt(document.getElementById("lado_2").value);
    var lado_tres = parseInt(document.getElementById("lado_3").value);
    var lado_cuatro = parseInt(document.getElementById("lado_4").value);
    var area = ((lado_uno + lado_tres)/2) * ((lado_dos + lado_cuatro)/2);
    var perimetro = lado_uno + lado_dos +lado_tres + lado_cuatro;
    document.getElementById("resultado1").textContent = area.toFixed(4) + " m²";
    document.getElementById("resultado2").textContent = perimetro.toFixed(4) + " m";   
}

// FIGURA #5
export function AreaTrapecio() {
    var base = parseInt(document.getElementById("base").value);
    var copa = parseInt(document.getElementById("copa").value);
    var alto = parseInt(document.getElementById("alto").value);
    var area = (copa * alto) + (((base + copa) * alto)/2);
    document.getElementById("resultado1").textContent = area + " m²";
    // NO HAY
}

//---------------------------------------------------------------------------------------
//                                      VOLUMEN
//---------------------------------------------------------------------------------------

export function VolumenPrisma() {

    var alto = parseInt(document.getElementById("alto").value);
    var lado_uno = parseInt(document.getElementById("lado_uno").value);
    var lado_dos = parseInt(document.getElementById("lado_dos").value);  
    var volumen = alto * lado_uno * lado_dos;

    document.getElementById("resultado1").textContent = volumen + " m³";


}

 

export function VolumenMediaEsfera() {

    var diametro = parseInt(document.getElementById("diametro").value);
    var volumen = (2/3) * 3.14159 * Math.pow((diametro/2),3);

    document.getElementById("resultado1").textContent = volumen + " m³";

}


export function VolumenEsfera() {

    var diametro = parseInt(document.getElementById("diametro").value);
    // var pi = 3.14159;
    var volumen = (4/3) * Math.PI * (Math.pow(diametro/2),3);


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenVolqueteTrapezoide() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo_uno = parseInt(document.getElementById("largo_uno").value);
    var largo_dos = parseInt(document.getElementById("largo_dos").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = (((largo_uno + largo_dos)/2) * alto * ancho);

    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenVolqueteTriangular() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo_uno = parseInt(document.getElementById("largo_uno").value);
    var largo_dos = parseInt(document.getElementById("largo_dos").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = (((largo_uno + largo_dos)/2) * alto * ancho);


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenTanqueRectangular() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = alto * largo * ancho;


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenCilindro() {

    var alto = parseInt(document.getElementById("alto").value);
    var diametro = parseInt(document.getElementById("diametro").value);
    var PI = 3.14159; // lo sustituire por el metodo Math.PI
    var volumen = Math.PI * (Math.pow((diametro/2), 2)) * alto;


    document.getElementById("resultado1").textContent = volumen + " m³";

}

 

export function VolumenPrismaRectangular() {

    var alto = parseInt(document.getElementById("alto").value);
    var largo = parseInt(document.getElementById("largo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var volumen = alto * largo * ancho;

    document.getElementById("resultado1").textContent = volumen + " m³";

}


//---------------------------------------------------------------------------------------
//                                      ACEROS
//---------------------------------------------------------------------------------------

export function CalcularPesoBarraRedonda() {
    // Datos de entrada
    var diametro = parseFloat(document.getElementById("diametro").value) / 1000;  // Convertir mm a metros
    var longitud = parseFloat(document.getElementById("longitud").value);  // metros
    var cantidadPiezas = parseFloat(document.getElementById("pieza").value);
    var precioPorKg = 0;
  
     // Datos específicos
     var tfer = document.getElementById("tfer").value;
     axios.get('http://127.0.0.1:8000/api/v1/precios')
     .then(res => {
         console.log(res);
    // Densidad del acero en kg/m³
    var densidadAcero = 7850;
  
    // Calcular el peso en kg de una pieza
    var pesoKg = (Math.PI / 4) * Math.pow(diametro, 2) * longitud * densidadAcero;
  
    // Calcular el peso en libras de una pieza
    var pesoLibras = pesoKg * 2.20462;
  
    // Calcular el peso en toneladas de una pieza
    var pesoToneladas = pesoKg / 1000;
  
    // Calcular el volumen de una pieza en metros cúbicos
    var volumenPieza = (Math.PI / 4) * Math.pow(diametro, 2) * longitud;
    if (tfer === 'f') {
        precioPorKg = res.data.data[6].precio;
        console.log('freund');
    } else {
        precioPorKg  = res.data.data[7].precio;
        console.log('vidri');
    } 
    // Calcular el costo total de todas las piezas
    var costoTotal = (pesoKg * cantidadPiezas) * precioPorKg;
  
    // Mostrar resultados
    document.getElementById("resultado1").textContent = pesoKg.toFixed(2) + " kg";
    document.getElementById("resultado2").textContent = pesoLibras.toFixed(2) + " libras";
    document.getElementById("resultado3").textContent = pesoToneladas.toFixed(4) + " toneladas";
    document.getElementById("resultado4").textContent = costoTotal.toFixed(2) + " $";
    document.getElementById("resultado5").textContent = volumenPieza.toFixed(6) + " m³";
})
.catch(err => {
 console.log(err);
})
  }

export  function CalcularPesoBarraCuadrada() {
    // Datos de entrada
    var lado = parseFloat(document.getElementById("lado").value) / 1000;  // Convertir mm a metros
    var longitud = parseFloat(document.getElementById("longitud").value);  // metros
    var cantidadPiezas = parseFloat(document.getElementById("pieza").value);
    var precioPorKg = 0;
  
     // Datos específicos
     var tfer = document.getElementById("tfer").value;
     axios.get('http://127.0.0.1:8000/api/v1/precios')
     .then(res => {
         console.log(res);
    // Densidad del acero en kg/m³
    var densidadAcero = 7850;
  
    // Calcular el área del cuadrado en metros cuadrados
    var areaCuadrado = Math.pow(lado, 2);
  
    // Calcular el peso en kg de una pieza
    var pesoKg = areaCuadrado * longitud * densidadAcero;
  
    // Calcular el peso en libras de una pieza
    var pesoLibras = pesoKg * 2.20462;
  
    // Calcular el peso en toneladas de una pieza
    var pesoToneladas = pesoKg / 1000;
  
    // Calcular el volumen de una pieza en metros cúbicos
    var volumenPieza = areaCuadrado * longitud;
    if (tfer === 'f') {
        precioPorKg = res.data.data[6].precio;
        console.log('freund');
    } else {
        precioPorKg  = res.data.data[7].precio;
        console.log('vidri');
    } 
    // Calcular el costo total de todas las piezas
    var costoTotal = (pesoKg * cantidadPiezas) * precioPorKg;
  
    // Mostrar resultados
    document.getElementById("resultado1").textContent = pesoKg.toFixed(2) + " kg";
    document.getElementById("resultado2").textContent = pesoLibras.toFixed(2) + " libras";
    document.getElementById("resultado3").textContent = pesoToneladas.toFixed(4) + " toneladas";
    document.getElementById("resultado4").textContent = costoTotal.toFixed(2) + " $";
    document.getElementById("resultado5").textContent = volumenPieza.toFixed(6) + " m³";
})
.catch(err => {
 console.log(err);
})
  }
export  function CalcularPesoBarraTuberiaRedonda() {
    // Datos de entrada
    var diametro = parseFloat(document.getElementById("diametro").value) / 1000;  // Convertir mm a metros
    var longitud = parseFloat(document.getElementById("longitud").value);  // metros
    var grosor = parseFloat(document.getElementById("grosor").value) / 1000;  // Convertir mm a metros
    var cantidadPiezas = parseFloat(document.getElementById("pieza").value);
    var precioPorKg =0;
   // Datos específicos
   var tfer = document.getElementById("tfer").value;
   axios.get('http://127.0.0.1:8000/api/v1/precios')
   .then(res => {
       console.log(res);
    // Densidad del acero en kg/m³
    var densidadAcero = 7850;
  
    // Calcular el área de la sección transversal en metros cuadrados
    var areaSeccionTransversal = (Math.pow((diametro / 2), 2) * Math.PI) - (Math.pow((diametro / 2) - grosor, 2) * Math.PI);
  
    // Calcular el peso en kg de una pieza
    var pesoKg = areaSeccionTransversal * longitud * densidadAcero;
  
    // Calcular el peso en libras de una pieza
    var pesoLibras = pesoKg * 2.20462;
  
    // Calcular el peso en toneladas de una pieza
    var pesoToneladas = pesoKg / 1000;
  
    // Calcular el volumen de una pieza en metros cúbicos
    var volumenPieza = longitud * areaSeccionTransversal;
    if (tfer === 'f') {
        precioPorKg = res.data.data[6].precio;
        console.log('freund');
    } else {
        precioPorKg  = res.data.data[7].precio;
        console.log('vidri');
    } 
    // Calcular el costo total de todas las piezas
    var costoTotal = (pesoKg * cantidadPiezas) * precioPorKg;
  
    // Mostrar resultados
    document.getElementById("resultado1").textContent = pesoKg.toFixed(2) + " kg";
    document.getElementById("resultado2").textContent = pesoLibras.toFixed(2) + " libras";
    document.getElementById("resultado3").textContent = pesoToneladas.toFixed(4) + " toneladas";
    document.getElementById("resultado4").textContent = costoTotal.toFixed(2) + " $";
    document.getElementById("resultado5").textContent = volumenPieza.toFixed(6) + " m³";
})
.catch(err => {
 console.log(err);
})
  }

export  function CalcularCantidadBloques() {
    // Datos de la pared
    var longitudPared = parseFloat(document.getElementById("LongitudP").value);
    var alturaPared = parseFloat(document.getElementById("AlturaP").value);
    var grosorPared = parseFloat(document.getElementById("GrosorP").value) / 1000;  // Convertir mm a metros
  
    // Datos del bloque
    var longitudBloque = parseFloat(document.getElementById("LongitudB").value);
    var alturaBloque = parseFloat(document.getElementById("AlturaB").value);
    var grosorBloque = parseFloat(document.getElementById("GrosorB").value) / 1000;  // Convertir mm a metros
  
    // Datos del mortero
    var proporcionCemento = parseFloat(document.getElementById("Cemt").value);
    var proporcionArena = parseFloat(document.getElementById("Aren").value);
    var cantidadMortero = parseFloat(document.getElementById("Cant").value);
  
    // Área de puertas o ventanas en metros cuadrados
    var areaPuertaVentana = parseFloat(document.getElementById("areaPuertaVentana").value);
  
    // Precio del bloque en dólares
    var precioBloque = 0;
  // Datos específicos
  var tfer = document.getElementById("tfer").value;
  axios.get('http://127.0.0.1:8000/api/v1/precios')
  .then(res => {
      console.log(res);
    // Volumen de la pared en metros cúbicos
    var areaPared = (longitudPared * alturaPared) - areaPuertaVentana;
    var volumenPared = areaPared * grosorPared;
  
    // Cantidad de bloques
    var volumenBloque = longitudBloque * alturaBloque * grosorBloque;
    var numeroBloques = Math.ceil(volumenPared / volumenBloque);
    precioBloque = res.data.data[4].precio;
    // Costo de bloques en dólares
    var costoBloques = numeroBloques * precioBloque;
  
    // Cantidad de mortero en metros cúbicos
    var cantidadCemento = proporcionCemento * cantidadMortero;
    var cantidadArena = proporcionArena * cantidadMortero;
  
    // Peso de cemento en kg
    var densidadCemento = 1500;  // Densidad promedio del cemento en kg/m³
    var pesoCemento = cantidadCemento * densidadCemento;
  
    // Mostrar resultados
    document.getElementById("resultado1").textContent = volumenPared.toFixed(2) + " m³";
    document.getElementById("resultado2").textContent = numeroBloques;
    document.getElementById("resultado3").textContent = costoBloques.toFixed(2) + " $";
    document.getElementById("resultado4").textContent = cantidadMortero.toFixed(2) + " m³";
    document.getElementById("resultado5").textContent = cantidadCemento.toFixed(2) + " m³";
    document.getElementById("resultado6").textContent = cantidadArena.toFixed(2) + " m³";
    document.getElementById("resultado7").textContent = pesoCemento.toFixed(2) + " kg";
    })
    .catch(err => {
    console.log(err);
    })  
}