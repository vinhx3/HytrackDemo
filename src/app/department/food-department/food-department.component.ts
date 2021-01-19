import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-department',
  templateUrl: './food-department.component.html',
  styleUrls: ['./food-department.component.scss']
})
export class FoodDepartmentComponent implements OnInit {

  constructor(
    /*private router: Router*/

  ) {
    
   }

  ngOnInit(): void {
  }

  onSubmit() {
    
     /* this.router.navigate(['/department']);*/
    
  }

}
