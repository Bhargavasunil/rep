trigger PenDiscountTrigger on Parker_pen__c (before insert) {
            PenClassDemonstration.applyDiscountPen(Trigger.new);
}