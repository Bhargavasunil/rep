public with sharing class AccountData { //By using with sharing Record-level security is applied
    @auraEnabled(cacheable=true)
    public static list<Account> getAccount(){
        List<Account> accData = new List<Account>();
        accData=[Select Id,Name,AnnualRevenue,Industry from Account WITH SECURITY_ENFORCED];  //by writing SECURITY_ENFORCED Object, field level security is applied.
        return accData;
    }
}