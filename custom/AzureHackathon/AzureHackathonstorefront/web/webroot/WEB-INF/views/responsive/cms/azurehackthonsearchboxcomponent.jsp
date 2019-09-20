<%@ page trimDirectiveWhitespaces="true" contentType="text/html; charset=UTF-8" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<spring:htmlEscape defaultHtmlEscape="true" />

<c:url value="/search/" var="searchUrl" />
<spring:url value="/search/autocomplete/{/componentuid}" var="autocompleteUrl" htmlEscape="false">
     <spring:param name="componentuid"  value="${component.uid}"/>
</spring:url>11111111
<video id="player" controls autoplay></video>
            <button id="capture">Capture</button>
            <canvas id="canvas1" width=320 height=240></canvas>
            <canvas id="canvas2" width=320 height=240></canvas>
            <canvas id="canvas3" width=320 height=240></canvas>
                <!--script>
                 const player = document.getElementById('player');
                  const canvas1 = document.getElementById('canvas1');
                  const canvas2 = document.getElementById('canvas2');
                  const canvas3 = document.getElementById('canvas3');
                  const context1 = canvas1.getContext('2d');
                  const context2 = canvas2.getContext('2d');
                  const context3 = canvas3.getContext('2d');
                  const captureButton = document.getElementById('capture');

                  const constraints = {
                    video: true,
                  };

                  captureButton.addEventListener('click', () => {
                    // Draw the video frame to the canvas.
                    context1.drawImage(player, 0, 0, canvas1.width, canvas1.height);
                    setTimeout("context2.drawImage(player, 0, 0, canvas2.width, canvas2.height)", 1500 );
                    setTimeout("context3.drawImage(player, 0, 0, canvas3.width, canvas3.height)", 3000 );
                  });

                  // Attach the video stream to the video element and autoplay.
                  navigator.mediaDevices.getUserMedia(constraints)
                    .then((stream) => {
                      player.srcObject = stream;
                    });
                </script-->
