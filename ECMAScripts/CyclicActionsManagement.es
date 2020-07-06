
	var request="SOAP";
	var Ptf_DIM = '&';
	
		function buildHeaders_CyclicActionsManagement(headers) {
	
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
function queryCyclicTopUpsDetails_CyclicActionsManagement(queryCyclicTopUpsDetails_queryCommonInfo_currencyCode,queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_token,queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_numRegs,queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_extension_any,queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryCyclicTopUpsDetails_queryCommonInfo_extension_any,queryCyclicTopUpsDetails_queryCommonInfo_extension_anyAttributeParam,queryCyclicTopUpsDetails_subscriberId_choice,queryCyclicTopUpsDetails_statusCyclicFilter,queryCyclicTopUpsDetails_billingCycleFlagFilter,queryCyclicTopUpsDetails_extension_any,queryCyclicTopUpsDetails_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "queryCyclicTopUpsDetails"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryCyclicTopUpsDetails.subscriberId.choice=" + encodeURIComponent(queryCyclicTopUpsDetails_subscriberId_choice) + buildHeaders_CyclicActionsManagement(headers);
if(queryCyclicTopUpsDetails_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.queryCommonInfo.currencyCode="+encodeURIComponent(queryCyclicTopUpsDetails_queryCommonInfo_currencyCode);
}
if(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_token);
}
if(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_numRegs);
}
if(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_extension_any);
}
if(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicTopUpsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryCyclicTopUpsDetails_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.queryCommonInfo.extension.any="+encodeURIComponent(queryCyclicTopUpsDetails_queryCommonInfo_extension_any);
}
if(queryCyclicTopUpsDetails_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicTopUpsDetails_queryCommonInfo_extension_anyAttributeParam);
}
if(queryCyclicTopUpsDetails_statusCyclicFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.statusCyclicFilter="+encodeURIComponent(queryCyclicTopUpsDetails_statusCyclicFilter);
}
if(queryCyclicTopUpsDetails_billingCycleFlagFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.billingCycleFlagFilter="+encodeURIComponent(queryCyclicTopUpsDetails_billingCycleFlagFilter);
}
if(queryCyclicTopUpsDetails_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.extension.any="+encodeURIComponent(queryCyclicTopUpsDetails_extension_any);
}
if(queryCyclicTopUpsDetails_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicTopUpsDetails.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicTopUpsDetails_extension_anyAttributeParam);
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

function queryCyclicBalanceTransfersDetails_CyclicActionsManagement(queryCyclicBalanceTransfersDetails_queryCommonInfo_currencyCode,queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_token,queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_numRegs,queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_extension_any,queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryCyclicBalanceTransfersDetails_queryCommonInfo_extension_any,queryCyclicBalanceTransfersDetails_queryCommonInfo_extension_anyAttributeParam,queryCyclicBalanceTransfersDetails_donorSubscriberId_choice,queryCyclicBalanceTransfersDetails_statusCyclicFilter,queryCyclicBalanceTransfersDetails_billingCycleFlagFilter,queryCyclicBalanceTransfersDetails_extension_any,queryCyclicBalanceTransfersDetails_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "queryCyclicBalanceTransfersDetails"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryCyclicBalanceTransfersDetails.donorSubscriberId.choice=" + encodeURIComponent(queryCyclicBalanceTransfersDetails_donorSubscriberId_choice) + buildHeaders_CyclicActionsManagement(headers);
if(queryCyclicBalanceTransfersDetails_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.queryCommonInfo.currencyCode="+encodeURIComponent(queryCyclicBalanceTransfersDetails_queryCommonInfo_currencyCode);
}
if(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_token);
}
if(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_numRegs);
}
if(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_extension_any);
}
if(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicBalanceTransfersDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryCyclicBalanceTransfersDetails_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.queryCommonInfo.extension.any="+encodeURIComponent(queryCyclicBalanceTransfersDetails_queryCommonInfo_extension_any);
}
if(queryCyclicBalanceTransfersDetails_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicBalanceTransfersDetails_queryCommonInfo_extension_anyAttributeParam);
}
if(queryCyclicBalanceTransfersDetails_statusCyclicFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.statusCyclicFilter="+encodeURIComponent(queryCyclicBalanceTransfersDetails_statusCyclicFilter);
}
if(queryCyclicBalanceTransfersDetails_billingCycleFlagFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.billingCycleFlagFilter="+encodeURIComponent(queryCyclicBalanceTransfersDetails_billingCycleFlagFilter);
}
if(queryCyclicBalanceTransfersDetails_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.extension.any="+encodeURIComponent(queryCyclicBalanceTransfersDetails_extension_any);
}
if(queryCyclicBalanceTransfersDetails_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBalanceTransfersDetails.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicBalanceTransfersDetails_extension_anyAttributeParam);
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

