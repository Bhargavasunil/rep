import { LightningElement } from 'lwc';

export default class LoginPage extends LightningElement {
    
    submitHandler(){
        enteredValue = this.template.querySelector('.enter');
        value = enteredValue.value;
        if(!value){
            enteredValue.setCustomValidity("Username is required");
        }
        else{
            enteredValue.setCustomValidity("");
        }
        enteredValue.reportValidity();
    }
}