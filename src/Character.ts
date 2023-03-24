import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get race(): Race {
    return this._race;
  }

  get energy(): Energy {
    return ({
      type_: this._energy.type_,
      amount: this._energy.amount,
    });
  }

  receiveDamage(atkPts: number): number {
    const hp = this._lifePoints;
    const damage = atkPts - this._defense > 0 ? atkPts - this._defense : 1;
    this._lifePoints = hp - damage <= 0 ? -1 : hp - damage;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  private newMaxHp(): number {
    const newHp = getRandomInt(1, 10) + this._maxLifePoints;
    if (newHp >= this._race.maxLifePoints) {
      return this._race.maxLifePoints;
    }
    return newHp;
  }

  levelUp(): void {
    this._defense += getRandomInt(1, 10);
    const newMaxHP = this.newMaxHp();
    this._maxLifePoints = newMaxHP;
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}