function subscribeCyclicChargingServices_CyclicActionsManagement(subscribeCyclicChargingServices_actionCommonInfo_appInfo_appId,subscribeCyclicChargingServices_actionCommonInfo_appInfo_reference,subscribeCyclicChargingServices_actionCommonInfo_appInfo_extension_any,subscribeCyclicChargingServices_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeCyclicChargingServices_actionCommonInfo_userCode,subscribeCyclicChargingServices_actionCommonInfo_opCost,subscribeCyclicChargingServices_actionCommonInfo_opCost_exponent,subscribeCyclicChargingServices_actionCommonInfo_currencyCode,subscribeCyclicChargingServices_actionCommonInfo_extension_any,subscribeCyclicChargingServices_actionCommonInfo_extension_anyAttributeParam,subscribeCyclicChargingServices_subscriberId_choice,subscribeCyclicChargingServices_cyclicCode,subscribeCyclicChargingServices_cyclicInfo_choice,subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingAmount,subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingAmount_exponent,subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingModality,subscribeCyclicChargingServices_chargingInfoList_chargingInfo_totalFlag,subscribeCyclicChargingServices_chargingInfoList_chargingInfo_extension_any,subscribeCyclicChargingServices_chargingInfoList_chargingInfo_extension_anyAttributeParam,subscribeCyclicChargingServices_chargingInfoList_extension_any,subscribeCyclicChargingServices_chargingInfoList_extension_anyAttributeParam,subscribeCyclicChargingServices_calcChargingAmountCode,subscribeCyclicChargingServices_chargingCycleChange_chargingAmount,subscribeCyclicChargingServices_chargingCycleChange_chargingAmount_exponent,subscribeCyclicChargingServices_chargingCycleChange_calcChargingAmountCode,subscribeCyclicChargingServices_chargingCycleChange_prorateFlag,subscribeCyclicChargingServices_chargingCycleChange_totalFlag,subscribeCyclicChargingServices_chargingCycleChange_chargingModality,subscribeCyclicChargingServices_chargingCycleChange_extension_any,subscribeCyclicChargingServices_chargingCycleChange_extension_anyAttributeParam,subscribeCyclicChargingServices_extension_any,subscribeCyclicChargingServices_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "subscribeCyclicChargingServices"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "subscribeCyclicChargingServices.subscriberId.choice=" + encodeURIComponent(subscribeCyclicChargingServices_subscriberId_choice) + Ptf_DIM + "subscribeCyclicChargingServices.cyclicInfo.choice=" + encodeURIComponent(subscribeCyclicChargingServices_cyclicInfo_choice) + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.userCode=" + encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_userCode) + Ptf_DIM + "subscribeCyclicChargingServices.cyclicCode=" + encodeURIComponent(subscribeCyclicChargingServices_cyclicCode) + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.chargingInfo.totalFlag=" + encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_totalFlag) + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.prorateFlag=" + encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_prorateFlag) + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.totalFlag=" + encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_totalFlag) + buildHeaders_CyclicActionsManagement(headers);
if(subscribeCyclicChargingServices_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_appInfo_extension_any);
}
if(subscribeCyclicChargingServices_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeCyclicChargingServices_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.opCost="+encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_opCost);
}
if(subscribeCyclicChargingServices_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_opCost_exponent);
}
if(subscribeCyclicChargingServices_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_currencyCode);
}
if(subscribeCyclicChargingServices_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.extension.any="+encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_extension_any);
}
if(subscribeCyclicChargingServices_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicChargingServices_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.chargingInfo.chargingAmount="+encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingAmount);
}
if(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.chargingInfo.chargingAmount.@exponent="+encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingAmount_exponent);
}
if(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.chargingInfo.chargingModality="+encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_chargingModality);
}
if(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.chargingInfo.extension.any="+encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_extension_any);
}
if(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.chargingInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_chargingInfo_extension_anyAttributeParam);
}
if(subscribeCyclicChargingServices_chargingInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.extension.any="+encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_extension_any);
}
if(subscribeCyclicChargingServices_chargingInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingInfoList.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicChargingServices_chargingInfoList_extension_anyAttributeParam);
}
if(subscribeCyclicChargingServices_calcChargingAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.calcChargingAmountCode="+encodeURIComponent(subscribeCyclicChargingServices_calcChargingAmountCode);
}
if(subscribeCyclicChargingServices_chargingCycleChange_chargingAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.chargingAmount="+encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_chargingAmount);
}
if(subscribeCyclicChargingServices_chargingCycleChange_chargingAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.chargingAmount.@exponent="+encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_chargingAmount_exponent);
}
if(subscribeCyclicChargingServices_chargingCycleChange_calcChargingAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.calcChargingAmountCode="+encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_calcChargingAmountCode);
}
if(subscribeCyclicChargingServices_chargingCycleChange_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.chargingModality="+encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_chargingModality);
}
if(subscribeCyclicChargingServices_chargingCycleChange_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.extension.any="+encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_extension_any);
}
if(subscribeCyclicChargingServices_chargingCycleChange_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.chargingCycleChange.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicChargingServices_chargingCycleChange_extension_anyAttributeParam);
}
if(subscribeCyclicChargingServices_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.extension.any="+encodeURIComponent(subscribeCyclicChargingServices_extension_any);
}
if(subscribeCyclicChargingServices_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicChargingServices.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicChargingServices_extension_anyAttributeParam);
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

