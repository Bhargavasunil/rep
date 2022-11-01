import { LightningElement } from 'lwc';

export default class Example_5 extends LightningElement {
    fullName="";
    email="";
    mobile="";
    handler(event){
        const field=event.target.value;
        if(field==='fullName'){
            this.fullName=event.target.value;
        }
        else if(field==='email'){
            this.email=event.target.value;
        }
        else if(field==='mobile'){
             this.mobile=event.target.value;
        }
    }

    get upperCase(){
        //getter must return something
        return `${this.fullName}`.toUpperCase();
    }
}