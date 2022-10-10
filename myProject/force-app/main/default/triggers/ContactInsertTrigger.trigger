trigger ContactInsertTrigger on Contact (after insert) {
    if(trigger.isAfter==true && trigger.isInsert==true){
           ContactInsertTriggerHandler.methodToupdateContactId(trigger.new);
    }
}