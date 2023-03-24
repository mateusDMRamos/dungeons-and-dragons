import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;
  constructor(name: string) {
    Ranger.addNewIndividual();
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addNewIndividual() {
    Ranger._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}