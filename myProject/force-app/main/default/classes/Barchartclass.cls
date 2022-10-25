public class Barchartclass {
@AuraEnabled(cacheable=true)
        public static List<AggregateResult> getOpportunities(){
        list<AggregateResult> results;
       // if( Opportunity.SObjectType.getDescribe().isAccessible() &&
       // Schema.SObjectType.Opportunity.fields.Amount.isAccessible() &&
        //Schema.SObjectType.Opportunity.fields.ExpectedRevenue.isAccessible()){
        results=[SELECT SUM(ExpectedRevenue) expectRevenue, SUM(Amount) amount, StageName stage FROM Opportunity WHERE StageName NOT IN ('Closed Won') WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 20 ];
                   return results;
        }
}