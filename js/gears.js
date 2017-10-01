var calcGears = function(pegs, ratio){

	//remove error message

	// let ratio = .5;
	if(!pegs || !ratio) return;



	pegs = pegs.replace(/\s/g, '');
	ratio = ratio.replace(/\s/g, '');
	//remove previous gears
	let gears = document.getElementsByClassName('gear');
	if(gears.length > 0){
		let count = gears.length;
		for(let j = 0; j < count; ++j){
			gears[0].parentElement.removeChild(gears[0]);
		}
	}
	
	//remove radii values
	let radiis = document.getElementsByClassName('radiiValue');
	if(radiis.length > 0){
		let count = radiis.length;
		for(let j = 0; j < count; ++j){
			radiis[0].parentElement.removeChild(radiis[0]);
		}
	}

	// ErrorComment
	let errorComment = document.getElementsByClassName('ErrorComment');
	if(errorComment.length > 0){
		let count = errorComment.length;
		for(let j = 0; j < count; ++j){
			errorComment[0].parentElement.removeChild(errorComment[0]);
		}
	}
	//remove spaces
	for(let j = 0; j < pegs.length; ++j){
		if(pegs[j]===' ' && pegs[j+1]!==undefined){
			pegs[j]=pegs[j+1];
			j--;
		}
	}
	pegs = pegs.split(',');
    var lengths = [];
	for(var j = 1; j < pegs.length; ++j){
        lengths.push(pegs[j]-pegs[j-1]);
    }
	console.log(lengths);
		
		
		
	//counters for matrix
	var zeros = [0,1];
	var ones = [zeros[1],3];
	var zeros2 = [ones[1],lengths.length+1];
	var matrix = [];
	
	
	
	
	
	//implement this setup
			
	// [f,g,h,i]
	// [1,1,0,0 |a]
	// [0,1,1,0 |b]
	// [0,0,1,1 |c]
	// [1/2,0,0,1 |d]
	
	
	
	
	
	
	
	var newvec = [];
	// first vector
	for(var j = 0; j < 2; ++j){
        newvec.push(1);
    }
	for(var j = zeros2[0]; j < zeros2[1];++j){
 		newvec.push(0);       
    }
	matrix.push(newvec)	
		
		
		
		
		
		
		
	// middle matrix
	for(let j = 1; j < lengths.length-1; ++j){
        newvec = [];
		// add zeros before
		for(let k = zeros[0]; k < zeros[1]; ++k){
			newvec.push(0);
        }
			
		// add ones
		for(let k = ones[0]; k < ones[1]; ++k){
			newvec.push(1);
        }
		//add zeros
		for(let k = zeros2[0]; k < zeros2[1]-1; ++k){
			newvec.push(0);
        }
		
		zeros[1] += 1;
		ones[0]+=1;
		ones[1]+=1;
		zeros2[0]+=1;
	
		
		matrix.push(newvec);
    }
		
		
	
	
	
	
	
	
	
	//pre last vector
	
	newvec=[];
	newvec.push(ratio);
	for(let j = 3; j <= zeros2[1]-1; ++j){
		newvec.push(0);
    }
	newvec.push(1);
	matrix.push(newvec);
	
	
		
		
		
		
		
	//last zero vector to make nxn matrix
	for(let j = 0; j < lengths.length; ++j){
		matrix[j].push(lengths[j]);
    }
	newvec=[];
	for(let j = 0; j <= zeros2[1]-1; ++j){
		newvec.push(0);
    }
	matrix.push(newvec);
		
		

		
		
		
		
		
		
		


	console.log('===========');
	//myMatrix = Matrix(matrix)
	//myMatrix.display()
	//myMatrix.rref()
	
	
	
	
	
	
	
	
	
	//display matrix
    console.log(matrix);
	// for vec in matrix:
	// 	sys.stdout.write(str(vec[0]))
	// 	for j in range(1,len(vec)):
	// 		sys.stdout.write(',   ' + str(vec[j]))
	// 	print()
	// print('\n==============')
	
	
	
	
	
	//reff of matrix
	for (let j = 0; j < matrix.length-1; ++j){
		//find pivot
		if(matrix[j][j]!==0){
				//divide row by pivot to make pivot 1
			pivot = matrix[j][j];
			// print('pivot: ' + str(pivot))
			console.log(`pivot: ${pivot}`);
			for(let k = j; k < matrix[j].length; ++k){
				matrix[j][k] = matrix[j][k]/pivot;
			}
				
				
				

			
	// 		//make zeros under pivot jj 
	// 		//k = row index under pivot, 
	// 		'''
	// 		pivot a
	// 		[a,b,c]
	// 		[d,e,f]
	// 		[g,h,i]
	// 		d=ad-d=0
	// 		e=bd-e
	// 		f=cd-f
	// 		g=ag-g=0
	// 		h=bg-h
	// 		i=cg-i
			
	// 		'''
	// 		//make zeros below pivot
	// 		print('zero below')
			console.log(`zero below`);
			for(let k = j+1; k < matrix.length-1; ++k){
				let x = matrix[k][j];
				// print('subtracting' + str(x) + "*Row " + str(j) + ' from row ' + str(k) )
				console.log(`subtracting ${x} *Row ${j} from row ${k}`);
				for(let m = j; m < matrix.length; ++m){
					matrix[k][m] = matrix[k][m] - matrix[j][m]*x;
				}
			
			}
					
			
					
				
				
			//make zeros above pivot
			//multiply pivot by row above, the subtract
			// print('zero above')
			console.log(`zero above`);
			for(let k = j-1; k > -1; --k){
				x = matrix[k][j];
				// print('subtracting' + str(x) + "*Row " + str(j) + ' from row ' + str(k) )
				console.log(`subtracting ${x} *Row ${j} from row ${k}`);
				for(let m = 0; m < matrix[k].length; ++m){
					matrix[k][m] =  matrix[k][m] - matrix[j][m]*x;
				}
					 
				
			}
				
		
		}
			
				
				
			
		
		//row swap jto make pivot
		else if(j !== matrix.length){
			for(let k = j; k < matrix.length; ++k){
				if(matrix[k][k] !== 0){
					tempvec = matrix[j];		//copy old data
					matrix[j] = matrix[k];//assign new data
					matrix[k]=matrix[j];	//replace old data
				}
					
			}
				
					

		}
		
					
		// for vec in matrix:
		// 	sys.stdout.write(str(vec[0]))
		// 	for j in range(1,len(vec)):
		// 		sys.stdout.write(',   ' + str(vec[j]))
		// 	print()
		// print('\n==============')
		//print('=================')
		console.log(matrix);
	
	}
		
	
	//make last gear the ratio
	let lastVec = matrix[matrix.length-1];
	let firstVec = matrix[0];
	let firstGear = firstVec[firstVec.length-1];
	lastVec[lastVec.length-1]=firstGear*ratio;
	
	
	
	let illegal = false;
	let myanswer = [];
	
	// check for negative
	for(let j = 0; j < matrix.length; ++j){
		for(let k = 0; k < matrix[j].length; ++k){
			if(matrix[j][k]<0){
				myanswer = [-1,-1];
				illegal = true;
				break;
			}
		}
		if(illegal ===true){
			var element = document.createElement("h1");
			element.innerText = `Cannot have a ${ratio} output with this setup`;
			element.className = 'ErrorComment';
			document.body.appendChild(element);
			break;
		}	
	}
		
	
	if(illegal === false){
		// myanswer = [matrix[0][matrix[j].length-1],1];
		console.log(`valid`);
		var pixleMultiplier = 20;
		var radiusValues = [];
		var gearElements = [];
		for(let j = 0; j < matrix.length; ++j){
			console.log(matrix[j][matrix.length-1]);
			let size = matrix[j][matrix.length-1]
			var h3element = document.createElement("h3");
			h3element.innerText = size;
			h3element.className = 'radiiValue';
			radiusValues.push(h3element);

			//make gear
			var element = document.createElement("button");
			element.className='gear';
			element.style.width = `${size*pixleMultiplier}px`;
			element.style.height = `${size*pixleMultiplier}px`;
			element.style.display = 'block flow';
			element.style.borderRadius = '100%';
			element.style.border = 'none';
			element.style.position = 'relative';
			element.style.background = 'url(../images/red-gear-hi.png)';
			element.style.backgroundSize = '102%';
			element.style.backgroundRepeat = 'no-repeat';
			// element.innerText = size;
			element.style.fontSize = '40px';
			let radialLine = document.createElement('hr');
			radialLine.style.width = '50%';
			radialLine.style.float = 'right';
			radialLine.className = 'clearfix';
			radialLine.position = 'absolute';
			element.appendChild(radialLine);
			gearElements.push(element);
			// document.body.appendChild(element);
			console.log(`created ${size} gear`);
		}
		for(let j = 0; j < radiusValues.length; ++j){
			document.body.appendChild(radiusValues[j]);
		}
		for(let j = 0; j < gearElements.length; ++j){
			document.body.appendChild(gearElements[j]);
		}
	}

	console.log(myanswer);
	return myanswer
}
	


			

// calcGears([4,30,50]);	