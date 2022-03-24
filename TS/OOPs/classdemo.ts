class Student {

    sname:string = "Rahul Varma"
    scity:string = "Hyderabad"
    sphone:number = 999999999

    

        

      displayData():void {
          console.log(this.sname,this.scity,this.sphone)
      }

      changeData():void {
         this.sname = "Sneha"
         this.scity = "Delhi"
        this.displayData
      }

}

     var s1=  new Student()
     s1.displayData()


     var s2 = new Student()
     s2.displayData()


     s1.sname = "Sneha Reddy"
     s2.sname = "NIT"
     console.log("------------------------------")
     s1.displayData()
     s2.displayData()
    

     