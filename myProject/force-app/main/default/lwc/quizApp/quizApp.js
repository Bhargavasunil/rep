import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    correctAnswers=0;
    toShowResult=false;
    myQuestions =[
        {
            id:'Question 1',
            question:'Which one of the following is not a template loop?',
            answers:{
                a:'for:Each',
                b:'iterator',
                c:'map loop',
            },
            "correct answer":'c',    
        },
        {
            id:'Question 2',
            question:'Which of the file is invalid in LWC component folder?',
            answers:{
                a:'.svg',
                b:'.apex',
                c:'.js',
            },
            "correct answer":'b',    
        },
        {
            id:'Question 3',
            question:'Which of the following is not a directive?',
            answers:{
                a:'for:Each',
                b:'if:true',
                c:'@track',
            },
            "correct answer":'c',    
        }
    ]
      selected={}; //to store the answers 
      get allNotSelected(){     //getter to disable the submit button until all questions answered
        return!(Object.keys(this.selected).length===this.myQuestions.length);
      };

      get isScoredFull(){   //to display something dynamically on html using this getter 
            return(`slds-text-heading_large ${this.myQuestions.length===this.correctAnswers? //by using string interpolation we implemented js in string 
            'slds-text-color_success':'slds-text-color_error'}`)
      }
     
    radioHandler(event){
         const {name,value} = event.target; //destructuring --  const name=event.target.name ,const value=event.target.value
         this.selected ={...this.selected,[name]:value}; //adding value to the selected object by using spread operator
         console.log(this.selected);
    }
    submitHandler(event){
           //event.preventDefault();  //to prevent the re-rendering of form, it it has button inside of it.
           let correct=this.myQuestions.filter(item=>this.selected[item.id]===item['correct answer']);
           this.correctAnswers = correct.length;
           this.toShowResult=true;
           //alert(`You answered  correctly ${this.correctAnswers} out of ${this.myQuestions.length}`);
    }
    resetHandler(){
        this.template.querySelector('form').reset();
        this.correctAnswers=0;
        this.toShowResult=false;
        this.selected={};
    }
 
}