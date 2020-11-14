import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pe',
  templateUrl: './pe.component.html',
  styleUrls: ['./pe.component.scss'],
})
export class PeComponent implements OnInit {
  readonly sports: string[] = [
    'Football',
    'Yoga',
    'Chess',
    'Basketball',
    'Voleyball',
    'Baseball',
  ];

  constructor(private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  signUp(): void {
    this.router.navigate(['dashboard']);
    this.snackbar.open('Successfully signed for PE', 'OK', { duration: 3000 });
  }
}
