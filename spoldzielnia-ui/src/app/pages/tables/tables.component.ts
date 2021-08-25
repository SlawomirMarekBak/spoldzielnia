import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Apartment } from './../../model/apartment';
import { ApartmentService } from './../../service/apartment.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  apartments: Apartment[] = new Array<Apartment>();
  subscription: Subscription;

  constructor(
    private apartmentService: ApartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.apartmentService.apartmentChanges.subscribe(
      (apartments) => {
        this.loadToSource(apartments);
      }
    );
    this.refreshApartments();
  }

  refreshApartments() {
    this.apartmentService.getApartmentList();
  }

  loadToSource(apartments: Apartment[]) {
    this.apartments = apartments.slice();
  }

  onView(id: number) {
    console.log('onView');
    this.router.navigate([id + '/view'], {
      relativeTo: this.route,
    });
  }

  onEdit(id: number) {
    console.log('onEdit');
  }

  onDelete(id: number) {
    console.log('onDelete');
  }
}
