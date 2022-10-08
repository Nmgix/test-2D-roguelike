import { Game } from "../Basic/Game";
import { CharacterController } from "../Controllers/CharacterController";
import { EnemyController } from "../Controllers/EnemyController";

export class Enemy extends CharacterController {
  public enemyController: EnemyController = new EnemyController(this);

  constructor(game: Game) {
    super(game);
    this.size = {
      width: 1,
      height: 1,
    };
    this.type = "enemy";
    this.entityLogic.push(this.enemyController.randomMove);

    this.entityLogic.push((tile: HTMLDivElement) => {
      const healthController = this.healthController;
      const healthBlock = tile.querySelector(".health-wrapper")! as HTMLDivElement;

      // if (!healthBlock) {
      //   return;
      // }

      if (healthController.health.current === healthController.health.max) {
        healthBlock.style.opacity = "0";
      } else {
        healthBlock.style.opacity = "1";
      }
    });

    this.entityLogic.push(() => this.attack("hero"));
  }
}
