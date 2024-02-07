import { VérificateurPalindromeTestBuilder } from "./verificateurPalindrome.constructeur";
import * as os from "os";
import {Expressions} from "../src/domaine/expressions";
import { MomentsDeLaJournee } from "../src/domaine/moments";

describe("recette test du 31/02/2024", () => {

    test("QUAND on saisit un palindrome " +
       "ET que l'on est le soir " +
       "ET que l'on parle anglais " +
       "ALORS celui-ci est renvoyé " +
       "ET 'Well say !' est envoyé ensuite Good Evening", () => {

      // Arrange
      let résultat = new VérificateurPalindromeTestBuilder()
         .withChaîne("radar")
         .withLangage("en")
         .withMoment(MomentsDeLaJournee.Soirée)
      // Act
         .vérifier();

      // Assert
      expect(résultat).toContain(Expressions.GOOD_EVENING + os.EOL + "radar" + os.EOL + Expressions.WELL_SAY + os.EOL + Expressions.GOOD_EVENING);
   });

   test("QUAND on saisit un non palindrome " +
       "ET que l'on est le matin " +
       "ET que l'on parle français " +
       "ALORS celui-ci est renvoyé à l'envers", () => {

      // Arrange
      let résultat = new VérificateurPalindromeTestBuilder()
         .withChaîne("enfant")
         .withLangage("fr")
         .withMoment(MomentsDeLaJournee.Matin)
      // Act
         .vérifier();

      // Assert
      expect(résultat).toContain(Expressions.BONJOUR + os.EOL + "tnafne" + os.EOL + Expressions.BONNE_JOURNEE);
   });

   test("QUAND on saisit un palindrome " +
       "ET que l'on est le soir " +
       "ALORS celui-ci est renvoyé comme tel" +
       "ET 'Well say !' est envoyé ensuite", () => {

      // Arrange
      let résultat = new VérificateurPalindromeTestBuilder()
         .withChaîne("radar")
         .withMoment(MomentsDeLaJournee.Soirée)
      // Act
         .vérifier();

      // Assert
      expect(résultat).toContain(Expressions.GOOD_EVENING + os.EOL + "radar" + os.EOL + Expressions.WELL_SAY + os.EOL + Expressions.GOOD_EVENING);
   });

   
});
