
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_SvaService(headers) {
	
		if (headers == null) {
			return '';
		}
		
		var headerNames = '';
		var headerValues = '';
		
		for (var name in headers) {
			if (headerNames == '') {
				headerNames=name;
				headerValues=headers[name];
			}
			else {
				headerNames+= ',' + name;
				headerValues+= ',' + headers[name];
			}		
		}
		
		if (headerNames == '') {
			return '';
		}
		
		return  Ptf_DIM + 'header.names=' + encodeURIComponent(headerNames) + Ptf_DIM + 'header.values=' + encodeURIComponent(headerValues);		
	}
	
	function base64Encode(str) {
    var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out = "", i = 0, len = str.length, c1, c2, c3;
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += CHARS.charAt(c1 >> 2);
            out += CHARS.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += CHARS.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += CHARS.charAt(c1 >> 2);
        out += CHARS.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += CHARS.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += CHARS.charAt(c3 & 0x3F);
    }
    return out;
	}	
	function addService_SvaService(addService_channel,addService_msisdn,addService_destination,addService_message,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = SvaService.AS_URL + '?' + "_service=" + SvaService.service + Ptf_DIM + "_application=" + SvaService.application + Ptf_DIM + "_operation=" + "addService"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "addService.channel=" + encodeURIComponent(addService_channel) + Ptf_DIM + "addService.msisdn=" + encodeURIComponent(addService_msisdn) + Ptf_DIM + "addService.destination=" + encodeURIComponent(addService_destination) + buildHeaders_SvaService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(addService_message != null){
lRequest = lRequest + Ptf_DIM + "addService.message="+encodeURIComponent(addService_message);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}

			return lRequest;
			}
	
	
		function findAllServiceGrouped_SvaService(findAllServiceGrouped_channel,findAllServiceGrouped_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = SvaService.AS_URL + '?' + "_service=" + SvaService.service + Ptf_DIM + "_application=" + SvaService.application + Ptf_DIM + "_operation=" + "findAllServiceGrouped"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "findAllServiceGrouped.channel=" + encodeURIComponent(findAllServiceGrouped_channel) + Ptf_DIM + "findAllServiceGrouped.msisdn=" + encodeURIComponent(findAllServiceGrouped_msisdn) + buildHeaders_SvaService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);

			
			if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			
			return lRequest;
			}
		function findAllService_SvaService(findAllService_channel,findAllService_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = SvaService.AS_URL + '?' + "_service=" + SvaService.service + Ptf_DIM + "_application=" + SvaService.application + Ptf_DIM + "_operation=" + "findAllService"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "findAllService.channel=" + encodeURIComponent(findAllService_channel) + Ptf_DIM + "findAllService.msisdn=" + encodeURIComponent(findAllService_msisdn) + buildHeaders_SvaService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}

			return lRequest;
			}
		