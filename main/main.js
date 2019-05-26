module.exports = function main(num) {
    var arrayForNum0 = ["._.",
	                    "|.|",
						"|_|"];
						
	var arrayForNum1 = ["...",
	                    "..|",
						"..|"];
						
	var arrayForNum2 = ["._.",
	                    "._|",
						"|_."];
						
	var arrayForNum3 = ["._.",
	                    "._|",
						"._|"];

	var arrayForNum4 = ["...",
	                    "|_|",
						"..|"];

	var arrayForNum5 = ["._.",
	                    "|_.",
						"._|"];

	var arrayForNum6 = ["._.",
	                    "|_.",
						"|_|"];

	var arrayForNum7 = ["._.",
	                    "..|",
						"..|"];

	var arrayForNum8 = ["._.",
	                    "|_|",
						"|_|"];

	var arrayForNum9 = ["._.",
	                    "|_|",
						"..|"];	

	var numToLCD = [arrayForNum0,
					arrayForNum1, 
					arrayForNum2,
					arrayForNum3,
					arrayForNum4,
					arrayForNum5,
					arrayForNum6,
					arrayForNum7,
					arrayForNum8,
					arrayForNum9]
					
	var numArr = num.split("");
	
	var ans = "";
	for(var i=0; i<3; i++){
		for(var j=0; j<numArr.length; j++){
			if(j==numArr.length-1){
				ans = ans+numToLCD[numArr[j]][i]+"\n";
			}else {
				ans = ans+numToLCD[numArr[j]][i]+" ";
			}
		}
	}
	console.log(ans);

    return ans;
};