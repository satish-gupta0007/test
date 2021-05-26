import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OperationService } from 'src/app/service/operation.service';
import * as _ from "lodash";

@Component({
    selector: 'app-component-two',
    templateUrl: './component-two.component.html',
    styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
    firstForm: FormGroup;
    fibonnaciList: any = [];
    constructor(private service: OperationService, private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.firstForm = this.formBuilder.group({
            field: ['']
        });
        this.getFibonnaci();
    }
    onAdd() {
        if (!!this.firstForm.value.field) {
            this.service.addFibonacci(this.firstForm.value).subscribe((res: any) => {
                if (!!res) {
                    alert(res.message);
                    this.getFibonnaci();

                }

            })

        }
        else {
            alert("Please Enter Value");
            return
        }

    }
    getFibonnaci() {
        this.service.getFibonacci().subscribe((data: any) => {
            console.log("data", data.data);
            if (data.data.length > 0) {
                this.fibonnaciList = data.data;
                _.forEach(this.fibonnaciList, (value) => {
                    let convertedToFibbonaci = this.getNthFib(value.field)
                    value.fibonnaci = convertedToFibbonaci
                    this.firstForm.reset();

                })
            }
        })
    }
    getNthFib(n) {
        const fib = [0, 1];
        function getFib(n) {
            const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
            if (n > nextFib) {
                fib.push(nextFib);
                getFib(n);
            }
        }
        getFib(n);
        return fib;
    }
}