function subscribeCyclicBalanceTransfers_CyclicActionsManagement(subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_appId,subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_reference,subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_extension_any,subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeCyclicBalanceTransfers_actionCommonInfo_userCode,subscribeCyclicBalanceTransfers_actionCommonInfo_opCost,subscribeCyclicBalanceTransfers_actionCommonInfo_opCost_exponent,subscribeCyclicBalanceTransfers_actionCommonInfo_currencyCode,subscribeCyclicBalanceTransfers_actionCommonInfo_extension_any,subscribeCyclicBalanceTransfers_actionCommonInfo_extension_anyAttributeParam,subscribeCyclicBalanceTransfers_donorSubscriberId_choice,subscribeCyclicBalanceTransfers_receiverSubscriberId_choice,subscribeCyclicBalanceTransfers_payer,subscribeCyclicBalanceTransfers_cyclicCode,subscribeCyclicBalanceTransfers_cyclicInfo_choice,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferAmount,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferAmount_exponent,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferCost,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferCost_exponent,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferWalletId,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_topUpOriginOrBoltonIdentifier,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_extension_any,subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_extension_anyAttributeParam,subscribeCyclicBalanceTransfers_balanceTransferInfoList_extension_any,subscribeCyclicBalanceTransfers_balanceTransferInfoList_extension_anyAttributeParam,subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_calcBalanceTransferAmountCode,subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_calcBalanceTransferCostCode,subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_extension_any,subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_extension_anyAttributeParam,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferCost,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferCost_exponent,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_calcBalanceTransferCostCode,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferAmount,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferAmount_exponent,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_calcBalanceTransferAmountCode,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_prorateFlag,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_extension_any,subscribeCyclicBalanceTransfers_balanceTransferCycleChange_extension_anyAttributeParam,subscribeCyclicBalanceTransfers_extension_any,subscribeCyclicBalanceTransfers_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "subscribeCyclicBalanceTransfers"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "subscribeCyclicBalanceTransfers.donorSubscriberId.choice=" + encodeURIComponent(subscribeCyclicBalanceTransfers_donorSubscriberId_choice) + Ptf_DIM + "subscribeCyclicBalanceTransfers.receiverSubscriberId.choice=" + encodeURIComponent(subscribeCyclicBalanceTransfers_receiverSubscriberId_choice) + Ptf_DIM + "subscribeCyclicBalanceTransfers.cyclicInfo.choice=" + encodeURIComponent(subscribeCyclicBalanceTransfers_cyclicInfo_choice) + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.userCode=" + encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_userCode) + Ptf_DIM + "subscribeCyclicBalanceTransfers.payer=" + encodeURIComponent(subscribeCyclicBalanceTransfers_payer) + Ptf_DIM + "subscribeCyclicBalanceTransfers.cyclicCode=" + encodeURIComponent(subscribeCyclicBalanceTransfers_cyclicCode) + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.prorateFlag=" + encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_prorateFlag) + buildHeaders_CyclicActionsManagement(headers);
if(subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_extension_any);
}
if(subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeCyclicBalanceTransfers_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.opCost="+encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_opCost);
}
if(subscribeCyclicBalanceTransfers_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_opCost_exponent);
}
if(subscribeCyclicBalanceTransfers_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_currencyCode);
}
if(subscribeCyclicBalanceTransfers_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.extension.any="+encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_extension_any);
}
if(subscribeCyclicBalanceTransfers_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBalanceTransfers_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.transferAmount="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferAmount);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.transferAmount.@exponent="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferAmount_exponent);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.transferCost="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferCost);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.transferCost.@exponent="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferCost_exponent);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferWalletId != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.transferWalletId="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_transferWalletId);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_topUpOriginOrBoltonIdentifier != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.topUpOriginOrBoltonIdentifier="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_topUpOriginOrBoltonIdentifier);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.extension.any="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_extension_any);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.balanceTransferInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_balanceTransferInfo_extension_anyAttributeParam);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.extension.any="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_extension_any);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoList.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoList_extension_anyAttributeParam);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_calcBalanceTransferAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoCalculation.calcBalanceTransferAmountCode="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_calcBalanceTransferAmountCode);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_calcBalanceTransferCostCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoCalculation.calcBalanceTransferCostCode="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_calcBalanceTransferCostCode);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoCalculation.extension.any="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_extension_any);
}
if(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferInfoCalculation.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferInfoCalculation_extension_anyAttributeParam);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.balanceTransferCost="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferCost);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.balanceTransferCost.@exponent="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferCost_exponent);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_calcBalanceTransferCostCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.calcBalanceTransferCostCode="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_calcBalanceTransferCostCode);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.balanceTransferAmount="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferAmount);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.balanceTransferAmount.@exponent="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_balanceTransferAmount_exponent);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_calcBalanceTransferAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.calcBalanceTransferAmountCode="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_calcBalanceTransferAmountCode);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.extension.any="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_extension_any);
}
if(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.balanceTransferCycleChange.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBalanceTransfers_balanceTransferCycleChange_extension_anyAttributeParam);
}
if(subscribeCyclicBalanceTransfers_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.extension.any="+encodeURIComponent(subscribeCyclicBalanceTransfers_extension_any);
}
if(subscribeCyclicBalanceTransfers_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBalanceTransfers.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBalanceTransfers_extension_anyAttributeParam);
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

