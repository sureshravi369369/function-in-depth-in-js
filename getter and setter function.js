let student={
    fristName:"anbu",
    lastName:"selvan",
    
    get fullName(){
        return `${this.fristName} ${this.lastName}`
    },
    set fullName(value){
       let newName=value.split(" ");
       this.fristName=newName[0];
       this.lastName=newName[1]
    }
}

student.fullName="sathish kumar"
console.log(student.fullName);