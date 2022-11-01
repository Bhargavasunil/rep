import { LightningElement,track} from 'lwc';

export default class LoggedInuserInfo extends LightningElement {
    name='salesforce troop';
    address = new Object();
    @track address={
        city:'Hyderabad',
        PostCode:500038,
        Country:'India',
    }
    trackHandler(event){
        this.address.city=event.target.value;
    }
}