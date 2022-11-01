import { LightningElement } from 'lwc';

export default class Sample extends LightningElement {
     data=[
        {
            id:'data1',
            name:'Mohit',
        },
        {
            id:'data2',
            name:'Harish',
        },
        {
            id:'data3',
            name:'praveen',
        },
        {
            id:'data3',
            name:'praveen',
        }
         
    ]
    
    clikHandler(){
        let varInput=this.template.querySelector('.name');
       console.log(varInput.innerText)
       }
    }
