import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string ;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'Etteint') {
      return 'red';
    } else if (this.appareilStatus === 'Allumé') {
      return 'green';
    }
  }

  onAllumerOne() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onEtteindreOne() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
