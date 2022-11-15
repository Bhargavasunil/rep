import { LightningElement, track } from 'lwc';
import retrieveNews from "@salesforce/apex/NewsController.retrieveNews";
export default class NewsComponent extends LightningElement {
    @track result = []
    @track selectedNews={};
    @track isModalOpen = false;
    @track modalBackdropClass='slds-backdrop';
    get modalClass(){
        return `slds-modal ${this.isModalOpen ? "slds-fade-in-open" :""}`
    }
    connectedCallback(){
        this.fetchNews();
    }
    fetchNews(){
        retrieveNews().then(response=>{
            console.log(response);
            this.formatNewsData(response.articles)
        }).catch(error=>{
            console.error(error);
        })
    }
    formatNewsData(res){
        this.result = res.map((item, index)=>{
            let id = `new_${index+1}`;
            let date = new Date(item.publishedAt).toDateString()
            let name = item.source.name;
            return { ...item, id: id, name: name, date: date}
        })

    }
    showModal(event){
        let id = event.target.dataset.item;
        this.result.forEach(item=>{
            if(item.id === id){
                this.selectedNews ={...item}
            }
        })
        this.isModalOpen = true;
    }
    closeModal(){
        this.isModalOpen = false;
    }
}