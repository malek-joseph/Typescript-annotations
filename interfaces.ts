
// Is used to describe long annotations
interface Vehicle {
name: string;
year: number;
  broken: boolean;
  summary(): string;
}

const civic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name is ${this.name}`
  }
}



const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  
}

// This makes sure that we pass an object with types matching the 
printVehicle(civic)