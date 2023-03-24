import Race from './Race';

export default class Dwarf extends Race {
  public _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    Dwarf.addNewIndividual();
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  private static addNewIndividual() {
    Dwarf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}