function unsubscribeCyclicServices_CyclicActionsManagement(unsubscribeCyclicServices_actionCommonInfo_appInfo_appId,unsubscribeCyclicServices_actionCommonInfo_appInfo_reference,unsubscribeCyclicServices_actionCommonInfo_appInfo_extension_any,unsubscribeCyclicServices_actionCommonInfo_appInfo_extension_anyAttributeParam,unsubscribeCyclicServices_actionCommonInfo_userCode,unsubscribeCyclicServices_actionCommonInfo_opCost,unsubscribeCyclicServices_actionCommonInfo_opCost_exponent,unsubscribeCyclicServices_actionCommonInfo_currencyCode,unsubscribeCyclicServices_actionCommonInfo_extension_any,unsubscribeCyclicServices_actionCommonInfo_extension_anyAttributeParam,unsubscribeCyclicServices_subscriberId_choice,unsubscribeCyclicServices_opReferenceOrBoltonIdentifier,unsubscribeCyclicServices_cyclicServicesCascadeFlag,unsubscribeCyclicServices_extension_any,unsubscribeCyclicServices_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "unsubscribeCyclicServices"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "unsubscribeCyclicServices.subscriberId.choice=" + encodeURIComponent(unsubscribeCyclicServices_subscriberId_choice) + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.appInfo.appId=" + encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_appInfo_appId) + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.appInfo.reference=" + encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_appInfo_reference) + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.userCode=" + encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_userCode) + buildHeaders_CyclicActionsManagement(headers);
if(unsubscribeCyclicServices_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_appInfo_extension_any);
}
if(unsubscribeCyclicServices_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(unsubscribeCyclicServices_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.opCost="+encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_opCost);
}
if(unsubscribeCyclicServices_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.opCost.@exponent="+encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_opCost_exponent);
}
if(unsubscribeCyclicServices_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.currencyCode="+encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_currencyCode);
}
if(unsubscribeCyclicServices_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.extension.any="+encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_extension_any);
}
if(unsubscribeCyclicServices_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeCyclicServices_actionCommonInfo_extension_anyAttributeParam);
}
if(unsubscribeCyclicServices_opReferenceOrBoltonIdentifier != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.opReferenceOrBoltonIdentifier="+encodeURIComponent(unsubscribeCyclicServices_opReferenceOrBoltonIdentifier);
}
if(unsubscribeCyclicServices_cyclicServicesCascadeFlag != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.cyclicServicesCascadeFlag="+encodeURIComponent(unsubscribeCyclicServices_cyclicServicesCascadeFlag);
}
if(unsubscribeCyclicServices_extension_any != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.extension.any="+encodeURIComponent(unsubscribeCyclicServices_extension_any);
}
if(unsubscribeCyclicServices_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "unsubscribeCyclicServices.extension.@anyAttributeParam="+encodeURIComponent(unsubscribeCyclicServices_extension_anyAttributeParam);
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

function queryCyclicBoltonsDetails_CyclicActionsManagement(queryCyclicBoltonsDetails_queryCommonInfo_currencyCode,queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_token,queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_numRegs,queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_extension_any,queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryCyclicBoltonsDetails_queryCommonInfo_extension_any,queryCyclicBoltonsDetails_queryCommonInfo_extension_anyAttributeParam,queryCyclicBoltonsDetails_subscriberId_choice,queryCyclicBoltonsDetails_statusCyclicFilter,queryCyclicBoltonsDetails_billingCycleFlagFilter,queryCyclicBoltonsDetails_extension_any,queryCyclicBoltonsDetails_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "queryCyclicBoltonsDetails"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryCyclicBoltonsDetails.subscriberId.choice=" + encodeURIComponent(queryCyclicBoltonsDetails_subscriberId_choice) + buildHeaders_CyclicActionsManagement(headers);
if(queryCyclicBoltonsDetails_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.queryCommonInfo.currencyCode="+encodeURIComponent(queryCyclicBoltonsDetails_queryCommonInfo_currencyCode);
}
if(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_token);
}
if(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_numRegs);
}
if(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_extension_any);
}
if(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicBoltonsDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryCyclicBoltonsDetails_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.queryCommonInfo.extension.any="+encodeURIComponent(queryCyclicBoltonsDetails_queryCommonInfo_extension_any);
}
if(queryCyclicBoltonsDetails_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicBoltonsDetails_queryCommonInfo_extension_anyAttributeParam);
}
if(queryCyclicBoltonsDetails_statusCyclicFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.statusCyclicFilter="+encodeURIComponent(queryCyclicBoltonsDetails_statusCyclicFilter);
}
if(queryCyclicBoltonsDetails_billingCycleFlagFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.billingCycleFlagFilter="+encodeURIComponent(queryCyclicBoltonsDetails_billingCycleFlagFilter);
}
if(queryCyclicBoltonsDetails_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.extension.any="+encodeURIComponent(queryCyclicBoltonsDetails_extension_any);
}
if(queryCyclicBoltonsDetails_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicBoltonsDetails.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicBoltonsDetails_extension_anyAttributeParam);
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

