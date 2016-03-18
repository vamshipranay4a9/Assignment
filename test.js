/**
 * Created by vamshi on 3/18/2016.
 */
function Hod(branch){
    this.branch = branch;
}

function professor(subject, designation){
    this.subject=subject;
    this.designation=designation;
}

function student(name,sec){
    this.name=name;
    this.sec=sec;
}

professor.prototype=new Hod("ECE");
student.prototype = new professor("Stld", "P.hd");

var student_details= new student("vamshi","3-year");
function call(){
    console.log(hello);
    var hello="helloworld";
    
}
function fun() {

    console.log(student_details.subject+"  "+student_details.branch);
    
}