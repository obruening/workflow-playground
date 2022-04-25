import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskContainer } from '../_model/task/taskContainer';
import { TaskService } from '../_service/task/task.service';

@Component({
  selector: 'app-erfassung',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

  //FIXME: https://stackoverflow.com/questions/59249154/angular-create-dynamic-reactive-form-after-async-call-asyncpipe

  loaded: boolean = false;
  taskContainer: TaskContainer | null = null;

  orderFormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private taskService: TaskService,
    private router: Router) {

    const id = this.route.snapshot.paramMap.get('id');
    taskService.getTask(id || '').subscribe(taskContainer => {

      this.taskContainer = taskContainer;

      const itemListFormArray: FormArray = this.fb.array(taskContainer.order.itemList.map(item => this.fb.group({
        id: [item.id],
        productName: [item.productName, Validators.required],
        productNumber: [item.productNumber, [Validators.required, Validators.min(0), Validators.max(99999)]]
      })), Validators.required);


      this.orderFormGroup = this.fb.group({
        id: [taskContainer.order.id],
        description: [taskContainer.order.description, Validators.required],
        customerId: [taskContainer.order.customerId, [Validators.required, Validators.min(0), Validators.max(99999)]],
        decision: [taskContainer.order.decision],
        itemList: itemListFormArray
      });

      this.loaded = true;
    })
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.itemListArray.push(this.createItemFormGroup());
  }

  deleteItem(index: number): void {
    this.itemListArray.removeAt(index);
  }

  get itemListArray() {
    return this.orderFormGroup.get('itemList') as FormArray;
  }

  get itemControlsArray(): FormGroup[] {
    return this.itemListArray.controls as FormGroup[];
  }

  createItemFormGroup(): FormGroup {

    return this.fb.group({
      id: [''],
      productName: [''],
      productNumber: ['']
    });
  }


  handleSubmit(button: string): void {

    if (!this.orderFormGroup.valid) {
      return;
    }

    const taskPayload = {
      id: this.taskContainer?.taskProjection.id || '-1',
      order: this.orderFormGroup.value
    };

    this.taskService.putTask(taskPayload).subscribe(data => console.log(data));

    this.router.navigate(['/success']);
  }

  get description() { return this.orderFormGroup.get('description'); }
  get customerId() { return this.orderFormGroup.get('customerId'); }
  get itemList() { return this.orderFormGroup.get('itemList'); }
  
}
