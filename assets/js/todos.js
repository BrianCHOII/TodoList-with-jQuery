$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$(".fa").on("click", function() {
    $(".add-new-todo").fadeToggle(500, function() {
    })
})

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
        var value = $(this).val();
        $("#todo-list").append("<li>" + "<span><i class=\"far fa-trash-alt\"></i></span> " + value + "</li>")
        $(this).val("");
	}
})