import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/Barchartclass.getOpportunities';
import { getRelatedListInfo } from 'lightning/uiRelatedListApi';
export default class Gen_opportunitychart extends LightningElement {
chartConfiguration;
@wire(getOpportunities) varOpp;
varOpp({error,data}){
    if(error){
            this.error =error;
            this.chartConfiguration =undefined;
    }
    else if(data){
            let chartAmtData = [];
            let chartExpRevData = [];
            let chartLabel = [];
            data.forEach(opp => {
                chartAmtData.push(opp.Amount);
                chartExpRevData.push(opp.expectRevenue);
                chartLabel.push(stage);
            });
            this.chartConfiguration = {
                type:'bar',
                data:{
                    datasets :[{
                                label:'Amount',
                                backgroundColor:'green',
                                data:chartAmtData
                    },
                                {
                                label:'Expected Revenue',
                                backgroundColor:"orange",
                                data:chartExpRevData
                                },
                            ],
                                labels:chartLabel
                        
                },
                options: {},
            }
            console.log('Data=>',data);
            this.error =error;
    }
}
}