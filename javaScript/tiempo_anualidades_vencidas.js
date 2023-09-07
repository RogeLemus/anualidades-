var formulario = document.forms.formulario_Tiempo_anVencidas
var resultado = document.getElementById("res-tiempo-anualidades-vencidas")

formulario.monto.oninput = calcularAV
formulario.Renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let s = parseFloat(formulario.monto.value)
    let r = parseFloat(formulario.Renta.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total =((Math.log10(s*i+r))-(Math.log10(r)))/(Math.log10(1+i))


    resultado.innerHTML = total.toFixed(2)
}           