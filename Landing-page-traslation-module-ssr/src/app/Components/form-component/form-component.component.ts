import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent implements OnInit {
  subscribeForm!: FormGroup; // Use non-null assertion operator

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.subscribeForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      agreeTerms: [false, [Validators.requiredTrue]]
    });
  }

  navigateToFirstComponent(): void {
    this.router.navigate(['/first-component']);
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      console.log(this.subscribeForm.value);
      // Handle form submission
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.subscribeForm.controls).forEach(key => {
        const control = this.subscribeForm.get(key);
        control?.markAsTouched(); // Add null check with optional chaining
      });
    }
  }

  // Convenience getter for easy access to form fields
  get f() { return this.subscribeForm.controls; }
}