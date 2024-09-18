$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); 

        var taskText = $('#task-input').val().trim(); 

        if (taskText) {
        
            $('#task-list').append(`
                <li>
                    <span>${taskText}</span>
                    <span class="dot"></span>
                </li>
            `);
            $('#task-input').val(''); 
        }
    });

    $('#task-list').on('click', '.dot', function() {
    
        $(this).toggleClass('completed');

        $(this).parent().toggleClass('completed');
    });
});