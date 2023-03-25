import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  character: Character | Fighter;
  monsters: Monster[] | SimpleFighter[];

  constructor(
    character: Character | Fighter, 
    monsters: Monster[] | SimpleFighter[],
  ) {
    super(character);
    this.character = character;
    this.monsters = monsters;
  }

  private monsterFight(index: number): number {
    const { character } = this;
    const monster = this.monsters[index];
    while (super.fight() === 1 && monster.lifePoints !== -1) {
      character.attack(monster);
      if (monster.lifePoints === -1) return 1;
      monster.attack(character);
    }
    return -1;
  }

  fight(): number {
    for (let index = 0; index < this.monsters.length; index += 1) {
      const monsterFightResult = this.monsterFight(index);
      if (monsterFightResult === -1) return -1;
    }
    return 1;
  }
}