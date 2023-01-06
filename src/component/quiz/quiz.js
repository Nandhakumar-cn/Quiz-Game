import React from "react";
import Question from "../question/qustion";
import Option from "../options/option";
import Score from "../score";
import './quiz.css';
import End from "../result";
import Answers from "../answers";


class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state={
            questions :{
         1: "which year we started codenatives in vysystems",
         2: "The Smallest Country is ",
         3: "The indian currency notes are printed in",
         4: " Who invented the internet?",
         5: "Who among the following invented the Email?",
         6: " “Macintosh” an Operating System is a product of",
         7:"Which is the largest planet in the solar system?",
         8:"Which was the first country to use paper money?",
         9:"which continantal is called science continantal ?",
         10:"Full form of URL is ?"
            },
            options: {
              1:{
                a:"2000",
                b:"2003",
                c:"2002",
                d:"1999"
               

              },
              2:{
                a:"Maldivies",
                b:"Malta",
                c:"Vatican City",
                d:"Barbados"

              },
              3:{
                a:"New Delhi",
                b:"Nasik",
                c:"Nagpur",
                d:"Bombay"

              },
              4:{
                a:"Philip Diehl",
                b:"William Sturgeon",
                c:" Thomas Edison",
                d:"A. Robert E. Kahn and Vint Cerf"

              },
              5:{
                a: " Steve Jobs",
                b:"Shiva Ayyadurai",
                c: "George Fountain",
                d: " ragavaran kannusamy"

              },
              6:{
                a: "Microsoft",
                b:"Intel",
                c:"GooGle",
                d:"Apple"

              },
              7:{
                a:"Mars",
                b:"Mercury",
                c:"Venus",
                d:"Jupiter"
              },
              8:{
                a:"India",
                b:"China",
                c:"Japan",
                d:"Romanians"
              },
              9:{
                a:"Asia",
                b:"Australia",
                c:"Japan",
                d:"Antartica"
              },
              10:{
                a:"Uniform Resource Link",
                b:"Uniform Registered Link",
                c:"Uniform Resource Locator",
                d:" Unified Resource Link"
              },

              

            },
            correctOptions:{
                1:"c",
                2:"c",
                3:"b",
                4:"d",
                5:"b",
                6:"d",
                7:"d",
                8:"b",
                9:"d",
                10:"c"
            },
            correctOption:0,
            clickedOption :0,
            step:1,
            score:0,
            result:0,
            viewresult:0,
            viewanswer:0,
            show:true,
            getanswer:false
        }
    }
    checkoption = opt =>{
       if(opt === this.state.correctOptions[this.state.step]){
        this.setState({
            score:this.state.score+1,
            correctOption :this.state.
            correctOptions[this.state.step],
            clickedOption:opt,
            result:1
        });
       }
       else{
        this.setState({
            correctOption:0,
            clickedOption: opt,
            result:1
        });
       }
    }
    next =(step) =>{
      this.setState({
        step: step+1,
        correctOption : 0,
        clickedOption: 0,
        result: 0
      })
    }
    Next =(step) =>{
      this.setState({
        step: step+1,
        correctOption : 0,
        clickedOption: 0,
        result: 0
      })
    }
    handleClick = () =>{
      this.setState({
      viewresult:1
      })
    }
      exitClick=()=>{
      this.setState({
        
        correctOption:0,
        clickedOption :0,
        step:1,
        score:0,
        result:0,
        viewresult:0
      })
      }
      
      answerClick=() =>{
       this.setState({
      show:!this.state.show
       })
      }
     
      changefield =() =>{
        this.setState({
          getanswer : !this.state.getanswer
        })
      }
    rechangefield =() =>{
      this.setState({
        getanswer : false
      })
    }
    render(){
        return(
          
        <div>
          {
            this.state.getanswer ? 
            <Answers rest={() => this.rechangefield()}/> :
          <div>
          {
            this.state.step <= Object.keys(this.state.
              questions).length ? 
          <div className="quizapp">
            <Question q={this.state.questions[this.state.step]}
             qno={this.state.step} 
            total ={Object.keys(this.state.questions).length} 
             />
             <Option opt={this.state.options[this.state.step]}
             clickevent = {this.checkoption}
              correctOption = {this.state.correctOption} 
              clickedOption =  {this.state.clickedOption} result=
              {this.state.result}/>
              <button className="next" disabled ={this.
              state.clickedOption ? false : true} onClick={()=>
              this.next(this.state.step)}>
                NEXT &gt;</button>
          </div>:
          this.state.viewresult ? 
            (
           <Score score={this.state.score}
           total = {Object.keys(this.state.questions)
            .length} exit={()=>this.exitClick()}
            exits ={this.props.end}  view ={() =>this.state.answerClick()}
            use = {() => this.changefield()}/>
            ):
          (
            <End click={() =>this.handleClick()} />
          )
          
    }  
    </div> 
  }
        
        </div>   
      
          
        );
          
    }
} 
export default Quiz;