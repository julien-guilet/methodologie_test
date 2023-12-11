import {VérificateurPalindrome} from "../src/vérificateurPalindrome";
import * as os from "os";

describe("test works", () => {
   test.each([
       ['test'],
       ['ynov']
   ])("QUAND on saisit un non-palindrome %s " +
       "ALORS elle est renvoyée en miroir",
       (chaîne : string) => {
          let résultat = VérificateurPalindrome.Vérifier(chaîne);

          let attendu = chaîne.split('').reverse().join('');
          expect(résultat).toEqual(attendu);
       })

   test("QUAND on saisit un palindrome " +
       "ALORS celui-ci est renvoyé " +
       "ET 'Bien dit !' est envoyé ensuite", () =>{
      const palindrome = "radar";

      let résultat = VérificateurPalindrome.Vérifier(palindrome);

      expect(résultat).toEqual(palindrome + os.EOL + "Bien dit !");
   })
});