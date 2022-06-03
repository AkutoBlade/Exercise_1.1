// Exercise 1.1

// function MyFunction() {
//     document.getElementById('Message').innerHTML='Jared Isaacs';
//     alert("Hello! My name is Jared Isaacs!!");
// }

// const btnDisplay = document.getElementById('btnMadeBy');
//Option 1
// function Display(){
//     alert('Hello World!!!')
// }

// btnDisplay.addEventListener('click', ()=>{
//     alert('Hello World!!!')
// });
//Option 2
// btnDisplay.addEventListener('click', ()=>{
//     alert('Hello World!!!')
// });

// function Form(){
//     document.getElementById('Name').innerHTML='Jared';
//     document.getElementById('Surname').innerHTML='Isaacs';
// };

const btnDisplays= document.getElementById('btnDisplays');

btnDisplays.addEventListener('click', ()=>{
    var Name= document.getElementById('Name').value;
    var Surname= document.getElementById('Surname').value;
    var FullName= Name +' ' +Surname;
    document.getElementById('FullName').innerText= FullName;
});
