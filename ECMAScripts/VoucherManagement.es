
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_VoucherManagement(headers) {
	
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
function voucherCardAccount_VoucherManagement(voucherCardAccount_actionCommonInfo_appInfo_appId,voucherCardAccount_actionCommonInfo_appInfo_reference,voucherCardAccount_actionCommonInfo_appInfo_extension_any,voucherCardAccount_actionCommonInfo_appInfo_extension_anyAttributeParam,voucherCardAccount_actionCommonInfo_userCode,voucherCardAccount_actionCommonInfo_opCost,voucherCardAccount_actionCommonInfo_opCost_exponent,voucherCardAccount_actionCommonInfo_currencyCode,voucherCardAccount_actionCommonInfo_extension_any,voucherCardAccount_actionCommonInfo_extension_anyAttributeParam,voucherCardAccount_subscriberId_choice,voucherCardAccount_topUpKey,voucherCardAccount_extension_any,voucherCardAccount_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = VoucherManagement.AS_URL + '?' + "_service=" + VoucherManagement.service + Ptf_DIM + "_application=" + VoucherManagement.application + Ptf_DIM + "_operation=" + "voucherCardAccount"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "voucherCardAccount.subscriberId.choice=" + encodeURIComponent(voucherCardAccount_subscriberId_choice) + Ptf_DIM + "voucherCardAccount.actionCommonInfo.appInfo.appId=" + encodeURIComponent(voucherCardAccount_actionCommonInfo_appInfo_appId) + Ptf_DIM + "voucherCardAccount.actionCommonInfo.appInfo.reference=" + encodeURIComponent(voucherCardAccount_actionCommonInfo_appInfo_reference) + Ptf_DIM + "voucherCardAccount.actionCommonInfo.userCode=" + encodeURIComponent(voucherCardAccount_actionCommonInfo_userCode) + Ptf_DIM + "voucherCardAccount.topUpKey=" + encodeURIComponent(voucherCardAccount_topUpKey) + buildHeaders_VoucherManagement(headers);
if(voucherCardAccount_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(voucherCardAccount_actionCommonInfo_appInfo_extension_any);
}
if(voucherCardAccount_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(voucherCardAccount_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(voucherCardAccount_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.actionCommonInfo.opCost="+encodeURIComponent(voucherCardAccount_actionCommonInfo_opCost);
}
if(voucherCardAccount_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.actionCommonInfo.opCost.@exponent="+encodeURIComponent(voucherCardAccount_actionCommonInfo_opCost_exponent);
}
if(voucherCardAccount_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.actionCommonInfo.currencyCode="+encodeURIComponent(voucherCardAccount_actionCommonInfo_currencyCode);
}
if(voucherCardAccount_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.actionCommonInfo.extension.any="+encodeURIComponent(voucherCardAccount_actionCommonInfo_extension_any);
}
if(voucherCardAccount_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(voucherCardAccount_actionCommonInfo_extension_anyAttributeParam);
}
if(voucherCardAccount_extension_any != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.extension.any="+encodeURIComponent(voucherCardAccount_extension_any);
}
if(voucherCardAccount_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "voucherCardAccount.extension.@anyAttributeParam="+encodeURIComponent(voucherCardAccount_extension_anyAttributeParam);
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

