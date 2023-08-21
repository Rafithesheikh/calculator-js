function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base')
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base)

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    const area = 0.5 * base * height;
    console.log(area)
    // Show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText =area;
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value ;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    const rectangleArea = width * length;

    // Show rectangle area
    const recArea = document.getElementById('rectangle-area');
    recArea.innerText = rectangleArea;
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-width');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    console.log(height)
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
 
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-first-radius');
    const minorRadius = getInputValue('ellipse-second-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area)
}
// re Usable 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}