    //function to pass parameter from number keys
    function getNumber(num) {
      console.log(num);
      document.getElementById("displayButton").value += num;
    }
    //function to pass parameter from operator keys
    function getOperator(op){
      console.log(op);
      document.getElementById("displayButton").value += op;
    }
    //function to clear display
    function clearDisplay() {
      document.getElementById("displayButton").value = "";
    }
    //function to evaluate and display
    function calc() {
      output = eval(document.getElementById("displayButton").value);
      //alert(output);
      document.getElementById("displayButton").value = output;
    }
    //function to remove each input from right side
    function backSpaceDisplay() {
      let result = document.getElementById("displayButton").value;
      //alert(result); testing
      //alert("Data type is: " + typeof result); testing
      let sliced = result.slice(0,-1);
      //alert(sliced); testing
      document.getElementById("displayButton").value = sliced;
    }