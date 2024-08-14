import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';



@Injectable({
  providedIn: 'root',
})
export class CvService {

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return [];
  }
}
