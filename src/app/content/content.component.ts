import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { OverviewComponent } from './events/overview/overview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    EventListComponent,
    EventDetailComponent,
    OverviewComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  overviewMode = true;
}
