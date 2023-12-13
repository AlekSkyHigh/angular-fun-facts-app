import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesService } from 'src/app/services/entries.service';
import { Entry } from 'src/app/types/entry.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entriesService: EntriesService) { }

  ngOnInit(): void {

    this.entriesService.getAllEntries().subscribe({
      next: (data) => {
        this.entries = data;
      },
      error: (error) => {
        console.error('Error fetching entries:', error);
      },
      complete: () => {
        console.log('getAllEntries() completed');
      }
    });

  }

}