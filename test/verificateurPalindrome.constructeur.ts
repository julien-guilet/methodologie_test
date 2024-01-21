import { VérificateurPalindrome } from "../src/domaine/verificateurPalindrome";
import { MomentsDeLaJournee } from "../src/domaine/moments";
import { acceptationParametersParDefaut, integrationParametersParDefaut, parametersTestsInterface } from "./parameters.tests.interface";

const parameters: parametersTestsInterface =  process.env.LEVEL_TEST == "acceptation" ? new acceptationParametersParDefaut() : new integrationParametersParDefaut();


/**
 * Represents a builder for creating instances of VérificateurPalindrome.
 */
export class VérificateurPalindromeTestBuilder {
  private chaîne: string;
  private langage: string;
  private moment: MomentsDeLaJournee;

  constructor() {
    this.chaîne = parameters.nonPalindromes[0];
    this.langage = parameters.langue;
    this.moment = parameters.momentDeLaJournée;
  }

  /**
   * Sets the chaîne property of the builder.
   * @param {string} chaîne - The chaîne value to set.
   * @returns {VérificateurPalindromeTestBuilder} The updated builder instance.
   */
  public withChaîne(chaîne: string): VérificateurPalindromeTestBuilder {
    this.chaîne = chaîne;
    return this;
  }

  /**
   * Sets the langage property of the builder.
   * @param {string} langage - The langage value to set.
   * @returns {VérificateurPalindromeTestBuilder} The updated builder instance.
   */
  public withLangage(langage: string): VérificateurPalindromeTestBuilder {
    this.langage = langage;
    return this;
  }

  /**
   * Sets the moment property of the builder.
   * @param {MomentsDeLaJournee} moment - The moment value to set.
   * @returns {VérificateurPalindromeTestBuilder} The updated builder instance.
   */
  public withMoment(moment: MomentsDeLaJournee): VérificateurPalindromeTestBuilder {
    this.moment = moment;
    return this;
  }

  /**
   * Builds and returns an instance of VérificateurPalindrome.
   * @returns {VérificateurPalindrome} The built VérificateurPalindrome instance.
   */
  public build(): VérificateurPalindrome {
    const vérificateur = new VérificateurPalindrome();
    vérificateur.setLangage(this.langage);
    vérificateur.setMoment(this.moment);
    return vérificateur;
  }

  /**
   * Verifies the chaîne using the built VérificateurPalindrome instance.
   * @returns {string} The result of the verification.
   */
  public vérifier(): string {
    const vérificateur = this.build();
    return vérificateur.Vérifier(this.chaîne);
  }
}