import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCvComponent } from './add-cv/add-cv.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { MasterDetailCvComponent } from './master-detail-cv/master-detail-cv.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvRoutingModule } from './cv-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // Cvs
    CvComponent,
    CvListComponent,
    CvCardComponent,
    CvItemComponent,
    DetailsCvComponent,
    EmbaucheComponent,
    AddCvComponent,
    AutocompleteComponent,
    MasterDetailCvComponent,
    DefaultImagePipe,
  ],
  imports: [CommonModule, CvRoutingModule, ReactiveFormsModule],
})
export class CvModule {}
