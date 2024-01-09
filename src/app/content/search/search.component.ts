import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue: string = '';
  selectedDate: Date | null = new Date();
  selectedCategories: string[] = ['All'];
  
  categories: string[] = ['All', 'Exhibitions', 'Sports & Fitness', 'Classical Music', 'Party', 'Fair & Market'];

  onCheckboxChange(category: string, event: any) {
    let isChecked = false;
    if (event.target.checked) {
      isChecked = true;
    }
    if(isChecked === true) {
      this.selectedCategories.push(category);
    } else {
      const index = this.selectedCategories.indexOf(category, 0);
      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      }
    }
  }
}
