import { LightningElement } from 'lwc';

export default class GettersAndsetter extends LightningElement {
    name='cat';
    originalAge=1;
    newAge=0;
    get age(){
        return this.originalAge;
    }
    updateAge(event){
        this.newAge=event.target.value;
        console.log(this.newAge)
    }
    updateOriginalAge(event){
         this.originalAge = this.newAge;
    }
}