function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function show_next_step(){
	var steps = document.getElementsByTagName('li');
	j=0;
	//find current step
	while(j<steps.length){
		if(steps[j].style.display == 'block'){
			break;
		}
		++j;
	}
	
	//deactivate current, activate next
	steps[j].style.display='none';
	steps[j+1].style.display='block'
}