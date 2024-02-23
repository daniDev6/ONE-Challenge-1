/*
codiciones de codificacion

La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"



*/

let frase=document.getElementById('frase');
let newFrases=document.getElementById('frase');
let encriptar=document.getElementById('encriptado');
let desifrado=document.getElementById('desifrado');
let btnEncriptar=document.getElementById('btnEncriptar')
let btnDesifrar=document.getElementById('btnDesifrar')
let cambio="no soy"
let imagen=document.getElementById('imagen')
// frase.addEventListener('change',()=>{
//     newFrases.push(frase.value.split(" "))
//     console.log(newFrases,'soy new frase de change')
//     fEncriptar(frase.value)
// })

//funciones 
const fEncriptar=(frase)=>{
    let newFrase=""
    for (letra of frase){
        if(letra=="a"){
            newFrase+='ai'
        }else if(letra=='e'){
            newFrase+='enter'
        }else if(letra=='i'){
            newFrase+='imes'
        }else if(letra=='o'){
            newFrase+="ober"
        }else if(letra=='u'){
            newFrase+="ufat"
        }else{
            newFrase+=letra
        }

    } 

    newFrases=""
    newFrases=newFrase
    encriptar.innerText=newFrase
    cambio=""
    cambio=newFrase
    return newFrase
}

const fDesencriptar=(oracion)=>{
    alert('soy yo dios'+oracion)
    let mOracion=oracion.split(" ")
    let analisis5=fVocales(mOracion);
    let desifrado=""
    for (frase3 of analisis5){
        desifrado+=frase3+" "
    }
    alert(desifrado)
    encriptar.innerText=desifrado
    cambio=""
    cambio=desifrado
    return desifrado

}


const fAnalizar=(matriz,buscar,remplazo)=>{
    let newMatriz=[]
    for(frase2 of matriz ){
        newMatriz.push(frase2.replace(buscar,remplazo))
    }
    return newMatriz
}
const fVocales=(mOracion)=>{
    let analisis1=fAnalizar(mOracion,'ai','a')
    let analisis2=fAnalizar(analisis1,'enter','e')
    let analisis3=fAnalizar(analisis2,'imes','i')
    let analisis4=fAnalizar(analisis3,'ober','o')
    let analisis5=fAnalizar(analisis4,'ufat','u')
    return analisis5
}






let btnCopiar=document.getElementById('btnCopiar')

const copiarContenido = async () => {
    try {
        let texto=document.getElementById('encriptado').innerText
        await navigator.clipboard.writeText(texto);
        alert('copiado en portapapeles')
    } catch (err) {
        alert('Error al copiar: ', err);
    }
}
btnCopiar.addEventListener('click',async()=>{
    await copiarContenido()
})













btnEncriptar.addEventListener('click',()=>{
    if(frase.value!=""){
        fEncriptar(frase.value)
        imagen.classList.add('desactivar')
        imagen.classList.remove('active')
        btnCopiar.classList.remove('desactivar')
    }else{
        imagen.classList.remove('desactivar')
        imagen.classList.add('active')
        encriptar.innerText='Ningun mensaje fue encontrado'
        btnCopiar.classList.add('desactivar')
    }
})
btnDesifrar.addEventListener('click',()=>{
    if(frase.value!=""){
        fDesencriptar(frase.value)
        imagen.classList.add('desactivar')
        btnCopiar.classList.remove('desactivar')
    }else{
        encriptar.innerText='Ningun mensaje fue encontrado'
        imagen.classList.remove('desactivar')
        btnCopiar.classList.add('desactivar')
    }
})