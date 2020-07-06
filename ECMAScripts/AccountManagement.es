
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
function querySubscriberIds_AccountManagement(querySubscriberIds_queryCommonInfo_currencyCode,querySubscriberIds_queryCommonInfo_pagingInfo_token,querySubscriberIds_queryCommonInfo_pagingInfo_numRegs,querySubscriberIds_queryCommonInfo_pagingInfo_extension_any,querySubscriberIds_queryCommonInfo_pagingInfo_extension_anyAttributeParam,querySubscriberIds_queryCommonInfo_extension_any,querySubscriberIds_queryCommonInfo_extension_anyAttributeParam,querySubscriberIds_subscriberIdOrExternalSubscriberId,querySubscriberIds_extension_any,querySubscriberIds_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "querySubscriberIds"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + buildHeaders_AccountManagement(headers);
if(querySubscriberIds_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.queryCommonInfo.currencyCode="+encodeURIComponent(querySubscriberIds_queryCommonInfo_currencyCode);
}
if(querySubscriberIds_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.queryCommonInfo.pagingInfo.token="+encodeURIComponent(querySubscriberIds_queryCommonInfo_pagingInfo_token);
}
if(querySubscriberIds_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(querySubscriberIds_queryCommonInfo_pagingInfo_numRegs);
}
if(querySubscriberIds_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(querySubscriberIds_queryCommonInfo_pagingInfo_extension_any);
}
if(querySubscriberIds_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberIds_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(querySubscriberIds_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.queryCommonInfo.extension.any="+encodeURIComponent(querySubscriberIds_queryCommonInfo_extension_any);
}
if(querySubscriberIds_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberIds_queryCommonInfo_extension_anyAttributeParam);
}
if(querySubscriberIds_subscriberIdOrExternalSubscriberId != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.subscriberIdOrExternalSubscriberId="+encodeURIComponent(querySubscriberIds_subscriberIdOrExternalSubscriberId);
}
if(querySubscriberIds_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.extension.any="+encodeURIComponent(querySubscriberIds_extension_any);
}
if(querySubscriberIds_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberIds.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberIds_extension_anyAttributeParam);
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

function changeSubscriberBillingCycle_AccountManagement(changeSubscriberBillingCycle_actionCommonInfo_appInfo_appId,changeSubscriberBillingCycle_actionCommonInfo_appInfo_reference,changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_any,changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_anyAttributeParam,changeSubscriberBillingCycle_actionCommonInfo_userCode,changeSubscriberBillingCycle_actionCommonInfo_opCost,changeSubscriberBillingCycle_actionCommonInfo_opCost_exponent,changeSubscriberBillingCycle_actionCommonInfo_currencyCode,changeSubscriberBillingCycle_actionCommonInfo_extension_any,changeSubscriberBillingCycle_actionCommonInfo_extension_anyAttributeParam,changeSubscriberBillingCycle_subscriberId_choice,changeSubscriberBillingCycle_billingCycleCode,changeSubscriberBillingCycle_immediateFlag,changeSubscriberBillingCycle_chargingModality,changeSubscriberBillingCycle_extension_any,changeSubscriberBillingCycle_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeSubscriberBillingCycle"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeSubscriberBillingCycle.subscriberId.choice=" + encodeURIComponent(changeSubscriberBillingCycle_subscriberId_choice) + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.userCode=" + encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_userCode) + Ptf_DIM + "changeSubscriberBillingCycle.billingCycleCode=" + encodeURIComponent(changeSubscriberBillingCycle_billingCycleCode) + buildHeaders_AccountManagement(headers);
if(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_any);
}
if(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeSubscriberBillingCycle_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.opCost="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_opCost);
}
if(changeSubscriberBillingCycle_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_opCost_exponent);
}
if(changeSubscriberBillingCycle_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.currencyCode="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_currencyCode);
}
if(changeSubscriberBillingCycle_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.extension.any="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_extension_any);
}
if(changeSubscriberBillingCycle_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_extension_anyAttributeParam);
}
if(changeSubscriberBillingCycle_immediateFlag != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.immediateFlag="+encodeURIComponent(changeSubscriberBillingCycle_immediateFlag);
}
if(changeSubscriberBillingCycle_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.chargingModality="+encodeURIComponent(changeSubscriberBillingCycle_chargingModality);
}
if(changeSubscriberBillingCycle_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.extension.any="+encodeURIComponent(changeSubscriberBillingCycle_extension_any);
}
if(changeSubscriberBillingCycle_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberBillingCycle_extension_anyAttributeParam);
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

