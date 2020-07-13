import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  quizzIntro: String;
  quizzKW: String;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfQuestions: ['', Validators.required],
      questions: new FormArray([])
    });
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get q() { return this.f.questions as FormArray; }

  onChangeQuestions(e) {
    const numberOfQuestions = e.target.value || 0;
    if (this.q.length < numberOfQuestions) {
        for (let i = this.q.length; i < numberOfQuestions; i++) {
            this.q.push(this.formBuilder.group({
              questionTxt: ['', Validators.required],
              rightAnswer: ['', Validators.required],
              wrongAnswer1: ['', Validators.required],
              wrongAnswer2: ['', Validators.required],
              wrongAnswer3: ['', Validators.required],
            }));
        }
    } else {
        for (let i = this.q.length; i >= numberOfQuestions; i--) {
            this.q.removeAt(i);
        }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
        return;
    }

    //Falta construir o objecto e mandar para o servidor...

    // display form values on success
    alert('SUCCESS!! You have created a new quizze!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.q.clear();
  }

  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.q.reset();
  }

}
