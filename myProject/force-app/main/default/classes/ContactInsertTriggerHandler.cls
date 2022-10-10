public class ContactInsertTriggerHandler {
    public static void methodToupdateContactId(List<Contact> newListOfContacts){
        map<Id,list<string>> accMap =new  map<Id,list<string>>();
        for(contact varCon:newListOfContacts){
            //check if the AccountId already present in map
            if(accMap.containskey(varCon.AccountId)){
                accMap.get(varCon.AccountId).add(string.valueof(varCon.Id));
            } 
            else{
                //if not present create alist of strings and store accountid and contact id's in a accMap
                list<string> conIds = new list<string>();
                conIds.add(string.valueOf(varCon.Id));
                accMap.put(varCon.AccountId,conIds);
            }
        }
        //list to update account records
        List<Account> accUpds = new List<Account>();
        for(Account acc:[SELECT Id,Contact_Id_s__c from Account where Id IN:accMap.keySet()]){
            if(acc.Contact_Id_s__c!=null){
                 //if present append ',' at the end and add new contact id's
                 acc.Contact_Id_s__c+=',';
                 acc.Contact_Id_s__c+=string.join(accMap.get(acc.Id),',');
                 accUpds.add(acc);
            }
            else{
                //if custom field is null then directly append the list of stings by joining with ,
                acc.Contact_Id_s__c = string.join(accMap.get(acc.Id),',');
                accUpds.add(acc);
            }
        }
        if(!accUpds.isEmpty()){
             update accUpds;
        }
    }
}