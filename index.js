// Code your solution in this file!
function distanceFromHqInBlocks(newDistance) {
  
    let distances=Math.abs(newDistance-42);
      return distances;
  
  }
  function distanceFromHqInFeet(newDistance) {
       let distanceBlock=distanceFromHqInBlocks(newDistance);
       return distanceBlock*264;
     
    }
    function distanceTravelledInFeet(start, destination) {
      return Math.abs((start-destination))*264;
    }
    
    function calculatesFarePrice(start, destination){
      let feetDestance=distanceTravelledInFeet(start, destination)
      
      console.log(feetDestance)
      if(feetDestance>400&& feetDestance<2000){
          let numberOfFeet=feetDestance-400
          return numberOfFeet* 0.02
      }else if(feetDestance>2000&& feetDestance<=2500){
          return 25
  
      }else if(feetDestance<400){
          return 0
      }
      else if(feetDestance>2500){
  return 'cannot travel that far'
      }
    }
    console.log(calculatesFarePrice(34, 32))