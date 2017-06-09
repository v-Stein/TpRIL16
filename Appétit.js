class Estomac{
    constructor(){
        this.Contient = 5;
        this.Capacité = 10;
    }

    GetEstomacContient(){
        return this.Contient;
    }

    GetEstomacCapacité(){
        return this.Capacité;
    }

    Manger(){
        let text = document.getElementById('history');
        if(parent.Cerveau.humeur == "DISGUTED"){
            text.innerHTML += "\nVotre chat est dégouté de la nourriture et ne peux pas manger.";
        }
        else{
            this.Contient += 1;
            if(this.Contient > this.Capacité){
                parent.Cerveau.humeur = "DISGUTED";
                parent.Organe.Coeur.pdv -= 1;
                text.innerHTML += "\nVous avez dépassé la capacité de l'estomac de votre chat, il est dégouter de la nourriture et perd 1PV.";
                //check Alive()
            }
            else{
                text.innerHTML += "\nVotre chat a bien mangé.";
            }
        }
    }

    

    Digestion(){
        if(Contient <= 0){
            parent.Organe.Coeur.pdv -= 1;
            parent.Cerveau.Humeur = "SAD";
            let text = document.getElementById('history');
            text.innerHTML += "\nEstomac vide, votre chat est malade et perd 1PV.";
            //check Alive()
        }
        else{
            this.Contient -= 1;
            this.Organe.Coeur.pdv += 1;
        }
    }


}