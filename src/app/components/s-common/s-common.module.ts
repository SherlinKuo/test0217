import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatTableModule,
  DragDropModule,
  MatAutocompleteModule,
  MatCardModule,
  MatPaginatorModule,
  MatBadgeModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,      
    FormsModule,
    ReactiveFormsModule,
    ...materialModules 

  ],
  exports:[
    CommonModule,      
    FormsModule,
    ReactiveFormsModule,
    ...materialModules 
  ]
})
export class SCommonModule { }
