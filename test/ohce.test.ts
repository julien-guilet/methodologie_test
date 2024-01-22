import { VérificateurPalindrome } from "../src/domaine/verificateurPalindrome";
import { VérificateurPalindromeTestBuilder } from "./verificateurPalindrome.constructeur";
import * as os from "os";
import { Expressions } from "../src/domaine/expressions";
import { MomentsDeLaJournee } from "../src/domaine/moments";
import { acceptationParametersParDefaut, integrationParametersParDefaut, parametersTestsInterface } from "./parameters.tests.interface";

const parameters: parametersTestsInterface = process.env.LEVEL_TEST == "acceptation" ? new acceptationParametersParDefaut() : new integrationParametersParDefaut();


describe("test works", () => {
   test.each([...parameters.nonPalindromes])("QUAND on saisit un non-palindrome %s " +
      "ALORS elle est renvoyée en miroir",
      (chaîne: string) => {

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
      "ET 'Bien dit !' est envoyé ensuite", () => {



         // Arrange
         let résultat = new VérificateurPalindromeTestBuilder()
            .withChaîne(parameters.palindrome)
            // Act
            .vérifier();

         // Assert
         expect(résultat).toContain(parameters.palindrome + os.EOL + Expressions.WELL_SAY);
      });


   test.each([...parameters.nonPalindromes, parameters.palindrome])
      ('QUAND on saisit une chaîne %s ' +
         'ALORS "Bonjour" est envoyé avant toute réponse',
         (chaîne: string) => {

            // Arrange
            let vérificateur = new VérificateurPalindromeTestBuilder()
               .withChaîne(parameters.nonPalindromes[0]);

            let résultat = vérificateur
               // Act
               .vérifier();

            let premièreLigne = résultat.split(os.EOL)[0];
            expect(premièreLigne).toEqual(vérificateur.getBonjourEnfonctionDuMomentEtDeLaLangue())
         });

   test.each([...parameters.nonPalindromes, parameters.palindrome])
      ('QUAND on saisit une chaîne %s ' +
      'ALORS "Au revoir" est envoyé en dernier.',
      (chaîne: string) => {
         let vérificateur = new VérificateurPalindromeTestBuilder()
         .withChaîne(parameters.nonPalindromes[0])
         // Arrange
         let résultat = vérificateur
            // Act
            .vérifier();

         // Assert
         let lignes = résultat.split(os.EOL);
         let dernièreLigne = lignes[lignes.length - 1];
         expect(dernièreLigne).toEqual(vérificateur.getAuRevoirEnfonctionDuMomentEtDeLaLangue())
      });

   test.each([
      ["fr", Expressions.BIEN_DIT],
      ["en", Expressions.WELL_SAY]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
      "QUAND on a un palindrome " +
      "ALORS celui-ci est renvoyé " +
      "ET '%s' de cette langue est envoyé", (langue: string, expressionExpected: string) => {

         // Arrange
         let résultat = new VérificateurPalindromeTestBuilder()
            .withChaîne(parameters.palindrome)
            .withLangage(langue)
            // Act
            .vérifier();

         // Assert
         expect(résultat).toContain(parameters.palindrome + os.EOL + expressionExpected);
      });

   test.each([
      ["fr"],
      ["en"]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
      "QUAND on saisie une chaine " +
      "ALORS %s de cette langue est envoyé avant tout ", (langue: string) => {

         // Arrange
         let vérificateur = new VérificateurPalindromeTestBuilder()
            .withChaîne(parameters.nonPalindromes[0])
            .withLangage(langue)

         let résultat = vérificateur
            // Act
            .vérifier();

         // Assert
         let premièreLigne = résultat.split(os.EOL)[0];
         expect(premièreLigne).toEqual(vérificateur.getBonjourEnfonctionDuMomentEtDeLaLangue())
      });

   test.each([
      ["fr"],
      ["en"]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
      "QUAND on saisie une chaine " +
      "ALORS %s de cette langue est envoyé en dernier ", (langue: string) => {

         // Arrange
         let vérificateur = new VérificateurPalindromeTestBuilder()
         .withChaîne(parameters.nonPalindromes[0])
         .withLangage(langue)
         let résultat = vérificateur
            // Act
            .vérifier();

         // Assert
         let lignes = résultat.split(os.EOL);
         let dernièreLigne = lignes[lignes.length - 1];
         expect(dernièreLigne).toEqual(vérificateur.getAuRevoirEnfonctionDuMomentEtDeLaLangue())
      });

   test.each([
      ["en", parameters.tousMomentsDeLaJournée[0], Expressions.HELLO],
      ["en", parameters.tousMomentsDeLaJournée[1], Expressions.GOOD_MORNING],
      ["en", parameters.tousMomentsDeLaJournée[2], Expressions.GOOD_AFTERNOON],
      ["en", parameters.tousMomentsDeLaJournée[3], Expressions.GOOD_EVENING],
      ["en", parameters.tousMomentsDeLaJournée[4], Expressions.GOOD_NIGHT],
      ["fr", parameters.tousMomentsDeLaJournée[0], Expressions.BONJOUR],
      ["fr", parameters.tousMomentsDeLaJournée[1], Expressions.BONJOUR],
      ["fr", parameters.tousMomentsDeLaJournée[2], Expressions.BONJOUR],
      ["fr", parameters.tousMomentsDeLaJournée[3], Expressions.BONSOIR],
      ["fr", parameters.tousMomentsDeLaJournée[4], Expressions.BONSOIR]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
      "ET que la periode de la journée est %s " +
      "QUAND on saisie une chaine " +
      "ALORS %s de cette langue à cette période est envoyé avant tout ", (langue: string, moment: MomentsDeLaJournee, expressionExpected: string) => {

         // Arrange
         let résultat = new VérificateurPalindromeTestBuilder()
            .withChaîne(parameters.nonPalindromes[0])
            .withMoment(moment)
            .withLangage(langue)
            // Act
            .vérifier();

         // Assert
         let premièreLigne = résultat.split(os.EOL)[0];
         expect(premièreLigne).toEqual(expressionExpected)
      });

   test.each([
      ["en", parameters.tousMomentsDeLaJournée[0]],
      ["en", parameters.tousMomentsDeLaJournée[1]],
      ["en", parameters.tousMomentsDeLaJournée[2]],
      ["en", parameters.tousMomentsDeLaJournée[3]],
      ["en", parameters.tousMomentsDeLaJournée[4]],
      ["fr", parameters.tousMomentsDeLaJournée[0]],
      ["fr", parameters.tousMomentsDeLaJournée[1]],
      ["fr", parameters.tousMomentsDeLaJournée[2]],
      ["fr", parameters.tousMomentsDeLaJournée[3]],
      ["fr", parameters.tousMomentsDeLaJournée[4]]
   ])("ETANT DONNE un utilisateur parlant une langue %s " +
      "ET que la periode de la journée est %s " +
      "QUAND on saisie une chaine " +
      "ALORS un message pour dire au revoir de cette langue à cette période est envoyé en dernier ", (langue: string, moment: MomentsDeLaJournee) => {

         // Arrange
         let vérificateur = new VérificateurPalindromeTestBuilder()
         .withChaîne(parameters.nonPalindromes[0])
         .withMoment(moment)
         .withLangage(langue)
         let résultat = vérificateur
            // Act
            .vérifier();

         // Assert
         let lignes = résultat.split(os.EOL);
         let dernièreLigne = lignes[lignes.length - 1];
         expect(dernièreLigne).toEqual(vérificateur.getAuRevoirEnfonctionDuMomentEtDeLaLangue())
      });
});