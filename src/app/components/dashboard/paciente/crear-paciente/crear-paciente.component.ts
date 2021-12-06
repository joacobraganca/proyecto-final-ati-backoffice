import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { MiscService } from 'src/app/services/misc.service';
import { Misc } from 'src/app/interfaces/misc';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface TableData {
  contactName: string;
  contactPhone: string;
}

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.sass'],
})
export class CrearPacienteComponent implements OnInit {
  //  Agregar filas a la lista de contactos
  data: TableData[] = [{ contactName: '', contactPhone: '' }];
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  displayColumns = ['contactName', 'contactPhone'];
  rows: FormArray = this.fb.array([]);

  // Form group para cada paso
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup = this.fb.group({ contacts: this.rows });

  // Pasos editables
  isEditable = true;

  firstStepInvalid: boolean = false;
  secondStepInvalid: boolean = false;
  thirdStepInvalid: boolean = false;

  hospitalsList: Misc[] = [];
  pathologiesList: Misc[] = [];
  emergencyServicesList: Misc[] = [];
  partnerServicesList: Misc[] = [];

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private miscService: MiscService,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public parentData: any
  ) {
    this.firstFormGroup = this.fb.group({
      document: ['', Validators.required],
      name: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      mutualist: [],
      emergencyService: new FormControl(),
      primaryDoctor: [],
      accompanying: new FormControl(),
      pathologies: new FormControl(),
      cares: [''],
    });
  }

  public validateFirstStep() {
    if (
      this.firstFormGroup.get('name')?.value !== '' &&
      this.firstFormGroup.get('document')?.value !== ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  public validateSecondStep() {
    if (
      this.secondFormGroup.get('mutualist')?.value !== null &&
      this.secondFormGroup.get('emergencyService')?.value !== null &&
      this.secondFormGroup.get('primaryDoctor')?.value !== null &&
      this.secondFormGroup.get('accompanying')?.value !== null &&
      this.secondFormGroup.get('pathologies')?.value.length > 0 &&
      this.secondFormGroup.get('cares')?.value !== ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  public validateThirdStep() {
    if (this.thirdFormGroup.get('contacts')?.value.length > 0) {
      if (
        this.thirdFormGroup.get('contacts')?.value[0].contactName !== null &&
        this.thirdFormGroup.get('contacts')?.value[0].contactPhone !== null
      )
        return false;
      else return true;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.data.forEach((d: TableData) => this.addRow(d, false));
    this.updateView();
    if (
      this.hospitalsList.length === 0 ||
      this.pathologiesList.length === 0 ||
      this.partnerServicesList.length === 0 ||
      this.emergencyServicesList.length === 0
    ) {
      this.hospitalsList = this.miscService.getHospitalsLocal();
      this.pathologiesList = this.miscService.getPathologiesLocal();
      this.partnerServicesList = this.miscService.getPartnerServicesLocal();
      this.emergencyServicesList = this.miscService.getEmertencyServicesLocal();
    }
  }

  finishSteps(event: any) {
    let index = 4;

    if (this.validateThirdStep()) {
      this.thirdStepInvalid = true;
      index = 2;
    }
    if (this.validateSecondStep()) {
      this.secondStepInvalid = true;
      index = 1;
    }
    if (this.validateFirstStep()) {
      this.firstStepInvalid = true;
      index = 0;
    }
    if (index < 4) {
      event.selectedIndex = index;
    } else {
      this.savePatient();
    }
  }

  savePatient() {
    let contacts = this.thirdFormGroup.get('contacts')?.value;
    let patientContacts: { name: any; phone: any }[] = [];
    contacts.forEach((c: { contactName: any; contactPhone: any }) => {
      patientContacts.push({
        name: c.contactName,
        phone: c.contactPhone,
      });
    });

    let patient = {
      name: this.firstFormGroup.get('name')?.value,
      document: this.firstFormGroup.get('document')?.value,
      hospital: this.secondFormGroup.get('mutualist')?.value._id,
      emergencyService: this.secondFormGroup.get('emergencyService')?.value._id,
      gpDoctor: this.secondFormGroup.get('primaryDoctor')?.value,
      partnerService: this.secondFormGroup.get('accompanying')?.value._id,
      pathologies: this.secondFormGroup
        .get('pathologies')
        ?.value.map((p: { _id: any }) => p._id),
      caresAndComments: this.secondFormGroup.get('cares')?.value,

      assignedHealthHome: this.userService.getHealthHome(),
      contacts: patientContacts,

      admissionDate: this.formatDate(),
    };

    this.patientService.createPatient(patient).subscribe(
      (response) => {
        this.patientService
          .getPatientsByHome(this.userService.getHealthHome())
          .subscribe(
            (response) => {
              this.patientService.setPatients(response.body || []);
              this.parentData.closeDialog();
            },
            (error) => {
              console.log(error);
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Control para agregar filas a la lista de contactos
  addRow(d?: TableData, noUpdate?: boolean) {
    const row = this.fb.group({
      contactName: [d && d.contactName ? d.contactName : null, []],
      contactPhone: [d && d.contactPhone ? d.contactPhone : null, []],
    });
    this.rows.push(row);
    if (!noUpdate) {
      this.updateView();
    }
  }
  updateView() {
    this.dataSource.next(this.rows.controls);
  }

  formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
  }

  validateCI(event: any) {
    let ci = event.target.value;

    if (ci.length > 5) {
      ci = this.clean_ci(ci);
      var dig = ci[ci.length - 1];
      ci = ci.replace(/[0-9]$/, '');
      let valid = dig == this.validation_digit(ci);
      if (valid) {
        this.firstFormGroup.controls.document.setErrors(null);
      } else {
        this.firstFormGroup.controls.document.setErrors({ incorrect: true });
      }
    }
  }

  validation_digit(ci: string) {
    var a = 0;
    var i = 0;
    if (ci.length <= 6) {
      for (i = ci.length; i < 7; i++) {
        ci = '0' + ci;
      }
    }
    for (i = 0; i < 7; i++) {
      a += (parseInt('2987634'[i]) * parseInt(ci[i])) % 10;
    }
    if (a % 10 === 0) {
      return 0;
    } else {
      return 10 - (a % 10);
    }
  }

  clean_ci(ci: string) {
    return ci.replace(/\D/g, '');
  }
}
