// Ett enkelt exempel utan interface

const name: string = "Sandra";
const age: number = 30;
const favoriteNumbers: number[] = [3, 7, 21];

function greet(personName: string, personAge: number): string {
  return `Hej ${personName}, du är ${personAge} år.`;
}

function doubleAll(values: number[]): number[] {
  return values.map((value) => value * 2);
}

function isAdult(personAge: number): boolean {
  return personAge >= 18;
}

console.log(greet(name, age));
console.log(`Är vuxen: ${isAdult(age)}`);
console.log(`Favoritnummer: ${favoriteNumbers.join(", ")}`);
console.log(`Dubblade nummer: ${doubleAll(favoriteNumbers).join(", ")}`);

// Exportera funktionerna för vidare användning eller tester
export { greet, doubleAll, isAdult };
