import { AbstractControl, ValidatorFn } from "@angular/forms";

export const cinAgeValidator: ValidatorFn = (form: AbstractControl) => {
  const age = +form.get('age')?.value;
  const cin = +form.get('cin')?.value.substring(0,2);
  if(!age && !cin) return null;
  if(age >=60 && cin <20 || age <60 && cin >= 20) return null;
  return {ageCin: "L'age et le cin ne correspondes pas"}
}
