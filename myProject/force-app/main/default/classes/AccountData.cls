public with sharing class AccountData { //By using with sharing Record-level security is applied
    @auraEnabled(cacheable=true)
    public static list<Account> getData(){
        List<Account> accData = new List<Account>();
        accData=[Select Name,LastModifiedBy.Name from Account WITH SECURITY_ENFORCED];  //by writing SECURITY_ENFORCED Object, field level security is applied.
        return accData;
    }
    @AuraEnabled
    public static List<Account> userQuery(){
       list<Account> accList = [Select Id,Name,LastModifiedBy.Id,CreatedBy.Name from Account WITH SECURITY_ENFORCED];
       return accList;
    }
    @auraEnabled(cacheable=true)
    public static list<Account> getAccount(){
        List<Account> accData = new List<Account>();
        accData=[Select Id,Name,AnnualRevenue,Industry from Account WITH SECURITY_ENFORCED];  //by writing SECURITY_ENFORCED Object, field level security is applied.
        return accData;
    }
}