const form = document.querySelector("#form")

//previne do site recarregar ao enviar//
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputpeso = e.target.querySelector('#peso')

    const peso = Number(inputpeso.value);

    if (!peso) {
        setresultado('Digite seu peso. Neném burrinha', false)
        return;
    }

    getnivelimc(peso);
})
//criando a função getimc//
function getImc(peso) {
    const imc = 1.5 * peso;
    return imc.toFixed(1);

}

function getnivelimc(peso) {
    const imc = getImc(peso)

    //função que vai criar o P//
    function criap() {
        const p = document.createElement('p')
        return p
    }

    //adiciona um paragrafo ao HTML//
    function setresultado(msg, isvalide) {
        const resultado = document.querySelector("#resultado")
        resultado.innerHTML = '';


        //a msg que aparece no resultado//
        const p = criap(); {
            if (isvalide) p.classList.add('paragrafo-resultado')
            else {
                p.classList.add('bad')
                
            }

            p.innerHTML = msg;
            resultado.appendChild(p)
        }
    }

    const msg = `A neném precisa comer ${imc}) de proteinas`;
    setresultado(msg, true,)
}