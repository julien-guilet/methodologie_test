import { Expressions } from "./expressions";
import { langueInterface } from "./langue.interface";
import { MomentsDeLaJournee } from "./moments";

export class langageAnglaise implements langueInterface {
    
    public Féliciter(): string {
        return Expressions.WELL_SAY;
    }

    public DireBonjour(moment: MomentsDeLaJournee): string {
        if(moment == MomentsDeLaJournee.Matin)
            return Expressions.GOOD_MORNING;

        if(moment == MomentsDeLaJournee.AprèsMidi)
            return Expressions.GOOD_AFTERNOON;

        if(moment == MomentsDeLaJournee.Soirée)
            return Expressions.GOOD_EVENING;

        if(moment == MomentsDeLaJournee.Nuit)
            return Expressions.GOOD_NIGHT;
        return Expressions.HELLO;
    }

    public DireAuRevoir(): string {
        return Expressions.GOODBYE;
    }

    public toString(): string {
        return "en";
    }
}