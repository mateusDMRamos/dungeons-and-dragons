import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  fighterOne: Fighter;
  fighterTwo: Fighter;

  constructor(fighterOne: Fighter, fighterTwo: Fighter) {
    super(fighterOne);
    this.fighterOne = fighterOne;
    this.fighterTwo = fighterTwo;
  }

  fight(): number {
    let fighterOneFightResult = super.fight();
    while (fighterOneFightResult === 1 && this.fighterTwo.lifePoints > 0) {
      this.fighterOne.attack(this.fighterTwo);
      if (this.fighterTwo.lifePoints === -1) break;
      this.fighterTwo.attack(this.fighterOne);
      fighterOneFightResult = super.fight();
    }
    return fighterOneFightResult === 1 ? 1 : -1;
  }
}