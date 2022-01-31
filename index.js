const rect = require('./rectangle');
const solveRect = (l,b) => {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    if(l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should greater than 0");
    }else{
        console.log("The are of the rectangle is " + rect.area(l,b) + " and the perimeter is " + rect.perimeter(l,b));
    }
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
