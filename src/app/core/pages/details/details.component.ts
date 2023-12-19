import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { EntriesService } from 'src/app/services/entries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'src/app/types/entry.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  entryDetails!: Entry
  isOwner: boolean = false;
  isLogged: boolean = false;

  constructor(
    private entryService: EntriesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const entryId = params['id'];
      // console.log('Entry ID:', entryId);

      this.entryService.getEntryById(entryId).subscribe({
        next: (data) => {
          this.entryDetails = data
          console.log('Data recieved:', data);
          
        },
        error: (error) => {
          console.error('Error fetching entry:', error);
        },
        complete: () => {
          console.log('getEntryById() completed');
        }
      })


    });
  }



}
