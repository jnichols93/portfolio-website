function Greeting() {
    var today = new Date()
    var curHr = today.getHours()
    
    if (curHr < 12) {
    return(
    <h4>
    Good Morning!
    </h4>);
    } else if (curHr < 16) {  return(
    <h4>
    Good Afternoon!
    </h4>);
    } else {
        return(
    <h4>
    Good Evening!
    </h4>);
    }
    }
    export default Greeting;