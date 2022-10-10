public class DemoMapsController {
 @auraEnabled
    public static List<Account> fetchAccountData(){
        List<Account> accList = new List<Account>();
        accList=[SELECT Id,Name,ShippingStreet, ShippingCity, ShippingState, ShippingPostalCode, ShippingCountry, Description 
                 FROM Account
                 WHERE ShippingStreet != NULL AND ShippingCity!=NULL  AND ShippingState != NULL AND ShippingPostalCode!=NULL AND 
                 ShippingCountry!= NULL];
        system.debug(accList);
        return accList;
    }
}