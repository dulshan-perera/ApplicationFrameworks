//MongoDB queries
//Q1 
//Collection Name is students.
db.students.insertOne(
    {
        name:"John",
        dateOfBirth:"1990-01-01T00:00:00Z",
        subjects:["Application Frameworks", "Software Architecture"],
        marks:[65, 75, 70, 90]
    }
)

//Q2
db.students.findOne(
    {
        name:"John"
    }
)

//Q3
db.students.updateOne(
    {
        name:"John"
    },
    {
        $push:{
            subjects:"Distributed Computing"
        }
    }
)

//Q4
db.students.insertMany([
    {
        name:"Smith",
        dateOfBirth:"1990-01-15T00:00:00Z",
        subjects:["Application frameworks", " Software architecture"],
        marks: [80,75,60,45],
        isActive: true
    },
    {
        name:"Jane",
        dateOfBirth:"1990-02-15T00:00:00Z",
        subjects: ["Application frameworks", "Software architecture"],
        marks:[90,85,60,55],
        isActive: false
    }
])

//Q5
db.students.updateOne(
    {
        name:"Smith",
        isActive: true,
    },
    {
        $push:{
            subjects:"Distributed Computing"
        }
    }
)

//Q6
db.students.find(
    {
        isActive:true,
        subject:"Distributed Computing"
    }
)

//Q7
const firstRecord = db.students.findOne();

db.students.updateOne(
    {
        name:firstRecord.name
    },
    {
        $set:{
            isActive:false
        }
    }
)

//Q8
db.students.deleteOne()

//Q9
db.students.updateMany(
    {},
    {
        $set:{
            GPA: 0
        }
    }
)

//Q10
db.students.aggregate([
    {
        $set:{
            "AverageMarks":{$avg:"$marks"}
        }
    }
])