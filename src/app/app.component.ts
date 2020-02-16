import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assess';
  optionSetA: any = [
    {name: 'Pathetic', value: -1},
    {name: 'Bad', value: -0.5},
    {name: 'Neutral', value: 0},
    {name: 'Good', value: 0.5},
    {name: 'Excellent', value: 1}];

  optionSetB: any = [
    {name: 'Never', value: -1},
    {name: 'Not-using', value: -0.5},
    {name: 'Neutral', value: 0},
    {name: 'Using', value: 0.5},
    {name: 'Highly-using', value: 1}];

  optionSetC: any = [
    {name: 'Never', value: -1},
    {name: 'Not-using', value: -0.5},
    {name: 'Neutral', value: 0},
    {name: 'Using', value: 0.5},
    {name: 'Highly-using', value: 1}];

  optionSetD: any = [
    {name: 'Frequent', value: -1},
    {name: 'Always', value: -0.5},
    {name: 'Neutral', value: 0},
    {name: 'Random', value: 0.5},
    {name: 'Never', value: 1}];

  weights: number[] =
    [7.90, 6.66, 6.24, 5.89, 5.50,
      5.44, 5.04, 4.97, 4.77, 4.68,
      3.33, 3.22, 2.52, 1.12, 1.07,
      1.06, 1.05, 1.01, 0.99, 5.58,
      5.47, 5.36, 4.34, 3.47, 3.22];

  productivityString = '_ _%';
  assessForm: FormGroup;

  constructor(public fb: FormBuilder) {
  }


  ngOnInit() {
    this.assessForm = this.fb.group({
      equipSuitable: 0,
      toolSatisfication: 0,
      breakdown: 0,
      materialQuality: 0,
      materialAvailabilty: 0,
      commWithLabours: 0,
      leadership: 0,
      crewSize: 0,
      periodicMeeting: 0,
      supervisoryCompetence: 0,
      skillLabour: 0,
      labourXp: 0,
      overtime: 0,
      opportunityChallengingTasks: 0,
      wages: 0,
      accommodation: 0,
      love: 0,
      law: 0,
      bonus: 0,
      technology: 0,
      constructionMethod: 0,
      techKnowledgeStaff: 0,
      incompleteDrawing: 0,
      qualityControl: 0,
      rain: 0
    });

    this.onChanges();

  }


  onSubmit() {
    let productivity = 0;
    let sumMark = 0;
    let i = 0;

    Object.keys(this.assessForm.controls).forEach(key => {
      sumMark = sumMark + this.assessForm.controls[key].value * this.weights[i];
      i++;
    });
    productivity = 100 * (99.9 + sumMark) / 199.8;
    this.productivityString = productivity.toFixed(0) + '%';

  }

  onChanges(): void {
    this.assessForm.valueChanges.subscribe(val => {
      this.productivityString = '_ _%';
    });
  }
}
