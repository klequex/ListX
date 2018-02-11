$(document).ready(function() {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });


    $("#name-change-button").click(() => {
        let $nameInput = $("#list-name");
        $nameInput.prop("disabled", false);
        input.keypress(e => {
            if (e.which === 13) {
                e.preventDefault();
                let list = listId, newName = $nameInput.val(), admin = userId;
                $.post("/api/list/update/name", {list:list, newName:newName, admin:admin}, data => {
                    if (data.success) {// realod page
                        window.location.reload(true);
                    } else {
                        $("#save-error").show();
                    }
                });
            }
        });
    });

    


    /**
     * TODO: Country Changer
     * TODO: [Current Users/Current Invitations]:
     *      beforeItemRemove (check for admin)
     *      itemRemoved (remove user)
     *      beforeItemAdd (sanity check [duplicate])
     *      itemAdded (add user)
     * TODO: Delete List (modal => confirmation, delete)
     * TODO: Delete Invitations (delete)
     * TODO: Remove Users (modal => confirmation, delete)
     */
});