function queryCyclicChargingServicesDetails_CyclicActionsManagement(queryCyclicChargingServicesDetails_queryCommonInfo_currencyCode,queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_token,queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_numRegs,queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_extension_any,queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam,queryCyclicChargingServicesDetails_queryCommonInfo_extension_any,queryCyclicChargingServicesDetails_queryCommonInfo_extension_anyAttributeParam,queryCyclicChargingServicesDetails_subscriberId_choice,queryCyclicChargingServicesDetails_statusCyclicFilter,queryCyclicChargingServicesDetails_billingCycleFlagFilter,queryCyclicChargingServicesDetails_extension_any,queryCyclicChargingServicesDetails_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "queryCyclicChargingServicesDetails"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "queryCyclicChargingServicesDetails.subscriberId.choice=" + encodeURIComponent(queryCyclicChargingServicesDetails_subscriberId_choice) + buildHeaders_CyclicActionsManagement(headers);
if(queryCyclicChargingServicesDetails_queryCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.queryCommonInfo.currencyCode="+encodeURIComponent(queryCyclicChargingServicesDetails_queryCommonInfo_currencyCode);
}
if(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_token != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.queryCommonInfo.pagingInfo.token="+encodeURIComponent(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_token);
}
if(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_numRegs != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.queryCommonInfo.pagingInfo.numRegs="+encodeURIComponent(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_numRegs);
}
if(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.queryCommonInfo.pagingInfo.extension.any="+encodeURIComponent(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_extension_any);
}
if(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.queryCommonInfo.pagingInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicChargingServicesDetails_queryCommonInfo_pagingInfo_extension_anyAttributeParam);
}
if(queryCyclicChargingServicesDetails_queryCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.queryCommonInfo.extension.any="+encodeURIComponent(queryCyclicChargingServicesDetails_queryCommonInfo_extension_any);
}
if(queryCyclicChargingServicesDetails_queryCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.queryCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicChargingServicesDetails_queryCommonInfo_extension_anyAttributeParam);
}
if(queryCyclicChargingServicesDetails_statusCyclicFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.statusCyclicFilter="+encodeURIComponent(queryCyclicChargingServicesDetails_statusCyclicFilter);
}
if(queryCyclicChargingServicesDetails_billingCycleFlagFilter != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.billingCycleFlagFilter="+encodeURIComponent(queryCyclicChargingServicesDetails_billingCycleFlagFilter);
}
if(queryCyclicChargingServicesDetails_extension_any != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.extension.any="+encodeURIComponent(queryCyclicChargingServicesDetails_extension_any);
}
if(queryCyclicChargingServicesDetails_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "queryCyclicChargingServicesDetails.extension.@anyAttributeParam="+encodeURIComponent(queryCyclicChargingServicesDetails_extension_anyAttributeParam);
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

function subscribeCyclicTopUps_CyclicActionsManagement(subscribeCyclicTopUps_actionCommonInfo_appInfo_appId,subscribeCyclicTopUps_actionCommonInfo_appInfo_reference,subscribeCyclicTopUps_actionCommonInfo_appInfo_extension_any,subscribeCyclicTopUps_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeCyclicTopUps_actionCommonInfo_userCode,subscribeCyclicTopUps_actionCommonInfo_opCost,subscribeCyclicTopUps_actionCommonInfo_opCost_exponent,subscribeCyclicTopUps_actionCommonInfo_currencyCode,subscribeCyclicTopUps_actionCommonInfo_extension_any,subscribeCyclicTopUps_actionCommonInfo_extension_anyAttributeParam,subscribeCyclicTopUps_subscriberId_choice,subscribeCyclicTopUps_cyclicCode,subscribeCyclicTopUps_cyclicInfo_choice,subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpAmount,subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpAmount_exponent,subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpOrigin,subscribeCyclicTopUps_topUpInfoList_topUpInfo_extension_any,subscribeCyclicTopUps_topUpInfoList_topUpInfo_extension_anyAttributeParam,subscribeCyclicTopUps_topUpInfoList_extension_any,subscribeCyclicTopUps_topUpInfoList_extension_anyAttributeParam,subscribeCyclicTopUps_calcTopUpAmountCode,subscribeCyclicTopUps_topUpInfoCycleChange_topUpOrigin,subscribeCyclicTopUps_topUpInfoCycleChange_topUpAmount,subscribeCyclicTopUps_topUpInfoCycleChange_topUpAmount_exponent,subscribeCyclicTopUps_topUpInfoCycleChange_calcTopUpAmountCode,subscribeCyclicTopUps_topUpInfoCycleChange_prorateFlag,subscribeCyclicTopUps_topUpInfoCycleChange_extension_any,subscribeCyclicTopUps_topUpInfoCycleChange_extension_anyAttributeParam,subscribeCyclicTopUps_extension_any,subscribeCyclicTopUps_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "subscribeCyclicTopUps"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "subscribeCyclicTopUps.subscriberId.choice=" + encodeURIComponent(subscribeCyclicTopUps_subscriberId_choice) + Ptf_DIM + "subscribeCyclicTopUps.cyclicInfo.choice=" + encodeURIComponent(subscribeCyclicTopUps_cyclicInfo_choice) + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.userCode=" + encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_userCode) + Ptf_DIM + "subscribeCyclicTopUps.cyclicCode=" + encodeURIComponent(subscribeCyclicTopUps_cyclicCode) + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoCycleChange.prorateFlag=" + encodeURIComponent(subscribeCyclicTopUps_topUpInfoCycleChange_prorateFlag) + buildHeaders_CyclicActionsManagement(headers);
if(subscribeCyclicTopUps_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_appInfo_extension_any);
}
if(subscribeCyclicTopUps_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeCyclicTopUps_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.opCost="+encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_opCost);
}
if(subscribeCyclicTopUps_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_opCost_exponent);
}
if(subscribeCyclicTopUps_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_currencyCode);
}
if(subscribeCyclicTopUps_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.extension.any="+encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_extension_any);
}
if(subscribeCyclicTopUps_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicTopUps_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoList.topUpInfo.topUpAmount="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpAmount);
}
if(subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoList.topUpInfo.topUpAmount.@exponent="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpAmount_exponent);
}
if(subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpOrigin != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoList.topUpInfo.topUpOrigin="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoList_topUpInfo_topUpOrigin);
}
if(subscribeCyclicTopUps_topUpInfoList_topUpInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoList.topUpInfo.extension.any="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoList_topUpInfo_extension_any);
}
if(subscribeCyclicTopUps_topUpInfoList_topUpInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoList.topUpInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoList_topUpInfo_extension_anyAttributeParam);
}
if(subscribeCyclicTopUps_topUpInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoList.extension.any="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoList_extension_any);
}
if(subscribeCyclicTopUps_topUpInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoList.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoList_extension_anyAttributeParam);
}
if(subscribeCyclicTopUps_calcTopUpAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.calcTopUpAmountCode="+encodeURIComponent(subscribeCyclicTopUps_calcTopUpAmountCode);
}
if(subscribeCyclicTopUps_topUpInfoCycleChange_topUpOrigin != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoCycleChange.topUpOrigin="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoCycleChange_topUpOrigin);
}
if(subscribeCyclicTopUps_topUpInfoCycleChange_topUpAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoCycleChange.topUpAmount="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoCycleChange_topUpAmount);
}
if(subscribeCyclicTopUps_topUpInfoCycleChange_topUpAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoCycleChange.topUpAmount.@exponent="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoCycleChange_topUpAmount_exponent);
}
if(subscribeCyclicTopUps_topUpInfoCycleChange_calcTopUpAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoCycleChange.calcTopUpAmountCode="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoCycleChange_calcTopUpAmountCode);
}
if(subscribeCyclicTopUps_topUpInfoCycleChange_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoCycleChange.extension.any="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoCycleChange_extension_any);
}
if(subscribeCyclicTopUps_topUpInfoCycleChange_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.topUpInfoCycleChange.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicTopUps_topUpInfoCycleChange_extension_anyAttributeParam);
}
if(subscribeCyclicTopUps_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.extension.any="+encodeURIComponent(subscribeCyclicTopUps_extension_any);
}
if(subscribeCyclicTopUps_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicTopUps.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicTopUps_extension_anyAttributeParam);
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

