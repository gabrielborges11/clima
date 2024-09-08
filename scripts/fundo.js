function img(){

    var data = new Date()
    var hora = data.getHours()

    if(hora > 0 && hora < 12){
        
        temp.style.color = "black"
        aviso.style.color = "black"
        boa.style.color = "black"
        boa.innerHTML="bom dia"
        document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-gratis/bela-vista-da-luz-da-manha_23-2148851770.jpg')";

    }else if(hora >= 18){

            boa.innerHTML="boa noite"
            document.body.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/paisagem-urbana-a-noite-com-a-lua-e-o-horizonte-ao-fundo-da-cidade_44353-2339.jpg')";
    }else if(hora >= 12 && hora < 18){

         botao.style.backgroundColor = "#ef9652"
            boa.innerHTML="boa tarde"
        document.body.style.backgroundImage = "url('https://veja.abril.com.br/wp-content/uploads/2016/12/turismo-bora-bora-por-do-sol-1.jpg?quality=70&strip=all')";
    }


}

img()