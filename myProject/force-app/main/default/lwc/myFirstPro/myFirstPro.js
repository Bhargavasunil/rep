import { LightningElement,api,track, wire } from 'lwc';
export default class MyFirstPro extends LightningElement {
    varMyvalue = 'Gupta';
    onchange(event){
           this.varMyvalue=event.target.value;
    }
    
  
}
