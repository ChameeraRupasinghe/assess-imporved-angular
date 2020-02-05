import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assess-improved';
  optionSetA: any = ['Pathetic', 'Bad', 'Neutral', 'Good', 'Excellent'];
  optionSetB: any = ['Never', 'Using', 'Neutral', 'Highly-using'];
  optionSetC: any = ['Never', 'Not-using', 'Neutral', 'Using', 'Highly-using'];
  optionSetD: any = ['Frequent', 'Always', 'Neutral', 'Random', 'Never'];


  constructor(public fb: FormBuilder) {
  }

  assessForm = this.fb.group({
    equipSuitable: '',
    skillLabour: '',
    labourXp: '',
    technology: '',
    constructionMethod: '',
    techKnowledgeStaff: '',
    materialQuality: '',
    opportunityChallengingTasks: '',
    commWithLabours: '',
    toolShortage: '',
    materialDelay: '',
    wages: '',
    accommodation: '',
    love: '',
    qualityControl: '',
    leadership: '',
    breakdown: '',
    crewSize: '',
    law: '',
    overtime: '',
    bonus: '',
    periodicMeeting: '',
    supervisoryIncompetence: '',
    incompleteDrawing: ''
  });
}
