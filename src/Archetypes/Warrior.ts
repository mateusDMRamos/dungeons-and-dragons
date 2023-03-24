import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;
  constructor(name: string) {
    Warrior.addNewIndividual();
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addNewIndividual() {
    Warrior._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}