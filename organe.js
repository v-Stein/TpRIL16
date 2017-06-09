class Organe {
    constructor(coeur, cerveau, estomac) {
        this.coeur = new Coeur();
        this.cerveau = new Cerveau();
        this.estomac = new Estomac();
    }

    all() {
        if(isAlive()) {
            Humeur();
            
        }
    }
}