import { AbstractControl } from "@angular/forms"
import { CvService } from "../cv/services/cv.service"
import { map } from "rxjs"

export const uniqueCinValidator  = (cvService:CvService) => {

  return (control: AbstractControl) => cvService.getCvsByProperty('cin',control.value).pipe(
    map(cvs => cvs.length ? {uniqueCv: `Le cin ${control.value} exist déjà`} : null )
  )
}

