/*
DESCRIPTION:
Learning TypeScript. Classes & Interfaces. Implement interface methods
Overview
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

Task
You are given an interface IGeometricFigure:

interface IGeometricFigure {
   Calculates area of the figure 
  area: () => number;
   Calculates perimeter of the figure 
  perimeter: () => number;
}
Your task is to implement classes Square and Circle:

export class Square implements IGeometricFigure {
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:
}
P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

FUNDAMENTALS
*/

interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
}

export class Square implements IGeometricFigure {
    constructor(public num: number) { }
  
    area(): number {
        return Math.pow(this.num, 2);
    }

    perimeter(): number {
        return this.num * 4;
    }
}

export class Circle implements IGeometricFigure {
    constructor(public num: number) { }
  
    area(): number {
        return Math.pow(this.num, 2) * Math.PI;
    }
  
    perimeter(): number {
        return this.num * 2 * Math.PI;
    }
}