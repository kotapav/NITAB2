class Student1 {

    sname:string 
    scity:string 
    sphone:number 

    //   constructor() {
    //         this.sname = "Rahul Verma"
    //         this.scity = "Hyd"
    //         this.sphone = 99999999
    //   }

        constructor(name,city,phone) {
            this.sname = name 
            this.scity = city 
            this.sphone = phone
        }

        

      displayData():void {
          console.log(this.sname,this.scity,this.sphone)
      }

      changeData():void {
         this.sname = "Sneha"
         this.scity = "Delhi"
        this.displayData
      }

}

     var s1=  new Student1("Rahul Verma","Delhi",9999999999)
     s1.displayData()
     s1.sphone = 666666666


     var s2 = new Student1("Sneha Reddy","Vizag",88888888)
     s2.displayData()

     s1.displayData()


    
    

     