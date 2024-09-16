function img(){

    var data = new Date()
    var hora = data.getHours()

    if(hora >= 0 && hora < 12){
        
        temp.style.color = "white"
        aviso.style.color = "white"
        boa.style.color = "white"
        boa.innerHTML="bom dia"
        document.body.style.backgroundImage = "url('https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1671733884/221222-portugal-hero_et6lor')";

    }else if(hora >= 18){

            boa.innerHTML="boa noite"
            document.body.style.backgroundImage = "url('https://s1.1zoom.me/big0/15/Houses_Skyscrapers_Tokyo_Japan_Tokyo_Tower_576737_1280x719.jpg')";
    }else if(hora >= 12 && hora < 18){

         botao.style.backgroundColor = "#ef9652"
            boa.innerHTML="boa tarde"
        document.body.style.backgroundImage = "url('https://veja.abril.com.br/wp-content/uploads/2016/12/turismo-bora-bora-por-do-sol-1.jpg?quality=70&strip=all')";
    }


}

img()