import { Expressions } from "./expressions";
import { langueInterface } from "./langue.interface";

export class langageFrancais implements langueInterface {


    public Féliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public DireBonjour(): string {
        return Expressions.BONJOUR;
    }

    public DireAuRevoir(): string {
        return Expressions.AU_REVOIR;
    }

    public toString(): string {
        return "fr";
    }
}