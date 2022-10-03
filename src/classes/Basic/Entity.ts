import { EntityPosition, MapNodeSize } from "../../types/gameTypes";
import { v4 as uuid } from "uuid";
import { Game } from "./Game";

export class Entity {
  public uuid: string;

  public size: MapNodeSize;
  public position: EntityPosition;

  constructor() {
    this.uuid = uuid();
  }

  generatePosition: () => {
    // тут будет проверка свободен ли тайл
  };

  createEntity: (gameInstance: Game) => void = (gameInstance) => {
    gameInstance.entities.push(this);
  };
  destroyEntity: (gameInstance: Game) => void = (gameInstance) => {
    gameInstance.entities.filter((entity) => entity.uuid !== this.uuid);
  };
}

export class MovableEntity extends Entity {
  move: () => {
    // тут будет проверка свободен ли тайл
  };
}
