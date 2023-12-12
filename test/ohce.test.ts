import {VérificateurPalindrome} from "../src/vérificateurPalindrome";
import { VérificateurPalindromeTestBuilder } from "./vérificateurPalindrome.constructeur";
import * as os from "os";
import {Expressions} from "../src/expressions";
import { MomentsDeLaJournee } from "../src/moments";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov'];
const momentsDeLaJournée = [
   MomentsDeLaJournee.Inconnu,
   MomentsDeLaJournee.Matin,
   MomentsDeLaJournee.AprèsMidi,
   MomentsDeLaJournee.Soirée,
   MomentsDeLaJournee.Nuit
];

describe("test works", () => {
   test.each([...nonPalindromes])("QUAND on saisit un non-palindrome %s " +
       "ALORS elle est renvoyée en miroir",
       (chaîne : string) => {

          // Arrange
          let résultat = new VérificateurPalindromeTestBuilder()
            .withChaîne(chaîne)
          // Act
            .vérifier();

          // Assert
          let attendu = chaîne.split('').reverse().join('');
          expect(résultat).toContain(attendu);
   });


   test("QUAND on saisit un palindrome " +
       "ALORS celui-ci est renvoyé " +
       "ET 'Bien dit !' est envoyé ensuite", () =>{

      // Arrange
      let résultat = new VérificateurPalindromeTestBuilder()
         .withChaîne(palindrome)
      // Act
         .vérifier();

      // Assert
      expect(résultat).toContain(palindrome + os.EOL + Expressions.WELL_SAY);
   });


   test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
       'ALORS "Bonjour" est envoyé avant toute réponse',
    (chaîne: string) => {
       let résultat = new VérificateurPalindromeTestBuilder()
            .withChaîne(chaîne)
            .vérifier();

       let premièreLigne = résultat.split(os.EOL)[0];
       expect(premièreLigne).toEqual(Expressions.HELLO)
   });

    test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
       'ALORS "Au revoir" est envoyé en dernier.',
    (chaîne: string) => {

       // Arrange
       let résultat = new VérificateurPalindromeTestBuilder()
            .withChaîne(chaîne)
       // Act
            .vérifier();

       // Assert
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

      // Arrange
      let résultat = new VérificateurPalindromeTestBuilder()
         .withChaîne(palindrome)
         .withLangage(langue)
      // Act
         .vérifier();

      // Assert
      expect(résultat).toContain(palindrome + os.EOL + expressionExpected);
   });

   test.each([
      ["fr",Expressions.BONJOUR],
      ["en",Expressions.HELLO]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
       "QUAND on saisie une chaine " +
       "ALORS %s de cette langue est envoyé avant tout " , (langue: string, expressionExpected: string) =>{

        // Arrange
        let résultat = new VérificateurPalindromeTestBuilder()
            .withChaîne(nonPalindromes[0])
            .withLangage(langue)
        // Act
            .vérifier();

        // Assert
        let premièreLigne = résultat.split(os.EOL)[0];
         expect(premièreLigne).toEqual(expressionExpected)
   });

   test.each([
      ["fr",Expressions.AU_REVOIR],
      ["en",Expressions.GOODBYE]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
       "QUAND on saisie une chaine " +
       "ALORS %s de cette langue est envoyé en dernier " , (langue: string, expressionExpected: string) =>{

      // Arrange
        let résultat = new VérificateurPalindromeTestBuilder()
        .withChaîne(nonPalindromes[0])
        .withLangage(langue)
      // Act
        .vérifier();

      // Assert
      let lignes = résultat.split(os.EOL);
      let dernièreLigne = lignes[lignes.length - 1];
      expect(dernièreLigne).toEqual(expressionExpected)
   });

   test.each([
    [momentsDeLaJournée[0],Expressions.HELLO],
    [momentsDeLaJournée[1],Expressions.GOOD_MORNING],
    [momentsDeLaJournée[2],Expressions.GOOD_AFTERNOON],
    [momentsDeLaJournée[3],Expressions.GOOD_EVENING],
    [momentsDeLaJournée[4],Expressions.GOOD_NIGHT]
 ])("ETANT DONNE un utilisateur parlant une langue " +
     "ET que la periode de la journée est %s " +
     "QUAND on saisie une chaine " +
     "ALORS %s de cette langue à cette période est envoyé avant tout " , (moment: MomentsDeLaJournee, expressionExpected: string) =>{

      // Arrange
         let résultat = new VérificateurPalindromeTestBuilder()
         .withChaîne(nonPalindromes[0])
         .withMoment(moment)
      // Act
         .vérifier();

      // Assert
      let premièreLigne = résultat.split(os.EOL)[0];
      expect(premièreLigne).toEqual(expressionExpected)
 });
});