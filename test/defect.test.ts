import { VérificateurPalindromeTestBuilder } from "./verificateurPalindrome.constructeur";
import * as os from "os";

describe("Bug 567 du 12/02/2023", () => {
    test.each([
        ['test', 'radar']
    ])("check de saut de ligne à la fin de la chaine %s",
        (chaîne: string) => {
        let verificateur = new VérificateurPalindromeTestBuilder()
            .withChaîne(chaîne)
        let résultat = verificateur.vérifier();

        expect(résultat.endsWith(os.EOL)).toBe(false);
    });
})