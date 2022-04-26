//Q3
db.students.insertOne(
    {
        "name": "John",
        "dateOfBirth": "1990-01-01T00:00:00Z",
        "subjects": ["Application frameworks", "Computer architecture"]
        }    
)

//Q4
db.students.findOne(
    {
        "name": "John"
    }
)

//Q5
db.students.find(
    {
        _id: ObjectId("62676e4d88aa0130a6e60e17")
    }
)

//Q6
db.students.updateOne(
    {
        name:"John",
    },
    {
        $push:{
            subjects:"Distributed Computing"
        }
    }
)

//Q7
db.students.insertOne(
    {
        "name": "Smith",
        "dateOfBirth": "1990-01-15T00:00:00Z",
        "subjects": ["Application frameworks", "Computer architecture"],
        "isActive": true

    },
)

db.students.insertOne(
    {  
        "name": "Jane",
        "dateOfBirth": "1990-02-15T00:00:00Z",
        "subjects": ["Application frameworks", "Computer architecture"],        
        "isActive": false
    }
)

//Q8
db.students.updateOne(
    {
        name: "Smith",
        isActive: true
    },
    {
        $push:{
            subjects:"Distributed Computing"
        }
    }
)

//Q9
const firstDocument = db.students.findOne();

db.students.updateOne(
    {
        name:firstDocument.name
    },
    {
        $set:{
            isActive:false
        }
    }
)

//Q10
db.students.deleteOne(
    {
        name:firstDocument.name
    }
)