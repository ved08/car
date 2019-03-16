

			function getKeyAndMove(e){
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: //left arrow key
						moveLeft();
						break;
					case 38: //Up arrow key
						moveUp();
						break;
					case 39: //right arrow key
						moveRight();
						break;
					case 40: //down arrow key
						moveDown();
						break;
				}
			}



$("#objImage").css({left:"10px" , top:"15px"}); //JQuery for initial positioning

			function moveLeft(){
			//objImage.style.left=parseInt(objImage.style.left)-5 +'px';
      $ ("#objImage").animate({
				left:"5px"
			});
			console.log("Moved left");
			}
			function moveUp(){
			//objImage.style.top=parseInt(objImage.style.top)-5 +'px';
			$ ("#objImage").animate({
				top:"5px"
			});
			console.log("Moved up");
			}
			function moveRight(){
			//objImage.style.left=parseInt(objImage.style.left)+5 +'px';
			$ ("#objImage").animate({
				left:"500px"
			});
			console.log("Moved right");
			}
			function moveDown(){
			//objImage.style.top=parseInt(objImage.style.top)+5 +'px';
			$ ("#objImage").animate({
				top:"500px"
			});
			console.log("Moved down");
			}
