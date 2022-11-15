import { LightningElement, track } from 'lwc';

export default class DemoApp extends LightningElement {

    submitHandler() {
      let  fvalue = this.template.querySelector('.fname');
      let first=fvalue.value;
      if(!first){
        fvalue.setCustomValidity('Please provide firstname');
    
       }
       else{
        fvalue.setCustomValidity('');

       }
       fvalue.reportValidity();
    }
}