import * as os from "os";
import {Expressions} from "./expressions";
import type { langueInterface } from "./langue.interface";
import { langageFrancais } from "./langueFrancaise";
import { langageAnglaise } from "./langueAnglaise";

export class VérificateurPalindrome {

    langage : langueInterface = new langageAnglaise();
  


    public Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = this.langage.DireBonjour() + os.EOL + miroir + os.EOL;

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

}