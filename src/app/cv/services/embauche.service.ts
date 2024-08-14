import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  #embauchees: Cv[] = [];

  getEmbauchees(): Cv[] {
    return this.#embauchees;
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    const index = this.#embauchees.indexOf(cv);
    if(index < 0) {
      this.#embauchees.push(cv);
      return true;
    }
    return false;
  }
}
