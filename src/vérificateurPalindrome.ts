import * as os from "os";

export class VérificateurPalindrome{

    public static Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        if(miroir == chaîne)
            return miroir + os.EOL + "Bien dit !";

        return miroir;
    }
}