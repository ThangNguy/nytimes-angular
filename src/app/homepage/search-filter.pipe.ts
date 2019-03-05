import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mySearch'
})

export class MySeachPipe implements PipeTransform {
    transform(value: any, ...args: any) {
        if(!value)return null;
        if(!args)return value;

        args = args.toString().toLowerCase();

        return value.filter(function(item){
            return JSON.stringify(item).toString().toLowerCase().includes(args);
        });
    }

}