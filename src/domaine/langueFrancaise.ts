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

    public DireAuRevoir(moment: MomentsDeLaJournee): string {
        if(moment == MomentsDeLaJournee.Matin)
            return Expressions.BONNE_JOURNEE;

        if(moment == MomentsDeLaJournee.AprèsMidi)
            return Expressions.BON_APRES_MIDI;

        if(moment == MomentsDeLaJournee.Soirée)
            return Expressions.BONNE_SOIREE;

        if(moment == MomentsDeLaJournee.Nuit)
            return Expressions.BONNE_NUIT;

        return Expressions.AU_REVOIR;
    }

    public toString(): string {
        return "fr";
    }
}