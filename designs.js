//select table
const table = $('table');
// Select size input
const row_inpt = $('#input_height')
const col_input = $('#input_width')
function makeGrid(){
    let tHeight = row_inpt.val();
    let tWidth = col_input.val();
    table.html("");
    // col function to add tWidth number of colums
    col = function (){
        let result=""
        for(let i = 0; i < tWidth ; i++){
            result = result + '<td></td>';
        }
        return result;
    }
    // loop to append (teight * tWidth) boxs
    while(tHeight > 0){
        table.append(`<tr>${col()}</tr>`);
        tHeight--;
        
    }
}

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
    event.preventDefault();
    makeGrid();
});

//painting the box function
table.on('click', 'td', function(){
    // Select color input
    let color = $('#colorPicker').val();
    $(this).css('background-color', color);
})