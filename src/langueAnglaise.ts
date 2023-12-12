import { Expressions } from "./expressions";
import { langueInterface } from "./langue.interface";

export class langageAnglaise implements langueInterface {
    public Féliciter(): string {
        return Expressions.WELL_SAY;
    }

    public DireBonjour(): string {
        return Expressions.HELLO;
    }

    public DireAuRevoir(): string {
        return Expressions.GOODBYE;
    }

    public toString(): string {
        return "en";
    }
}