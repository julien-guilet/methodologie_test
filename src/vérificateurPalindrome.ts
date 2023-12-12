import * as os from "os";
import {Expressions} from "./expressions";
import type { langueInterface } from "./langue.interface";
import { langageFrancais } from "./langueFrancaise";
import { langageAnglaise } from "./langueAnglaise";
import { MomentsDeLaJournee } from "./moments";

export class VérificateurPalindrome {

    langage : langueInterface = new langageAnglaise();

    moment : MomentsDeLaJournee = MomentsDeLaJournee.Inconnu;

    public Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = this.langage.DireBonjour(this.moment) + os.EOL + miroir + os.EOL;

        if(miroir == chaîne)
            sortie += this.langage.Féliciter() + os.EOL;

        return sortie + this.langage.DireAuRevoir();
    }

    public setLangage(langue: string): void {
        if(langue == "fr")
            this.langage = new langageFrancais();
        else
            this.langage = new langageAnglaise();
    }

    public setMoment(moment: MomentsDeLaJournee): void {
        this.moment = moment;
    }

}