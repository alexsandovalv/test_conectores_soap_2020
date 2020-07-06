
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_AccountManagement(headers) {
	
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
		headerNames='value';
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

		function querySubscriberBasics_AccountManagement(querySubscriberBasics_queryCommonInfo_currencyCode,querySubscriberBasics_queryCommonInfo_pagingInfo_token,querySubscriberBasics_queryCommonInfo_pagingInfo_numRegs,querySubscriberBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam,querySubscriberBasics_queryCommonInfo_pagingInfo_extension_any,querySubscriberBasics_queryCommonInfo_extension_anyAttributeParam,querySubscriberBasics_queryCommonInfo_extension_any,querySubscriberBasics_subscriberId_choice,querySubscriberBasics_extension_anyAttributeParam,querySubscriberBasics_extension_any,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "querySubscriberBasics"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_AccountManagement(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(querySubscriberBasics_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.currencyCode="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_currencyCode);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.token="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_token);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_numRegs);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_any);
}
if(querySubscriberBasics_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_extension_anyAttributeParam);
}
if(querySubscriberBasics_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.extension.any="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_extension_any);
}
if(querySubscriberBasics_subscriberId_choice != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.subscriberId.choice="+encodeURIComponent(querySubscriberBasics_subscriberId_choice);
}
if(querySubscriberBasics_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberBasics_extension_anyAttributeParam);
}
if(querySubscriberBasics_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.extension.any="+encodeURIComponent(querySubscriberBasics_extension_any);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}			ivr_log_ws=lRequest;
			return lRequest;
			}