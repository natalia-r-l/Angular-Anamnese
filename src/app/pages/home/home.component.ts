
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private bnIdle: BnNgIdleService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bnIdle.startWatching(300).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        this.bnIdle.stopTimer();
      }
    });
  }

}
