function triangle() {
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
}



document.querySelector('#tri-btn').addEventListener('click', triangle)