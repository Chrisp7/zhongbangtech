jQuery( document ).ready(function( $ ) {	
	    
    /** Imperiale Daten ausgeben auf ï¿½bersichtseiten falls Sprache EN-US ist **/
    if($("div.product-teaser figure").length > 0){
          
      var re = /\/en-us\//;

      if(re.test(window.location.href)) {
        $( "td" ).each(function( index ) {
           if($(this).find("span.spec-imperial").length > 0){
				$(this).find("span.spec-imperial").css("display","block");
			   
			   
			
                //sofern metrische Daten ausgegeben werden
                if($(this).find("span.spec-metric").length > 0){
					$(this).find("span.spec-metric").css("display","none");
                //wenn nur imperiale Daten ausgegeben werden
               
                }
            }
        });
      }
      
    }	
	
	/** Imperiale Daten ausgegeben auf Detailseiten falls Sprache EN-US ist **/
	if($("section.product-techdata").length > 0){
          
      var re = /\/en-us\//;

      if(re.test(window.location.href)) {
        $( "td" ).each(function( index ) {
           if($(this).find("span.spec-imperial").length > 0){
				$(this).find("span.spec-imperial").css("display","block");
			
                //sofern metrische Daten ausgegeben werden
                if($(this).find("span.spec-metric").length > 0){
					$(this).find("span.spec-metric").css("display","none");
                //wenn nur imperiale Daten ausgegeben werden
               
                }
            }
        });
      }
      
    }
	
});