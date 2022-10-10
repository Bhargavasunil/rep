/*****************************************************************************************************************************
 Author:
 Company:
 Description: 
 =============================================================================================================================
 =============================================================================================================================
Apex Class: OpportunityListController
Test Class :
Trigger used :
Test Data Factory Class : 
Code Coverage : 
 ==============================================================================================================================
 =============================================================================================================================
 History
 <Version>       <Date>                       <Author Name>                     <Brief description of change >
                              
 ************************************************************************************************************************/

Public class OpportunityListController {
     Public class OpportunityWrapper implements comparable {
        Public String oppName {get;set;}
        Public String oppStageName {get;set;}
        Public Decimal oppAmount {get;set;}
        Public opportunityWrapper (String oppName,String oppStageName,decimal oppAmount){
            This.oppName = oppName;
            This.oppStageName = oppStageName;
            This.oppAmount =oppAmount;
        }
        Public Integer compareTo (Object compareTo) {
            opportunityWrapper oppW = (opportunityWrapper)compareTo;
            Integer returnValue = 0;
            If (oppAmount > oppW.oppAmount) {
                returnValue = 1;
            } else if (oppAmount < oppW.oppAmount) {
                returnValue = -1;
            }
            Return returnValue; 
        }
    }
    Public List<opportunityWrapper> getOpportunityList () {
        List<opportunityWrapper> opportunityWrapList = new List<opportunityWrapper> ();
        For (opportunity opp: [select name,stageName,amount from opportunity]){
            opportunityWrapList.add (new OpportunityWrapper(opp.name,opp.stageName,opp.amount));
        }
        If (opportunityWrapList != null && opportunityWrapList.size () > 0) {
            opportunityWrapList.sort ();
        }
        Return opportunityWrapList;
    }
   //hehehua
}