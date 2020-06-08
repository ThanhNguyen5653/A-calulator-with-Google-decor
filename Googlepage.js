
/*Function calc take in the user input 
and split the string into 3 parts, then convert the 
string into numbers in order to compute answers.
*/
function calc (){
    console.log('document object', document);
    let user_input=document.getElementById('userInput');
    let user_input_val=user_input.value;//Taking in input string
    console.log(user_input_val);

    

    let operatorIndex=-1;
    let str1,str2,num1,num2,ans;
    /* The for loop search the string for the operator "+" first, if
    not found, the loop continue until another operator is found.*/
    for(let i=0;i<user_input_val.length;i++){
        let char=user_input_val[i];
        
        if(char=="+"){//If the string has "+"
            operatorIndex=i;
            
            console.log('operator: ',char);
            str1=user_input_val.substr(0,operatorIndex);
            num1=Number(str1);
            console.log('1st number is: ',num1);
            str2=user_input_val.substr(operatorIndex+1);
            num2=Number(str2);
            console.log('2nd number is: ',num2);
            ans=num1+num2;
            console.log('Answer : ',ans);
            document.getElementById('answer').innerHTML=ans;//printing the answer.
            

            break;

        }
        if(char=="-"){//If the string has "-"
            operatorIndex=i;
            str1=user_input_val.substr(0,operatorIndex);
            num1=Number(str1);
            console.log('1st number is: ',num1);
            str2=user_input_val.substr(operatorIndex+1);
            num2=Number(str2);
            console.log('2nd number is: ',num2);
            console.log('operator: ',char);
            ans=num1-num2;
            console.log('Answer : ',ans);
            document.getElementById('answer').innerHTML=ans;//printing the answer.
            break;
        }
        if (char=="/"){//If the string has "/"
            operatorIndex=i;
            str1=user_input_val.substr(0,operatorIndex);
            num1=Number(str1);
            console.log('1st number is: ',num1);
            str2=user_input_val.substr(operatorIndex+1);
            num2=Number(str2);
            console.log('2nd number is: ',num2);
            console.log('operator: ',char);
            ans=num1/num2;
            console.log('Answer : ',ans);
            document.getElementById('answer').innerHTML=ans;//printing the answer.
            break;
        }
        if (char=="*"){//If the string has "*"
            operatorIndex=i;
            str1=user_input_val.substr(0,operatorIndex);
            num1=Number(str1);
            console.log('1st number is: ',num1);
            str2=user_input_val.substr(operatorIndex+1);
            num2=Number(str2);
            console.log('2nd number is: ',num2);
            console.log('operator: ',char);
            ans=num1*num2;
            console.log('Answer : ',ans);
            document.getElementById('answer').innerHTML=ans;//printing the answer.
            break;
        }
    }
    
 
generateOutput();

}

function generateOutput(operatorIndex, char){
    



}




    
 

    
    
    

   
 
    

    







   


