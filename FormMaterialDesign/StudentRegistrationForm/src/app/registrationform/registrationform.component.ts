import { Component } from '@angular/core';
import { FormControl, FormsModule,ReactiveFormsModule,FormGroup,Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheet,MatBottomSheetModule,MatBottomSheetRef} from '@angular/material/bottom-sheet';

interface College {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registrationform',
  standalone: true,
  imports: [MatDatepickerModule,RegistrationformComponent,ReactiveFormsModule,MatButtonToggleModule,MatInputModule,MatFormFieldModule,FormsModule,MatSelectModule,MatCheckboxModule,MatExpansionModule,CommonModule,MatChipsModule,MatProgressBarModule,MatNativeDateModule,MatButtonModule,MatBottomSheetModule],
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css'
})
export class RegistrationformComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  show(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  
  hasCertification:boolean = false;
  countCheck:number=0;
  countUncheck:number=0;
  btechPercentage: number = 0;
  secondaryEdu:string | null = null;
  shouldEnableCertifications:boolean =false;

  campus: College[] = [
    {value: 'campus-1', viewValue: 'AEC'},
    {value: 'campus-2', viewValue: 'ACOE'},
    {value: 'campus-3', viewValue: 'ACET'},
  ];

  onCheckboxTrue() {
    if(this.countCheck%2 == 0){
      this.hasCertification = true;
      this.countCheck++;
    }
    else{
      this.hasCertification = false;
      this.countCheck++;
    }
  }
  onCheckboxFalse() {
    if(this.countUncheck%2==0){
      this.hasCertification = false;
      this.countUncheck++;
    }
    else{
      this.hasCertification = true;
      this.countUncheck++;
    }    
  }

  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName : new FormControl('',[Validators.required])

  });
}



@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  standalone: true,
  imports: [],
})

// extends RegistrationformComponent
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {
    // super(_bottomSheetRef);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}