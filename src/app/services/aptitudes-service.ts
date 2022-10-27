import {Aptitud} from "../models/aptitud";
import {APTITUDES} from "../data/aptitudes-data";


export class AptitudesService {

  constructor() {
  }

  getAptitudes(): Aptitud[] {
    return APTITUDES;
  }
}
