import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'First Name': new FormControl(null, Validators.required),
      'Last Name': new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Mobile: new FormControl(null, Validators.required),
      'Car Brand': new FormControl(null, Validators.required),
      'Car Model': new FormControl(null, Validators.required),
      'Serial Number': new FormControl(null, Validators.required),
      Meters: new FormControl(null, Validators.required),
      Service: new FormControl(null, Validators.required),
      'Year Made': new FormControl(null, Validators.required),
      'More Information': new FormControl(null),
    });
  }

  onSubmit(formRef) {
    if (this.form.valid) {
      const formData = new FormData();
      for (const key in this.form.value) {
        formData.append(key, this.form.value[key]);
      }

      this.form.reset();
      formRef.resetForm();

      return this.http
        .post(
          'https://script.google.com/macros/s/AKfycbyAZ5ks27zmxTo2wcmEpWslvV0C9EtSbGzxHtXP0AzyvSz3oyjF6xX0iShj_FO4mDLYAw/exec',
          formData
        )
        .subscribe();
    }
    return null;
  }
}
