import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OperationService } from 'src/app/service/operation.service';

@Component({
    selector: 'app-component-one',
    templateUrl: './component-one.component.html',
    styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent implements OnInit {
    firstForm: FormGroup;
colOneRowOne:any;
// colOneRowOne:any;
// colOneRowOne:any;
// colOneRowOne:any;
// colOneRowOne:any;
// colOneRowOne:any;

    constructor(
        private formBuilder: FormBuilder,
        private service: OperationService
    ) { }

    ngOnInit(): void {
        this.firstForm = this.formBuilder.group({
            // field1: [''],
            field2: [''],
            field3: [''],
            field1: this.formBuilder.array([])
        });
        this.getAllPermutation();
        this.perm([1, 2, 3]);
        this.permutation([2, 5]);
        this.permutation([1, 2, 3]);
    }

    onSubmit() {
        console.log("this.firstForm.value", this.firstForm.value);

        // this.service.addPermutation(this.firstForm.value).subscribe((res: any) => {
        //     console.log('res::', res);
        // });
    }

    getAllPermutation() {
        this.service.getPermutation().subscribe((res: any) => {
            console.log('res', res);
        });
    }
    perm(xs) {
        let ret = [];

        for (let i = 0; i < xs.length; i = i + 1) {
            let rest = this.perm(xs.slice(0, i).concat(xs.slice(i + 1)));

            if (!rest.length) {
                ret.push([xs[i]]);
            } else {
                for (let j = 0; j < rest.length; j = j + 1) {
                    ret.push([xs[i]].concat(rest[j]));
                }
            }
        }
        // console.log(this.perm([1,2,3]).join("\n"));
        console.log('ret', ret);

        return ret;
    }
    permutation(array) {
        function p(array, temp) {
            var i, x;
            if (!array.length) {
                result.push(temp);
            }
            for (i = 0; i < array.length; i++) {
                x = array.splice(i, 1)[0];
                p(array, temp.concat(x));
                array.splice(i, 0, x);
            }
        }

        var result = [];
        p(array, []);
        console.log("result:::", result);

        return result;
    }
}
