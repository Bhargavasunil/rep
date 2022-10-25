import { LightningElement,api,track, wire } from 'lwc';
export default class MyFirstPro extends LightningElement {
    varMyvalue = 'Gupta';
    blogName = 'salesforceKid';
    onchange(event){
           this.varMyvalue=event.target.value;
    }
    
    get blogname(){
        const completeName = `${this.varMyvalue}${this.blogName}`
        return completeName.trim().toLowerCase();
    } 
}
