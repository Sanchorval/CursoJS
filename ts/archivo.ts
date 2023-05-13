// name, age, description

interface AnotherObject {
    age: number;
    name: string;
    description?: string;
}

let anotherObject: AnotherObject = {
    age: 12,
    name: "My name"
};

if(anotherObject.age > 12){
    console.log("mayor");
}else{
    console.log("menor");
}
    
