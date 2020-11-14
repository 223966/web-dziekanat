import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  readonly courses: string[] = [
    'Maths',
    'Electronics',
    'Programming',
    'Physics',
  ];

  constructor(private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  signUp(): void {
    this.router.navigate(['dashboard']);
    this.snackbar.open('Successfully signed for an Exam', 'OK', {
      duration: 3000,
    });
  }
}
