/* GOALS: In terms of user experience, your shopping list app must allow users to:
1. enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
2. check and uncheck items on the list by clicking the "Check" button
3.permanently remove items from the list */

//Function for adding new items to the shopping list//


function handleNewItems() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const addedItem = $(this).find('#shopping-list-entry').val();

        $('.shopping-list').append('<li> <span class="shopping-item">' +addedItem+ '</span> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span>');
    });
};

function handleItemCheck() {
    $('.shopping-item-toggle').click(function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });

};

$(handleNewItems);
$(handleItemCheck);