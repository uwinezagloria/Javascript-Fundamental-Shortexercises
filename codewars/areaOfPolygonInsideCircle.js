function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
return (1/2* numberOfSides * circleRadius*circleRadius* (Math.sin((2*Math.PI)/numberOfSides)))
}
