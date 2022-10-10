public class OpportunityNameList {
    public List<opportunity>oppList{get; set;}
    public void getOpportunityNames(){
        oppList = new List<opportunity>();
        
        oppList = [SELECT Id, Name, StageName, Amount FROM Opportunity];
      
        oppList.sort();
       
    }
}