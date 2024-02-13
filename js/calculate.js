/*function triangle() {
    // get triangle base
    let triangleBaseInput = document.getElementById('tri-base');
    let triangleBaseText = triangleBaseInput.value;
    let base = parseFloat(triangleBaseText);
    // console.log(base);

    // get triangle height
    let triangleHeightInput = document.getElementById('tri-height');
    let triangleHeightText = triangleHeightInput.value;
    let height = parseFloat(triangleHeightText);
    // console.log(height);

    //Calculate triangle area
    let area = 0.5 * base * height;
    console.log(area);

    // Display triangle area 
    const triangleAreaSpan = document.getElementById('tri-area');
    triangleAreaSpan.innerText = area;
}*/

// effective way to solve this section by reuseable function
function getInput(inputId){
    // if(typeof inputId !== 'number'){
    //     return 'invalid number';
    // }
    let inputField = document.getElementById(inputId);
    let inputFieldText = inputField.value;
    let input = parseFloat(inputFieldText);
    return input;
}
// Display area 
function displayArea(areaId, areaValue){
    // if(typeof areaId !== 'string' || typeof areaValue !=='number'){
    //     return 'invalid number';
    // }
    const AreaSpan = document.getElementById(areaId);
    AreaSpan.innerText = areaValue; 
}


function triangleArea(){
    const base = getInput('tri-base');
    // console.log(base);
    const height = getInput('tri-height');
    // console.log(height);
    const area = 0.5 * base * height;
    // console.log(area);

    //Display triangle area
    displayArea('tri-area', area );
    
}
document.querySelector('#tri-btn').addEventListener('click', triangleArea)

//calculate rectangle area
function rectangleArea(){
    const base = getInput('rec-base');
    const height = getInput('rec-height');
    const area = base * height;

    //Display rectangle area
    displayArea('rec-area', area );
    
}
document.querySelector('#rec-btn').addEventListener('click', rectangleArea)

//calculate parallelogram area
function parallelogramArea(){
    const base = getInput('para-base');
    const height = getInput('para-height');
    const area = base * height;
    //Display triangle area
    displayArea('Para-area', area ); 
}
document.querySelector('#para-btn').addEventListener('click', parallelogramArea);

//calculate ellipse area
function ellipseArea(){
    const base = getInput('elli-base');
    const height = getInput('elli-height');
    const area = 3.14 * base * height;
    //Display triangle area
    displayArea('elli-area', area ); 
}
document.querySelector('#elli-btn').addEventListener('click', ellipseArea);
function pentagonArea(){
    const base = getInput('ren-base');
    const height = getInput('ren-height');
    const area = 0.5 * base * height;
    //Display triangle area
    displayArea('pen-area', area ); 
}
document.querySelector('#ren-btn').addEventListener('click', pentagonArea);

//calculate rhombus area
function rhombusArea(){
    const base = getInput('rhom-base');
    const height = getInput('rhom-height');
    const area = 0.5 * base * height;
    //Display triangle area
    displayArea('rhom-area', area ); 
}
document.querySelector('#rhom-btn').addEventListener('click', rhombusArea);
