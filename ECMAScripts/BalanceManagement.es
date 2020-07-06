
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_BalanceManagement(headers) {
	
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
function balanceTransfer_BalanceManagement(balanceTransfer_actionCommonInfo_appInfo_appId,balanceTransfer_actionCommonInfo_appInfo_reference,balanceTransfer_actionCommonInfo_appInfo_extension_any,balanceTransfer_actionCommonInfo_appInfo_extension_anyAttributeParam,balanceTransfer_actionCommonInfo_userCode,balanceTransfer_actionCommonInfo_opCost,balanceTransfer_actionCommonInfo_opCost_exponent,balanceTransfer_actionCommonInfo_currencyCode,balanceTransfer_actionCommonInfo_extension_any,balanceTransfer_actionCommonInfo_extension_anyAttributeParam,balanceTransfer_donorSubscriberId_choice,balanceTransfer_receiverSubscriberId_choice,balanceTransfer_payer,balanceTransfer_balanceTransferInfo_transferAmount,balanceTransfer_balanceTransferInfo_transferAmount_exponent,balanceTransfer_balanceTransferInfo_transferCost,balanceTransfer_balanceTransferInfo_transferCost_exponent,balanceTransfer_balanceTransferInfo_transferWalletId,balanceTransfer_balanceTransferInfo_topUpOriginOrBoltonIdentifier,balanceTransfer_balanceTransferInfo_extension_any,balanceTransfer_balanceTransferInfo_extension_anyAttributeParam,balanceTransfer_extension_any,balanceTransfer_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "balanceTransfer"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "balanceTransfer.donorSubscriberId.choice=" + encodeURIComponent(balanceTransfer_donorSubscriberId_choice) + Ptf_DIM + "balanceTransfer.receiverSubscriberId.choice=" + encodeURIComponent(balanceTransfer_receiverSubscriberId_choice) + Ptf_DIM + "balanceTransfer.actionCommonInfo.appInfo.appId=" + encodeURIComponent(balanceTransfer_actionCommonInfo_appInfo_appId) + Ptf_DIM + "balanceTransfer.actionCommonInfo.appInfo.reference=" + encodeURIComponent(balanceTransfer_actionCommonInfo_appInfo_reference) + Ptf_DIM + "balanceTransfer.actionCommonInfo.userCode=" + encodeURIComponent(balanceTransfer_actionCommonInfo_userCode) + Ptf_DIM + "balanceTransfer.payer=" + encodeURIComponent(balanceTransfer_payer) + buildHeaders_BalanceManagement(headers);
if(balanceTransfer_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(balanceTransfer_actionCommonInfo_appInfo_extension_any);
}
if(balanceTransfer_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(balanceTransfer_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(balanceTransfer_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.actionCommonInfo.opCost="+encodeURIComponent(balanceTransfer_actionCommonInfo_opCost);
}
if(balanceTransfer_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.actionCommonInfo.opCost.@exponent="+encodeURIComponent(balanceTransfer_actionCommonInfo_opCost_exponent);
}
if(balanceTransfer_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.actionCommonInfo.currencyCode="+encodeURIComponent(balanceTransfer_actionCommonInfo_currencyCode);
}
if(balanceTransfer_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.actionCommonInfo.extension.any="+encodeURIComponent(balanceTransfer_actionCommonInfo_extension_any);
}
if(balanceTransfer_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(balanceTransfer_actionCommonInfo_extension_anyAttributeParam);
}
if(balanceTransfer_balanceTransferInfo_transferAmount != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.transferAmount="+encodeURIComponent(balanceTransfer_balanceTransferInfo_transferAmount);
}
if(balanceTransfer_balanceTransferInfo_transferAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.transferAmount.@exponent="+encodeURIComponent(balanceTransfer_balanceTransferInfo_transferAmount_exponent);
}
if(balanceTransfer_balanceTransferInfo_transferCost != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.transferCost="+encodeURIComponent(balanceTransfer_balanceTransferInfo_transferCost);
}
if(balanceTransfer_balanceTransferInfo_transferCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.transferCost.@exponent="+encodeURIComponent(balanceTransfer_balanceTransferInfo_transferCost_exponent);
}
if(balanceTransfer_balanceTransferInfo_transferWalletId != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.transferWalletId="+encodeURIComponent(balanceTransfer_balanceTransferInfo_transferWalletId);
}
if(balanceTransfer_balanceTransferInfo_topUpOriginOrBoltonIdentifier != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.topUpOriginOrBoltonIdentifier="+encodeURIComponent(balanceTransfer_balanceTransferInfo_topUpOriginOrBoltonIdentifier);
}
if(balanceTransfer_balanceTransferInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.extension.any="+encodeURIComponent(balanceTransfer_balanceTransferInfo_extension_any);
}
if(balanceTransfer_balanceTransferInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.balanceTransferInfo.extension.@anyAttributeParam="+encodeURIComponent(balanceTransfer_balanceTransferInfo_extension_anyAttributeParam);
}
if(balanceTransfer_extension_any != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.extension.any="+encodeURIComponent(balanceTransfer_extension_any);
}
if(balanceTransfer_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "balanceTransfer.extension.@anyAttributeParam="+encodeURIComponent(balanceTransfer_extension_anyAttributeParam);
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

function queryTopUpsDetails_BalanceManagement(queryTopUpsDetails_queryCommonInfo_currencyCode,queryTopUpsDetails_queryCommonInfo_pagingInfo_token,queryTopUpsDetails_queryCommonInfo_pagingInfo_numRegs,queryTopUpsDetails_queryCommonInfo_pagingInfo_extension_any,queryTopUpsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryTopUpsDetails_queryCommonInfo_extension_any,queryTopUpsDetails_queryCommonInfo_extension_anyAttributeParam,queryTopUpsDetails_subscriberId_choice,queryTopUpsDetails_timeInterval_startTime_choice,queryTopUpsDetails_timeInterval_endTime_choice,queryTopUpsDetails_timeInterval_extension_any,queryTopUpsDetails_timeInterval_extension_anyAttributeParam,queryTopUpsDetails_topUpReferenceCode,queryTopUpsDetails_opStatus,queryTopUpsDetails_topUpOrigin,queryTopUpsDetails_extension_any,queryTopUpsDetails_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "queryTopUpsDetails"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryTopUpsDetails.subscriberId.choice=" + encodeURIComponent(queryTopUpsDetails_subscriberId_choice) + Ptf_DIM + "queryTopUpsDetails.timeInterval.startTime.choice=" + encodeURIComponent(queryTopUpsDetails_timeInterval_startTime_choice) + Ptf_DIM + "queryTopUpsDetails.timeInterval.endTime.choice=" + encodeURIComponent(queryTopUpsDetails_timeInterval_endTime_choice) + buildHeaders_BalanceManagement(headers);
if(queryTopUpsDetails_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.queryCommonInfo.currencyCode="+encodeURIComponent(queryTopUpsDetails_queryCommonInfo_currencyCode);
}
if(queryTopUpsDetails_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryTopUpsDetails_queryCommonInfo_pagingInfo_token);
}
if(queryTopUpsDetails_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryTopUpsDetails_queryCommonInfo_pagingInfo_numRegs);
}
if(queryTopUpsDetails_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryTopUpsDetails_queryCommonInfo_pagingInfo_extension_any);
}
if(queryTopUpsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryTopUpsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryTopUpsDetails_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.queryCommonInfo.extension.any="+encodeURIComponent(queryTopUpsDetails_queryCommonInfo_extension_any);
}
if(queryTopUpsDetails_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryTopUpsDetails_queryCommonInfo_extension_anyAttributeParam);
}
if(queryTopUpsDetails_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.timeInterval.extension.any="+encodeURIComponent(queryTopUpsDetails_timeInterval_extension_any);
}
if(queryTopUpsDetails_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(queryTopUpsDetails_timeInterval_extension_anyAttributeParam);
}
if(queryTopUpsDetails_topUpReferenceCode != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.topUpReferenceCode="+encodeURIComponent(queryTopUpsDetails_topUpReferenceCode);
}
if(queryTopUpsDetails_opStatus != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.opStatus="+encodeURIComponent(queryTopUpsDetails_opStatus);
}
if(queryTopUpsDetails_topUpOrigin != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.topUpOrigin="+encodeURIComponent(queryTopUpsDetails_topUpOrigin);
}
if(queryTopUpsDetails_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.extension.any="+encodeURIComponent(queryTopUpsDetails_extension_any);
}
if(queryTopUpsDetails_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryTopUpsDetails.extension.@anyAttributeParam="+encodeURIComponent(queryTopUpsDetails_extension_anyAttributeParam);
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

function queryBalanceAdjustment_BalanceManagement(queryBalanceAdjustment_queryCommonInfo_currencyCode,queryBalanceAdjustment_queryCommonInfo_pagingInfo_token,queryBalanceAdjustment_queryCommonInfo_pagingInfo_numRegs,queryBalanceAdjustment_queryCommonInfo_pagingInfo_extension_any,queryBalanceAdjustment_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryBalanceAdjustment_queryCommonInfo_extension_any,queryBalanceAdjustment_queryCommonInfo_extension_anyAttributeParam,queryBalanceAdjustment_subscriberId_choice,queryBalanceAdjustment_opReference_opId,queryBalanceAdjustment_opReference_opSubIdList_opId,queryBalanceAdjustment_opReference_opSubIdList_extension_any,queryBalanceAdjustment_opReference_opSubIdList_extension_anyAttributeParam,queryBalanceAdjustment_opReference_extension_any,queryBalanceAdjustment_opReference_extension_anyAttributeParam,queryBalanceAdjustment_fixingReferenceCode,queryBalanceAdjustment_timeInterval_startTime_choice,queryBalanceAdjustment_timeInterval_endTime_choice,queryBalanceAdjustment_timeInterval_extension_any,queryBalanceAdjustment_timeInterval_extension_anyAttributeParam,queryBalanceAdjustment_extension_any,queryBalanceAdjustment_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "queryBalanceAdjustment"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryBalanceAdjustment.subscriberId.choice=" + encodeURIComponent(queryBalanceAdjustment_subscriberId_choice) + Ptf_DIM + "queryBalanceAdjustment.timeInterval.startTime.choice=" + encodeURIComponent(queryBalanceAdjustment_timeInterval_startTime_choice) + Ptf_DIM + "queryBalanceAdjustment.timeInterval.endTime.choice=" + encodeURIComponent(queryBalanceAdjustment_timeInterval_endTime_choice) + Ptf_DIM + "queryBalanceAdjustment.opReference.opId=" + encodeURIComponent(queryBalanceAdjustment_opReference_opId) + Ptf_DIM + "queryBalanceAdjustment.opReference.opSubIdList.opId=" + encodeURIComponent(queryBalanceAdjustment_opReference_opSubIdList_opId) + buildHeaders_BalanceManagement(headers);
if(queryBalanceAdjustment_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.queryCommonInfo.currencyCode="+encodeURIComponent(queryBalanceAdjustment_queryCommonInfo_currencyCode);
}
if(queryBalanceAdjustment_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryBalanceAdjustment_queryCommonInfo_pagingInfo_token);
}
if(queryBalanceAdjustment_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryBalanceAdjustment_queryCommonInfo_pagingInfo_numRegs);
}
if(queryBalanceAdjustment_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryBalanceAdjustment_queryCommonInfo_pagingInfo_extension_any);
}
if(queryBalanceAdjustment_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceAdjustment_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryBalanceAdjustment_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.queryCommonInfo.extension.any="+encodeURIComponent(queryBalanceAdjustment_queryCommonInfo_extension_any);
}
if(queryBalanceAdjustment_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceAdjustment_queryCommonInfo_extension_anyAttributeParam);
}
if(queryBalanceAdjustment_opReference_opSubIdList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.opReference.opSubIdList.extension.any="+encodeURIComponent(queryBalanceAdjustment_opReference_opSubIdList_extension_any);
}
if(queryBalanceAdjustment_opReference_opSubIdList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.opReference.opSubIdList.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceAdjustment_opReference_opSubIdList_extension_anyAttributeParam);
}
if(queryBalanceAdjustment_opReference_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.opReference.extension.any="+encodeURIComponent(queryBalanceAdjustment_opReference_extension_any);
}
if(queryBalanceAdjustment_opReference_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.opReference.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceAdjustment_opReference_extension_anyAttributeParam);
}
if(queryBalanceAdjustment_fixingReferenceCode != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.fixingReferenceCode="+encodeURIComponent(queryBalanceAdjustment_fixingReferenceCode);
}
if(queryBalanceAdjustment_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.timeInterval.extension.any="+encodeURIComponent(queryBalanceAdjustment_timeInterval_extension_any);
}
if(queryBalanceAdjustment_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceAdjustment_timeInterval_extension_anyAttributeParam);
}
if(queryBalanceAdjustment_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.extension.any="+encodeURIComponent(queryBalanceAdjustment_extension_any);
}
if(queryBalanceAdjustment_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceAdjustment.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceAdjustment_extension_anyAttributeParam);
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

