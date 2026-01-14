import { Component, Input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required:true}) data!: Ticket;
  close = output();

  detailsVisisble =signal(false);

  onToggleDetails() {
    this.detailsVisisble.set(!this.detailsVisisble());
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
}
