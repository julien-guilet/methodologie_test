import {VérificateurPalindrome} from "../src/vérificateurPalindrome";
import * as os from "os";
import {Expressions} from "../src/expressions";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']

describe("test works", () => {
   test.each([...nonPalindromes])("QUAND on saisit un non-palindrome %s " +
       "ALORS elle est renvoyée en miroir",
       (chaîne : string) => {
          let résultat = new VérificateurPalindrome().Vérifier(chaîne);

          let attendu = chaîne.split('').reverse().join('');
          expect(résultat).toContain(attendu);
   });


   test("QUAND on saisit un palindrome " +
       "ALORS celui-ci est renvoyé " +
       "ET 'Bien dit !' est envoyé ensuite", () =>{
      let résultat = new VérificateurPalindrome().Vérifier(palindrome);

      expect(résultat).toContain(palindrome + os.EOL + Expressions.WELL_SAY);
   });


   test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
       'ALORS "Bonjour" est envoyé avant toute réponse',
    (chaîne: string) => {
       let résultat = new VérificateurPalindrome().Vérifier(chaîne);

       let premièreLigne = résultat.split(os.EOL)[0];
       expect(premièreLigne).toEqual(Expressions.HELLO)
   });

    test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
       'ALORS "Au revoir" est envoyé en dernier.',
    (chaîne: string) => {
       let résultat = new VérificateurPalindrome().Vérifier(chaîne);

       let lignes = résultat.split(os.EOL);
       let dernièreLigne = lignes[lignes.length - 1];
       expect(dernièreLigne).toEqual(Expressions.GOODBYE)
   });

   test.each([
      ["fr",Expressions.BIEN_DIT],
      ["en",Expressions.WELL_SAY]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
       "QUAND on a un palindrome " +
       "ALORS celui-ci est renvoyé " +
       "ET '%s' de cette langue est envoyé", (langue: string, expressionExpected: string) =>{

        
        let verificateur = new VérificateurPalindrome();
        verificateur.setLangage(langue);
        let résultat = verificateur.Vérifier(palindrome);
      expect(résultat).toContain(palindrome + os.EOL + expressionExpected);
   });

   test.each([
      ["fr",Expressions.BONJOUR],
      ["en",Expressions.HELLO]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
       "QUAND on saisie une chaine " +
       "ALORS %s de cette langue est envoyé avant tout " , (langue: string, expressionExpected: string) =>{

        
        let verificateur = new VérificateurPalindrome();
        verificateur.setLangage(langue);
        let résultat = verificateur.Vérifier(nonPalindromes[0]);

        let premièreLigne = résultat.split(os.EOL)[0];
         expect(premièreLigne).toEqual(expressionExpected)
   });

   test.each([
      ["fr",Expressions.AU_REVOIR],
      ["en",Expressions.GOODBYE]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
       "QUAND on saisie une chaine " +
       "ALORS %s de cette langue est envoyé en dernier " , (langue: string, expressionExpected: string) =>{

        
      let verificateur = new VérificateurPalindrome();
      verificateur.setLangage(langue);
      let résultat = verificateur.Vérifier(nonPalindromes[0]);

      let lignes = résultat.split(os.EOL);
      let dernièreLigne = lignes[lignes.length - 1];
      expect(dernièreLigne).toEqual(expressionExpected)
   });
});