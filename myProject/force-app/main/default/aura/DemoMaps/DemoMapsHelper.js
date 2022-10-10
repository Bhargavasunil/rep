({
    callApex : function(cmp,event,helper) {
        var action = cmp.get('c.fetchAccountData');
        action.setCallback(this,function(response){
            var mapMarkers=[];
            var state = response.getState();
           var resultData =response.getReturnValue();
            if(state =='SUCCESS'){
                
                for(let i=0;i<resultData.length;i++){
                   mapMarkers.push(
				   {
                        location: {
                            Street: resultData[i].ShippingStreet,
                            City:resultData[i].ShippingCity ,
                            State: resultData[i].ShippingState,
                            PostalCode:resultData[i].ShippingPostalCode  ,
                            Country:resultData[i].ShippingCountry
                        },

                       title: resultData[i].Name,
                        description:resultData[i].Description,
                    }
					);
                    
                    cmp.set('v.mapMarkers',mapMarkers);
                   cmp.set('v.zoomLevel', 16);
                }
            }else{
                var errors = response.getError();
            }
        })
        $A.enqueueAction(action);

    }
})