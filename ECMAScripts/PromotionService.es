
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_PromotionService(headers) {
	
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
function doPromotion_PromotionService(doPromotion_channel,doPromotion_msisdn,doPromotion_promotionId,doPromotionByShortCodeAndKeyword_channel,doPromotionByShortCodeAndKeyword_msisdn,doPromotionByShortCodeAndKeyword_shortCode,doPromotionByShortCodeAndKeyword_keyword,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = PromotionService.AS_URL + '?' + "_service=" + PromotionService.service + Ptf_DIM + "_application=" + PromotionService.application + Ptf_DIM + "_operation=" + "doPromotion"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "doPromotion.channel=" + encodeURIComponent(doPromotion_channel) + Ptf_DIM + "doPromotion.msisdn=" + encodeURIComponent(doPromotion_msisdn) + Ptf_DIM + "doPromotion.promotionId=" + encodeURIComponent(doPromotion_promotionId) + Ptf_DIM + "doPromotionByShortCodeAndKeyword.channel=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_channel) + Ptf_DIM + "doPromotionByShortCodeAndKeyword.msisdn=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_msisdn) + Ptf_DIM + "doPromotionByShortCodeAndKeyword.shortCode=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_shortCode) + Ptf_DIM + "doPromotionByShortCodeAndKeyword.keyword=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_keyword) + buildHeaders_PromotionService(headers);
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

function doPromotionByShortCodeAndKeyword_PromotionService(doPromotionByShortCodeAndKeyword_channel,doPromotionByShortCodeAndKeyword_msisdn,doPromotionByShortCodeAndKeyword_shortCode,doPromotionByShortCodeAndKeyword_keyword,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = PromotionService.AS_URL + '?' + "_service=" + PromotionService.service + Ptf_DIM + "_application=" + PromotionService.application + Ptf_DIM + "_operation=" + "doPromotionByShortCodeAndKeyword"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "doPromotionByShortCodeAndKeyword.channel=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_channel) + Ptf_DIM + "doPromotionByShortCodeAndKeyword.msisdn=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_msisdn) + Ptf_DIM + "doPromotionByShortCodeAndKeyword.shortCode=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_shortCode) + Ptf_DIM + "doPromotionByShortCodeAndKeyword.keyword=" + encodeURIComponent(doPromotionByShortCodeAndKeyword_keyword) + buildHeaders_PromotionService(headers);
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

