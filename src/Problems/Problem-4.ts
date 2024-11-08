type Circle = {
    shape: 'circle',
    radius: number
}
type Rectangle = {
    shape: 'rectangle',
    width: number,
    height: number
}

type Area = Circle | Rectangle;

function calculateShapeArea(area: Area) {
    if (area.shape === 'circle') {
        let areaOfCircle = (Math.PI * (area.radius * area.radius)).toFixed(2)
        return areaOfCircle
    } else if (area.shape === 'rectangle') {
        return area.width * area.height
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);


