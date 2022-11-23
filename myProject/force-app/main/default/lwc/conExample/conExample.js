import { LightningElement,track } from 'lwc';
import getAccount from '@salesforce/apex/AccountData.getAccount';
import refreshApex from '@salesforce/apex';
export default class ConExample extends LightningElement {
    @track dataFromApex=[];
    @track error;
    @track inputValue;
    @track filteredData=[];
    @track options=[];
    @track displayRec=[];
    @track _selected;
   
    connectedCallback(){
        getAccount().then(result=>{
            this.dataFromApex = result;
            console.log(`this.dataFromApex is ${this.dataFromApex}`);
        }).catch(error=>{
            this.error=error;
        })
    }
    changeHandler(e){
          this.inputValue = e.target.value;
    }
    submitHandler(){
        this.filteredData = this.dataFromApex.filter(item=>{
             return item.AnnualRevenue >= this.inputValue;
        })
        console.log(`this.filteredData is ${this.filteredData}`);
        let optionsVar = [];
        this.filteredData.forEach(element => {
                    optionsVar.push({value:element.Id,label:element.Name})
                   });
                   this.options=optionsVar;
                   console.log(`options are ${this.options}`)
    }
    handleChange(event){
        this._selected = event.detail.value;
    }
    disconnectedCallback(){
            refreshApex( this.dataFromApex);
    }
}