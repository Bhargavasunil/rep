import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
export default class AsyncExample extends LightningElement {
    accountName;
    isLoading;
    async handleCreate(){
        //make a query of input elements 
        const queryInput = this.template.querySelector('lightning-input');
        console.log(`queryInput is ${queryInput}`);
        //apply validations
        const allValid = this.checkFieldsValidity(queryInput);
        if(allValid){
              this.isLoading=true;
              const fields={};
              fields[ACCOUNT_NAME_FIELD.fieldApiName]=this.accountName;
              const accountInput = {apiName:ACCOUNT_OBJECT.ObjectApiName,fields}
              try{
                const createRecordResult = await createRecord(accountInput); 
                console.log('account created with id: ', createRecordResult.id);
              } 
              catch(error){
                   console.log('error'+error);
              }
              this.isLoading=false;
        }
    }
    checkFieldsValidity(fields){                                               //validation function
      const allValid = [...fields].reduce(function(validSoFar,field){
            return validSoFar && field.reportValidity();
      },true);
      return allValid;
  }
    handleChange(event){
      if(event.target.name === "accountName"){
        this.accountName = event.target.value;
    }
    }
}