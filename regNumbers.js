var Bellville = function (numberPlate){
 var isFromBellville = numberPlate.startsWith("CY");
 return isFromBellville;
}

var Paarl = function (numberPlate){
 var isFromPaarl = numberPlate.startsWith("CJ");
 return isFromPaarl;
}

var CapeTown = function (numberPlate){
 var isFromCapeTown = numberPlate.startsWith("CA");
   return isFromCapeTown;
   //return parameters
}

var Gauteng = function (numberPlate){
 var isFromGauteng = numberPlate.endsWith("GP");
 return isFromGauteng;
   //return parameters
}

var Limpopo = function (numberPlate){
 var isFromLimpopo = numberPlate.endsWith("L");
return isFromLimpopo;
   //return parameters
}

console.log("The following number plates is "+Bellville('CJ 98912'));
console.log("The following number plates is "+Paarl('CJ 98912'));
console.log("The following number plates is "+CapeTown('CA 98912'));
console.log("The following number plates is "+Limpopo('DR T122 L'));
console.log("The following number plates is "+Gauteng('DR 12 TY GP'));
