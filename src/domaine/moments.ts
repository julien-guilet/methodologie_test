enum Moment {
    Inconnu,
    Matin,
    AprèsMidi,
    Soir,
    Nuit
}

export class MomentsDeLaJournee {
    private readonly _representation: string;

    public static Inconnu: MomentsDeLaJournee = new MomentsDeLaJournee("Inconnu");
    public static Matin: MomentsDeLaJournee = new MomentsDeLaJournee("Matin");
    public static AprèsMidi: MomentsDeLaJournee = new MomentsDeLaJournee("Après-Midi");
    public static Soirée: MomentsDeLaJournee = new MomentsDeLaJournee("Soirée");
    public static Nuit: MomentsDeLaJournee = new MomentsDeLaJournee("Nuit");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}
