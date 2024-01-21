import * as os from "os";
import {Expressions} from "./expressions";
import type { langueInterface } from "./langue.interface";
import { langageFrancais } from "./langueFrancaise";
import { langageAnglaise } from "./langueAnglaise";
import { MomentsDeLaJournee } from "./moments";

export class VérificateurPalindrome {

    langage : langueInterface = new langageAnglaise();

    moment : MomentsDeLaJournee = MomentsDeLaJournee.Inconnu;
    
    constructor() {
        this.setCurrentLanguageSystem();
    }

    public Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = this.langage.DireBonjour(this.moment) + os.EOL + miroir + os.EOL;

        if(miroir == chaîne)
            sortie += this.langage.Féliciter() + os.EOL;

        return sortie + this.langage.DireAuRevoir(this.moment);
    }

    // Ici nous avons pas réussi (ou pas compris) comment séparer le domaine de l'application
    public setCurrentLanguageSystem() {
        // Code to retrieve the current language system goes here
        // Replace this with your actual implementation
        var LanguageSystem = navigator.language.split('-')[0] ?? 'en'
        if(LanguageSystem == "fr")
            this.langage = new langageFrancais();
        else
            this.langage = new langageAnglaise();
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