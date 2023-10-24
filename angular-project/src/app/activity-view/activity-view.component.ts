import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.scss']
})
export class ActivityViewComponent {
  activity : any;
  constructor(private activities : ActivityService) {}
  
  ngOnInit() {
    this.getActivities();
  }
  getActivities() : void {
    this.activities.getActivities();
    console.log("ey");

  }
}
