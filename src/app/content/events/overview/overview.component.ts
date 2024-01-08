import { Component } from '@angular/core';
import { SearchComponent } from '../../search/search.component';
import { EventListComponent } from '../event-list/event-list.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    SearchComponent,
    EventListComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

}
