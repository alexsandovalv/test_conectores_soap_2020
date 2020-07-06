
	var request="SOAP";
	var Ptf_DIM = '&';
	var url='';
		function buildHeaders_BalanceCobroManagementService(headers) {
	
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
	function queryBalance_BalanceCobroManagementService(queryBalance_channel,queryBalance_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = BalanceCobroManagementService.AS_URL + '?' + "_service=" + BalanceCobroManagementService.service + Ptf_DIM + "_application=" + BalanceCobroManagementService.application + Ptf_DIM + "_operation=" + "queryBalance"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "queryBalance.channel=" + encodeURIComponent(queryBalance_channel) + Ptf_DIM + "queryBalance.msisdn=" + encodeURIComponent(queryBalance_msisdn) + buildHeaders_BalanceCobroManagementService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function getBalanceManagementByMsisdn_BalanceCobroManagementService(getBalanceManagementByMsisdn_channel,getBalanceManagementByMsisdn_msisdn,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = BalanceCobroManagementService.AS_URL + '?' + "_service=" + BalanceCobroManagementService.service + Ptf_DIM + "_application=" + BalanceCobroManagementService.application + Ptf_DIM + "_operation=" + "getBalanceManagementByMsisdn"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "getBalanceManagementByMsisdn.channel=" + encodeURIComponent(getBalanceManagementByMsisdn_channel) + Ptf_DIM + "getBalanceManagementByMsisdn.msisdn=" + encodeURIComponent(getBalanceManagementByMsisdn_msisdn) + buildHeaders_BalanceCobroManagementService(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			url=lRequest;
			return lRequest;
			}
		