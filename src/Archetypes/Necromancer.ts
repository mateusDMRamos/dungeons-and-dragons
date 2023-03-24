import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instances = 0;
  constructor(name: string) {
    Necromancer.addNewIndividual();
    super(name);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addNewIndividual() {
    Necromancer._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}