import { MomentsDeLaJournee } from "../domaine/moments";

export class MomentActuelDeLaJournee {
    public static get(): MomentsDeLaJournee {
        const heure = new Date().getHours();
        if (heure >= 5 && heure < 12) {
            return MomentsDeLaJournee.Matin;
        }
        else if (heure >= 12 && heure < 18) {
            return MomentsDeLaJournee.AprèsMidi;
        }
        else if (heure >= 18 && heure < 22) {
            return MomentsDeLaJournee.Soirée;
        }
        else {
            return MomentsDeLaJournee.Nuit;
        }
    }
}