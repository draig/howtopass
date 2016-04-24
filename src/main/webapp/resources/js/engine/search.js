$(function () {

    var country = $('#country').select({
        imageUrl: '../img/country.png',
        placeholder: 'Страна',
        loadUrl: '/howtopass/how-to-pass/country'
    });

    $('#country').on('valid', function (el, data) {
        $('#city').select('reload', {country: data.value});
    });
    country.select('reload');

    $('#city').select({
        imageUrl: '../img/city.png',
        placeholder: 'Город',
        loadUrl: '/howtopass/how-to-pass/city'
    });

//            $('#university').select({
//                imageUrl: '../img/university.png',
//                placeholder: 'Университет',
//                items: [
//                    {
//                        text:'БГУ',
//                        value: 'bsu'
//                    },
//                    {
//                        text:'БГМУ',
//                        value: 'bgmu'
//                    },
//                    {
//                        text:'БГУИР',
//                        value: 'bsuir'
//                    },
//                    {
//                        text:'МИТСО',
//                        value: 'mitso'
//                    },
//                    {
//                        text:'БТЭУ',
//                        value: 'bteu'
//                    },
//                    {
//                        text:'БГПУ им. М.Танка',
//                        value: 'maxTankBgpu'
//                    },
//                    {
//                        text:'МГЛУ',
//                        value: 'mglu'
//                    }
//                ]
//            });
//
//            $('#faculty').select({
//                placeholder: 'Факультет',
//                items: [
//                    {
//                        text:'ФПМИ',
//                        value: 'fpmi'
//                    },
//                    {
//                        text:'Биологический',
//                        value: 'bio'
//                    },
//                    {
//                        text:'Журналистики',
//                        value: 'journ'
//                    }
//                ]
//            });
//
//            $('#subject').input({
//                placeholder: 'Предмет',
//                required: true
//            });
//
//            $('#course').select({
//                placeholder: 'Курс',
//                items: [
//                    {
//                        text:'1',
//                        value: 1
//                    },
//                    {
//                        text:'1',
//                        value: 2
//                    },
//                    {
//                        text:'3',
//                        value: 3
//                    },
//                    {
//                        text:'4',
//                        value: 4
//                    },
//                    {
//                        text:'5',
//                        value: 5
//                    }
//                ]
//            });
//
//            $('#subject').input({
//                imageUrl: '../img/surname.png',
//                placeholder: 'амилия',
//                required: true
//            });
//
//            $('#surname').input({
//                placeholder: 'Фамилия',
//                required: true
//            });
//
//            $('#type').select({
//                placeholder: 'Экзамен/зачёт',
//                items: [
//                    {
//                        text: 'Зачёт',
//                        value: 'credit'
//                    },
//                    {
//                        text: 'Экзамен',
//                        value: 'exam'
//                    }
//                ]
//            });

});