function cancelSubscriberDeletion_AccountManagement(cancelSubscriberDeletion_actionCommonInfo_appInfo_appId,cancelSubscriberDeletion_actionCommonInfo_appInfo_reference,cancelSubscriberDeletion_actionCommonInfo_appInfo_extension_any,cancelSubscriberDeletion_actionCommonInfo_appInfo_extension_anyAttributeParam,cancelSubscriberDeletion_actionCommonInfo_userCode,cancelSubscriberDeletion_actionCommonInfo_opCost,cancelSubscriberDeletion_actionCommonInfo_opCost_exponent,cancelSubscriberDeletion_actionCommonInfo_currencyCode,cancelSubscriberDeletion_actionCommonInfo_extension_any,cancelSubscriberDeletion_actionCommonInfo_extension_anyAttributeParam,cancelSubscriberDeletion_subscriberId_choice,cancelSubscriberDeletion_extension_any,cancelSubscriberDeletion_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "cancelSubscriberDeletion"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "cancelSubscriberDeletion.subscriberId.choice=" + encodeURIComponent(cancelSubscriberDeletion_subscriberId_choice) + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.appInfo.appId=" + encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_appInfo_appId) + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.appInfo.reference=" + encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_appInfo_reference) + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.userCode=" + encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(cancelSubscriberDeletion_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_appInfo_extension_any);
}
if(cancelSubscriberDeletion_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(cancelSubscriberDeletion_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.opCost="+encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_opCost);
}
if(cancelSubscriberDeletion_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.opCost.@exponent="+encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_opCost_exponent);
}
if(cancelSubscriberDeletion_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.currencyCode="+encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_currencyCode);
}
if(cancelSubscriberDeletion_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.extension.any="+encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_extension_any);
}
if(cancelSubscriberDeletion_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(cancelSubscriberDeletion_actionCommonInfo_extension_anyAttributeParam);
}
if(cancelSubscriberDeletion_extension_any != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.extension.any="+encodeURIComponent(cancelSubscriberDeletion_extension_any);
}
if(cancelSubscriberDeletion_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberDeletion.extension.@anyAttributeParam="+encodeURIComponent(cancelSubscriberDeletion_extension_anyAttributeParam);
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

function assignInternalSubscriberId_AccountManagement(assignInternalSubscriberId_actionCommonInfo_appInfo_appId,assignInternalSubscriberId_actionCommonInfo_appInfo_reference,assignInternalSubscriberId_actionCommonInfo_appInfo_extension_any,assignInternalSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam,assignInternalSubscriberId_actionCommonInfo_userCode,assignInternalSubscriberId_actionCommonInfo_opCost,assignInternalSubscriberId_actionCommonInfo_opCost_exponent,assignInternalSubscriberId_actionCommonInfo_currencyCode,assignInternalSubscriberId_actionCommonInfo_extension_any,assignInternalSubscriberId_actionCommonInfo_extension_anyAttributeParam,assignInternalSubscriberId_extension_any,assignInternalSubscriberId_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "assignInternalSubscriberId"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.appInfo.appId=" + encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_appInfo_appId) + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.appInfo.reference=" + encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_appInfo_reference) + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.userCode=" + encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(assignInternalSubscriberId_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_appInfo_extension_any);
}
if(assignInternalSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(assignInternalSubscriberId_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.opCost="+encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_opCost);
}
if(assignInternalSubscriberId_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.opCost.@exponent="+encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_opCost_exponent);
}
if(assignInternalSubscriberId_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.currencyCode="+encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_currencyCode);
}
if(assignInternalSubscriberId_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.extension.any="+encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_extension_any);
}
if(assignInternalSubscriberId_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(assignInternalSubscriberId_actionCommonInfo_extension_anyAttributeParam);
}
if(assignInternalSubscriberId_extension_any != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.extension.any="+encodeURIComponent(assignInternalSubscriberId_extension_any);
}
if(assignInternalSubscriberId_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "assignInternalSubscriberId.extension.@anyAttributeParam="+encodeURIComponent(assignInternalSubscriberId_extension_anyAttributeParam);
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

function suspendScheduledSubscriber_AccountManagement(suspendScheduledSubscriber_actionCommonInfo_appInfo_appId,suspendScheduledSubscriber_actionCommonInfo_appInfo_reference,suspendScheduledSubscriber_actionCommonInfo_appInfo_extension_any,suspendScheduledSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam,suspendScheduledSubscriber_actionCommonInfo_userCode,suspendScheduledSubscriber_actionCommonInfo_opCost,suspendScheduledSubscriber_actionCommonInfo_opCost_exponent,suspendScheduledSubscriber_actionCommonInfo_currencyCode,suspendScheduledSubscriber_actionCommonInfo_extension_any,suspendScheduledSubscriber_actionCommonInfo_extension_anyAttributeParam,suspendScheduledSubscriber_subscriberId_choice,suspendScheduledSubscriber_actionCauseCode,suspendScheduledSubscriber_suspensionTime_DEBUG,suspendScheduledSubscriber_extension_any,suspendScheduledSubscriber_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "suspendScheduledSubscriber"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "suspendScheduledSubscriber.subscriberId.choice=" + encodeURIComponent(suspendScheduledSubscriber_subscriberId_choice) + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.appInfo.appId=" + encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_appInfo_appId) + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.appInfo.reference=" + encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_appInfo_reference) + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.userCode=" + encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_userCode) + Ptf_DIM + "suspendScheduledSubscriber.suspensionTime.DEBUG=" + encodeURIComponent(suspendScheduledSubscriber_suspensionTime_DEBUG) + buildHeaders_AccountManagement(headers);
if(suspendScheduledSubscriber_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_appInfo_extension_any);
}
if(suspendScheduledSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(suspendScheduledSubscriber_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.opCost="+encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_opCost);
}
if(suspendScheduledSubscriber_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.opCost.@exponent="+encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_opCost_exponent);
}
if(suspendScheduledSubscriber_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.currencyCode="+encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_currencyCode);
}
if(suspendScheduledSubscriber_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.extension.any="+encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_extension_any);
}
if(suspendScheduledSubscriber_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(suspendScheduledSubscriber_actionCommonInfo_extension_anyAttributeParam);
}
if(suspendScheduledSubscriber_actionCauseCode != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.actionCauseCode="+encodeURIComponent(suspendScheduledSubscriber_actionCauseCode);
}
if(suspendScheduledSubscriber_extension_any != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.extension.any="+encodeURIComponent(suspendScheduledSubscriber_extension_any);
}
if(suspendScheduledSubscriber_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "suspendScheduledSubscriber.extension.@anyAttributeParam="+encodeURIComponent(suspendScheduledSubscriber_extension_anyAttributeParam);
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

function activateSubscriber_AccountManagement(activateSubscriber_actionCommonInfo_appInfo_appId,activateSubscriber_actionCommonInfo_appInfo_reference,activateSubscriber_actionCommonInfo_appInfo_extension_any,activateSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam,activateSubscriber_actionCommonInfo_userCode,activateSubscriber_actionCommonInfo_opCost,activateSubscriber_actionCommonInfo_opCost_exponent,activateSubscriber_actionCommonInfo_currencyCode,activateSubscriber_actionCommonInfo_extension_any,activateSubscriber_actionCommonInfo_extension_anyAttributeParam,activateSubscriber_subscriberId_choice,activateSubscriber_extension_any,activateSubscriber_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "activateSubscriber"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "activateSubscriber.subscriberId.choice=" + encodeURIComponent(activateSubscriber_subscriberId_choice) + Ptf_DIM + "activateSubscriber.actionCommonInfo.appInfo.appId=" + encodeURIComponent(activateSubscriber_actionCommonInfo_appInfo_appId) + Ptf_DIM + "activateSubscriber.actionCommonInfo.appInfo.reference=" + encodeURIComponent(activateSubscriber_actionCommonInfo_appInfo_reference) + Ptf_DIM + "activateSubscriber.actionCommonInfo.userCode=" + encodeURIComponent(activateSubscriber_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(activateSubscriber_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(activateSubscriber_actionCommonInfo_appInfo_extension_any);
}
if(activateSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(activateSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(activateSubscriber_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.actionCommonInfo.opCost="+encodeURIComponent(activateSubscriber_actionCommonInfo_opCost);
}
if(activateSubscriber_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.actionCommonInfo.opCost.@exponent="+encodeURIComponent(activateSubscriber_actionCommonInfo_opCost_exponent);
}
if(activateSubscriber_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.actionCommonInfo.currencyCode="+encodeURIComponent(activateSubscriber_actionCommonInfo_currencyCode);
}
if(activateSubscriber_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.actionCommonInfo.extension.any="+encodeURIComponent(activateSubscriber_actionCommonInfo_extension_any);
}
if(activateSubscriber_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(activateSubscriber_actionCommonInfo_extension_anyAttributeParam);
}
if(activateSubscriber_extension_any != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.extension.any="+encodeURIComponent(activateSubscriber_extension_any);
}
if(activateSubscriber_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "activateSubscriber.extension.@anyAttributeParam="+encodeURIComponent(activateSubscriber_extension_anyAttributeParam);
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

function subscribeExternalNotifications_AccountManagement(subscribeExternalNotifications_actionCommonInfo_appInfo_appId,subscribeExternalNotifications_actionCommonInfo_appInfo_reference,subscribeExternalNotifications_actionCommonInfo_appInfo_extension_any,subscribeExternalNotifications_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeExternalNotifications_actionCommonInfo_userCode,subscribeExternalNotifications_actionCommonInfo_opCost,subscribeExternalNotifications_actionCommonInfo_opCost_exponent,subscribeExternalNotifications_actionCommonInfo_currencyCode,subscribeExternalNotifications_actionCommonInfo_extension_any,subscribeExternalNotifications_actionCommonInfo_extension_anyAttributeParam,subscribeExternalNotifications_subscriberId_choice,subscribeExternalNotifications_extNotServer,subscribeExternalNotifications_extension_any,subscribeExternalNotifications_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "subscribeExternalNotifications"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "subscribeExternalNotifications.subscriberId.choice=" + encodeURIComponent(subscribeExternalNotifications_subscriberId_choice) + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.userCode=" + encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(subscribeExternalNotifications_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_appInfo_extension_any);
}
if(subscribeExternalNotifications_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeExternalNotifications_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.opCost="+encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_opCost);
}
if(subscribeExternalNotifications_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_opCost_exponent);
}
if(subscribeExternalNotifications_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_currencyCode);
}
if(subscribeExternalNotifications_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.extension.any="+encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_extension_any);
}
if(subscribeExternalNotifications_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeExternalNotifications_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeExternalNotifications_extNotServer != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.extNotServer="+encodeURIComponent(subscribeExternalNotifications_extNotServer);
}
if(subscribeExternalNotifications_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.extension.any="+encodeURIComponent(subscribeExternalNotifications_extension_any);
}
if(subscribeExternalNotifications_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeExternalNotifications.extension.@anyAttributeParam="+encodeURIComponent(subscribeExternalNotifications_extension_anyAttributeParam);
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

function changeHomeZone_AccountManagement(changeHomeZone_actionCommonInfo_appInfo_appId,changeHomeZone_actionCommonInfo_appInfo_reference,changeHomeZone_actionCommonInfo_appInfo_extension_any,changeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam,changeHomeZone_actionCommonInfo_userCode,changeHomeZone_actionCommonInfo_opCost,changeHomeZone_actionCommonInfo_opCost_exponent,changeHomeZone_actionCommonInfo_currencyCode,changeHomeZone_actionCommonInfo_extension_any,changeHomeZone_actionCommonInfo_extension_anyAttributeParam,changeHomeZone_subscriberId_choice,changeHomeZone_zipCode,changeHomeZone_homeZoneLocationNumberInfoList_locationNumberId,changeHomeZone_homeZoneLocationNumberInfoList_extension_any,changeHomeZone_homeZoneLocationNumberInfoList_extension_anyAttributeParam,changeHomeZone_extension_any,changeHomeZone_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeHomeZone"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeHomeZone.subscriberId.choice=" + encodeURIComponent(changeHomeZone_subscriberId_choice) + Ptf_DIM + "changeHomeZone.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeHomeZone_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeHomeZone.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeHomeZone_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeHomeZone.actionCommonInfo.userCode=" + encodeURIComponent(changeHomeZone_actionCommonInfo_userCode) + Ptf_DIM + "changeHomeZone.homeZoneLocationNumberInfoList.locationNumberId=" + encodeURIComponent(changeHomeZone_homeZoneLocationNumberInfoList_locationNumberId) + buildHeaders_AccountManagement(headers);
if(changeHomeZone_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeHomeZone_actionCommonInfo_appInfo_extension_any);
}
if(changeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeHomeZone_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.actionCommonInfo.opCost="+encodeURIComponent(changeHomeZone_actionCommonInfo_opCost);
}
if(changeHomeZone_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeHomeZone_actionCommonInfo_opCost_exponent);
}
if(changeHomeZone_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.actionCommonInfo.currencyCode="+encodeURIComponent(changeHomeZone_actionCommonInfo_currencyCode);
}
if(changeHomeZone_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.actionCommonInfo.extension.any="+encodeURIComponent(changeHomeZone_actionCommonInfo_extension_any);
}
if(changeHomeZone_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeHomeZone_actionCommonInfo_extension_anyAttributeParam);
}
if(changeHomeZone_zipCode != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.zipCode="+encodeURIComponent(changeHomeZone_zipCode);
}
if(changeHomeZone_homeZoneLocationNumberInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.homeZoneLocationNumberInfoList.extension.any="+encodeURIComponent(changeHomeZone_homeZoneLocationNumberInfoList_extension_any);
}
if(changeHomeZone_homeZoneLocationNumberInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.homeZoneLocationNumberInfoList.extension.@anyAttributeParam="+encodeURIComponent(changeHomeZone_homeZoneLocationNumberInfoList_extension_anyAttributeParam);
}
if(changeHomeZone_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.extension.any="+encodeURIComponent(changeHomeZone_extension_any);
}
if(changeHomeZone_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeHomeZone.extension.@anyAttributeParam="+encodeURIComponent(changeHomeZone_extension_anyAttributeParam);
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

function subscribeHomeZone_AccountManagement(subscribeHomeZone_actionCommonInfo_appInfo_appId,subscribeHomeZone_actionCommonInfo_appInfo_reference,subscribeHomeZone_actionCommonInfo_appInfo_extension_any,subscribeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeHomeZone_actionCommonInfo_userCode,subscribeHomeZone_actionCommonInfo_opCost,subscribeHomeZone_actionCommonInfo_opCost_exponent,subscribeHomeZone_actionCommonInfo_currencyCode,subscribeHomeZone_actionCommonInfo_extension_any,subscribeHomeZone_actionCommonInfo_extension_anyAttributeParam,subscribeHomeZone_subscriberId_choice,subscribeHomeZone_zipCode,subscribeHomeZone_homeZoneLocationNumberInfoList_locationNumberId,subscribeHomeZone_homeZoneLocationNumberInfoList_extension_any,subscribeHomeZone_homeZoneLocationNumberInfoList_extension_anyAttributeParam,subscribeHomeZone_extension_any,subscribeHomeZone_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "subscribeHomeZone"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "subscribeHomeZone.subscriberId.choice=" + encodeURIComponent(subscribeHomeZone_subscriberId_choice) + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeHomeZone_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeHomeZone_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.userCode=" + encodeURIComponent(subscribeHomeZone_actionCommonInfo_userCode) + Ptf_DIM + "subscribeHomeZone.homeZoneLocationNumberInfoList.locationNumberId=" + encodeURIComponent(subscribeHomeZone_homeZoneLocationNumberInfoList_locationNumberId) + buildHeaders_AccountManagement(headers);
if(subscribeHomeZone_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeHomeZone_actionCommonInfo_appInfo_extension_any);
}
if(subscribeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeHomeZone_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.opCost="+encodeURIComponent(subscribeHomeZone_actionCommonInfo_opCost);
}
if(subscribeHomeZone_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeHomeZone_actionCommonInfo_opCost_exponent);
}
if(subscribeHomeZone_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeHomeZone_actionCommonInfo_currencyCode);
}
if(subscribeHomeZone_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.extension.any="+encodeURIComponent(subscribeHomeZone_actionCommonInfo_extension_any);
}
if(subscribeHomeZone_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeHomeZone_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeHomeZone_zipCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.zipCode="+encodeURIComponent(subscribeHomeZone_zipCode);
}
if(subscribeHomeZone_homeZoneLocationNumberInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.homeZoneLocationNumberInfoList.extension.any="+encodeURIComponent(subscribeHomeZone_homeZoneLocationNumberInfoList_extension_any);
}
if(subscribeHomeZone_homeZoneLocationNumberInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.homeZoneLocationNumberInfoList.extension.@anyAttributeParam="+encodeURIComponent(subscribeHomeZone_homeZoneLocationNumberInfoList_extension_anyAttributeParam);
}
if(subscribeHomeZone_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.extension.any="+encodeURIComponent(subscribeHomeZone_extension_any);
}
if(subscribeHomeZone_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeHomeZone.extension.@anyAttributeParam="+encodeURIComponent(subscribeHomeZone_extension_anyAttributeParam);
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

function unsubscribeHomeZone_AccountManagement(unsubscribeHomeZone_actionCommonInfo_appInfo_appId,unsubscribeHomeZone_actionCommonInfo_appInfo_reference,unsubscribeHomeZone_actionCommonInfo_appInfo_extension_any,unsubscribeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam,unsubscribeHomeZone_actionCommonInfo_userCode,unsubscribeHomeZone_actionCommonInfo_opCost,unsubscribeHomeZone_actionCommonInfo_opCost_exponent,unsubscribeHomeZone_actionCommonInfo_currencyCode,unsubscribeHomeZone_actionCommonInfo_extension_any,unsubscribeHomeZone_actionCommonInfo_extension_anyAttributeParam,unsubscribeHomeZone_subscriberId_choice,unsubscribeHomeZone_extension_any,unsubscribeHomeZone_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "unsubscribeHomeZone"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "unsubscribeHomeZone.subscriberId.choice=" + encodeURIComponent(unsubscribeHomeZone_subscriberId_choice) + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.appInfo.appId=" + encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_appInfo_appId) + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.appInfo.reference=" + encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_appInfo_reference) + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.userCode=" + encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(unsubscribeHomeZone_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_appInfo_extension_any);
}
if(unsubscribeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(unsubscribeHomeZone_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.opCost="+encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_opCost);
}
if(unsubscribeHomeZone_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.opCost.@exponent="+encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_opCost_exponent);
}
if(unsubscribeHomeZone_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.currencyCode="+encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_currencyCode);
}
if(unsubscribeHomeZone_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.extension.any="+encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_extension_any);
}
if(unsubscribeHomeZone_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeHomeZone_actionCommonInfo_extension_anyAttributeParam);
}
if(unsubscribeHomeZone_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.extension.any="+encodeURIComponent(unsubscribeHomeZone_extension_any);
}
if(unsubscribeHomeZone_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeHomeZone.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeHomeZone_extension_anyAttributeParam);
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

function queryHomeZone_AccountManagement(queryHomeZone_queryCommonInfo_currencyCode,queryHomeZone_queryCommonInfo_pagingInfo_token,queryHomeZone_queryCommonInfo_pagingInfo_numRegs,queryHomeZone_queryCommonInfo_pagingInfo_extension_any,queryHomeZone_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryHomeZone_queryCommonInfo_extension_any,queryHomeZone_queryCommonInfo_extension_anyAttributeParam,queryHomeZone_subscriberId_choice,queryHomeZone_opReference_opId,queryHomeZone_opReference_opSubIdList_opId,queryHomeZone_opReference_opSubIdList_extension_any,queryHomeZone_opReference_opSubIdList_extension_anyAttributeParam,queryHomeZone_opReference_extension_any,queryHomeZone_opReference_extension_anyAttributeParam,queryHomeZone_extension_any,queryHomeZone_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "queryHomeZone"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryHomeZone.subscriberId.choice=" + encodeURIComponent(queryHomeZone_subscriberId_choice) + Ptf_DIM + "queryHomeZone.opReference.opId=" + encodeURIComponent(queryHomeZone_opReference_opId) + Ptf_DIM + "queryHomeZone.opReference.opSubIdList.opId=" + encodeURIComponent(queryHomeZone_opReference_opSubIdList_opId) + buildHeaders_AccountManagement(headers);
if(queryHomeZone_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.queryCommonInfo.currencyCode="+encodeURIComponent(queryHomeZone_queryCommonInfo_currencyCode);
}
if(queryHomeZone_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryHomeZone_queryCommonInfo_pagingInfo_token);
}
if(queryHomeZone_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryHomeZone_queryCommonInfo_pagingInfo_numRegs);
}
if(queryHomeZone_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryHomeZone_queryCommonInfo_pagingInfo_extension_any);
}
if(queryHomeZone_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryHomeZone_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryHomeZone_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.queryCommonInfo.extension.any="+encodeURIComponent(queryHomeZone_queryCommonInfo_extension_any);
}
if(queryHomeZone_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryHomeZone_queryCommonInfo_extension_anyAttributeParam);
}
if(queryHomeZone_opReference_opSubIdList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.opReference.opSubIdList.extension.any="+encodeURIComponent(queryHomeZone_opReference_opSubIdList_extension_any);
}
if(queryHomeZone_opReference_opSubIdList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.opReference.opSubIdList.extension.@anyAttributeParam="+encodeURIComponent(queryHomeZone_opReference_opSubIdList_extension_anyAttributeParam);
}
if(queryHomeZone_opReference_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.opReference.extension.any="+encodeURIComponent(queryHomeZone_opReference_extension_any);
}
if(queryHomeZone_opReference_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.opReference.extension.@anyAttributeParam="+encodeURIComponent(queryHomeZone_opReference_extension_anyAttributeParam);
}
if(queryHomeZone_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.extension.any="+encodeURIComponent(queryHomeZone_extension_any);
}
if(queryHomeZone_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryHomeZone.extension.@anyAttributeParam="+encodeURIComponent(queryHomeZone_extension_anyAttributeParam);
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

function changeSegment_AccountManagement(changeSegment_actionCommonInfo_appInfo_appId,changeSegment_actionCommonInfo_appInfo_reference,changeSegment_actionCommonInfo_appInfo_extension_any,changeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam,changeSegment_actionCommonInfo_userCode,changeSegment_actionCommonInfo_opCost,changeSegment_actionCommonInfo_opCost_exponent,changeSegment_actionCommonInfo_currencyCode,changeSegment_actionCommonInfo_extension_any,changeSegment_actionCommonInfo_extension_anyAttributeParam,changeSegment_subscriberId_choice,changeSegment_segmentId,changeSegment_segmentReference,changeSegment_timeInterval_startTime_choice,changeSegment_timeInterval_endTime_choice,changeSegment_timeInterval_extension_any,changeSegment_timeInterval_extension_anyAttributeParam,changeSegment_extension_any,changeSegment_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeSegment"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeSegment.subscriberId.choice=" + encodeURIComponent(changeSegment_subscriberId_choice) + Ptf_DIM + "changeSegment.timeInterval.startTime.choice=" + encodeURIComponent(changeSegment_timeInterval_startTime_choice) + Ptf_DIM + "changeSegment.timeInterval.endTime.choice=" + encodeURIComponent(changeSegment_timeInterval_endTime_choice) + Ptf_DIM + "changeSegment.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeSegment_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeSegment.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeSegment_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeSegment.actionCommonInfo.userCode=" + encodeURIComponent(changeSegment_actionCommonInfo_userCode) + Ptf_DIM + "changeSegment.segmentId=" + encodeURIComponent(changeSegment_segmentId) + Ptf_DIM + "changeSegment.segmentReference=" + encodeURIComponent(changeSegment_segmentReference) + buildHeaders_AccountManagement(headers);
if(changeSegment_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeSegment_actionCommonInfo_appInfo_extension_any);
}
if(changeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeSegment_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.actionCommonInfo.opCost="+encodeURIComponent(changeSegment_actionCommonInfo_opCost);
}
if(changeSegment_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeSegment_actionCommonInfo_opCost_exponent);
}
if(changeSegment_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.actionCommonInfo.currencyCode="+encodeURIComponent(changeSegment_actionCommonInfo_currencyCode);
}
if(changeSegment_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.actionCommonInfo.extension.any="+encodeURIComponent(changeSegment_actionCommonInfo_extension_any);
}
if(changeSegment_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSegment_actionCommonInfo_extension_anyAttributeParam);
}
if(changeSegment_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.timeInterval.extension.any="+encodeURIComponent(changeSegment_timeInterval_extension_any);
}
if(changeSegment_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(changeSegment_timeInterval_extension_anyAttributeParam);
}
if(changeSegment_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.extension.any="+encodeURIComponent(changeSegment_extension_any);
}
if(changeSegment_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSegment.extension.@anyAttributeParam="+encodeURIComponent(changeSegment_extension_anyAttributeParam);
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

function unsubscribeSegment_AccountManagement(unsubscribeSegment_actionCommonInfo_appInfo_appId,unsubscribeSegment_actionCommonInfo_appInfo_reference,unsubscribeSegment_actionCommonInfo_appInfo_extension_any,unsubscribeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam,unsubscribeSegment_actionCommonInfo_userCode,unsubscribeSegment_actionCommonInfo_opCost,unsubscribeSegment_actionCommonInfo_opCost_exponent,unsubscribeSegment_actionCommonInfo_currencyCode,unsubscribeSegment_actionCommonInfo_extension_any,unsubscribeSegment_actionCommonInfo_extension_anyAttributeParam,unsubscribeSegment_subscriberId_choice,unsubscribeSegment_segmentId,unsubscribeSegment_segmentReference,unsubscribeSegment_extension_any,unsubscribeSegment_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "unsubscribeSegment"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "unsubscribeSegment.subscriberId.choice=" + encodeURIComponent(unsubscribeSegment_subscriberId_choice) + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.appInfo.appId=" + encodeURIComponent(unsubscribeSegment_actionCommonInfo_appInfo_appId) + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.appInfo.reference=" + encodeURIComponent(unsubscribeSegment_actionCommonInfo_appInfo_reference) + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.userCode=" + encodeURIComponent(unsubscribeSegment_actionCommonInfo_userCode) + Ptf_DIM + "unsubscribeSegment.segmentId=" + encodeURIComponent(unsubscribeSegment_segmentId) + Ptf_DIM + "unsubscribeSegment.segmentReference=" + encodeURIComponent(unsubscribeSegment_segmentReference) + buildHeaders_AccountManagement(headers);
if(unsubscribeSegment_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(unsubscribeSegment_actionCommonInfo_appInfo_extension_any);
}
if(unsubscribeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(unsubscribeSegment_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.opCost="+encodeURIComponent(unsubscribeSegment_actionCommonInfo_opCost);
}
if(unsubscribeSegment_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.opCost.@exponent="+encodeURIComponent(unsubscribeSegment_actionCommonInfo_opCost_exponent);
}
if(unsubscribeSegment_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.currencyCode="+encodeURIComponent(unsubscribeSegment_actionCommonInfo_currencyCode);
}
if(unsubscribeSegment_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.extension.any="+encodeURIComponent(unsubscribeSegment_actionCommonInfo_extension_any);
}
if(unsubscribeSegment_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeSegment_actionCommonInfo_extension_anyAttributeParam);
}
if(unsubscribeSegment_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.extension.any="+encodeURIComponent(unsubscribeSegment_extension_any);
}
if(unsubscribeSegment_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeSegment.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeSegment_extension_anyAttributeParam);
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

function queryServicePlansAllowed_AccountManagement(queryServicePlansAllowed_queryCommonInfo_currencyCode,queryServicePlansAllowed_queryCommonInfo_pagingInfo_token,queryServicePlansAllowed_queryCommonInfo_pagingInfo_numRegs,queryServicePlansAllowed_queryCommonInfo_pagingInfo_extension_any,queryServicePlansAllowed_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryServicePlansAllowed_queryCommonInfo_extension_any,queryServicePlansAllowed_queryCommonInfo_extension_anyAttributeParam,queryServicePlansAllowed_subscriberId_choice,queryServicePlansAllowed_serviceClass,queryServicePlansAllowed_extension_any,queryServicePlansAllowed_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "queryServicePlansAllowed"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryServicePlansAllowed.subscriberId.choice=" + encodeURIComponent(queryServicePlansAllowed_subscriberId_choice) + Ptf_DIM + "queryServicePlansAllowed.serviceClass=" + encodeURIComponent(queryServicePlansAllowed_serviceClass) + buildHeaders_AccountManagement(headers);
if(queryServicePlansAllowed_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.queryCommonInfo.currencyCode="+encodeURIComponent(queryServicePlansAllowed_queryCommonInfo_currencyCode);
}
if(queryServicePlansAllowed_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryServicePlansAllowed_queryCommonInfo_pagingInfo_token);
}
if(queryServicePlansAllowed_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryServicePlansAllowed_queryCommonInfo_pagingInfo_numRegs);
}
if(queryServicePlansAllowed_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryServicePlansAllowed_queryCommonInfo_pagingInfo_extension_any);
}
if(queryServicePlansAllowed_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryServicePlansAllowed_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryServicePlansAllowed_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.queryCommonInfo.extension.any="+encodeURIComponent(queryServicePlansAllowed_queryCommonInfo_extension_any);
}
if(queryServicePlansAllowed_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryServicePlansAllowed_queryCommonInfo_extension_anyAttributeParam);
}
if(queryServicePlansAllowed_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.extension.any="+encodeURIComponent(queryServicePlansAllowed_extension_any);
}
if(queryServicePlansAllowed_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansAllowed.extension.@anyAttributeParam="+encodeURIComponent(queryServicePlansAllowed_extension_anyAttributeParam);
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

function subscribeSegment_AccountManagement(subscribeSegment_actionCommonInfo_appInfo_appId,subscribeSegment_actionCommonInfo_appInfo_reference,subscribeSegment_actionCommonInfo_appInfo_extension_any,subscribeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeSegment_actionCommonInfo_userCode,subscribeSegment_actionCommonInfo_opCost,subscribeSegment_actionCommonInfo_opCost_exponent,subscribeSegment_actionCommonInfo_currencyCode,subscribeSegment_actionCommonInfo_extension_any,subscribeSegment_actionCommonInfo_extension_anyAttributeParam,subscribeSegment_subscriberId_choice,subscribeSegment_segmentId,subscribeSegment_timeInterval_startTime_choice,subscribeSegment_timeInterval_endTime_choice,subscribeSegment_timeInterval_extension_any,subscribeSegment_timeInterval_extension_anyAttributeParam,subscribeSegment_extension_any,subscribeSegment_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "subscribeSegment"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "subscribeSegment.subscriberId.choice=" + encodeURIComponent(subscribeSegment_subscriberId_choice) + Ptf_DIM + "subscribeSegment.timeInterval.startTime.choice=" + encodeURIComponent(subscribeSegment_timeInterval_startTime_choice) + Ptf_DIM + "subscribeSegment.timeInterval.endTime.choice=" + encodeURIComponent(subscribeSegment_timeInterval_endTime_choice) + Ptf_DIM + "subscribeSegment.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeSegment_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeSegment.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeSegment_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeSegment.actionCommonInfo.userCode=" + encodeURIComponent(subscribeSegment_actionCommonInfo_userCode) + Ptf_DIM + "subscribeSegment.segmentId=" + encodeURIComponent(subscribeSegment_segmentId) + buildHeaders_AccountManagement(headers);
if(subscribeSegment_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeSegment_actionCommonInfo_appInfo_extension_any);
}
if(subscribeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeSegment_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeSegment_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.actionCommonInfo.opCost="+encodeURIComponent(subscribeSegment_actionCommonInfo_opCost);
}
if(subscribeSegment_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeSegment_actionCommonInfo_opCost_exponent);
}
if(subscribeSegment_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeSegment_actionCommonInfo_currencyCode);
}
if(subscribeSegment_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.actionCommonInfo.extension.any="+encodeURIComponent(subscribeSegment_actionCommonInfo_extension_any);
}
if(subscribeSegment_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeSegment_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeSegment_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.timeInterval.extension.any="+encodeURIComponent(subscribeSegment_timeInterval_extension_any);
}
if(subscribeSegment_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(subscribeSegment_timeInterval_extension_anyAttributeParam);
}
if(subscribeSegment_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.extension.any="+encodeURIComponent(subscribeSegment_extension_any);
}
if(subscribeSegment_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeSegment.extension.@anyAttributeParam="+encodeURIComponent(subscribeSegment_extension_anyAttributeParam);
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

function deleteSubscriber_AccountManagement(deleteSubscriber_actionCommonInfo_appInfo_appId,deleteSubscriber_actionCommonInfo_appInfo_reference,deleteSubscriber_actionCommonInfo_appInfo_extension_any,deleteSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam,deleteSubscriber_actionCommonInfo_userCode,deleteSubscriber_actionCommonInfo_opCost,deleteSubscriber_actionCommonInfo_opCost_exponent,deleteSubscriber_actionCommonInfo_currencyCode,deleteSubscriber_actionCommonInfo_extension_any,deleteSubscriber_actionCommonInfo_extension_anyAttributeParam,deleteSubscriber_subscriberId_choice,deleteSubscriber_cancellableFlag,deleteSubscriber_actionCauseCode,deleteSubscriber_extension_any,deleteSubscriber_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "deleteSubscriber"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "deleteSubscriber.subscriberId.choice=" + encodeURIComponent(deleteSubscriber_subscriberId_choice) + Ptf_DIM + "deleteSubscriber.actionCommonInfo.appInfo.appId=" + encodeURIComponent(deleteSubscriber_actionCommonInfo_appInfo_appId) + Ptf_DIM + "deleteSubscriber.actionCommonInfo.appInfo.reference=" + encodeURIComponent(deleteSubscriber_actionCommonInfo_appInfo_reference) + Ptf_DIM + "deleteSubscriber.actionCommonInfo.userCode=" + encodeURIComponent(deleteSubscriber_actionCommonInfo_userCode) + Ptf_DIM + "deleteSubscriber.cancellableFlag=" + encodeURIComponent(deleteSubscriber_cancellableFlag) + buildHeaders_AccountManagement(headers);
if(deleteSubscriber_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(deleteSubscriber_actionCommonInfo_appInfo_extension_any);
}
if(deleteSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(deleteSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(deleteSubscriber_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCommonInfo.opCost="+encodeURIComponent(deleteSubscriber_actionCommonInfo_opCost);
}
if(deleteSubscriber_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCommonInfo.opCost.@exponent="+encodeURIComponent(deleteSubscriber_actionCommonInfo_opCost_exponent);
}
if(deleteSubscriber_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCommonInfo.currencyCode="+encodeURIComponent(deleteSubscriber_actionCommonInfo_currencyCode);
}
if(deleteSubscriber_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCommonInfo.extension.any="+encodeURIComponent(deleteSubscriber_actionCommonInfo_extension_any);
}
if(deleteSubscriber_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(deleteSubscriber_actionCommonInfo_extension_anyAttributeParam);
}
if(deleteSubscriber_actionCauseCode != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.actionCauseCode="+encodeURIComponent(deleteSubscriber_actionCauseCode);
}
if(deleteSubscriber_extension_any != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.extension.any="+encodeURIComponent(deleteSubscriber_extension_any);
}
if(deleteSubscriber_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "deleteSubscriber.extension.@anyAttributeParam="+encodeURIComponent(deleteSubscriber_extension_anyAttributeParam);
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

function changeServicePlans_AccountManagement(changeServicePlans_actionCommonInfo_appInfo_appId,changeServicePlans_actionCommonInfo_appInfo_reference,changeServicePlans_actionCommonInfo_appInfo_extension_any,changeServicePlans_actionCommonInfo_appInfo_extension_anyAttributeParam,changeServicePlans_actionCommonInfo_userCode,changeServicePlans_actionCommonInfo_opCost,changeServicePlans_actionCommonInfo_opCost_exponent,changeServicePlans_actionCommonInfo_currencyCode,changeServicePlans_actionCommonInfo_extension_any,changeServicePlans_actionCommonInfo_extension_anyAttributeParam,changeServicePlans_subscriberId_choice,changeServicePlans_serviceClass,changeServicePlans_servicePlansInfoList_servicePlansInfo_tariffPlanId,changeServicePlans_servicePlansInfoList_servicePlansInfo_extension_any,changeServicePlans_servicePlansInfoList_servicePlansInfo_extension_anyAttributeParam,changeServicePlans_servicePlansInfoList_extension_any,changeServicePlans_servicePlansInfoList_extension_anyAttributeParam,changeServicePlans_extension_any,changeServicePlans_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeServicePlans"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeServicePlans.subscriberId.choice=" + encodeURIComponent(changeServicePlans_subscriberId_choice) + Ptf_DIM + "changeServicePlans.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeServicePlans_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeServicePlans.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeServicePlans_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeServicePlans.actionCommonInfo.userCode=" + encodeURIComponent(changeServicePlans_actionCommonInfo_userCode) + Ptf_DIM + "changeServicePlans.serviceClass=" + encodeURIComponent(changeServicePlans_serviceClass) + Ptf_DIM + "changeServicePlans.servicePlansInfoList.servicePlansInfo.tariffPlanId=" + encodeURIComponent(changeServicePlans_servicePlansInfoList_servicePlansInfo_tariffPlanId) + buildHeaders_AccountManagement(headers);
if(changeServicePlans_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeServicePlans_actionCommonInfo_appInfo_extension_any);
}
if(changeServicePlans_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeServicePlans_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeServicePlans_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.actionCommonInfo.opCost="+encodeURIComponent(changeServicePlans_actionCommonInfo_opCost);
}
if(changeServicePlans_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeServicePlans_actionCommonInfo_opCost_exponent);
}
if(changeServicePlans_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.actionCommonInfo.currencyCode="+encodeURIComponent(changeServicePlans_actionCommonInfo_currencyCode);
}
if(changeServicePlans_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.actionCommonInfo.extension.any="+encodeURIComponent(changeServicePlans_actionCommonInfo_extension_any);
}
if(changeServicePlans_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeServicePlans_actionCommonInfo_extension_anyAttributeParam);
}
if(changeServicePlans_servicePlansInfoList_servicePlansInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.servicePlansInfoList.servicePlansInfo.extension.any="+encodeURIComponent(changeServicePlans_servicePlansInfoList_servicePlansInfo_extension_any);
}
if(changeServicePlans_servicePlansInfoList_servicePlansInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.servicePlansInfoList.servicePlansInfo.extension.@anyAttributeParam="+encodeURIComponent(changeServicePlans_servicePlansInfoList_servicePlansInfo_extension_anyAttributeParam);
}
if(changeServicePlans_servicePlansInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.servicePlansInfoList.extension.any="+encodeURIComponent(changeServicePlans_servicePlansInfoList_extension_any);
}
if(changeServicePlans_servicePlansInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.servicePlansInfoList.extension.@anyAttributeParam="+encodeURIComponent(changeServicePlans_servicePlansInfoList_extension_anyAttributeParam);
}
if(changeServicePlans_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.extension.any="+encodeURIComponent(changeServicePlans_extension_any);
}
if(changeServicePlans_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeServicePlans.extension.@anyAttributeParam="+encodeURIComponent(changeServicePlans_extension_anyAttributeParam);
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

function changeAccountProfileId_AccountManagement(changeAccountProfileId_actionCommonInfo_appInfo_appId,changeAccountProfileId_actionCommonInfo_appInfo_reference,changeAccountProfileId_actionCommonInfo_appInfo_extension_any,changeAccountProfileId_actionCommonInfo_appInfo_extension_anyAttributeParam,changeAccountProfileId_actionCommonInfo_userCode,changeAccountProfileId_actionCommonInfo_opCost,changeAccountProfileId_actionCommonInfo_opCost_exponent,changeAccountProfileId_actionCommonInfo_currencyCode,changeAccountProfileId_actionCommonInfo_extension_any,changeAccountProfileId_actionCommonInfo_extension_anyAttributeParam,changeAccountProfileId_subscriberId_choice,changeAccountProfileId_accountProfileId,changeAccountProfileId_initialBalance,changeAccountProfileId_initialBalance_exponent,changeAccountProfileId_subscriberExtendedInfo_taxCode,changeAccountProfileId_subscriberExtendedInfo_genericRatingParameter,changeAccountProfileId_subscriberExtendedInfo_subscriptionArea,changeAccountProfileId_subscriberExtendedInfo_ocsreNodeId,changeAccountProfileId_subscriberExtendedInfo_geographicArea,changeAccountProfileId_subscriberExtendedInfo_billingCycleCode,changeAccountProfileId_subscriberExtendedInfo_extension_any,changeAccountProfileId_subscriberExtendedInfo_extension_anyAttributeParam,changeAccountProfileId_cycleSpendControlFlag,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendId,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendLimitAmount,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendLimitAmount_exponent,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendThresholdValue,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendThresholdValue_exponent,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendValue,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendValue_exponent,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_messageNotificationEventFlag,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_extension_any,changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_extension_anyAttributeParam,changeAccountProfileId_spendAttributesInfoList_extension_any,changeAccountProfileId_spendAttributesInfoList_extension_anyAttributeParam,changeAccountProfileId_extension_any,changeAccountProfileId_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeAccountProfileId"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeAccountProfileId.subscriberId.choice=" + encodeURIComponent(changeAccountProfileId_subscriberId_choice) + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeAccountProfileId_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeAccountProfileId_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.userCode=" + encodeURIComponent(changeAccountProfileId_actionCommonInfo_userCode) + Ptf_DIM + "changeAccountProfileId.accountProfileId=" + encodeURIComponent(changeAccountProfileId_accountProfileId) + Ptf_DIM + "changeAccountProfileId.cycleSpendControlFlag=" + encodeURIComponent(changeAccountProfileId_cycleSpendControlFlag) + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.spendId=" + encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendId) + buildHeaders_AccountManagement(headers);
if(changeAccountProfileId_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeAccountProfileId_actionCommonInfo_appInfo_extension_any);
}
if(changeAccountProfileId_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeAccountProfileId_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeAccountProfileId_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.opCost="+encodeURIComponent(changeAccountProfileId_actionCommonInfo_opCost);
}
if(changeAccountProfileId_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeAccountProfileId_actionCommonInfo_opCost_exponent);
}
if(changeAccountProfileId_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.currencyCode="+encodeURIComponent(changeAccountProfileId_actionCommonInfo_currencyCode);
}
if(changeAccountProfileId_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.extension.any="+encodeURIComponent(changeAccountProfileId_actionCommonInfo_extension_any);
}
if(changeAccountProfileId_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeAccountProfileId_actionCommonInfo_extension_anyAttributeParam);
}
if(changeAccountProfileId_initialBalance != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.initialBalance="+encodeURIComponent(changeAccountProfileId_initialBalance);
}
if(changeAccountProfileId_initialBalance_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.initialBalance.@exponent="+encodeURIComponent(changeAccountProfileId_initialBalance_exponent);
}
if(changeAccountProfileId_subscriberExtendedInfo_taxCode != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.taxCode="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_taxCode);
}
if(changeAccountProfileId_subscriberExtendedInfo_genericRatingParameter != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.genericRatingParameter="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_genericRatingParameter);
}
if(changeAccountProfileId_subscriberExtendedInfo_subscriptionArea != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.subscriptionArea="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_subscriptionArea);
}
if(changeAccountProfileId_subscriberExtendedInfo_ocsreNodeId != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.ocsreNodeId="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_ocsreNodeId);
}
if(changeAccountProfileId_subscriberExtendedInfo_geographicArea != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.geographicArea="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_geographicArea);
}
if(changeAccountProfileId_subscriberExtendedInfo_billingCycleCode != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.billingCycleCode="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_billingCycleCode);
}
if(changeAccountProfileId_subscriberExtendedInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.extension.any="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_extension_any);
}
if(changeAccountProfileId_subscriberExtendedInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.subscriberExtendedInfo.extension.@anyAttributeParam="+encodeURIComponent(changeAccountProfileId_subscriberExtendedInfo_extension_anyAttributeParam);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendLimitAmount != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.spendLimitAmount="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendLimitAmount);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendLimitAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.spendLimitAmount.@exponent="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendLimitAmount_exponent);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendThresholdValue != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.spendThresholdValue="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendThresholdValue);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendThresholdValue_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.spendThresholdValue.@exponent="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendThresholdValue_exponent);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendValue != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.spendValue="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendValue);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendValue_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.spendValue.@exponent="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_spendValue_exponent);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_messageNotificationEventFlag != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.messageNotificationEventFlag="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_messageNotificationEventFlag);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.extension.any="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_extension_any);
}
if(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.spendAttributesInfo.extension.@anyAttributeParam="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_spendAttributesInfo_extension_anyAttributeParam);
}
if(changeAccountProfileId_spendAttributesInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.extension.any="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_extension_any);
}
if(changeAccountProfileId_spendAttributesInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.spendAttributesInfoList.extension.@anyAttributeParam="+encodeURIComponent(changeAccountProfileId_spendAttributesInfoList_extension_anyAttributeParam);
}
if(changeAccountProfileId_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.extension.any="+encodeURIComponent(changeAccountProfileId_extension_any);
}
if(changeAccountProfileId_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeAccountProfileId.extension.@anyAttributeParam="+encodeURIComponent(changeAccountProfileId_extension_anyAttributeParam);
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

function querySubscriberDetails_AccountManagement(querySubscriberDetails_queryCommonInfo_currencyCode,querySubscriberDetails_queryCommonInfo_pagingInfo_token,querySubscriberDetails_queryCommonInfo_pagingInfo_numRegs,querySubscriberDetails_queryCommonInfo_pagingInfo_extension_any,querySubscriberDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam,querySubscriberDetails_queryCommonInfo_extension_any,querySubscriberDetails_queryCommonInfo_extension_anyAttributeParam,querySubscriberDetails_subscriberId_choice,querySubscriberDetails_extension_any,querySubscriberDetails_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "querySubscriberDetails"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "querySubscriberDetails.subscriberId.choice=" + encodeURIComponent(querySubscriberDetails_subscriberId_choice) + buildHeaders_AccountManagement(headers);
if(querySubscriberDetails_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.queryCommonInfo.currencyCode="+encodeURIComponent(querySubscriberDetails_queryCommonInfo_currencyCode);
}
if(querySubscriberDetails_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.queryCommonInfo.pagingInfo.token="+encodeURIComponent(querySubscriberDetails_queryCommonInfo_pagingInfo_token);
}
if(querySubscriberDetails_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(querySubscriberDetails_queryCommonInfo_pagingInfo_numRegs);
}
if(querySubscriberDetails_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(querySubscriberDetails_queryCommonInfo_pagingInfo_extension_any);
}
if(querySubscriberDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(querySubscriberDetails_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.queryCommonInfo.extension.any="+encodeURIComponent(querySubscriberDetails_queryCommonInfo_extension_any);
}
if(querySubscriberDetails_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberDetails_queryCommonInfo_extension_anyAttributeParam);
}
if(querySubscriberDetails_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.extension.any="+encodeURIComponent(querySubscriberDetails_extension_any);
}
if(querySubscriberDetails_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberDetails.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberDetails_extension_anyAttributeParam);
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

function queryServicePlansBasics_AccountManagement(queryServicePlansBasics_queryCommonInfo_currencyCode,queryServicePlansBasics_queryCommonInfo_pagingInfo_token,queryServicePlansBasics_queryCommonInfo_pagingInfo_numRegs,queryServicePlansBasics_queryCommonInfo_pagingInfo_extension_any,queryServicePlansBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryServicePlansBasics_queryCommonInfo_extension_any,queryServicePlansBasics_queryCommonInfo_extension_anyAttributeParam,queryServicePlansBasics_subscriberId_choice,queryServicePlansBasics_serviceClass,queryServicePlansBasics_extension_any,queryServicePlansBasics_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "queryServicePlansBasics"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryServicePlansBasics.subscriberId.choice=" + encodeURIComponent(queryServicePlansBasics_subscriberId_choice) + Ptf_DIM + "queryServicePlansBasics.serviceClass=" + encodeURIComponent(queryServicePlansBasics_serviceClass) + buildHeaders_AccountManagement(headers);
if(queryServicePlansBasics_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.queryCommonInfo.currencyCode="+encodeURIComponent(queryServicePlansBasics_queryCommonInfo_currencyCode);
}
if(queryServicePlansBasics_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryServicePlansBasics_queryCommonInfo_pagingInfo_token);
}
if(queryServicePlansBasics_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryServicePlansBasics_queryCommonInfo_pagingInfo_numRegs);
}
if(queryServicePlansBasics_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryServicePlansBasics_queryCommonInfo_pagingInfo_extension_any);
}
if(queryServicePlansBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryServicePlansBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryServicePlansBasics_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.queryCommonInfo.extension.any="+encodeURIComponent(queryServicePlansBasics_queryCommonInfo_extension_any);
}
if(queryServicePlansBasics_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryServicePlansBasics_queryCommonInfo_extension_anyAttributeParam);
}
if(queryServicePlansBasics_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.extension.any="+encodeURIComponent(queryServicePlansBasics_extension_any);
}
if(queryServicePlansBasics_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryServicePlansBasics.extension.@anyAttributeParam="+encodeURIComponent(queryServicePlansBasics_extension_anyAttributeParam);
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

function unsubscribeExternalNotifications_AccountManagement(unsubscribeExternalNotifications_actionCommonInfo_appInfo_appId,unsubscribeExternalNotifications_actionCommonInfo_appInfo_reference,unsubscribeExternalNotifications_actionCommonInfo_appInfo_extension_any,unsubscribeExternalNotifications_actionCommonInfo_appInfo_extension_anyAttributeParam,unsubscribeExternalNotifications_actionCommonInfo_userCode,unsubscribeExternalNotifications_actionCommonInfo_opCost,unsubscribeExternalNotifications_actionCommonInfo_opCost_exponent,unsubscribeExternalNotifications_actionCommonInfo_currencyCode,unsubscribeExternalNotifications_actionCommonInfo_extension_any,unsubscribeExternalNotifications_actionCommonInfo_extension_anyAttributeParam,unsubscribeExternalNotifications_subscriberId_choice,unsubscribeExternalNotifications_extNotServer,unsubscribeExternalNotifications_extension_any,unsubscribeExternalNotifications_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "unsubscribeExternalNotifications"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "unsubscribeExternalNotifications.subscriberId.choice=" + encodeURIComponent(unsubscribeExternalNotifications_subscriberId_choice) + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.appInfo.appId=" + encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_appInfo_appId) + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.appInfo.reference=" + encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_appInfo_reference) + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.userCode=" + encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(unsubscribeExternalNotifications_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_appInfo_extension_any);
}
if(unsubscribeExternalNotifications_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(unsubscribeExternalNotifications_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.opCost="+encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_opCost);
}
if(unsubscribeExternalNotifications_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.opCost.@exponent="+encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_opCost_exponent);
}
if(unsubscribeExternalNotifications_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.currencyCode="+encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_currencyCode);
}
if(unsubscribeExternalNotifications_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.extension.any="+encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_extension_any);
}
if(unsubscribeExternalNotifications_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeExternalNotifications_actionCommonInfo_extension_anyAttributeParam);
}
if(unsubscribeExternalNotifications_extNotServer != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.extNotServer="+encodeURIComponent(unsubscribeExternalNotifications_extNotServer);
}
if(unsubscribeExternalNotifications_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.extension.any="+encodeURIComponent(unsubscribeExternalNotifications_extension_any);
}
if(unsubscribeExternalNotifications_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeExternalNotifications.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeExternalNotifications_extension_anyAttributeParam);
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

