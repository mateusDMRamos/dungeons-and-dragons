import Race from './Race';

export default class Halfling extends Race {
  public _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    Halfling.addNewIndividual();
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  private static addNewIndividual() {
    Halfling._instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}