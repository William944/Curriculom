// alert("HOLA SOY UN ALERT DES DE UN ARCHIVO JS");
// console.log("hola souy un mensaje de consola ");
// document.write("HOLA SOY LAINTERFAZ PRINCIPAL");´
// Swal.fire("Hola soy una alerta de una libreria");

// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//     sh
//   });



// variables y tipos de datos
const pi =3.14;//decimal
var name ="William Ortega";//String
let edad =19;//enmtero
let edad_string ="19";//String
var bool = false ;//falso



// operadores basicos / * - + %
var suma =5-2;
console.log(suma);
console.log(edad_string+suma);
var one =10;
var two =20;
console.log(one + two);
console.log(one - two);
console.log(one * two);
console.log(one / two);
console.log(one % two);


// operadores de comparaciones
//== < > <=  <==
//= asignacion 
//== comparacion 5=="5"
//===comparacion 5="5"
//operadores logicos 
// AND && OR ||

console.log ("mi nombre "+name+ "tiene como edad "+edad);



function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        showConfirmButton:false
      });
}
function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat_password").value;
    if(name.length == 0 || last_name.length ==0 || password.length ==0 || repeat_password.length ==0 ){   
    Swal.fire({
        title: "CAMPOS VACIOS",
        text: "ALGUNOS DE LOS COAMPOS SE ENCUENTRAN VASIOS",
        icon: "ERROR"
     });
     if(name.length ==0 ){
        document.getElementById("name").style.border="2px solid red"

     }else{
        document.getElementById("name").style.border="2px solid green"
     }
     if(last_name.length==0){
        document.getElementById("last_name").style.background="red"

     }else{
        document.getElementById("last_name").style.background="green"

     }
    if(paword.length==0){
        document.getElementById("password").style.background="red"
    
     }else{
        document.getElementById("password").style.background="green"
    
    if(repeat_paword.length==0){
        document.getElementById("repeat_password").style.background="red"
    
     }else{
        document.getElementById("repeat_password").style.background="green"
    
      }
      }
    }else{

    }
    document.getElementById("print").innerText= name+ " "+last_name
}