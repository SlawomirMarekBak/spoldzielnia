import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apartment } from './../../model/apartment';
import { ApartmentService } from './../../service/apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
})
export class ApartmentComponent implements OnInit {
  // apartment: any = {};
  public apartmentForm: FormGroup;
  cityCtr: FormControl;
  zipCodeCtr: FormControl;
  streetNameCtr: FormControl;
  streetNumberCtr: FormControl;
  id = null;
  isEdit = false;
  isView = true;
  isNew = false;

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initControls('', '', '', '');
    this.createForm();
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.isEdit = params.mode === 'edit';
      this.isView = params.mode === 'view';
      this.isNew = !this.isEdit && !this.isView;
      this.initForm();
    });
    // this.apartment = new Apartment(
    //   null,
    //   'Katowice',
    //   '41-100',
    //   'Wolności',
    //   '54/12'
    // );
  }

  initForm() {
    if (this.isEdit || this.isView) {
      this.apartmentService.getApartment(this.id).subscribe(
        (apartment) => {
          console.log('apartment:' + apartment.city + ' ' + apartment.id);
          if (apartment) {
            this.id = apartment.id;
            this.cityCtr.setValue(apartment.city);
            this.zipCodeCtr.setValue(apartment.zipCode);
            this.streetNameCtr.setValue(apartment.streetName);
            this.streetNumberCtr.setValue(apartment.streetNumber);
          }
        },
        (error) => {
          console.log('error in ApartmentComponent.initForm');
        }
      );
    }
  }

  private createForm() {
    this.apartmentForm = new FormGroup({
      city: this.cityCtr,
      zipCode: this.zipCodeCtr,
      streetName: this.streetNameCtr,
      streetNumber: this.streetNumberCtr,
    });
  }

  private initControls(
    city: String,
    zipCode: String,
    streetName: String,
    streetNumber: String
  ) {
    this.cityCtr = new FormControl(
      { value: city, disabled: false },
      Validators.required
    );
    this.zipCodeCtr = new FormControl(
      { value: zipCode, disabled: false },
      Validators.required
    );
    this.streetNameCtr = new FormControl(
      { value: streetName, disabled: false },
      Validators.required
    );
    this.streetNumberCtr = new FormControl(
      { value: streetNumber, disabled: false },
      Validators.required
    );
  }

  onSubmit() {
    console.log('reactive form submitted');
  }

  onCancel() {
    console.log('onCancel');
    this.router.navigate(['/tables'], { relativeTo: this.route });
  }

  onSave() {
    console.log('onSave');
    if (!this.apartmentForm.invalid) {
      const apartment = new Apartment(
        this.id,
        this.apartmentForm.value['city'],
        this.apartmentForm.value['zipCode'],
        this.apartmentForm.value['streetName'],
        this.apartmentForm.value['streetNumber']
      );
      if (this.isNew) {
        console.log('insert');
        this.apartmentService.addApartment(apartment, 'test');
      } else if (this.isEdit) {
        console.log('update');
        this.apartmentService.editApartment(apartment);
      }
      this.navigateBack();
    }
  }

  private navigateBack() {
    this.router.navigate(['/tables'], { relativeTo: this.route });
  }
}
