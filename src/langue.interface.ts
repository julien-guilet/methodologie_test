import { MomentsDeLaJournee } from "./moments";
export interface langueInterface  {
    
    Féliciter(): string;

    DireBonjour(moment: MomentsDeLaJournee): string;

    DireAuRevoir(): string;

    toString(): string;
}