
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_sendSMSService(headers) {
	
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
function sendSMSOperation_sendSMSService(sendSMSOperationRequest_codeClient,sendSMSOperationRequest_addressTarget,sendSMSOperationRequest_addressSource,sendSMSOperationRequest_message,sendSMSOperationRequest_attribute_fromHourWindow,sendSMSOperationRequest_attribute_toHourWindow,sendSMSOperationRequest_attribute_validityPeriod,sendSMSOperationRequest_attribute_priorityFlag,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = sendSMSService.AS_URL + '?' + "_service=" + sendSMSService.service + Ptf_DIM + "_application=" + sendSMSService.application + Ptf_DIM + "_operation=" + "sendSMSOperation"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "sendSMSOperationRequest.addressTarget=" + encodeURIComponent(sendSMSOperationRequest_addressTarget) + Ptf_DIM + "sendSMSOperationRequest.addressSource=" + encodeURIComponent(sendSMSOperationRequest_addressSource) + Ptf_DIM + "sendSMSOperationRequest.message=" + encodeURIComponent(sendSMSOperationRequest_message) + buildHeaders_sendSMSService(headers);
if(sendSMSOperationRequest_codeClient != null){
lRequest = lRequest + Ptf_DIM + "sendSMSOperationRequest.codeClient="+encodeURIComponent(sendSMSOperationRequest_codeClient);
}
if(sendSMSOperationRequest_attribute_fromHourWindow != null){
lRequest = lRequest + Ptf_DIM + "sendSMSOperationRequest.attribute.fromHourWindow="+encodeURIComponent(sendSMSOperationRequest_attribute_fromHourWindow);
}
if(sendSMSOperationRequest_attribute_toHourWindow != null){
lRequest = lRequest + Ptf_DIM + "sendSMSOperationRequest.attribute.toHourWindow="+encodeURIComponent(sendSMSOperationRequest_attribute_toHourWindow);
}
if(sendSMSOperationRequest_attribute_validityPeriod != null){
lRequest = lRequest + Ptf_DIM + "sendSMSOperationRequest.attribute.validityPeriod="+encodeURIComponent(sendSMSOperationRequest_attribute_validityPeriod);
}
if(sendSMSOperationRequest_attribute_priorityFlag != null){
lRequest = lRequest + Ptf_DIM + "sendSMSOperationRequest.attribute.priorityFlag="+encodeURIComponent(sendSMSOperationRequest_attribute_priorityFlag);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
if(privateRequest != null){
lRequest = lRequest + Ptf_DIM + "private="+encodeURIComponent(base64Encode(privateRequest));
}else{
lRequest = lRequest + Ptf_DIM + "private="+encodeURIComponent(base64Encode("false"));
}
									return lRequest;
}

