const { update } = require("lodash");

class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    console.log(getRandomInt(3));
    return ;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    var compare = function (userSelection, cpuSelection) {
      if(userSelection === cpuSelection) 
      {return "tie";}
      
      else if(userSelection === "Rock") 
          if (cpuSelection === "Scissors") 
          {return "win";}
          else 
          {return "lose";}
      else if (userSelection === "Paper")
          if (cpuSelection === "Rock")
          {return "win";}
          else
          {return "lose";}
      else if (userSelection === "Scissors")
          if (cpuSelection === "Rock")
          {return "lose";}
          else
          {return "win";}
       }
   }
  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    
  
    if (determineWinner(userSelection, cpuSelection)) generateCPUResponse();
    else this.score.cpu++; this.gameHistoryLog.add("You selected " + userSelection + ", CPU selected " + cpuSelection + ": CPU wins");
     if (determineWinner(userSelection, cpuSelection)) generateCPUResponse();
     else this.score.user++; this.gameHistoryLog.add("You selected " + userSelection + ", CPU selected " + cpuSelection + ": You win");
      if (determineWinner(userSelection, cpuSelection)) generateCPUResponse();
      this.gameHistoryLog.add("You selected " + userSelection + ", cpu selected " + cpuSelection + ": It's a tie");
    }
}