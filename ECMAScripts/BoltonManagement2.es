
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_BoltonManagement(headers) {
	
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
	function subscribeBolton_BoltonManagement(subscribeBolton_actionCommonInfo_appInfo_appId,subscribeBolton_actionCommonInfo_appInfo_reference,subscribeBolton_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeBolton_actionCommonInfo_appInfo_extension_any,subscribeBolton_actionCommonInfo_userCode,subscribeBolton_actionCommonInfo_opCost,subscribeBolton_actionCommonInfo_opCost_exponent,subscribeBolton_actionCommonInfo_currencyCode,subscribeBolton_actionCommonInfo_extension_anyAttributeParam,subscribeBolton_actionCommonInfo_extension_any,subscribeBolton_subscriberId_choice,subscribeBolton_boltonInfo_boltonIdentifier_boltonCode,subscribeBolton_boltonInfo_boltonIdentifier_boltonTypeCode,subscribeBolton_boltonInfo_boltonIdentifier_boltonInstance,subscribeBolton_boltonInfo_boltonIdentifier_extension_anyAttributeParam,subscribeBolton_boltonInfo_boltonIdentifier_extension_any,subscribeBolton_boltonInfo_boltonAmount,subscribeBolton_boltonInfo_boltonAmount_exponent,subscribeBolton_boltonInfo_boltonLD,subscribeBolton_boltonInfo_boltonLD_exponent,subscribeBolton_boltonInfo_boltonMaxNumberOfSessions,subscribeBolton_boltonInfo_boltonCost,subscribeBolton_boltonInfo_boltonCost_exponent,subscribeBolton_boltonInfo_chargingModality,subscribeBolton_boltonInfo_timeInterval_startTime_choice,subscribeBolton_boltonInfo_timeInterval_endTime_choice,subscribeBolton_boltonInfo_timeInterval_extension_anyAttributeParam,subscribeBolton_boltonInfo_timeInterval_extension_any,subscribeBolton_boltonInfo_maxUnitsPerSession,subscribeBolton_boltonInfo_maxUnitsPerSession_exponent,subscribeBolton_boltonInfo_extension_anyAttributeParam,subscribeBolton_boltonInfo_extension_any,subscribeBolton_extension_anyAttributeParam,subscribeBolton_extension_any,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = BoltonManagement.AS_URL + '?' + "_service=" + BoltonManagement.service + Ptf_DIM + "_application=" + BoltonManagement.application + Ptf_DIM + "_operation=" + "subscribeBolton"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + buildHeaders_BoltonManagement(headers) + Ptf_DIM + "subscribeBolton.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeBolton_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeBolton.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeBolton_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeBolton.subscriberId.choice=" + encodeURIComponent(subscribeBolton_subscriberId_choice) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(subscribeBolton_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeBolton_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeBolton_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeBolton_actionCommonInfo_appInfo_extension_any);
}
if(subscribeBolton_actionCommonInfo_userCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.userCode="+encodeURIComponent(subscribeBolton_actionCommonInfo_userCode);
}
if(subscribeBolton_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.opCost="+encodeURIComponent(subscribeBolton_actionCommonInfo_opCost);
}
if(subscribeBolton_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeBolton_actionCommonInfo_opCost_exponent);
}
if(subscribeBolton_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeBolton_actionCommonInfo_currencyCode);
}
if(subscribeBolton_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeBolton_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeBolton_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.actionCommonInfo.extension.any="+encodeURIComponent(subscribeBolton_actionCommonInfo_extension_any);
}
if(subscribeBolton_boltonInfo_boltonIdentifier_boltonCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonIdentifier.boltonCode="+encodeURIComponent(subscribeBolton_boltonInfo_boltonIdentifier_boltonCode);
}
if(subscribeBolton_boltonInfo_boltonIdentifier_boltonTypeCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonIdentifier.boltonTypeCode="+encodeURIComponent(subscribeBolton_boltonInfo_boltonIdentifier_boltonTypeCode);
}
if(subscribeBolton_boltonInfo_boltonIdentifier_boltonInstance != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonIdentifier.boltonInstance="+encodeURIComponent(subscribeBolton_boltonInfo_boltonIdentifier_boltonInstance);
}
if(subscribeBolton_boltonInfo_boltonIdentifier_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonIdentifier.extension.@anyAttributeParam="+encodeURIComponent(subscribeBolton_boltonInfo_boltonIdentifier_extension_anyAttributeParam);
}
if(subscribeBolton_boltonInfo_boltonIdentifier_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonIdentifier.extension.any="+encodeURIComponent(subscribeBolton_boltonInfo_boltonIdentifier_extension_any);
}
if(subscribeBolton_boltonInfo_boltonAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonAmount="+encodeURIComponent(subscribeBolton_boltonInfo_boltonAmount);
}
if(subscribeBolton_boltonInfo_boltonAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonAmount.@exponent="+encodeURIComponent(subscribeBolton_boltonInfo_boltonAmount_exponent);
}
if(subscribeBolton_boltonInfo_boltonLD != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonLD="+encodeURIComponent(subscribeBolton_boltonInfo_boltonLD);
}
if(subscribeBolton_boltonInfo_boltonLD_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonLD.@exponent="+encodeURIComponent(subscribeBolton_boltonInfo_boltonLD_exponent);
}
if(subscribeBolton_boltonInfo_boltonMaxNumberOfSessions != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonMaxNumberOfSessions="+encodeURIComponent(subscribeBolton_boltonInfo_boltonMaxNumberOfSessions);
}
if(subscribeBolton_boltonInfo_boltonCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonCost="+encodeURIComponent(subscribeBolton_boltonInfo_boltonCost);
}
if(subscribeBolton_boltonInfo_boltonCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.boltonCost.@exponent="+encodeURIComponent(subscribeBolton_boltonInfo_boltonCost_exponent);
}
if(subscribeBolton_boltonInfo_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.chargingModality="+encodeURIComponent(subscribeBolton_boltonInfo_chargingModality);
}
if(subscribeBolton_boltonInfo_timeInterval_startTime_choice != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.timeInterval.startTime.choice="+encodeURIComponent(subscribeBolton_boltonInfo_timeInterval_startTime_choice);
}
if(subscribeBolton_boltonInfo_timeInterval_endTime_choice != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.timeInterval.endTime.choice="+encodeURIComponent(subscribeBolton_boltonInfo_timeInterval_endTime_choice);
}
if(subscribeBolton_boltonInfo_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(subscribeBolton_boltonInfo_timeInterval_extension_anyAttributeParam);
}
if(subscribeBolton_boltonInfo_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.timeInterval.extension.any="+encodeURIComponent(subscribeBolton_boltonInfo_timeInterval_extension_any);
}
if(subscribeBolton_boltonInfo_maxUnitsPerSession != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.maxUnitsPerSession="+encodeURIComponent(subscribeBolton_boltonInfo_maxUnitsPerSession);
}
if(subscribeBolton_boltonInfo_maxUnitsPerSession_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.maxUnitsPerSession.@exponent="+encodeURIComponent(subscribeBolton_boltonInfo_maxUnitsPerSession_exponent);
}
if(subscribeBolton_boltonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeBolton_boltonInfo_extension_anyAttributeParam);
}
if(subscribeBolton_boltonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.boltonInfo.extension.any="+encodeURIComponent(subscribeBolton_boltonInfo_extension_any);
}
if(subscribeBolton_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.extension.@anyAttributeParam="+encodeURIComponent(subscribeBolton_extension_anyAttributeParam);
}
if(subscribeBolton_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeBolton.extension.any="+encodeURIComponent(subscribeBolton_extension_any);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function unsubscribeBolton_BoltonManagement(unsubscribeBolton_actionCommonInfo_appInfo_appId,unsubscribeBolton_actionCommonInfo_appInfo_reference,unsubscribeBolton_actionCommonInfo_appInfo_extension_anyAttributeParam,unsubscribeBolton_actionCommonInfo_appInfo_extension_any,unsubscribeBolton_actionCommonInfo_userCode,unsubscribeBolton_actionCommonInfo_opCost,unsubscribeBolton_actionCommonInfo_opCost_exponent,unsubscribeBolton_actionCommonInfo_currencyCode,unsubscribeBolton_actionCommonInfo_extension_anyAttributeParam,unsubscribeBolton_actionCommonInfo_extension_any,unsubscribeBolton_subscriberId_choice,unsubscribeBolton_boltonIdentifier_boltonCode,unsubscribeBolton_boltonIdentifier_boltonTypeCode,unsubscribeBolton_boltonIdentifier_boltonInstance,unsubscribeBolton_boltonIdentifier_extension_anyAttributeParam,unsubscribeBolton_boltonIdentifier_extension_any,unsubscribeBolton_extension_anyAttributeParam,unsubscribeBolton_extension_any,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = BoltonManagement.AS_URL + '?' + "_service=" + BoltonManagement.service + Ptf_DIM + "_application=" + BoltonManagement.application + Ptf_DIM + "_operation=" + "unsubscribeBolton"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.appInfo.appId=" + encodeURIComponent(unsubscribeBolton_actionCommonInfo_appInfo_appId) + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.appInfo.reference=" + encodeURIComponent(unsubscribeBolton_actionCommonInfo_appInfo_reference) + Ptf_DIM + "unsubscribeBolton.subscriberId.choice=" + encodeURIComponent(unsubscribeBolton_subscriberId_choice) + buildHeaders_BoltonManagement(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(unsubscribeBolton_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(unsubscribeBolton_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_appInfo_extension_any);
}
if(unsubscribeBolton_actionCommonInfo_userCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.userCode="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_userCode);
}
if(unsubscribeBolton_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.opCost="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_opCost);
}
if(unsubscribeBolton_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.opCost.@exponent="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_opCost_exponent);
}
if(unsubscribeBolton_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.currencyCode="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_currencyCode);
}
if(unsubscribeBolton_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_extension_anyAttributeParam);
}
if(unsubscribeBolton_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.actionCommonInfo.extension.any="+encodeURIComponent(unsubscribeBolton_actionCommonInfo_extension_any);
}
if(unsubscribeBolton_boltonIdentifier_boltonCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.boltonIdentifier.boltonCode="+encodeURIComponent(unsubscribeBolton_boltonIdentifier_boltonCode);
}
if(unsubscribeBolton_boltonIdentifier_boltonTypeCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.boltonIdentifier.boltonTypeCode="+encodeURIComponent(unsubscribeBolton_boltonIdentifier_boltonTypeCode);
}
if(unsubscribeBolton_boltonIdentifier_boltonInstance != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.boltonIdentifier.boltonInstance="+encodeURIComponent(unsubscribeBolton_boltonIdentifier_boltonInstance);
}
if(unsubscribeBolton_boltonIdentifier_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.boltonIdentifier.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeBolton_boltonIdentifier_extension_anyAttributeParam);
}
if(unsubscribeBolton_boltonIdentifier_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.boltonIdentifier.extension.any="+encodeURIComponent(unsubscribeBolton_boltonIdentifier_extension_any);
}
if(unsubscribeBolton_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeBolton_extension_anyAttributeParam);
}
if(unsubscribeBolton_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeBolton.extension.any="+encodeURIComponent(unsubscribeBolton_extension_any);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function queryBoltons_BoltonManagement(queryBoltons_queryCommonInfo_currencyCode,queryBoltons_queryCommonInfo_pagingInfo_token,queryBoltons_queryCommonInfo_pagingInfo_numRegs,queryBoltons_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryBoltons_queryCommonInfo_pagingInfo_extension_any,queryBoltons_queryCommonInfo_extension_anyAttributeParam,queryBoltons_queryCommonInfo_extension_any,queryBoltons_subscriberId_choice,queryBoltons_boltonIdentifierFilter_boltonCode,queryBoltons_boltonIdentifierFilter_boltonTypeCode,queryBoltons_boltonIdentifierFilter_boltonInstance,queryBoltons_boltonIdentifierFilter_extension_anyAttributeParam,queryBoltons_boltonIdentifierFilter_extension_any,queryBoltons_boltonStatusFilter,queryBoltons_extension_anyAttributeParam,queryBoltons_extension_any,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = BoltonManagement.AS_URL + '?' + "_service=" + BoltonManagement.service + Ptf_DIM + "_application=" + BoltonManagement.application + Ptf_DIM + "_operation=" + "queryBoltons"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "queryBoltons.subscriberId.choice=" + encodeURIComponent(queryBoltons_subscriberId_choice) + Ptf_DIM + "queryBoltons.boltonStatusFilter=" + encodeURIComponent(queryBoltons_boltonStatusFilter) + buildHeaders_BoltonManagement(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(queryBoltons_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.queryCommonInfo.currencyCode="+encodeURIComponent(queryBoltons_queryCommonInfo_currencyCode);
}
if(queryBoltons_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryBoltons_queryCommonInfo_pagingInfo_token);
}
if(queryBoltons_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryBoltons_queryCommonInfo_pagingInfo_numRegs);
}
if(queryBoltons_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBoltons_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryBoltons_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryBoltons_queryCommonInfo_pagingInfo_extension_any);
}
if(queryBoltons_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBoltons_queryCommonInfo_extension_anyAttributeParam);
}
if(queryBoltons_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.queryCommonInfo.extension.any="+encodeURIComponent(queryBoltons_queryCommonInfo_extension_any);
}
if(queryBoltons_boltonIdentifierFilter_boltonCode != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.boltonIdentifierFilter.boltonCode="+encodeURIComponent(queryBoltons_boltonIdentifierFilter_boltonCode);
}
if(queryBoltons_boltonIdentifierFilter_boltonTypeCode != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.boltonIdentifierFilter.boltonTypeCode="+encodeURIComponent(queryBoltons_boltonIdentifierFilter_boltonTypeCode);
}
if(queryBoltons_boltonIdentifierFilter_boltonInstance != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.boltonIdentifierFilter.boltonInstance="+encodeURIComponent(queryBoltons_boltonIdentifierFilter_boltonInstance);
}
if(queryBoltons_boltonIdentifierFilter_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.boltonIdentifierFilter.extension.@anyAttributeParam="+encodeURIComponent(queryBoltons_boltonIdentifierFilter_extension_anyAttributeParam);
}
if(queryBoltons_boltonIdentifierFilter_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.boltonIdentifierFilter.extension.any="+encodeURIComponent(queryBoltons_boltonIdentifierFilter_extension_any);
}
if(queryBoltons_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.extension.@anyAttributeParam="+encodeURIComponent(queryBoltons_extension_anyAttributeParam);
}
if(queryBoltons_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltons.extension.any="+encodeURIComponent(queryBoltons_extension_any);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		function queryBoltonsDetails_BoltonManagement(queryBoltonsDetails_queryCommonInfo_currencyCode,queryBoltonsDetails_queryCommonInfo_pagingInfo_token,queryBoltonsDetails_queryCommonInfo_pagingInfo_numRegs,queryBoltonsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryBoltonsDetails_queryCommonInfo_pagingInfo_extension_any,queryBoltonsDetails_queryCommonInfo_extension_anyAttributeParam,queryBoltonsDetails_queryCommonInfo_extension_any,queryBoltonsDetails_subscriberId_choice,queryBoltonsDetails_timeIntervalFilter_startTime_choice,queryBoltonsDetails_timeIntervalFilter_endTime_choice,queryBoltonsDetails_timeIntervalFilter_extension_anyAttributeParam,queryBoltonsDetails_timeIntervalFilter_extension_any,queryBoltonsDetails_boltonIdentifierFilter_boltonCode,queryBoltonsDetails_boltonIdentifierFilter_boltonTypeCode,queryBoltonsDetails_boltonIdentifierFilter_boltonInstance,queryBoltonsDetails_boltonIdentifierFilter_extension_anyAttributeParam,queryBoltonsDetails_boltonIdentifierFilter_extension_any,queryBoltonsDetails_extension_anyAttributeParam,queryBoltonsDetails_extension_any,http_authorization,headers,privateRequest){
	    	var lRequest = "";
			lRequest = BoltonManagement.AS_URL + '?' + "_service=" + BoltonManagement.service + Ptf_DIM + "_application=" + BoltonManagement.application + Ptf_DIM + "_operation=" + "queryBoltonsDetails"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" +  request + Ptf_DIM + "queryBoltonsDetails.subscriberId.choice=" + encodeURIComponent(queryBoltonsDetails_subscriberId_choice) + buildHeaders_BoltonManagement(headers) + Ptf_DIM + "private=" + encodeURIComponent(privateRequest);
if(queryBoltonsDetails_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.queryCommonInfo.currencyCode="+encodeURIComponent(queryBoltonsDetails_queryCommonInfo_currencyCode);
}
if(queryBoltonsDetails_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryBoltonsDetails_queryCommonInfo_pagingInfo_token);
}
if(queryBoltonsDetails_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryBoltonsDetails_queryCommonInfo_pagingInfo_numRegs);
}
if(queryBoltonsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBoltonsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryBoltonsDetails_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryBoltonsDetails_queryCommonInfo_pagingInfo_extension_any);
}
if(queryBoltonsDetails_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBoltonsDetails_queryCommonInfo_extension_anyAttributeParam);
}
if(queryBoltonsDetails_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.queryCommonInfo.extension.any="+encodeURIComponent(queryBoltonsDetails_queryCommonInfo_extension_any);
}
if(queryBoltonsDetails_timeIntervalFilter_startTime_choice != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.timeIntervalFilter.startTime.choice="+encodeURIComponent(queryBoltonsDetails_timeIntervalFilter_startTime_choice);
}
if(queryBoltonsDetails_timeIntervalFilter_endTime_choice != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.timeIntervalFilter.endTime.choice="+encodeURIComponent(queryBoltonsDetails_timeIntervalFilter_endTime_choice);
}
if(queryBoltonsDetails_timeIntervalFilter_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.timeIntervalFilter.extension.@anyAttributeParam="+encodeURIComponent(queryBoltonsDetails_timeIntervalFilter_extension_anyAttributeParam);
}
if(queryBoltonsDetails_timeIntervalFilter_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.timeIntervalFilter.extension.any="+encodeURIComponent(queryBoltonsDetails_timeIntervalFilter_extension_any);
}
if(queryBoltonsDetails_boltonIdentifierFilter_boltonCode != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.boltonIdentifierFilter.boltonCode="+encodeURIComponent(queryBoltonsDetails_boltonIdentifierFilter_boltonCode);
}
if(queryBoltonsDetails_boltonIdentifierFilter_boltonTypeCode != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.boltonIdentifierFilter.boltonTypeCode="+encodeURIComponent(queryBoltonsDetails_boltonIdentifierFilter_boltonTypeCode);
}
if(queryBoltonsDetails_boltonIdentifierFilter_boltonInstance != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.boltonIdentifierFilter.boltonInstance="+encodeURIComponent(queryBoltonsDetails_boltonIdentifierFilter_boltonInstance);
}
if(queryBoltonsDetails_boltonIdentifierFilter_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.boltonIdentifierFilter.extension.@anyAttributeParam="+encodeURIComponent(queryBoltonsDetails_boltonIdentifierFilter_extension_anyAttributeParam);
}
if(queryBoltonsDetails_boltonIdentifierFilter_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.boltonIdentifierFilter.extension.any="+encodeURIComponent(queryBoltonsDetails_boltonIdentifierFilter_extension_any);
}
if(queryBoltonsDetails_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.extension.@anyAttributeParam="+encodeURIComponent(queryBoltonsDetails_extension_anyAttributeParam);
}
if(queryBoltonsDetails_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBoltonsDetails.extension.any="+encodeURIComponent(queryBoltonsDetails_extension_any);
}
if(http_authorization != null){
lRequest = lRequest + Ptf_DIM + "http.authorization="+encodeURIComponent(base64Encode(http_authorization));
}
			return lRequest;
			}
		