<script type="text/javascript">
	var languages = new Map();
	languages.set("ja","ja-JP");
	languages.set("en","en-US");
	languages.set("de","de-DE");
	languages.set("zh","zh-CN");
	
	function changeIcon() {
		if($("#azurevr").hasClass( "glyphicon-volume-up" )){
			$("#azurevr").removeClass('glyphicon-volume-up').addClass('glyphicon-volume-down');
		}else{
			$("#azurevr").removeClass('glyphicon-volume-down').addClass('glyphicon-volume-up');
		}		
	}
	function recognizeOnceAsync() {
		console.log($("#lang-selector").val());
		console.log(languages.get($("#lang-selector").val()));
		var timer = setInterval(changeIcon, 200);
		var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
		//console.log(${fn:escapeXml(component.apikey)});
		var speechConfig = SpeechSDK.SpeechConfig.fromSubscription("${fn:escapeXml(component.apikey)}", "${fn:escapeXml(component.region)}");
		speechConfig.speechRecognitionLanguage = languages.get($("#lang-selector").val());
		console.log(speechConfig);
		console.log(audioConfig);
		var reco = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
		reco.recognizing = function (s, e) {
            window.console.log(e);
            $("#js-site-search-input").val(e.result.text);
    		
        };
        reco.recognized = function (s, e) {
            window.console.log(e);

            // Indicates that recognizable speech was not detected, and that recognition is done.
            if (e.result.reason === SpeechSDK.ResultReason.NoMatch) {
            	$("#js-site-search-input").val("");
                var noMatchDetail = SpeechSDK.NoMatchDetails.fromResult(e.result);
                console.log("(recognized)  Reason: " + SpeechSDK.ResultReason[e.result.reason] + " NoMatchReason: " + SpeechSDK.NoMatchReason[noMatchDetail.reason] + "\r\n"); 
            } else {
            	console.log("(recognized)  Reason: " + SpeechSDK.ResultReason[e.result.reason] + " Text: " + e.result.text + "\r\n");
            	//$("#js-site-search-input").val(e.result.text);
            	$("#js-site-search-input").keydown();
        		$("#js-site-search-input").keyup();
            }
            clearInterval(timer);
            $("#azurevr").removeClass('glyphicon-volume-down').addClass('glyphicon-volume-up');        
            
            if( $("#js-site-search-input").val()=="check out"){
            	console.log("checkout");
            	var slash = window.location.pathname.indexOf('electronics');
            	if(slash!=-1){
            		slash = window.location.pathname.indexOf('/', slash+1);
            	}
            	if(slash!=-1){
            		slash = window.location.pathname.indexOf('/', slash+1);
            	}
            	
            	window.location = window.location.pathname.substring(0, slash)+"/cart";
            }
            if( $("#js-site-search-input").val().startsWith("cheap")){
            	//console.log("cheapest");
            	var t = $("#js-site-search-input").val();
            	//console.log(t);
            	//console.log(t.indexOf(' '));
            	var q = t.substring(t.indexOf(' ')+1);
            	console.log(q);
            	q=q.replace(/\s/g,"+");	
            	var slash = window.location.pathname.indexOf('electronics');
            	if(slash!=-1){
            		slash = window.location.pathname.indexOf('/', slash+1);
            	}
            	if(slash!=-1){
            		slash = window.location.pathname.indexOf('/', slash+1);
            	}
            	window.location = window.location.pathname.substring(0, slash)+"/search/?sort=price-asc&q="+q+"%3Arelevance";
            	//console.log(q);
            	//?sort=price-asc&q=sony%3Arelevance
            	//console.log(window.location);
            }else if( $("#js-site-search-input").val().startsWith('最贵的')){
            	//console.log("cheapest");
            	var t = $("#js-site-search-input").val();
            	var q = t.substring(3);
            	q=q.replace(/\s/g,"+");	
            	var slash = window.location.pathname.indexOf('/');
            	if(slash!=-1){
            		slash = window.location.pathname.indexOf('/', slash+1);
            	}
            	if(slash!=-1){
            		slash = window.location.pathname.indexOf('/', slash+1);
            	}
            	if(slash!=-1){
            		slash = window.location.pathname.indexOf('/', slash+1);
            	}
            	window.location = window.location.pathname.substring(0, slash)+"/search/?sort=price-desc&q="+q;
            }
            
            reco.close();
            reco = undefined;
        };
        
        reco.recognizeOnceAsync();
		
	}
</script>
<div class="ui-front">
	<form name="search_form_${fn:escapeXml(component.uid)}" method="get"
		action="${fn:escapeXml(searchUrl)}">
		<div class="input-group">
			<spring:theme code="search.placeholder" var="searchPlaceholderHtml" />

			<ycommerce:testId code="header_search_input">
				<c:set var="optionsJson">
					{
						"autocompleteUrl" : "${ycommerce:encodeJSON(autocompleteUrl)}",
						"minCharactersBeforeRequest" : "${ycommerce:encodeJSON(component.minCharactersBeforeRequest)}",
						"waitTimeBeforeRequest" : "${ycommerce:encodeJSON(component.waitTimeBeforeRequest)}",
						"displayProductImages" : "${ycommerce:encodeJSON(component.displayProductImages)}"
					}
				</c:set>
				<input type="text" id="js-site-search-input"
					class="form-control js-site-search-input" name="text" value=""
                    maxlength="100" placeholder="${searchPlaceholderHtml}"
					data-options="${fn:escapeXml(optionsJson)}">
			</ycommerce:testId>

			<span class="input-group-btn"> <ycommerce:testId code="header_search_button">
					<button class="btn btn-link js_search_button" type="submit" disabled="true">
						<span class="glyphicon glyphicon-search"></span>
					</button>
				</ycommerce:testId>
				<ycommerce:testId code="header_search_vr_button">
<!-- 				<p>${fn:escapeXml(component.apikey)}</p> -->
					<button class="btn btn-link" type="button" onclick="recognizeOnceAsync()">
						<span id="azurevr" class="glyphicon glyphicon-volume-up"></span>
					</button>
				</ycommerce:testId>
			</span>
		</div>
	</form>

</div>
