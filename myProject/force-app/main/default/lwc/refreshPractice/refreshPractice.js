import { LightningElement, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getAccount from '@salesforce/apex/AccountData.getAccount';
export default class RefreshPractice extends LightningElement {
    //creating an array to store the recived data from wire
    fetchedData = [];
    toDisplayOptions=[];
    varResponse;
    @wire(getAccount)
    accountfetch(response){
        let data =response.data;
        let error=response.error;
        this.varResponse=response;
        if(data){
            console.log('data');
            console.log(data);
            data.forEach(acc=>{
                this.fetchedData.push({
                    recordId:acc.Id,
                    name:acc.Name,
                    Industry:acc.Industry,
                    Phone:acc.Phone,
                });
                for(let i=0; i<data.length; i++) {
                    console.log('id=' + data[i].Id);
                    this.toDisplayOptions=[...this.toDisplayOptions,{value: data[i].Id , label: data[i].Name}]
                }     
            });
            console.log(`this.fetchedData ${this.fetchedData}`);
        }
        else{
            console.log('error');
            console.log(error);
        }
    }
    //creating a function to refresh
    refreshApexClass(){
        refreshApex(this.response);
    }
}