import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EntriesService } from 'src/app/services/entries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(
    private entryService: EntriesService,
    private router: Router
  ) { }

  createEntry(form: NgForm) {

    const { category, imageUrl, description, moreInfo } = form.value

    if (form.invalid) { return }

    const data = {
      category,
      imageUrl,
      description,
      moreInfo
    }

    this.entryService.createEntry(data).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error creating entry:', error);
      }
    });

  }

}
