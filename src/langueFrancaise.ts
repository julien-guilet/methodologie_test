import { Expressions } from "./expressions";
import { langueInterface } from "./langue.interface";
import { MomentsDeLaJournee } from "./moments";

export class langageFrancais implements langueInterface {

    public Féliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public DireBonjour(moment: MomentsDeLaJournee): string {
        if(moment == MomentsDeLaJournee.Soirée || moment == MomentsDeLaJournee.Nuit)
            return Expressions.BONSOIR;
        return Expressions.BONJOUR;
    }

    public DireAuRevoir(): string {
        return Expressions.AU_REVOIR;
    }

    public toString(): string {
        return "fr";
    }
}