import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';



@Injectable({
  providedIn: 'root',
})
export class CvService {

  #cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'trainer', '123', 42, 'as.jpg'),
    new Cv(2, 'Dali', 'sourour', 'Dev', '1234', 20, '     '),
  ];

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.#cvs;
  }
}
