jQuery(() => {
    // get current todo stuff
    let appendDis = localStorage.getItem('todo')
    $('ul').append(appendDis)

    // get Date
    let date = new Date();
    let ddInt = String(date.getDate()).padStart(2, '0')
    let ddString = date.toLocaleString('default', { weekday: 'long' });
    let mmString = date.toLocaleString('default', { month: 'long' })
    $('h6')[0].innerHTML = `${ddString}, ${ddInt} ${mmString}`
    // =======================

    // length of todo
    let todoLength = $('li').length
    $('h1')[0].innerHTML = `You have ${todoLength} tasks today`

    // ========== save current list of todo
    $('body').on('click', (event) => {
        localStorage.setItem('todo', $('ul')[0].innerHTML)
    })

    // ========== remove todo button
    $('body').on('click', '.rmv', (event) => {
        // remove 
        $(event.target).parent()[0].remove()

        // change todolength
        let todoLength = $('li').length
        $('h1')[0].innerHTML = `You have ${todoLength} tasks today`
    });

    // ========== add todo button
    $('.add').on('click', (event) => {
        // add todo 
        let todoText = $('input').val()
        $('ul').prepend(`<li class="mb-2">${todoText}<button class="rmv btn btn-sm btn-outline-light ms-2 float-end">❌</button><button class="rmv btn btn-sm btn-outline-light ms-2 float-end">✔️</button> </li>`)

        // add error if text is too large
        if (todoText.length > 20) {
            $('.error').attr('hidden', false)
            setTimeout(() => {
                $('.error').slideDown()
            }, 1000)
            setTimeout(() => {
                $('.error').slideUp()
            }, 5000)
            return
        }

        // change todolength
        let todoLength = $('li').length
        $('h1')[0].innerHTML = `You have ${todoLength} tasks today`

    });

    // ========== show settigns
    $('.settings-icon').on('click', (event) => {
        let attr = $('.settings').attr('hidden');
        if (typeof attr !== 'undefined' && attr !== false) {
            $('.settings').attr('hidden', false)
        } else {
            $('.settings').attr('hidden', true)
        }
    })

    // sortable todo
    $('#sortable').sortable()
})