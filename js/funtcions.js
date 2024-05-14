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

document.getElementById("valores").value = array_num;




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

// ARRAYS 

var dias_sem = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var array_num =[1,2,3,4,5,6,7,8,9];
var array_mix =[1,2.5,"abc"];
var array_mul =[
   {name: "william", age:19,color:"green"},
   {name: "mauricio", age:20,color:"black"},
   {name: "valery", age:17,color:"white"},
   {name: "antonela", age:15,color:"gray"}

]

var json_ejm ={
   name:"William",
   lastname:"ortega",
   phone:"3116628266",
   email:"wmortegagufpso.edu.co"

}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for(let i=0; i<dias_sem.length;i++){
   console.log(dias_sem[i]);
}

var j=0;
while(j<array_num.length){
   console.log(array_num[j]);
   j++
}


var accu=0;
for(let h=0; h<array_num.length;h++){
   accu +=array_num[h]
}
console.log(accu);


var acum =0;
for(let l=0; l<array_mul.length;l++){
   console.log(array_mul[l]);
   acum += array_mul[l].age;
  
}
console.log(acum);
document.getElementById("print_age").innerText="El valor de la suma es "+acum;
document.getElementById("print_age_text").innerHTML="<strong> El valor de la suma es "+acum;"</strong>";


function limpiar(){
   document.getElementById("valores").value="";
   document.getElementById("print_age").innerText="";
   document.getElementById("print_age_text").innerHTML="";

}

var array_ajem =[1,2,3,4,5,6,7,8,9];

function agreagar(){
   array_ajem.push(agregar);
   document.getElementById("valores").value=array_ajem
   array_ajem =array_ajem;
}


function eliminar(){
   array_ajem.pop();
   console.log("valores");
   document.getElementById("valores").value=array_ajem
}


function eliminar_pri(){
   array_ajem.shift();
   console.log("valores");
   document.getElementById("valores").value=array_ajem
}


function agregar_pri(){
   array_ajem.unshift();
   console.log("valores");
   document.getElementById("valores").value=array_ajem
   array_ajem =array_ajem;
}


function reversa (){
   document.getElementById("valores").value =array_ajem.reverse();
   document.getElementById("valores").inner=array_ajem
}