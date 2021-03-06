// Button events
$('#button').on('click', newItem);
$('input').on('keydown', (e) => {
    if (e.key === "Enter") {
        return newItem();
    } else {
        return;
    }
});

function newItem() {
    // 1. Adding a new item to the list of items

    let li = $('<li></li>');

    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something");
    } else {
        $('#list').append(li);
    }
    // 2.Crossing out item from list
    function crossOut() {
        li.toggleClass("strike");
    }
    li.on('click', crossOut);

    //3. Adding the delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // 3.1 Delete item (adding delete class)
    function deleteListItem() {
        li.addClass('delete');
    }

    // 4. Sort items
    $('#list').sortable();

    //Deletes input after creating li item
    $('form').on('submit', e => e.preventDefault());
    $('#input').val(null);

}