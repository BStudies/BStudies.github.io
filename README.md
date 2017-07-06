# About Me




![Site screenshot](images/about_me_screenshot.png)
Format: ![Alt Text](url)

### Technologies
* HTML
* CSS
* Javascript

### Sample Code
```javascript
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

```

### Problems/Future Improvements
Gears dont display nicely on all screens. Sometimes the program sets one big gear in the middle of the pegs. 

### Author
##### Brandon Hew