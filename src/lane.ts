import LaneNumber from "./laneNumber.js";

export default class Lane {
  private numbers: LaneNumber[];

  public constructor(LaneNumber: LaneNumber[]){
    this.numbers = LaneNumber;
  }
}