function queryBalanceTransferBasics_BalanceManagement(queryBalanceTransferBasics_queryCommonInfo_currencyCode,queryBalanceTransferBasics_queryCommonInfo_pagingInfo_token,queryBalanceTransferBasics_queryCommonInfo_pagingInfo_numRegs,queryBalanceTransferBasics_queryCommonInfo_pagingInfo_extension_any,queryBalanceTransferBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryBalanceTransferBasics_queryCommonInfo_extension_any,queryBalanceTransferBasics_queryCommonInfo_extension_anyAttributeParam,queryBalanceTransferBasics_opReference_opId,queryBalanceTransferBasics_opReference_opSubIdList_opId,queryBalanceTransferBasics_opReference_opSubIdList_extension_any,queryBalanceTransferBasics_opReference_opSubIdList_extension_anyAttributeParam,queryBalanceTransferBasics_opReference_extension_any,queryBalanceTransferBasics_opReference_extension_anyAttributeParam,queryBalanceTransferBasics_extension_any,queryBalanceTransferBasics_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "queryBalanceTransferBasics"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryBalanceTransferBasics.opReference.opId=" + encodeURIComponent(queryBalanceTransferBasics_opReference_opId) + Ptf_DIM + "queryBalanceTransferBasics.opReference.opSubIdList.opId=" + encodeURIComponent(queryBalanceTransferBasics_opReference_opSubIdList_opId) + buildHeaders_BalanceManagement(headers);
if(queryBalanceTransferBasics_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.queryCommonInfo.currencyCode="+encodeURIComponent(queryBalanceTransferBasics_queryCommonInfo_currencyCode);
}
if(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_token);
}
if(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_numRegs);
}
if(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_extension_any);
}
if(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceTransferBasics_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryBalanceTransferBasics_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.queryCommonInfo.extension.any="+encodeURIComponent(queryBalanceTransferBasics_queryCommonInfo_extension_any);
}
if(queryBalanceTransferBasics_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceTransferBasics_queryCommonInfo_extension_anyAttributeParam);
}
if(queryBalanceTransferBasics_opReference_opSubIdList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.opReference.opSubIdList.extension.any="+encodeURIComponent(queryBalanceTransferBasics_opReference_opSubIdList_extension_any);
}
if(queryBalanceTransferBasics_opReference_opSubIdList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.opReference.opSubIdList.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceTransferBasics_opReference_opSubIdList_extension_anyAttributeParam);
}
if(queryBalanceTransferBasics_opReference_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.opReference.extension.any="+encodeURIComponent(queryBalanceTransferBasics_opReference_extension_any);
}
if(queryBalanceTransferBasics_opReference_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.opReference.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceTransferBasics_opReference_extension_anyAttributeParam);
}
if(queryBalanceTransferBasics_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.extension.any="+encodeURIComponent(queryBalanceTransferBasics_extension_any);
}
if(queryBalanceTransferBasics_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalanceTransferBasics.extension.@anyAttributeParam="+encodeURIComponent(queryBalanceTransferBasics_extension_anyAttributeParam);
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

function topUpAccount_BalanceManagement(topUpAccount_actionCommonInfo_appInfo_appId,topUpAccount_actionCommonInfo_appInfo_reference,topUpAccount_actionCommonInfo_appInfo_extension_any,topUpAccount_actionCommonInfo_appInfo_extension_anyAttributeParam,topUpAccount_actionCommonInfo_userCode,topUpAccount_actionCommonInfo_opCost,topUpAccount_actionCommonInfo_opCost_exponent,topUpAccount_actionCommonInfo_currencyCode,topUpAccount_actionCommonInfo_extension_any,topUpAccount_actionCommonInfo_extension_anyAttributeParam,topUpAccount_subscriberId_choice,topUpAccount_topUpAmount,topUpAccount_topUpAmount_exponent,topUpAccount_topUpOrigin,topUpAccount_validityPeriod_DEBUG,topUpAccount_sosTopUpInfo_noPenaltyPeriod_DEBUG,topUpAccount_sosTopUpInfo_balancePenaltyAmount,topUpAccount_sosTopUpInfo_balancePenaltyAmount_exponent,topUpAccount_sosTopUpInfo_extension_any,topUpAccount_sosTopUpInfo_extension_anyAttributeParam,topUpAccount_completeTransact,topUpAccount_extension_any,topUpAccount_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "topUpAccount"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "topUpAccount.subscriberId.choice=" + encodeURIComponent(topUpAccount_subscriberId_choice) + Ptf_DIM + "topUpAccount.actionCommonInfo.appInfo.appId=" + encodeURIComponent(topUpAccount_actionCommonInfo_appInfo_appId) + Ptf_DIM + "topUpAccount.actionCommonInfo.appInfo.reference=" + encodeURIComponent(topUpAccount_actionCommonInfo_appInfo_reference) + Ptf_DIM + "topUpAccount.actionCommonInfo.userCode=" + encodeURIComponent(topUpAccount_actionCommonInfo_userCode) + Ptf_DIM + "topUpAccount.topUpOrigin=" + encodeURIComponent(topUpAccount_topUpOrigin) + Ptf_DIM + "topUpAccount.validityPeriod.DEBUG=" + encodeURIComponent(topUpAccount_validityPeriod_DEBUG) + Ptf_DIM + "topUpAccount.sosTopUpInfo.noPenaltyPeriod.DEBUG=" + encodeURIComponent(topUpAccount_sosTopUpInfo_noPenaltyPeriod_DEBUG) + Ptf_DIM + "topUpAccount.completeTransact=" + encodeURIComponent(topUpAccount_completeTransact) + buildHeaders_BalanceManagement(headers);
if(topUpAccount_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(topUpAccount_actionCommonInfo_appInfo_extension_any);
}
if(topUpAccount_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(topUpAccount_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(topUpAccount_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.actionCommonInfo.opCost="+encodeURIComponent(topUpAccount_actionCommonInfo_opCost);
}
if(topUpAccount_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.actionCommonInfo.opCost.@exponent="+encodeURIComponent(topUpAccount_actionCommonInfo_opCost_exponent);
}
if(topUpAccount_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.actionCommonInfo.currencyCode="+encodeURIComponent(topUpAccount_actionCommonInfo_currencyCode);
}
if(topUpAccount_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.actionCommonInfo.extension.any="+encodeURIComponent(topUpAccount_actionCommonInfo_extension_any);
}
if(topUpAccount_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(topUpAccount_actionCommonInfo_extension_anyAttributeParam);
}
if(topUpAccount_topUpAmount != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.topUpAmount="+encodeURIComponent(topUpAccount_topUpAmount);
}
if(topUpAccount_topUpAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.topUpAmount.@exponent="+encodeURIComponent(topUpAccount_topUpAmount_exponent);
}
if(topUpAccount_sosTopUpInfo_balancePenaltyAmount != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.sosTopUpInfo.balancePenaltyAmount="+encodeURIComponent(topUpAccount_sosTopUpInfo_balancePenaltyAmount);
}
if(topUpAccount_sosTopUpInfo_balancePenaltyAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.sosTopUpInfo.balancePenaltyAmount.@exponent="+encodeURIComponent(topUpAccount_sosTopUpInfo_balancePenaltyAmount_exponent);
}
if(topUpAccount_sosTopUpInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.sosTopUpInfo.extension.any="+encodeURIComponent(topUpAccount_sosTopUpInfo_extension_any);
}
if(topUpAccount_sosTopUpInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.sosTopUpInfo.extension.@anyAttributeParam="+encodeURIComponent(topUpAccount_sosTopUpInfo_extension_anyAttributeParam);
}
if(topUpAccount_extension_any != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.extension.any="+encodeURIComponent(topUpAccount_extension_any);
}
if(topUpAccount_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "topUpAccount.extension.@anyAttributeParam="+encodeURIComponent(topUpAccount_extension_anyAttributeParam);
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

function queryTotalBalance_BalanceManagement(queryTotalBalance_queryCommonInfo_currencyCode,queryTotalBalance_queryCommonInfo_pagingInfo_token,queryTotalBalance_queryCommonInfo_pagingInfo_numRegs,queryTotalBalance_queryCommonInfo_pagingInfo_extension_any,queryTotalBalance_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryTotalBalance_queryCommonInfo_extension_any,queryTotalBalance_queryCommonInfo_extension_anyAttributeParam,queryTotalBalance_subscriberId_choice,queryTotalBalance_extension_any,queryTotalBalance_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "queryTotalBalance"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryTotalBalance.subscriberId.choice=" + encodeURIComponent(queryTotalBalance_subscriberId_choice) + buildHeaders_BalanceManagement(headers);
if(queryTotalBalance_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.queryCommonInfo.currencyCode="+encodeURIComponent(queryTotalBalance_queryCommonInfo_currencyCode);
}
if(queryTotalBalance_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryTotalBalance_queryCommonInfo_pagingInfo_token);
}
if(queryTotalBalance_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryTotalBalance_queryCommonInfo_pagingInfo_numRegs);
}
if(queryTotalBalance_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryTotalBalance_queryCommonInfo_pagingInfo_extension_any);
}
if(queryTotalBalance_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryTotalBalance_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryTotalBalance_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.queryCommonInfo.extension.any="+encodeURIComponent(queryTotalBalance_queryCommonInfo_extension_any);
}
if(queryTotalBalance_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryTotalBalance_queryCommonInfo_extension_anyAttributeParam);
}
if(queryTotalBalance_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.extension.any="+encodeURIComponent(queryTotalBalance_extension_any);
}
if(queryTotalBalance_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryTotalBalance.extension.@anyAttributeParam="+encodeURIComponent(queryTotalBalance_extension_anyAttributeParam);
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

function decrementBalance_BalanceManagement(decrementBalance_actionCommonInfo_appInfo_appId,decrementBalance_actionCommonInfo_appInfo_reference,decrementBalance_actionCommonInfo_appInfo_extension_any,decrementBalance_actionCommonInfo_appInfo_extension_anyAttributeParam,decrementBalance_actionCommonInfo_userCode,decrementBalance_actionCommonInfo_opCost,decrementBalance_actionCommonInfo_opCost_exponent,decrementBalance_actionCommonInfo_currencyCode,decrementBalance_actionCommonInfo_extension_any,decrementBalance_actionCommonInfo_extension_anyAttributeParam,decrementBalance_subscriberId_choice,decrementBalance_adjustmentAmount,decrementBalance_adjustmentAmount_exponent,decrementBalance_walletId,decrementBalance_totalFlag,decrementBalance_negativeBalanceUsageFlag,decrementBalance_actionCauseCode,decrementBalance_extension_any,decrementBalance_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "decrementBalance"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "decrementBalance.subscriberId.choice=" + encodeURIComponent(decrementBalance_subscriberId_choice) + Ptf_DIM + "decrementBalance.actionCommonInfo.appInfo.appId=" + encodeURIComponent(decrementBalance_actionCommonInfo_appInfo_appId) + Ptf_DIM + "decrementBalance.actionCommonInfo.appInfo.reference=" + encodeURIComponent(decrementBalance_actionCommonInfo_appInfo_reference) + Ptf_DIM + "decrementBalance.actionCommonInfo.userCode=" + encodeURIComponent(decrementBalance_actionCommonInfo_userCode) + Ptf_DIM + "decrementBalance.walletId=" + encodeURIComponent(decrementBalance_walletId) + Ptf_DIM + "decrementBalance.totalFlag=" + encodeURIComponent(decrementBalance_totalFlag) + Ptf_DIM + "decrementBalance.negativeBalanceUsageFlag=" + encodeURIComponent(decrementBalance_negativeBalanceUsageFlag) + buildHeaders_BalanceManagement(headers);
if(decrementBalance_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(decrementBalance_actionCommonInfo_appInfo_extension_any);
}
if(decrementBalance_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(decrementBalance_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(decrementBalance_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCommonInfo.opCost="+encodeURIComponent(decrementBalance_actionCommonInfo_opCost);
}
if(decrementBalance_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCommonInfo.opCost.@exponent="+encodeURIComponent(decrementBalance_actionCommonInfo_opCost_exponent);
}
if(decrementBalance_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCommonInfo.currencyCode="+encodeURIComponent(decrementBalance_actionCommonInfo_currencyCode);
}
if(decrementBalance_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCommonInfo.extension.any="+encodeURIComponent(decrementBalance_actionCommonInfo_extension_any);
}
if(decrementBalance_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(decrementBalance_actionCommonInfo_extension_anyAttributeParam);
}
if(decrementBalance_adjustmentAmount != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.adjustmentAmount="+encodeURIComponent(decrementBalance_adjustmentAmount);
}
if(decrementBalance_adjustmentAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.adjustmentAmount.@exponent="+encodeURIComponent(decrementBalance_adjustmentAmount_exponent);
}
if(decrementBalance_actionCauseCode != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.actionCauseCode="+encodeURIComponent(decrementBalance_actionCauseCode);
}
if(decrementBalance_extension_any != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.extension.any="+encodeURIComponent(decrementBalance_extension_any);
}
if(decrementBalance_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "decrementBalance.extension.@anyAttributeParam="+encodeURIComponent(decrementBalance_extension_anyAttributeParam);
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

function queryBalances_BalanceManagement(queryBalances_queryCommonInfo_currencyCode,queryBalances_queryCommonInfo_pagingInfo_token,queryBalances_queryCommonInfo_pagingInfo_numRegs,queryBalances_queryCommonInfo_pagingInfo_extension_any,queryBalances_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryBalances_queryCommonInfo_extension_any,queryBalances_queryCommonInfo_extension_anyAttributeParam,queryBalances_subscriberId_choice,queryBalances_extension_any,queryBalances_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "queryBalances"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryBalances.subscriberId.choice=" + encodeURIComponent(queryBalances_subscriberId_choice) + buildHeaders_BalanceManagement(headers);
if(queryBalances_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.queryCommonInfo.currencyCode="+encodeURIComponent(queryBalances_queryCommonInfo_currencyCode);
}
if(queryBalances_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryBalances_queryCommonInfo_pagingInfo_token);
}
if(queryBalances_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryBalances_queryCommonInfo_pagingInfo_numRegs);
}
if(queryBalances_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryBalances_queryCommonInfo_pagingInfo_extension_any);
}
if(queryBalances_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBalances_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryBalances_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.queryCommonInfo.extension.any="+encodeURIComponent(queryBalances_queryCommonInfo_extension_any);
}
if(queryBalances_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryBalances_queryCommonInfo_extension_anyAttributeParam);
}
if(queryBalances_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.extension.any="+encodeURIComponent(queryBalances_extension_any);
}
if(queryBalances_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryBalances.extension.@anyAttributeParam="+encodeURIComponent(queryBalances_extension_anyAttributeParam);
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

function incrementBalance_BalanceManagement(incrementBalance_actionCommonInfo_appInfo_appId,incrementBalance_actionCommonInfo_appInfo_reference,incrementBalance_actionCommonInfo_appInfo_extension_any,incrementBalance_actionCommonInfo_appInfo_extension_anyAttributeParam,incrementBalance_actionCommonInfo_userCode,incrementBalance_actionCommonInfo_opCost,incrementBalance_actionCommonInfo_opCost_exponent,incrementBalance_actionCommonInfo_currencyCode,incrementBalance_actionCommonInfo_extension_any,incrementBalance_actionCommonInfo_extension_anyAttributeParam,incrementBalance_subscriberId_choice,incrementBalance_adjustmentAmount,incrementBalance_adjustmentAmount_exponent,incrementBalance_walletId,incrementBalance_extension_any,incrementBalance_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "incrementBalance"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "incrementBalance.subscriberId.choice=" + encodeURIComponent(incrementBalance_subscriberId_choice) + Ptf_DIM + "incrementBalance.actionCommonInfo.appInfo.appId=" + encodeURIComponent(incrementBalance_actionCommonInfo_appInfo_appId) + Ptf_DIM + "incrementBalance.actionCommonInfo.appInfo.reference=" + encodeURIComponent(incrementBalance_actionCommonInfo_appInfo_reference) + Ptf_DIM + "incrementBalance.actionCommonInfo.userCode=" + encodeURIComponent(incrementBalance_actionCommonInfo_userCode) + Ptf_DIM + "incrementBalance.walletId=" + encodeURIComponent(incrementBalance_walletId) + buildHeaders_BalanceManagement(headers);
if(incrementBalance_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(incrementBalance_actionCommonInfo_appInfo_extension_any);
}
if(incrementBalance_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(incrementBalance_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(incrementBalance_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.actionCommonInfo.opCost="+encodeURIComponent(incrementBalance_actionCommonInfo_opCost);
}
if(incrementBalance_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.actionCommonInfo.opCost.@exponent="+encodeURIComponent(incrementBalance_actionCommonInfo_opCost_exponent);
}
if(incrementBalance_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.actionCommonInfo.currencyCode="+encodeURIComponent(incrementBalance_actionCommonInfo_currencyCode);
}
if(incrementBalance_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.actionCommonInfo.extension.any="+encodeURIComponent(incrementBalance_actionCommonInfo_extension_any);
}
if(incrementBalance_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(incrementBalance_actionCommonInfo_extension_anyAttributeParam);
}
if(incrementBalance_adjustmentAmount != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.adjustmentAmount="+encodeURIComponent(incrementBalance_adjustmentAmount);
}
if(incrementBalance_adjustmentAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.adjustmentAmount.@exponent="+encodeURIComponent(incrementBalance_adjustmentAmount_exponent);
}
if(incrementBalance_extension_any != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.extension.any="+encodeURIComponent(incrementBalance_extension_any);
}
if(incrementBalance_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "incrementBalance.extension.@anyAttributeParam="+encodeURIComponent(incrementBalance_extension_anyAttributeParam);
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

function chargeAccount_BalanceManagement(chargeAccount_actionCommonInfo_appInfo_appId,chargeAccount_actionCommonInfo_appInfo_reference,chargeAccount_actionCommonInfo_appInfo_extension_any,chargeAccount_actionCommonInfo_appInfo_extension_anyAttributeParam,chargeAccount_actionCommonInfo_userCode,chargeAccount_actionCommonInfo_opCost,chargeAccount_actionCommonInfo_opCost_exponent,chargeAccount_actionCommonInfo_currencyCode,chargeAccount_actionCommonInfo_extension_any,chargeAccount_actionCommonInfo_extension_anyAttributeParam,chargeAccount_subscriberId_choice,chargeAccount_totalFlag,chargeAccount_chargingModality,chargeAccount_actionCauseCode,chargeAccount_extension_any,chargeAccount_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = BalanceManagement.AS_URL + '?' + "_service=" + BalanceManagement.service + Ptf_DIM + "_application=" + BalanceManagement.application + Ptf_DIM + "_operation=" + "chargeAccount"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "chargeAccount.subscriberId.choice=" + encodeURIComponent(chargeAccount_subscriberId_choice) + Ptf_DIM + "chargeAccount.actionCommonInfo.appInfo.appId=" + encodeURIComponent(chargeAccount_actionCommonInfo_appInfo_appId) + Ptf_DIM + "chargeAccount.actionCommonInfo.appInfo.reference=" + encodeURIComponent(chargeAccount_actionCommonInfo_appInfo_reference) + Ptf_DIM + "chargeAccount.actionCommonInfo.userCode=" + encodeURIComponent(chargeAccount_actionCommonInfo_userCode) + Ptf_DIM + "chargeAccount.totalFlag=" + encodeURIComponent(chargeAccount_totalFlag) + buildHeaders_BalanceManagement(headers);
if(chargeAccount_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(chargeAccount_actionCommonInfo_appInfo_extension_any);
}
if(chargeAccount_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(chargeAccount_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(chargeAccount_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCommonInfo.opCost="+encodeURIComponent(chargeAccount_actionCommonInfo_opCost);
}
if(chargeAccount_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCommonInfo.opCost.@exponent="+encodeURIComponent(chargeAccount_actionCommonInfo_opCost_exponent);
}
if(chargeAccount_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCommonInfo.currencyCode="+encodeURIComponent(chargeAccount_actionCommonInfo_currencyCode);
}
if(chargeAccount_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCommonInfo.extension.any="+encodeURIComponent(chargeAccount_actionCommonInfo_extension_any);
}
if(chargeAccount_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(chargeAccount_actionCommonInfo_extension_anyAttributeParam);
}
if(chargeAccount_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.chargingModality="+encodeURIComponent(chargeAccount_chargingModality);
}
if(chargeAccount_actionCauseCode != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.actionCauseCode="+encodeURIComponent(chargeAccount_actionCauseCode);
}
if(chargeAccount_extension_any != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.extension.any="+encodeURIComponent(chargeAccount_extension_any);
}
if(chargeAccount_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "chargeAccount.extension.@anyAttributeParam="+encodeURIComponent(chargeAccount_extension_anyAttributeParam);
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

