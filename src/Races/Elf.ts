import Race from './Race';

export default class Elf extends Race {
  public _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    Elf.addNewIndividual();
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  private static addNewIndividual() {
    Elf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}