class Energie
{
    constructor (jauge, IsAlive)
    {
this.jauge = 10;
this.IsAlive = 1;
    }
  
    JaugeBaisse()
    {
        this.jauge = this.jauge - 1;
    }

    JaugeAugmente()
    {
        this.jauge = this.jauge + 1;
    }

         DeadOrAlive()
    {
        if (this.jauge <= 0)
        {
            this.alive = 0;
        }
    }
}


