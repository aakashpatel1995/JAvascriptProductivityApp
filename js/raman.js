function Currency(){
		y = document.getElementById("converter").value;
		return y;
	}
	
	function Calculate(){
		y = Currency();
		
		x = document.getElementById("value1").value;
		
		if(x == ""){
			document.getElementById("value2").value = "";
		}else{
			switch(y){
				case "Dollar":
					document.getElementById("value2").value = x * 69.89;
				break;
				
				case "Pound":
					document.getElementById("value2").value = x * 90.42;
				break;
				
				case "Euro":
					document.getElementById("value2").value = x * 78.01;
				break;
                    case "Bitcoin":
					document.getElementById("value2").value = x * 362469.62;
				break;
                    case "CAD":
					document.getElementById("value2").value = x * 52.01;
				break;
                    case "Kuwaiti":
					document.getElementById("value2").value = x * 228;
				break;
                    case "AUD":
					document.getElementById("value2").value = x *  49.30;
				break;
                    case "Thai":
					document.getElementById("value2").value = x * 78.01;
				break;
                   
				
						}
		}
	}