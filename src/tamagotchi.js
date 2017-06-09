
window.Tamagotchi = class {

    constructor () {
        this.jour = 1;
        this.organe = new Organe();
        this.cycle = setInterval(jourSuivant, 120000);

        this.humeur = 'GOOD'
    }

    get alive () {
        return this.organe.coeur.isAlive();
    }

    jourSuivant () {
        this.jour++;
        this.all();
    }

    nourrir () {
        this.organe.estomac.nourrir();
    }
};
