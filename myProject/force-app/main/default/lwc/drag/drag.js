import { LightningElement,track } from 'lwc';

export default class Drag extends LightningElement {

    //variable to store the button click is true or not 
    @track check= false;  
    showMoreInfo1(){
        this.check = false;
        if(this.check==false){
            this.template.querySelector('.data-1').innerText = 'The purpose of the app is to  display latest news articles and';
    }
        
    }
    showMoreInfo2(){
        this.check = true;
        if(this.check == true){
            this.template.querySelector('.data-1').innerText = 'User can browse news articles and videos through various categories.App will enable user to view news details, images, and video .Users can also bookmark any news article/video for future use.';
            
        }
        
    }
}