import { MomentActuelDeLaJournee } from "../src/application/momentActuelDeLaJournée";
import { MomentsDeLaJournee } from "../src/domaine/moments";

// Interface to define parameters for test environment 
export interface parametersTestsInterface  {
        palindrome: string;
        nonPalindromes: string[];
        momentDeLaJournée: MomentsDeLaJournee;
        tousMomentsDeLaJournée: MomentsDeLaJournee[];
        langue: string;
}

// Parameters for acceptance tests
export class acceptationParametersParDefaut implements parametersTestsInterface{
    palindrome: string = "radar";
    nonPalindromes: string[] = ["test", "ynov"];
    momentDeLaJournée: MomentsDeLaJournee = MomentsDeLaJournee.Inconnu;
    tousMomentsDeLaJournée: MomentsDeLaJournee[] = [
        MomentsDeLaJournee.Inconnu,
        MomentsDeLaJournee.Matin,
        MomentsDeLaJournee.AprèsMidi,
        MomentsDeLaJournee.Soirée,
        MomentsDeLaJournee.Nuit
    ];
    langue: string = "fr";
}

// Parameters for integration tests
export class integrationParametersParDefaut implements parametersTestsInterface{
    palindrome: string = "radar";
    nonPalindromes: string[] = ["test", "ynov"];
    momentDeLaJournée: MomentsDeLaJournee = MomentActuelDeLaJournee.get();
    tousMomentsDeLaJournée: MomentsDeLaJournee[] = [
        MomentsDeLaJournee.Inconnu,
        MomentsDeLaJournee.Matin,
        MomentsDeLaJournee.AprèsMidi,
        MomentsDeLaJournee.Soirée,
        MomentsDeLaJournee.Nuit
    ];
    langue: string = navigator.language.split('-')[0] ?? 'en';
}