function subscribeCyclicBoltons_CyclicActionsManagement(subscribeCyclicBoltons_actionCommonInfo_appInfo_appId,subscribeCyclicBoltons_actionCommonInfo_appInfo_reference,subscribeCyclicBoltons_actionCommonInfo_appInfo_extension_any,subscribeCyclicBoltons_actionCommonInfo_appInfo_extension_anyAttributeParam,subscribeCyclicBoltons_actionCommonInfo_userCode,subscribeCyclicBoltons_actionCommonInfo_opCost,subscribeCyclicBoltons_actionCommonInfo_opCost_exponent,subscribeCyclicBoltons_actionCommonInfo_currencyCode,subscribeCyclicBoltons_actionCommonInfo_extension_any,subscribeCyclicBoltons_actionCommonInfo_extension_anyAttributeParam,subscribeCyclicBoltons_subscriberId_choice,subscribeCyclicBoltons_cyclicCode,subscribeCyclicBoltons_cyclicInfo_choice,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonCode,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonTypeCode,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonInstance,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_extension_any,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_extension_anyAttributeParam,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonAmount,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonAmount_exponent,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonLD,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonLD_exponent,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonMaxNumberOfSessions,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonCost,subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonCost_exponent,subscribeCyclicBoltons_boltonInfoList_boltonInfo_chargingModality,subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_startTime_choice,subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_endTime_choice,subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_extension_any,subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_extension_anyAttributeParam,subscribeCyclicBoltons_boltonInfoList_boltonInfo_maxUnitsPerSession,subscribeCyclicBoltons_boltonInfoList_boltonInfo_maxUnitsPerSession_exponent,subscribeCyclicBoltons_boltonInfoList_boltonInfo_extension_any,subscribeCyclicBoltons_boltonInfoList_boltonInfo_extension_anyAttributeParam,subscribeCyclicBoltons_boltonInfoList_extension_any,subscribeCyclicBoltons_boltonInfoList_extension_anyAttributeParam,subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonAmountCode,subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonLDCode,subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonCostCode,subscribeCyclicBoltons_boltonInfoCalculation_calcMaxNumberOfSessionsCode,subscribeCyclicBoltons_boltonInfoCalculation_extension_any,subscribeCyclicBoltons_boltonInfoCalculation_extension_anyAttributeParam,subscribeCyclicBoltons_boltonInfoCycleChange_boltonAmount,subscribeCyclicBoltons_boltonInfoCycleChange_boltonAmount_exponent,subscribeCyclicBoltons_boltonInfoCycleChange_boltonLD,subscribeCyclicBoltons_boltonInfoCycleChange_boltonLD_exponent,subscribeCyclicBoltons_boltonInfoCycleChange_boltonCost,subscribeCyclicBoltons_boltonInfoCycleChange_boltonCost_exponent,subscribeCyclicBoltons_boltonInfoCycleChange_boltonMaxNumberOfSessions,subscribeCyclicBoltons_boltonInfoCycleChange_chargingModality,subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonAmountCode,subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonLDCode,subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonCostCode,subscribeCyclicBoltons_boltonInfoCycleChange_calcMaxNumberOfSessionsCode,subscribeCyclicBoltons_boltonInfoCycleChange_prorateFlag,subscribeCyclicBoltons_boltonInfoCycleChange_extension_any,subscribeCyclicBoltons_boltonInfoCycleChange_extension_anyAttributeParam,subscribeCyclicBoltons_extension_any,subscribeCyclicBoltons_extension_anyAttributeParam,http_authorization,headers,privateRequest){
			var lRequest = "";
			lRequest = CyclicActionsManagement.AS_URL + '?' + "_service=" + CyclicActionsManagement.service + Ptf_DIM + "_application=" + CyclicActionsManagement.application + Ptf_DIM + "_operation=" + "subscribeCyclicBoltons"
						 + Ptf_DIM + "_mode=" + "JSON"
						 + Ptf_DIM + "request=" + request + Ptf_DIM + "subscribeCyclicBoltons.subscriberId.choice=" + encodeURIComponent(subscribeCyclicBoltons_subscriberId_choice) + Ptf_DIM + "subscribeCyclicBoltons.cyclicInfo.choice=" + encodeURIComponent(subscribeCyclicBoltons_cyclicInfo_choice) + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.timeInterval.startTime.choice=" + encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_startTime_choice) + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.timeInterval.endTime.choice=" + encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_endTime_choice) + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.appInfo.appId=" + encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_appInfo_appId) + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.appInfo.reference=" + encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_appInfo_reference) + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.userCode=" + encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_userCode) + Ptf_DIM + "subscribeCyclicBoltons.cyclicCode=" + encodeURIComponent(subscribeCyclicBoltons_cyclicCode) + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.prorateFlag=" + encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_prorateFlag) + buildHeaders_CyclicActionsManagement(headers);
