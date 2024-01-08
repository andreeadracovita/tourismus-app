import { Component } from '@angular/core';
import { EventItemComponent } from './event-item/event-item.component';
import { Event } from '../event.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    CommonModule,
    EventItemComponent
  ],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  events: Event[] = [
    new Event('A test event', 'Long description for event', 'https://images.unsplash.com/photo-1610923686034-98f5730bb317?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Technorama', new Date(), 'Exhibitions'),
    new Event('A test event', 'Long description for event', 'https://images.unsplash.com/photo-1610923686034-98f5730bb317?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Technorama', new Date(), 'Exhibitions'),
    new Event('A test event', 'Long description for event', 'https://images.unsplash.com/photo-1610923686034-98f5730bb317?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Technorama', new Date(), 'Exhibitions')
  ];
}
