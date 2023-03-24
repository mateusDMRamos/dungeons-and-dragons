import Race from './Race';

export default class Orc extends Race {
  public _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    Orc.addNewIndividual();
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  private static addNewIndividual() {
    Orc._instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}