if(subscribeCyclicBoltons_actionCommonInfo_appInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.appInfo.extension.any="+encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_appInfo_extension_any);
}
if(subscribeCyclicBoltons_actionCommonInfo_appInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.appInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_appInfo_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_actionCommonInfo_opCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.opCost="+encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_opCost);
}
if(subscribeCyclicBoltons_actionCommonInfo_opCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.opCost.@exponent="+encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_opCost_exponent);
}
if(subscribeCyclicBoltons_actionCommonInfo_currencyCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.currencyCode="+encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_currencyCode);
}
if(subscribeCyclicBoltons_actionCommonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.extension.any="+encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_extension_any);
}
if(subscribeCyclicBoltons_actionCommonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.actionCommonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_actionCommonInfo_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonIdentifier.boltonCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonCode);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonTypeCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonIdentifier.boltonTypeCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonTypeCode);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonInstance != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonIdentifier.boltonInstance="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_boltonInstance);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonIdentifier.extension.any="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_extension_any);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonIdentifier.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonIdentifier_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonAmount="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonAmount);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonAmount.@exponent="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonAmount_exponent);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonLD != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonLD="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonLD);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonLD_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonLD.@exponent="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonLD_exponent);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonMaxNumberOfSessions != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonMaxNumberOfSessions="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonMaxNumberOfSessions);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonCost="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonCost);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.boltonCost.@exponent="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_boltonCost_exponent);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.chargingModality="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_chargingModality);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.timeInterval.extension.any="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_extension_any);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.timeInterval.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_timeInterval_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_maxUnitsPerSession != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.maxUnitsPerSession="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_maxUnitsPerSession);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_maxUnitsPerSession_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.maxUnitsPerSession.@exponent="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_maxUnitsPerSession_exponent);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.extension.any="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_extension_any);
}
if(subscribeCyclicBoltons_boltonInfoList_boltonInfo_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.boltonInfo.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_boltonInfo_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_boltonInfoList_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.extension.any="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_extension_any);
}
if(subscribeCyclicBoltons_boltonInfoList_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoList.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoList_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCalculation.calcBoltonAmountCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonAmountCode);
}
if(subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonLDCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCalculation.calcBoltonLDCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonLDCode);
}
if(subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonCostCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCalculation.calcBoltonCostCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCalculation_calcBoltonCostCode);
}
if(subscribeCyclicBoltons_boltonInfoCalculation_calcMaxNumberOfSessionsCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCalculation.calcMaxNumberOfSessionsCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCalculation_calcMaxNumberOfSessionsCode);
}
if(subscribeCyclicBoltons_boltonInfoCalculation_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCalculation.extension.any="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCalculation_extension_any);
}
if(subscribeCyclicBoltons_boltonInfoCalculation_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCalculation.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCalculation_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_boltonAmount != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.boltonAmount="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_boltonAmount);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_boltonAmount_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.boltonAmount.@exponent="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_boltonAmount_exponent);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_boltonLD != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.boltonLD="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_boltonLD);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_boltonLD_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.boltonLD.@exponent="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_boltonLD_exponent);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_boltonCost != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.boltonCost="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_boltonCost);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_boltonCost_exponent != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.boltonCost.@exponent="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_boltonCost_exponent);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_boltonMaxNumberOfSessions != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.boltonMaxNumberOfSessions="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_boltonMaxNumberOfSessions);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_chargingModality != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.chargingModality="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_chargingModality);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonAmountCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.calcBoltonAmountCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonAmountCode);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonLDCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.calcBoltonLDCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonLDCode);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonCostCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.calcBoltonCostCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_calcBoltonCostCode);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_calcMaxNumberOfSessionsCode != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.calcMaxNumberOfSessionsCode="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_calcMaxNumberOfSessionsCode);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.extension.any="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_extension_any);
}
if(subscribeCyclicBoltons_boltonInfoCycleChange_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.boltonInfoCycleChange.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_boltonInfoCycleChange_extension_anyAttributeParam);
}
if(subscribeCyclicBoltons_extension_any != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.extension.any="+encodeURIComponent(subscribeCyclicBoltons_extension_any);
}
if(subscribeCyclicBoltons_extension_anyAttributeParam != null){
lRequest = lRequest + Ptf_DIM + "subscribeCyclicBoltons.extension.@anyAttributeParam="+encodeURIComponent(subscribeCyclicBoltons_extension_anyAttributeParam);
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

