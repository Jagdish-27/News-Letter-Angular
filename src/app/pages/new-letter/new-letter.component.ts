import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.scss'],
})
export class NewLetterComponent {
  constructor(private Router: Router, private dataService: DataService) {}

  newsFeature = [
    'Product discover and building what matters',
    'Measuring to ensure updates are a success',
    'And much More',
  ];

  newsletterForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    if (this.newsletterForm.valid) {
      this.Router.navigate(['/success']);
      const email = this.newsletterForm.controls.email.value;
      this.dataService.setEmail(email as string);
    }
  }
}
