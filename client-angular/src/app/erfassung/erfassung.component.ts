import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../_model/task/item';
import { Order } from '../_model/task/order';
import { TaskContainer } from '../_model/task/taskContainer';
import { TaskService } from '../_service/task/task.service';

@Component({
  selector: 'app-erfassung',
  templateUrl: './erfassung.component.html',
  styleUrls: ['./erfassung.component.css']
})
export class ErfassungComponent implements OnInit {

  //itemList: Array<Item> = [{ id: 123, productName: "item productName", productNumber: 123 }];
  //order: Order = { description: "order description", customerId: 123, id: 123, decision: "yes", itemList: this.itemList }

  //https://stackoverflow.com/questions/59249154/angular-create-dynamic-reactive-form-after-async-call-asyncpipe

  loaded: boolean = false;

  orderFormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private taskService: TaskService) {

    const id = route.snapshot.paramMap.get('id');
    taskService.getTask(id || '').subscribe(taskContainer => {

      console.log(taskContainer);

      this.orderFormGroup = this.fb.group({
        id: [taskContainer.order.id],
        description: [taskContainer.order.description],
        customerId: [taskContainer.order.customerId],
        decision: [taskContainer.order.decision],
        itemList: this.fb.array(
            taskContainer.order.itemList.map(item => this.fb.group({
              id: item.id, 
              productName: item.productName,
              productNumber: item.productNumber }))
      )});

      console.log(this.orderFormGroup);

      this.loaded = true;

    



      //this.orderFormGroup.setValue(taskContainer.order);
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

    console.log(button);
    console.log(this.orderFormGroup.value);
  }
}
