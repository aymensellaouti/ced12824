import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Subject } from 'rxjs';

const API_SWAGGER =
  'https://apilb.tridevs.net/explorer/#!/personne/personne_find';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
    new Cv(1, 'sellaouti', 'aymen', 'trainer', '123', 42, 'as.jpg'),
    new Cv(2, 'Dali', 'sourour', 'Dev', '1234', 20, '     '),
  ];

  // Un flux des cvs Sélectionnées => Cv1 Cv3 Cv4 Cv5 Cv6 Cv1 Cv2
  #selectCVSubject$ = new Subject<Cv>();
  selectCv$ = this.#selectCVSubject$.asObservable();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id === +id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index > -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  selectCv(cv: Cv): void {
    this.#selectCVSubject$.next(cv);
  }
}
