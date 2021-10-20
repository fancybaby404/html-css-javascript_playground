const checkTheme = () => {
    if (localStorage.getItem('theme') == 'light') {
        // remove theme class
        $('body').removeClass('dark-theme')
        $('body').removeClass('photo-theme')

        // add theme class
        $('body').addClass('light-theme')
        return;
    } else if (localStorage.getItem('theme') == 'dark') {
        // remove theme class
        $('body').removeClass('light-theme')
        $('body').removeClass('photo-theme')

        // add theme class
        $('body').addClass('dark-theme')
        return;
    } else if (localStorage.getItem('theme') == 'photo') {
        // remove theme class
        $('body').removeClass('light-theme')
        $('body').removeClass('dark-theme')

        // add theme class
        $('body').addClass('photo-theme')
        return;
    }
}


jQuery(() => {
    checkTheme();

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
    let todoLength = $('.todo li').length
    $('h1')[0].innerHTML = `You have ${todoLength} tasks today`

    // ========== save current list of todo/theme
    $('body').on('click', (event) => {
        // save todo-items
        localStorage.setItem('todo', $('ul')[0].innerHTML)
    })

    // ========== Theme
    $('input').on('click', () => {
        // save theme
        if ($('#Light').is(':checked')) {
            localStorage.setItem('theme', 'light')
        } else if ($('#Dark').is(':checked')) {
            localStorage.setItem('theme', 'dark')
        } else if ($('#Photo').is(':checked')) {
            localStorage.setItem('theme', 'photo')
        }

        checkTheme();
    })

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
        let todoLength = $('.todo li').length
        $('h1')[0].innerHTML = `You have ${todoLength} tasks today`

    });

    // ========== remove todo button
    $('body').on('click', '.rmv', (event) => {
        // remove 
        $(event.target).parent()[0].remove()

        // change todolength
        let todoLength = $('.todo li').length
        $('h1')[0].innerHTML = `You have ${todoLength} tasks today`
    });

    // ========== show settigns
    $('.settings-icon').on('click', (event) => {

        // if ($('.settings').position().top >= 1000) {
        //     console.log('going up')
        //     $('.settings-icon').addClass('disabled')
        //     $('.settings').animate({ top: '0px' }, 1500);
        //     $('.settings-icon').removeClass('disabled')

        // } else {
        //     console.log('going down')
        //     $('.settings-icon').addClass('disabled')
        //     $('.settings').animate({ top: '1000px' }, 1500);
        //     $('.settings-icon').removeClass('disabled')
        // }

        // if ($('.settings').hasClass('slide-up')) {
        //     $('.settings').addClass('slide-down', 1000, 'easeOutBounce');
        //     $('.settings').removeClass('slide-up');
        // } else {
        //     $('.settings').removeClass('slide-down');
        //     $('.settings').addClass('slide-up', 1000, 'easeOutBounce');
        // }

        // let attr = $('.settings').attr('hidden');
        $('.settings').fadeToggle()

        // if (typeof attr !== 'undefined' && attr !== false) {
        //     setTimeout(() => {
        //         $('.settings').slideUp()
        //     }, 5000)
        //     $('.settings').attr('hidden', false)
        // } else {
        //     setTimeout(() => {
        //         $('.settings').slideDown()
        //     }, 5000)
        //     $('.settings').attr('hidden', true)
        // }

    })

    // sortable todo
    $('#sortable').sortable()
})