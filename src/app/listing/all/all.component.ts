import { Component, OnInit, ViewChild } from '@angular/core';
import { ListingService } from '../listing.service';
import { IListing } from 'src/app/shared/Interfaceses/listing';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  get allListings() { return this.listingService.allListings; }

  listingId = null;

  constructor(private listingService: ListingService) { }

  async ngOnInit() {
      await this.listingService.getAllListings();
  }
  @ViewChild('searchFrom', { static: true }) from: NgForm
  
  searchFormHandler(value){  
    this.listingService.searchListings(value);
    
  }
  detailsHandler(listing: IListing){
    this.listingService.selectedListing = listing;
  }

  fromChild(event){
    this.listingId = event;
  }

}
