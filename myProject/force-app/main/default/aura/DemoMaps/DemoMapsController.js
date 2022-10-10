({
    init: function (component, event, helper) {
       /* var varmapMarkers = [{
            
            location: {
                City: 'San Francisco',
                Country: 'USA',
                PostalCode: '94105',
                State: 'CA',
                Street: 'The Landmark @ One Market, Suite 300'
                
            },
            title:'Test Name',
            Description:'Most visited place',
            icon:'Standard:account'
        }]*/
        
        helper.callApex(component,event,helper);
    }
});