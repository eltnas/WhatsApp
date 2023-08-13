/** https://api.whatsapp.com/send?phone=+5544998505518&text=Ol%C3%A1 **/
const country = document.getElementById("country");
const numTel = document.getElementById("numTel");
const msgText = document.getElementById("msgText");
const btnGerar = document.querySelector(".btn-gerar");
const linkCnv = "https://api.whatsapp.com/send?phone=";

btnGerar.addEventListener('click', ()=>{
    let ddi = country.value;
    let tel = numTel.value;
    let msg = msgText.value;

    if(isNaN(tel)){
        alert("O campo telefone aceita apenas numeros!")
    }
    else if(isNaN(ddi)){
        alert("O campo DDI aceita apenas numeros!")
    }
    else{
        if(!msgText){
            let urlLink = linkCnv + ddi + tel
            window.open(urlLink, '_blank');
        }
        else {
            let urlLink = linkCnv + ddi + tel + '&text=' + msg;
            window.open(urlLink, '_blank');
        }
    }

})