function createSubscriber_AccountManagement(createSubscriber_actionCommonInfo_appInfo_appId,createSubscriber_actionCommonInfo_appInfo_reference,createSubscriber_actionCommonInfo_appInfo_extension_any,createSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam,createSubscriber_actionCommonInfo_userCode,createSubscriber_actionCommonInfo_opCost,createSubscriber_actionCommonInfo_opCost_exponent,createSubscriber_actionCommonInfo_currencyCode,createSubscriber_actionCommonInfo_extension_any,createSubscriber_actionCommonInfo_extension_anyAttributeParam,createSubscriber_subscriberId_choice,createSubscriber_accountProfileId,createSubscriber_serviceProviderId,createSubscriber_networkCardInfo_imsi,createSubscriber_networkCardInfo_iccNumber,createSubscriber_networkCardInfo_imei,createSubscriber_networkCardInfo_extension_any,createSubscriber_networkCardInfo_extension_anyAttributeParam,createSubscriber_messageNotificationEventFlag,createSubscriber_initialBalance,createSubscriber_initialBalance_exponent,createSubscriber_negativeBalanceUsageFlag,createSubscriber_subscriberExtendedInfo_taxCode,createSubscriber_subscriberExtendedInfo_genericRatingParameter,createSubscriber_subscriberExtendedInfo_subscriptionArea,createSubscriber_subscriberExtendedInfo_ocsreNodeId,createSubscriber_subscriberExtendedInfo_geographicArea,createSubscriber_subscriberExtendedInfo_billingCycleCode,createSubscriber_subscriberExtendedInfo_extension_any,createSubscriber_subscriberExtendedInfo_extension_anyAttributeParam,createSubscriber_extension_any,createSubscriber_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "createSubscriber"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "createSubscriber.subscriberId.choice=" + encodeURIComponent(createSubscriber_subscriberId_choice) + Ptf_DIM + "createSubscriber.actionCommonInfo.appInfo.appId=" + encodeURIComponent(createSubscriber_actionCommonInfo_appInfo_appId) + Ptf_DIM + "createSubscriber.actionCommonInfo.appInfo.reference=" + encodeURIComponent(createSubscriber_actionCommonInfo_appInfo_reference) + Ptf_DIM + "createSubscriber.actionCommonInfo.userCode=" + encodeURIComponent(createSubscriber_actionCommonInfo_userCode) + Ptf_DIM + "createSubscriber.accountProfileId=" + encodeURIComponent(createSubscriber_accountProfileId) + Ptf_DIM + "createSubscriber.serviceProviderId=" + encodeURIComponent(createSubscriber_serviceProviderId) + Ptf_DIM + "createSubscriber.messageNotificationEventFlag=" + encodeURIComponent(createSubscriber_messageNotificationEventFlag) + Ptf_DIM + "createSubscriber.negativeBalanceUsageFlag=" + encodeURIComponent(createSubscriber_negativeBalanceUsageFlag) + buildHeaders_AccountManagement(headers);
if(createSubscriber_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(createSubscriber_actionCommonInfo_appInfo_extension_any);
}
if(createSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(createSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(createSubscriber_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.actionCommonInfo.opCost="+encodeURIComponent(createSubscriber_actionCommonInfo_opCost);
}
if(createSubscriber_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.actionCommonInfo.opCost.@exponent="+encodeURIComponent(createSubscriber_actionCommonInfo_opCost_exponent);
}
if(createSubscriber_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.actionCommonInfo.currencyCode="+encodeURIComponent(createSubscriber_actionCommonInfo_currencyCode);
}
if(createSubscriber_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.actionCommonInfo.extension.any="+encodeURIComponent(createSubscriber_actionCommonInfo_extension_any);
}
if(createSubscriber_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(createSubscriber_actionCommonInfo_extension_anyAttributeParam);
}
if(createSubscriber_networkCardInfo_imsi != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.networkCardInfo.imsi="+encodeURIComponent(createSubscriber_networkCardInfo_imsi);
}
if(createSubscriber_networkCardInfo_iccNumber != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.networkCardInfo.iccNumber="+encodeURIComponent(createSubscriber_networkCardInfo_iccNumber);
}
if(createSubscriber_networkCardInfo_imei != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.networkCardInfo.imei="+encodeURIComponent(createSubscriber_networkCardInfo_imei);
}
if(createSubscriber_networkCardInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.networkCardInfo.extension.any="+encodeURIComponent(createSubscriber_networkCardInfo_extension_any);
}
if(createSubscriber_networkCardInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.networkCardInfo.extension.@anyAttributeParam="+encodeURIComponent(createSubscriber_networkCardInfo_extension_anyAttributeParam);
}
if(createSubscriber_initialBalance != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.initialBalance="+encodeURIComponent(createSubscriber_initialBalance);
}
if(createSubscriber_initialBalance_exponent != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.initialBalance.@exponent="+encodeURIComponent(createSubscriber_initialBalance_exponent);
}
if(createSubscriber_subscriberExtendedInfo_taxCode != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.taxCode="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_taxCode);
}
if(createSubscriber_subscriberExtendedInfo_genericRatingParameter != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.genericRatingParameter="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_genericRatingParameter);
}
if(createSubscriber_subscriberExtendedInfo_subscriptionArea != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.subscriptionArea="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_subscriptionArea);
}
if(createSubscriber_subscriberExtendedInfo_ocsreNodeId != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.ocsreNodeId="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_ocsreNodeId);
}
if(createSubscriber_subscriberExtendedInfo_geographicArea != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.geographicArea="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_geographicArea);
}
if(createSubscriber_subscriberExtendedInfo_billingCycleCode != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.billingCycleCode="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_billingCycleCode);
}
if(createSubscriber_subscriberExtendedInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.extension.any="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_extension_any);
}
if(createSubscriber_subscriberExtendedInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.subscriberExtendedInfo.extension.@anyAttributeParam="+encodeURIComponent(createSubscriber_subscriberExtendedInfo_extension_anyAttributeParam);
}
if(createSubscriber_extension_any != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.extension.any="+encodeURIComponent(createSubscriber_extension_any);
}
if(createSubscriber_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "createSubscriber.extension.@anyAttributeParam="+encodeURIComponent(createSubscriber_extension_anyAttributeParam);
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

function querySegments_AccountManagement(querySegments_queryCommonInfo_currencyCode,querySegments_queryCommonInfo_pagingInfo_token,querySegments_queryCommonInfo_pagingInfo_numRegs,querySegments_queryCommonInfo_pagingInfo_extension_any,querySegments_queryCommonInfo_pagingInfo_extension_anyAttributeParam,querySegments_queryCommonInfo_extension_any,querySegments_queryCommonInfo_extension_anyAttributeParam,querySegments_subscriberId_choice,querySegments_timeInterval_startTime_choice,querySegments_timeInterval_endTime_choice,querySegments_timeInterval_extension_any,querySegments_timeInterval_extension_anyAttributeParam,querySegments_statusFlagFilter,querySegments_extension_any,querySegments_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "querySegments"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "querySegments.subscriberId.choice=" + encodeURIComponent(querySegments_subscriberId_choice) + Ptf_DIM + "querySegments.timeInterval.startTime.choice=" + encodeURIComponent(querySegments_timeInterval_startTime_choice) + Ptf_DIM + "querySegments.timeInterval.endTime.choice=" + encodeURIComponent(querySegments_timeInterval_endTime_choice) + Ptf_DIM + "querySegments.statusFlagFilter=" + encodeURIComponent(querySegments_statusFlagFilter) + buildHeaders_AccountManagement(headers);
if(querySegments_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "querySegments.queryCommonInfo.currencyCode="+encodeURIComponent(querySegments_queryCommonInfo_currencyCode);
}
if(querySegments_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "querySegments.queryCommonInfo.pagingInfo.token="+encodeURIComponent(querySegments_queryCommonInfo_pagingInfo_token);
}
if(querySegments_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "querySegments.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(querySegments_queryCommonInfo_pagingInfo_numRegs);
}
if(querySegments_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySegments.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(querySegments_queryCommonInfo_pagingInfo_extension_any);
}
if(querySegments_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySegments.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(querySegments_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(querySegments_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySegments.queryCommonInfo.extension.any="+encodeURIComponent(querySegments_queryCommonInfo_extension_any);
}
if(querySegments_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySegments.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(querySegments_queryCommonInfo_extension_anyAttributeParam);
}
if(querySegments_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySegments.timeInterval.extension.any="+encodeURIComponent(querySegments_timeInterval_extension_any);
}
if(querySegments_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySegments.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(querySegments_timeInterval_extension_anyAttributeParam);
}
if(querySegments_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySegments.extension.any="+encodeURIComponent(querySegments_extension_any);
}
if(querySegments_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySegments.extension.@anyAttributeParam="+encodeURIComponent(querySegments_extension_anyAttributeParam);
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

function changeExternalSubscriberIds_AccountManagement(changeExternalSubscriberIds_actionCommonInfo_appInfo_appId,changeExternalSubscriberIds_actionCommonInfo_appInfo_reference,changeExternalSubscriberIds_actionCommonInfo_appInfo_extension_any,changeExternalSubscriberIds_actionCommonInfo_appInfo_extension_anyAttributeParam,changeExternalSubscriberIds_actionCommonInfo_userCode,changeExternalSubscriberIds_actionCommonInfo_opCost,changeExternalSubscriberIds_actionCommonInfo_opCost_exponent,changeExternalSubscriberIds_actionCommonInfo_currencyCode,changeExternalSubscriberIds_actionCommonInfo_extension_any,changeExternalSubscriberIds_actionCommonInfo_extension_anyAttributeParam,changeExternalSubscriberIds_subscriberId_choice,changeExternalSubscriberIds_currentExternalSubscriberId_choice,changeExternalSubscriberIds_newExternalSubscriberId_choice,changeExternalSubscriberIds_extension_any,changeExternalSubscriberIds_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeExternalSubscriberIds"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeExternalSubscriberIds.subscriberId.choice=" + encodeURIComponent(changeExternalSubscriberIds_subscriberId_choice) + Ptf_DIM + "changeExternalSubscriberIds.currentExternalSubscriberId.choice=" + encodeURIComponent(changeExternalSubscriberIds_currentExternalSubscriberId_choice) + Ptf_DIM + "changeExternalSubscriberIds.newExternalSubscriberId.choice=" + encodeURIComponent(changeExternalSubscriberIds_newExternalSubscriberId_choice) + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.userCode=" + encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(changeExternalSubscriberIds_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_appInfo_extension_any);
}
if(changeExternalSubscriberIds_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeExternalSubscriberIds_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.opCost="+encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_opCost);
}
if(changeExternalSubscriberIds_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_opCost_exponent);
}
if(changeExternalSubscriberIds_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.currencyCode="+encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_currencyCode);
}
if(changeExternalSubscriberIds_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.extension.any="+encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_extension_any);
}
if(changeExternalSubscriberIds_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeExternalSubscriberIds_actionCommonInfo_extension_anyAttributeParam);
}
if(changeExternalSubscriberIds_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.extension.any="+encodeURIComponent(changeExternalSubscriberIds_extension_any);
}
if(changeExternalSubscriberIds_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeExternalSubscriberIds.extension.@anyAttributeParam="+encodeURIComponent(changeExternalSubscriberIds_extension_anyAttributeParam);
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

function querySubscriberBasics_AccountManagement(querySubscriberBasics_queryCommonInfo_currencyCode,querySubscriberBasics_queryCommonInfo_pagingInfo_token,querySubscriberBasics_queryCommonInfo_pagingInfo_numRegs,querySubscriberBasics_queryCommonInfo_pagingInfo_extension_any,querySubscriberBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam,querySubscriberBasics_queryCommonInfo_extension_any,querySubscriberBasics_queryCommonInfo_extension_anyAttributeParam,querySubscriberBasics_subscriberId_choice,querySubscriberBasics_extension_any,querySubscriberBasics_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "querySubscriberBasics"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "querySubscriberBasics.subscriberId.choice=" + encodeURIComponent(querySubscriberBasics_subscriberId_choice) + buildHeaders_AccountManagement(headers);
if(querySubscriberBasics_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.currencyCode="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_currencyCode);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.token="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_token);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_numRegs);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_any);
}
if(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(querySubscriberBasics_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.extension.any="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_extension_any);
}
if(querySubscriberBasics_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberBasics_queryCommonInfo_extension_anyAttributeParam);
}
if(querySubscriberBasics_extension_any != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.extension.any="+encodeURIComponent(querySubscriberBasics_extension_any);
}
if(querySubscriberBasics_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "querySubscriberBasics.extension.@anyAttributeParam="+encodeURIComponent(querySubscriberBasics_extension_anyAttributeParam);
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

function cancelSubscriberSuspension_AccountManagement(cancelSubscriberSuspension_actionCommonInfo_appInfo_appId,cancelSubscriberSuspension_actionCommonInfo_appInfo_reference,cancelSubscriberSuspension_actionCommonInfo_appInfo_extension_any,cancelSubscriberSuspension_actionCommonInfo_appInfo_extension_anyAttributeParam,cancelSubscriberSuspension_actionCommonInfo_userCode,cancelSubscriberSuspension_actionCommonInfo_opCost,cancelSubscriberSuspension_actionCommonInfo_opCost_exponent,cancelSubscriberSuspension_actionCommonInfo_currencyCode,cancelSubscriberSuspension_actionCommonInfo_extension_any,cancelSubscriberSuspension_actionCommonInfo_extension_anyAttributeParam,cancelSubscriberSuspension_subscriberId_choice,cancelSubscriberSuspension_extension_any,cancelSubscriberSuspension_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "cancelSubscriberSuspension"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "cancelSubscriberSuspension.subscriberId.choice=" + encodeURIComponent(cancelSubscriberSuspension_subscriberId_choice) + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.appInfo.appId=" + encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_appInfo_appId) + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.appInfo.reference=" + encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_appInfo_reference) + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.userCode=" + encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(cancelSubscriberSuspension_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_appInfo_extension_any);
}
if(cancelSubscriberSuspension_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(cancelSubscriberSuspension_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.opCost="+encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_opCost);
}
if(cancelSubscriberSuspension_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.opCost.@exponent="+encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_opCost_exponent);
}
if(cancelSubscriberSuspension_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.currencyCode="+encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_currencyCode);
}
if(cancelSubscriberSuspension_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.extension.any="+encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_extension_any);
}
if(cancelSubscriberSuspension_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(cancelSubscriberSuspension_actionCommonInfo_extension_anyAttributeParam);
}
if(cancelSubscriberSuspension_extension_any != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.extension.any="+encodeURIComponent(cancelSubscriberSuspension_extension_any);
}
if(cancelSubscriberSuspension_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "cancelSubscriberSuspension.extension.@anyAttributeParam="+encodeURIComponent(cancelSubscriberSuspension_extension_anyAttributeParam);
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

function changeSubscriberId_AccountManagement(changeSubscriberId_actionCommonInfo_appInfo_appId,changeSubscriberId_actionCommonInfo_appInfo_reference,changeSubscriberId_actionCommonInfo_appInfo_extension_any,changeSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam,changeSubscriberId_actionCommonInfo_userCode,changeSubscriberId_actionCommonInfo_opCost,changeSubscriberId_actionCommonInfo_opCost_exponent,changeSubscriberId_actionCommonInfo_currencyCode,changeSubscriberId_actionCommonInfo_extension_any,changeSubscriberId_actionCommonInfo_extension_anyAttributeParam,changeSubscriberId_subscriberId_choice,changeSubscriberId_newSubscriberId_choice,changeSubscriberId_portabilityRoutingPrefix,changeSubscriberId_extension_any,changeSubscriberId_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeSubscriberId"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeSubscriberId.subscriberId.choice=" + encodeURIComponent(changeSubscriberId_subscriberId_choice) + Ptf_DIM + "changeSubscriberId.newSubscriberId.choice=" + encodeURIComponent(changeSubscriberId_newSubscriberId_choice) + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeSubscriberId.actionCommonInfo.userCode=" + encodeURIComponent(changeSubscriberId_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(changeSubscriberId_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_extension_any);
}
if(changeSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeSubscriberId_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.opCost="+encodeURIComponent(changeSubscriberId_actionCommonInfo_opCost);
}
if(changeSubscriberId_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeSubscriberId_actionCommonInfo_opCost_exponent);
}
if(changeSubscriberId_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.currencyCode="+encodeURIComponent(changeSubscriberId_actionCommonInfo_currencyCode);
}
if(changeSubscriberId_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.extension.any="+encodeURIComponent(changeSubscriberId_actionCommonInfo_extension_any);
}
if(changeSubscriberId_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberId_actionCommonInfo_extension_anyAttributeParam);
}
if(changeSubscriberId_portabilityRoutingPrefix != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.portabilityRoutingPrefix="+encodeURIComponent(changeSubscriberId_portabilityRoutingPrefix);
}
if(changeSubscriberId_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.extension.any="+encodeURIComponent(changeSubscriberId_extension_any);
}
if(changeSubscriberId_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberId_extension_anyAttributeParam);
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

function notifyPortability_AccountManagement(notifyPortability_actionCommonInfo_appInfo_appId,notifyPortability_actionCommonInfo_appInfo_reference,notifyPortability_actionCommonInfo_appInfo_extension_any,notifyPortability_actionCommonInfo_appInfo_extension_anyAttributeParam,notifyPortability_actionCommonInfo_userCode,notifyPortability_actionCommonInfo_opCost,notifyPortability_actionCommonInfo_opCost_exponent,notifyPortability_actionCommonInfo_currencyCode,notifyPortability_actionCommonInfo_extension_any,notifyPortability_actionCommonInfo_extension_anyAttributeParam,notifyPortability_subscriberId_choice,notifyPortability_opPortabilityId,notifyPortability_originNetworkCode,notifyPortability_destinationNetworkCode,notifyPortability_extension_any,notifyPortability_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "notifyPortability"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "notifyPortability.subscriberId.choice=" + encodeURIComponent(notifyPortability_subscriberId_choice) + Ptf_DIM + "notifyPortability.actionCommonInfo.appInfo.appId=" + encodeURIComponent(notifyPortability_actionCommonInfo_appInfo_appId) + Ptf_DIM + "notifyPortability.actionCommonInfo.appInfo.reference=" + encodeURIComponent(notifyPortability_actionCommonInfo_appInfo_reference) + Ptf_DIM + "notifyPortability.actionCommonInfo.userCode=" + encodeURIComponent(notifyPortability_actionCommonInfo_userCode) + Ptf_DIM + "notifyPortability.opPortabilityId=" + encodeURIComponent(notifyPortability_opPortabilityId) + buildHeaders_AccountManagement(headers);
if(notifyPortability_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(notifyPortability_actionCommonInfo_appInfo_extension_any);
}
if(notifyPortability_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(notifyPortability_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(notifyPortability_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.actionCommonInfo.opCost="+encodeURIComponent(notifyPortability_actionCommonInfo_opCost);
}
if(notifyPortability_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.actionCommonInfo.opCost.@exponent="+encodeURIComponent(notifyPortability_actionCommonInfo_opCost_exponent);
}
if(notifyPortability_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.actionCommonInfo.currencyCode="+encodeURIComponent(notifyPortability_actionCommonInfo_currencyCode);
}
if(notifyPortability_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.actionCommonInfo.extension.any="+encodeURIComponent(notifyPortability_actionCommonInfo_extension_any);
}
if(notifyPortability_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(notifyPortability_actionCommonInfo_extension_anyAttributeParam);
}
if(notifyPortability_originNetworkCode != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.originNetworkCode="+encodeURIComponent(notifyPortability_originNetworkCode);
}
if(notifyPortability_destinationNetworkCode != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.destinationNetworkCode="+encodeURIComponent(notifyPortability_destinationNetworkCode);
}
if(notifyPortability_extension_any != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.extension.any="+encodeURIComponent(notifyPortability_extension_any);
}
if(notifyPortability_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "notifyPortability.extension.@anyAttributeParam="+encodeURIComponent(notifyPortability_extension_anyAttributeParam);
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

function changeTariffPlanId_AccountManagement(changeTariffPlanId_actionCommonInfo_appInfo_appId,changeTariffPlanId_actionCommonInfo_appInfo_reference,changeTariffPlanId_actionCommonInfo_appInfo_extension_any,changeTariffPlanId_actionCommonInfo_appInfo_extension_anyAttributeParam,changeTariffPlanId_actionCommonInfo_userCode,changeTariffPlanId_actionCommonInfo_opCost,changeTariffPlanId_actionCommonInfo_opCost_exponent,changeTariffPlanId_actionCommonInfo_currencyCode,changeTariffPlanId_actionCommonInfo_extension_any,changeTariffPlanId_actionCommonInfo_extension_anyAttributeParam,changeTariffPlanId_subscriberId_choice,changeTariffPlanId_tariffPlanId,changeTariffPlanId_timeInterval_startTime_choice,changeTariffPlanId_timeInterval_endTime_choice,changeTariffPlanId_timeInterval_extension_any,changeTariffPlanId_timeInterval_extension_anyAttributeParam,changeTariffPlanId_extension_any,changeTariffPlanId_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeTariffPlanId"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeTariffPlanId.subscriberId.choice=" + encodeURIComponent(changeTariffPlanId_subscriberId_choice) + Ptf_DIM + "changeTariffPlanId.timeInterval.startTime.choice=" + encodeURIComponent(changeTariffPlanId_timeInterval_startTime_choice) + Ptf_DIM + "changeTariffPlanId.timeInterval.endTime.choice=" + encodeURIComponent(changeTariffPlanId_timeInterval_endTime_choice) + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeTariffPlanId_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeTariffPlanId_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.userCode=" + encodeURIComponent(changeTariffPlanId_actionCommonInfo_userCode) + Ptf_DIM + "changeTariffPlanId.tariffPlanId=" + encodeURIComponent(changeTariffPlanId_tariffPlanId) + buildHeaders_AccountManagement(headers);
if(changeTariffPlanId_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeTariffPlanId_actionCommonInfo_appInfo_extension_any);
}
if(changeTariffPlanId_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeTariffPlanId_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeTariffPlanId_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.opCost="+encodeURIComponent(changeTariffPlanId_actionCommonInfo_opCost);
}
if(changeTariffPlanId_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeTariffPlanId_actionCommonInfo_opCost_exponent);
}
if(changeTariffPlanId_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.currencyCode="+encodeURIComponent(changeTariffPlanId_actionCommonInfo_currencyCode);
}
if(changeTariffPlanId_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.extension.any="+encodeURIComponent(changeTariffPlanId_actionCommonInfo_extension_any);
}
if(changeTariffPlanId_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeTariffPlanId_actionCommonInfo_extension_anyAttributeParam);
}
if(changeTariffPlanId_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.timeInterval.extension.any="+encodeURIComponent(changeTariffPlanId_timeInterval_extension_any);
}
if(changeTariffPlanId_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(changeTariffPlanId_timeInterval_extension_anyAttributeParam);
}
if(changeTariffPlanId_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.extension.any="+encodeURIComponent(changeTariffPlanId_extension_any);
}
if(changeTariffPlanId_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeTariffPlanId.extension.@anyAttributeParam="+encodeURIComponent(changeTariffPlanId_extension_anyAttributeParam);
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

function changeSubscriber_AccountManagement(changeSubscriberBillingCycle_actionCommonInfo_appInfo_appId,changeSubscriberBillingCycle_actionCommonInfo_appInfo_reference,changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_any,changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_anyAttributeParam,changeSubscriberBillingCycle_actionCommonInfo_userCode,changeSubscriberBillingCycle_actionCommonInfo_opCost,changeSubscriberBillingCycle_actionCommonInfo_opCost_exponent,changeSubscriberBillingCycle_actionCommonInfo_currencyCode,changeSubscriberBillingCycle_actionCommonInfo_extension_any,changeSubscriberBillingCycle_actionCommonInfo_extension_anyAttributeParam,changeSubscriberBillingCycle_subscriberId_choice,changeSubscriberBillingCycle_billingCycleCode,changeSubscriberBillingCycle_immediateFlag,changeSubscriberBillingCycle_chargingModality,changeSubscriberBillingCycle_extension_any,changeSubscriberBillingCycle_extension_anyAttributeParam,changeSubscriberId_actionCommonInfo_appInfo_appId,changeSubscriberId_actionCommonInfo_appInfo_reference,changeSubscriberId_actionCommonInfo_appInfo_extension_any,changeSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam,changeSubscriberId_actionCommonInfo_userCode,changeSubscriberId_actionCommonInfo_opCost,changeSubscriberId_actionCommonInfo_opCost_exponent,changeSubscriberId_actionCommonInfo_currencyCode,changeSubscriberId_actionCommonInfo_extension_any,changeSubscriberId_actionCommonInfo_extension_anyAttributeParam,changeSubscriberId_subscriberId_choice,changeSubscriberId_newSubscriberId_choice,changeSubscriberId_portabilityRoutingPrefix,changeSubscriberId_extension_any,changeSubscriberId_extension_anyAttributeParam,changeSubscriber_actionCommonInfo_appInfo_appId,changeSubscriber_actionCommonInfo_appInfo_reference,changeSubscriber_actionCommonInfo_appInfo_extension_any,changeSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam,changeSubscriber_actionCommonInfo_userCode,changeSubscriber_actionCommonInfo_opCost,changeSubscriber_actionCommonInfo_opCost_exponent,changeSubscriber_actionCommonInfo_currencyCode,changeSubscriber_actionCommonInfo_extension_any,changeSubscriber_actionCommonInfo_extension_anyAttributeParam,changeSubscriber_subscriberId_choice,changeSubscriber_networkCardInfo_imsi,changeSubscriber_networkCardInfo_iccNumber,changeSubscriber_networkCardInfo_imei,changeSubscriber_networkCardInfo_extension_any,changeSubscriber_networkCardInfo_extension_anyAttributeParam,changeSubscriber_messageNotificationEventFlag,changeSubscriber_negativeBalanceUsageFlag,changeSubscriber_subscriberExtendedInfo_taxCode,changeSubscriber_subscriberExtendedInfo_genericRatingParameter,changeSubscriber_subscriberExtendedInfo_subscriptionArea,changeSubscriber_subscriberExtendedInfo_ocsreNodeId,changeSubscriber_subscriberExtendedInfo_geographicArea,changeSubscriber_subscriberExtendedInfo_billingCycleCode,changeSubscriber_subscriberExtendedInfo_extension_any,changeSubscriber_subscriberExtendedInfo_extension_anyAttributeParam,changeSubscriber_actionCauseCode,changeSubscriber_extension_any,changeSubscriber_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "changeSubscriber"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "changeSubscriberBillingCycle.subscriberId.choice=" + encodeURIComponent(changeSubscriberBillingCycle_subscriberId_choice) + Ptf_DIM + "changeSubscriberId.subscriberId.choice=" + encodeURIComponent(changeSubscriberId_subscriberId_choice) + Ptf_DIM + "changeSubscriberId.newSubscriberId.choice=" + encodeURIComponent(changeSubscriberId_newSubscriberId_choice) + Ptf_DIM + "changeSubscriber.subscriberId.choice=" + encodeURIComponent(changeSubscriber_subscriberId_choice) + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.userCode=" + encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_userCode) + Ptf_DIM + "changeSubscriberBillingCycle.billingCycleCode=" + encodeURIComponent(changeSubscriberBillingCycle_billingCycleCode) + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeSubscriberId.actionCommonInfo.userCode=" + encodeURIComponent(changeSubscriberId_actionCommonInfo_userCode) + Ptf_DIM + "changeSubscriber.actionCommonInfo.appInfo.appId=" + encodeURIComponent(changeSubscriber_actionCommonInfo_appInfo_appId) + Ptf_DIM + "changeSubscriber.actionCommonInfo.appInfo.reference=" + encodeURIComponent(changeSubscriber_actionCommonInfo_appInfo_reference) + Ptf_DIM + "changeSubscriber.actionCommonInfo.userCode=" + encodeURIComponent(changeSubscriber_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_any);
}
if(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeSubscriberBillingCycle_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.opCost="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_opCost);
}
if(changeSubscriberBillingCycle_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_opCost_exponent);
}
if(changeSubscriberBillingCycle_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.currencyCode="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_currencyCode);
}
if(changeSubscriberBillingCycle_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.extension.any="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_extension_any);
}
if(changeSubscriberBillingCycle_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberBillingCycle_actionCommonInfo_extension_anyAttributeParam);
}
if(changeSubscriberBillingCycle_immediateFlag != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.immediateFlag="+encodeURIComponent(changeSubscriberBillingCycle_immediateFlag);
}
if(changeSubscriberBillingCycle_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.chargingModality="+encodeURIComponent(changeSubscriberBillingCycle_chargingModality);
}
if(changeSubscriberBillingCycle_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.extension.any="+encodeURIComponent(changeSubscriberBillingCycle_extension_any);
}
if(changeSubscriberBillingCycle_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberBillingCycle.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberBillingCycle_extension_anyAttributeParam);
}
if(changeSubscriberId_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_extension_any);
}
if(changeSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberId_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeSubscriberId_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.opCost="+encodeURIComponent(changeSubscriberId_actionCommonInfo_opCost);
}
if(changeSubscriberId_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeSubscriberId_actionCommonInfo_opCost_exponent);
}
if(changeSubscriberId_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.currencyCode="+encodeURIComponent(changeSubscriberId_actionCommonInfo_currencyCode);
}
if(changeSubscriberId_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.extension.any="+encodeURIComponent(changeSubscriberId_actionCommonInfo_extension_any);
}
if(changeSubscriberId_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberId_actionCommonInfo_extension_anyAttributeParam);
}
if(changeSubscriberId_portabilityRoutingPrefix != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.portabilityRoutingPrefix="+encodeURIComponent(changeSubscriberId_portabilityRoutingPrefix);
}
if(changeSubscriberId_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.extension.any="+encodeURIComponent(changeSubscriberId_extension_any);
}
if(changeSubscriberId_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriberId.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriberId_extension_anyAttributeParam);
}
if(changeSubscriber_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(changeSubscriber_actionCommonInfo_appInfo_extension_any);
}
if(changeSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(changeSubscriber_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCommonInfo.opCost="+encodeURIComponent(changeSubscriber_actionCommonInfo_opCost);
}
if(changeSubscriber_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCommonInfo.opCost.@exponent="+encodeURIComponent(changeSubscriber_actionCommonInfo_opCost_exponent);
}
if(changeSubscriber_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCommonInfo.currencyCode="+encodeURIComponent(changeSubscriber_actionCommonInfo_currencyCode);
}
if(changeSubscriber_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCommonInfo.extension.any="+encodeURIComponent(changeSubscriber_actionCommonInfo_extension_any);
}
if(changeSubscriber_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriber_actionCommonInfo_extension_anyAttributeParam);
}
if(changeSubscriber_networkCardInfo_imsi != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.networkCardInfo.imsi="+encodeURIComponent(changeSubscriber_networkCardInfo_imsi);
}
if(changeSubscriber_networkCardInfo_iccNumber != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.networkCardInfo.iccNumber="+encodeURIComponent(changeSubscriber_networkCardInfo_iccNumber);
}
if(changeSubscriber_networkCardInfo_imei != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.networkCardInfo.imei="+encodeURIComponent(changeSubscriber_networkCardInfo_imei);
}
if(changeSubscriber_networkCardInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.networkCardInfo.extension.any="+encodeURIComponent(changeSubscriber_networkCardInfo_extension_any);
}
if(changeSubscriber_networkCardInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.networkCardInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriber_networkCardInfo_extension_anyAttributeParam);
}
if(changeSubscriber_messageNotificationEventFlag != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.messageNotificationEventFlag="+encodeURIComponent(changeSubscriber_messageNotificationEventFlag);
}
if(changeSubscriber_negativeBalanceUsageFlag != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.negativeBalanceUsageFlag="+encodeURIComponent(changeSubscriber_negativeBalanceUsageFlag);
}
if(changeSubscriber_subscriberExtendedInfo_taxCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.taxCode="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_taxCode);
}
if(changeSubscriber_subscriberExtendedInfo_genericRatingParameter != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.genericRatingParameter="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_genericRatingParameter);
}
if(changeSubscriber_subscriberExtendedInfo_subscriptionArea != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.subscriptionArea="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_subscriptionArea);
}
if(changeSubscriber_subscriberExtendedInfo_ocsreNodeId != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.ocsreNodeId="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_ocsreNodeId);
}
if(changeSubscriber_subscriberExtendedInfo_geographicArea != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.geographicArea="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_geographicArea);
}
if(changeSubscriber_subscriberExtendedInfo_billingCycleCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.billingCycleCode="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_billingCycleCode);
}
if(changeSubscriber_subscriberExtendedInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.extension.any="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_extension_any);
}
if(changeSubscriber_subscriberExtendedInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.subscriberExtendedInfo.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriber_subscriberExtendedInfo_extension_anyAttributeParam);
}
if(changeSubscriber_actionCauseCode != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.actionCauseCode="+encodeURIComponent(changeSubscriber_actionCauseCode);
}
if(changeSubscriber_extension_any != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.extension.any="+encodeURIComponent(changeSubscriber_extension_any);
}
if(changeSubscriber_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "changeSubscriber.extension.@anyAttributeParam="+encodeURIComponent(changeSubscriber_extension_anyAttributeParam);
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

function suspendSubscriber_AccountManagement(suspendSubscriber_actionCommonInfo_appInfo_appId,suspendSubscriber_actionCommonInfo_appInfo_reference,suspendSubscriber_actionCommonInfo_appInfo_extension_any,suspendSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam,suspendSubscriber_actionCommonInfo_userCode,suspendSubscriber_actionCommonInfo_opCost,suspendSubscriber_actionCommonInfo_opCost_exponent,suspendSubscriber_actionCommonInfo_currencyCode,suspendSubscriber_actionCommonInfo_extension_any,suspendSubscriber_actionCommonInfo_extension_anyAttributeParam,suspendSubscriber_subscriberId_choice,suspendSubscriber_actionCauseCode,suspendSubscriber_extension_any,suspendSubscriber_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = AccountManagement.AS_URL + '?' + "_service=" + AccountManagement.service + Ptf_DIM + "_application=" + AccountManagement.application + Ptf_DIM + "_operation=" + "suspendSubscriber"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "suspendSubscriber.subscriberId.choice=" + encodeURIComponent(suspendSubscriber_subscriberId_choice) + Ptf_DIM + "suspendSubscriber.actionCommonInfo.appInfo.appId=" + encodeURIComponent(suspendSubscriber_actionCommonInfo_appInfo_appId) + Ptf_DIM + "suspendSubscriber.actionCommonInfo.appInfo.reference=" + encodeURIComponent(suspendSubscriber_actionCommonInfo_appInfo_reference) + Ptf_DIM + "suspendSubscriber.actionCommonInfo.userCode=" + encodeURIComponent(suspendSubscriber_actionCommonInfo_userCode) + buildHeaders_AccountManagement(headers);
if(suspendSubscriber_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(suspendSubscriber_actionCommonInfo_appInfo_extension_any);
}
if(suspendSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(suspendSubscriber_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(suspendSubscriber_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCommonInfo.opCost="+encodeURIComponent(suspendSubscriber_actionCommonInfo_opCost);
}
if(suspendSubscriber_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCommonInfo.opCost.@exponent="+encodeURIComponent(suspendSubscriber_actionCommonInfo_opCost_exponent);
}
if(suspendSubscriber_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCommonInfo.currencyCode="+encodeURIComponent(suspendSubscriber_actionCommonInfo_currencyCode);
}
if(suspendSubscriber_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCommonInfo.extension.any="+encodeURIComponent(suspendSubscriber_actionCommonInfo_extension_any);
}
if(suspendSubscriber_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(suspendSubscriber_actionCommonInfo_extension_anyAttributeParam);
}
if(suspendSubscriber_actionCauseCode != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.actionCauseCode="+encodeURIComponent(suspendSubscriber_actionCauseCode);
}
if(suspendSubscriber_extension_any != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.extension.any="+encodeURIComponent(suspendSubscriber_extension_any);
}
if(suspendSubscriber_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "suspendSubscriber.extension.@anyAttributeParam="+encodeURIComponent(suspendSubscriber_extension_anyAttributeParam);
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

