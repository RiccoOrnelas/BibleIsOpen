import { Component, Input, OnInit, Output, input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Moment } from '../../moments';
@Component({
  selector: 'app-devotional-form',
  templateUrl: './devotional-form.component.html',
  styleUrl: './devotional-form.component.css'
})
export class DevotionalFormComponent implements OnInit {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Moment>();
  devotionalForm!: FormGroup
  constructor() { }
  ngOnInit(): void {
    this.devotionalForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', []),
    })
  }
  get title() {
    return this.devotionalForm.get("title")!
  }
  get description() {
    return this.devotionalForm.get("description")!
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.devotionalForm.patchValue({ image: event.target.files[0] });
  }
  submit() {
    if (this.devotionalForm.invalid) {
      return;
    }
    console.log(this.devotionalForm.value);

    this.onSubmit.emit(this.devotionalForm.value)
  }

}
