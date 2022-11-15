public with sharing class NewsController {
    @AuraEnabled
   public static map<String,Object> retrieveNews(){
        HttpRequest httpRequest = new HttpRequest();
        httpRequest.setEndpoint('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fb79678a5184881aac99e13c8bfec2f');
        httpRequest.setMethod('GET');
        map<String,Object> newsJsonData = new map<String,Object>();
        String strResponse;
        
            Http http = new Http();
            HttpResponse httpResponse = http.send(httpRequest);
            if(httpResponse.getStatusCode() == 200){
                strResponse = httpResponse.getBody();
            } else {
                throw new CalloutException(httpResponse.getBody());
            }
    
        if(!String.isBlank(strResponse)){
            newsJsonData= (Map<String,Object>)Json.deserializeUntyped(strResponse);
        }
        if(!newsJsonData.isEmpty()){
            return newsJsonData;
        }
        else{
            return null;
        }
    }
}
