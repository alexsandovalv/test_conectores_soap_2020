function guid() {
	
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  var headers=new Array();
  headers.MessageID=new Array();
  headers.MessageID.push(s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4());
    
  return headers;
}




function print_r(printthis, returnoutput) {
    ivr_log_ws="Imprimiendo log";
	var output = '';

    if(printthis.Class=='Array' || typeof(printthis) == 'object') {
    	ivr_log_ws+="Paso 1";
    	output += ' { ';
    	var coma = '';
        for(var i in printthis) {
        	output += coma;
            output += '\"' +  i + ' \" : ' + print_r(printthis[i], true);
            coma=', ';
        }
        output += '}'
    }else {
    	ivr_log_ws+="Paso else";
        output += '\"' + printthis + '\"';
    }
    ivr_log_ws+="Fin metodo "+output;
    return output;

}

function generarHeader() {
	 
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }

	  var headers=new Array();
	  headers.MessageID=new Array();
	  headers.MessageID.push(s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4());
	      
	  return headers;
	}

function headers(){
	
	var now = new Date();
	var pid 	  = getRandomId(smsHeaderValues.pid+"");
	var execId 	  = getRandomId(smsHeaderValues.execId);
	var msgId 	  = getRandomId(smsHeaderValues.msgId);
	var timestamp = converToLocalTime(now)
		
	var soap_headers = {'country':'AR',
						'lang':'es',
						'entity':'TEF',
						'system':'IVR',
						'subsystem':'IVR',
						'originator':'AR:TEF:IVR:IVR',
						'userId':'IVR',
						'operation':'sendSMSOperation',
						'destination':'AR:TEF:GDN:JUMP',
						'execId':execId,
						'timestamp':timestamp}

	

	return soap_headers;
	
}

function getRandomId(template) {
	
	var random  = parseInt(Math.random()*10000000) + "";
	var numberId = padL(random,12,'0') + "";
	
	return template +"-"+ numberId;
	
}

function padL(a,b,c){//string/number,length=2,char=0
	return (new Array(b||2).join(c||0)+a).slice(-b)
}

function converToLocalTime(serverDate) {

	var cadena = 	serverDate.getFullYear()+"-"+
					completeZero(serverDate.getMonth())+"-"+
					completeZero(serverDate.getDate())+"T"+
					completeZero(serverDate.getHours())+":"+
					completeZero(serverDate.getMinutes())+":"+
					completeZero(serverDate.getSeconds());
	
	var timezone = serverDate.getTimezoneOffset() / 60;
	
	var cadenaAux ="";
	
	if(timezone <10)
		cadenaAux = "-0"+timezone+":00";
	else
		cadenaAux = "-"+timezone+":00";
	
	cadena+=cadenaAux;
	
	return cadena;
}

function completeZero(number){
	
	var aux=number;
	
	if(number < 10)
		aux = "0"+number;
	
	return aux;
}

function completeZeroMillisecond(mil){
	
	var aux=mil;
	
	if(mil > 9 && mil <100){
		aux = "0"+mil;
	} 
	
	if (mil<10) {
		aux = "00"+mil;
	}
	
	return aux;
}

function getMsisdn(number, envio){
	var response = new Array();
	var callingNumber = "";
	
	try {
		if(parametrosGlobales[0].ivr_calling_number.length>0){
			callingNumber=parametrosGlobales[0].ivr_calling_number;
		}else{
			if(envio!=""){
				callingNumber=envio;
				stringDebug='envio '+callingNumber;
			}else{
				number = number.substring(4);
				response = number.split("@");
				if(response[0].indexOf(";")>-1){
					callingNumber = response[0].substring(0,response[0].indexOf(";"));
				}else if(response[0].indexOf(" ")>-1){
					callingNumber = response[0].substring(0,response[0].indexOf(" "));
				}else{
					callingNumber = response[0];
				}
			}	
		}
	}  catch(e) {
		var response = "Error";
		return response;
	}		 
	return callingNumber; 
}
function getCalledNumber(number){
	var response = new Array();
	try {
		number = number.substring(4);
		response = number.split("@");
	}  catch(e) {
		var response = "Error";
		return response;
	}		
	return response[0];
}
function getServerIP(url){
	var response = "";
	try {
		var array = new Array();
		array = url.split("/");
		response = array[2];
	} catch(e) {
		var response = "Error";
		return response;
	} 
	return response;
}
function getSessionId(url){
	var response = "";
	try {
		var array = new Array();
		array = url.split("/");
		response = array[3].substring(13);
	} catch(e) {
		var response = "Error";
		return response;
	} 
	return response;
}
function isMaxFailedAttempts(mCounter1,mCounter2){
	var counter=mCounter1+mCounter2;		
	if(counter>=ivr_numero_intentos){
		return true;
	}		
	return false;
}
function validarNumeroSponsorear(seleccion){
	if(seleccion.length==10){
		if(seleccion.substring(0,2)=='15' || seleccion.substring(0,1)=='0' ){
			return false;
		}else{
			return true;
		}
	}
	return false;
}
