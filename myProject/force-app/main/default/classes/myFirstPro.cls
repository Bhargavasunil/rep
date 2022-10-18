public with sharing class myFirstPro {
   @auraEnabled(cacheable==true)
   public static map<string,integer> mapDemo(){
       map<string,Integer> testMap = new map<>(string,Integer);
       testMap.put('Amit singh',1);
       testMap.put('Manish Choudry',2);
       testMap.put('Jiternder',3)
       return testMap;
   }
}
