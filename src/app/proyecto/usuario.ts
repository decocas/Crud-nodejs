import { Observacion } from './crud/observacion';

export class Usuario {

    constructor(name='' , salary = 0, status='',first='',seoncond=0){
this.name=name;
this.salary=salary;
this.status=status;
 this.observacions=[new  Observacion (first,seoncond)];
    }
    name: string;
    salary: number;
    status: string;
    observacions:Observacion[];
}
