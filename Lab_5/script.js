const url_dict = {
    'posts': 'https://jsonplaceholder.typicode.com/posts',
    'comments': 'https://jsonplaceholder.typicode.com/comments',
    'albums': 'https://jsonplaceholder.typicode.com/albums',
    'photos': 'https://jsonplaceholder.typicode.com/photos',
    'todos': 'https://jsonplaceholder.typicode.com/todos',
    'users': 'https://jsonplaceholder.typicode.com/users',
    'poland': 'https://restcountries.eu/rest/v2/lang/pl',
    'countriesAll': 'https://restcountries.eu/rest/v2/all',
    'agify': 'https://api.agify.io',
    'nationalize': 'https://api.nationalize.io',
    'universities': 'http://universities.hipolabs.com',
    'randomuser': 'https://randomuser.me/api/',
};





// -----------------Zadanie  1-----------------------------------------
// wszystkiew wymiary sa w jednostce milimetr.
var zad1_area = document.getElementById('zad_1');
var zad1_childEl1 = document.createElement('div');
var zad1_childEl2 = document.createElement('div');
zad1_area.appendChild(zad1_childEl1);
zad1_area.appendChild(zad1_childEl2);

let zad_1_trees =
    [
        {
            "nazwa": "Sosna zwyczajna",
            "wymiary":
            {
                "pien":
                {
                    "wysokosc": 300000,
                    "srednica": 500
                },
                "liscie":
                {
                    "dlugosc": 60,
                    "grubosc": 2
                }
            },
            "wystepowanie": "Występuje powszechnie na terenach Europy Północnej i Środkowej (również górskich) oraz Syberii Wschodniej."
        },
        {
            "nazwa": "Świerk pospolity",
            "wymiary":
            {
                "pien":
                {
                    "wysokosc": 200000,
                    "srednica": 650
                },
                "liscie":
                {
                    "dlugosc": 20,
                    "grubosc": 2
                }
            },
            "wystepowanie": "Występują one na obszarach chłodnych i umiarkowanych półkuli północnej. Trzy gatunki w Ameryce Północnej i dwa w Eurazji należą do głównych składników borealnych lasów iglastych (w tajdze azjatyckiej, zwłaszcza we wschodniej Syberii odgrywają mniejszą rolę)."
        }


    ]

//#region zad1_stringJson 
let zad_1_json_example = `
        [
            {
                "marka": "SAMSUNG GALAXY S10",
                "rdzenie":8,
                "wymiary": {
                  "wysokosc": 149,
                  "szerokosc": 70,
                  "grubosc": 7
                },
                "system": "Android 9.0 Pie",
                "podzespoly": {
                  "grafika": "ARM Mali-G76 MP12",
                  "procesor": {
                    "nazwa": "Samsung Exynos 9820",
                    "taktowanie": 2.7
                  }
                }
            },
            {
                "marka": "One Plus 7",
                "rdzenie":8,
                "wymiary": {
                  "wysokosc": 157,
                  "szerokosc": 75,
                  "grubosc": 8
                },
                "system": "Android 9.0 Pie",
                "podzespoly": {
                  "grafika": "Adreno 640",
                  "procesor": {
                    "nazwa": "Qualcomm Snapdragon 855",
                    "taktowanie": 2.84
                  }
                }
            }
        ]
        `
//#endregion

function getPhoneName() {
    return JSON.parse(zad_1_json_example)[0]['marka'];
}
function getPhoneCPUSpeed() {
    return JSON.parse(zad_1_json_example)[0]['podzespoly']['procesor']['taktowanie'];
}
function getPhoneHeight() {
    return JSON.parse(zad_1_json_example)[0]['wymiary']['wysokosc'];
}
function getPhoneWidth() {
    return JSON.parse(zad_1_json_example)[0]['wymiary']['szerokosc'];
}
function getPhoneCore() {
    return JSON.parse(zad_1_json_example)[0]['rdzenie'];
}
function getTreeObject(index) {
    return zad_1_trees[index];
}
function getTreeName(index) {
    return getTreeObject(index)['nazwa'];
}
function getTreeHeight(index) {
    return getTreeObject(index)['wymiary']['pien']['wysokosc'];
}
function convertMilimToMeters(arg) {
    return arg / 100 * 10;
}

function calcCircumference(dataSource1, dataSource2) {
    zad1_childEl1.innerText = `taktowanie * ilosc rdzeni -> ${dataSource1() * dataSource2()} GHz`;
}
calcCircumference(getPhoneCPUSpeed, getPhoneCore)


function stringBuilder(strings, ...dataSource) {
    var str = '';
    let arg1 = strings[0];

    var flag = true;
    var index = 0;
    while (flag) {
        try {
            str += dataSource[0](index)
            str += ' ';
            index++;
        }
        catch (ex) {
            flag = false;
        }
    }

    let s = arg1 + str;
    return s;
}
var stringTree = stringBuilder`Drzewa w polskich lasach: ${getTreeName}`
zad1_childEl2.innerText = stringTree;
// -----------------Zadanie  2-----------------------------------------
var zad2_area = document.getElementById('zad_2');
var zad2_div1 = document.createElement('div');
zad2_area.appendChild(zad2_div1);
function GetPostCount() {
    return new Promise((resolve, reject) => {
        try {
            fetch(url_dict['comments'])
                .then((data) => data.json())
                .then(data => resolve(data.length))
        } catch (ex) {
            reject(ex.message);
        }

    });
}
function GetUserCount() {
    return new Promise((resolve, reject) => {
        try {
            fetch(url_dict['users']).then(d => d.json()).then(d => resolve(d.length));

        } catch (ex) {
            reject(ex.message);
        }

    });
}

GetPostCount()
    .then(count_post => {
        GetUserCount().then(count_user => {
            zad2_div1.innerText = count_post / count_user + " tyle postów srednio wstawila 1 osoba";
        });
    })
    .catch(reason => { console.log(reason); })
    .finally(
        console.log("Zad 2A Uruchomiono")
    )

function getPolishFlagUrl() {
    return new Promise((resolve, reject) => {
        try {
            fetch(url_dict['poland'])
                .then(data => data.json())
                .then(data => data[0])
                .then(data => resolve(data['flag']));
        }
        catch (ex) {
            reject(ex.message);
        }
    });
}

function getNativeName() {
    return new Promise((resolve, reject) => {
        try {
            resolve(
                fetch(url_dict['poland'])
                    .then(data => data.json())
                    .then(data => data[0])
                    .then(data => data['nativeName'])
            )

        }
        catch (ex) {
            reject(ex.message);
        }
    });
}

function CreateCardElement(cardImg, cardTitle) {
    var divcard = document.createElement('div');

    var imgcard = document.createElement('img');

    var bodycard = document.createElement('div');
    var titlecard = document.createElement('h5');
    bodycard.appendChild(titlecard);
    divcard.appendChild(imgcard);
    divcard.appendChild(bodycard);

    divcard.classList.add('card');

    imgcard.classList.add('card-img-top');
    imgcard.src = cardImg;

    bodycard.classList.add('card-body');
    titlecard.classList.add('card-title');
    titlecard.innerText = cardTitle;

    return divcard;
}

getPolishFlagUrl().then(
    flagaUrl => {
        getNativeName().then(
            nazwa => {
                zad2_area.appendChild(
                    CreateCardElement(flagaUrl, nazwa)
                );
            }
        )
    })
    .catch(reject => console.error(reject))
    .finally("Zad 2B uruchomiono")



// function PolishBordersCountries() {
//     return new Promise((resolve, reject) => {
//         try {
//             resolve(fetch(url_dict['poland'])
//                 .then(data => data.json())
//                 .then(data => data[0])
//                 .then(data => data['borders'])
//             );
//         } catch (ex) {
//             reject(ex.message);
//         }
//     });
// }

// PolishBordersCountries().
//     then(data => {
//         var elemepnt_p = document.createElement('p');
//         elemepnt_p.innerText = 'Państwa graniczne z Polski =>' + data;
//         zad2_area.appendChild(elemepnt_p);
//     })
//     .catch((r) => { console.log(r) })
//     .finally(() => { console.log("Wypisano państawa graniczne z Polska.") });


// function PolishAltSpellings() {
//     return new Promise((resolve, reject) => {
//         try {
//             resolve(fetch(url_dict['poland'])
//                 .then(data => data.json())
//                 .then(data => data[0])
//                 .then(data => data['altSpellings'])
//             );
//         } catch (ex) {
//             reject(ex.message);
//         }
//     });
// }

// PolishAltSpellings()
//     .then(data => {
//         var elemepnt_p = document.createElement('p');
//         elemepnt_p.innerText = 'Inaczej Polska =>' + data;
//         zad2_area.appendChild(elemepnt_p);
//     })
//     .catch((reason) => console.log(reason))
//     .finally(() => {
//         console.log("Blok finally.");
//     });


//zad 3 async/await TODO
var zad3_handler = document.getElementById('zad_3');

async function apiCall(url) {
    return await fetch(url)
        .then(data => data.json());
}

async function UserExist(username) {
    var res = await apiCall(url_dict['users']);
    return res.some(arg => arg['name'].split(' ')[0] === username); // wybierz imię. a potem porownaj  
}

async function GetUserZipcode(userIdx, part) {
    var arg_return = await apiCall(url_dict['users']);
    return arg_return[userIdx]['address']['zipcode'].split('-')[part];
}

const geoDict = {
    0: 'lat',
    1: 'lng',
}

async function GetUserGeo(userIdx, geo) {
    var user_list = await apiCall(url_dict['users']);
    var namegeo = geoDict[geo];
    var ret_arg = user_list[userIdx]['address']['geo'][namegeo];
    return parseFloat(ret_arg);
}


var zad3_a = document.createElement('div');
zad3_handler.appendChild(zad3_a);

async function Zad3a(userIDX = 0) {
    var geo = await GetUserGeo(userIDX, 0);
    var zip = await GetUserZipcode(userIDX, 0);
    zad3_a.innerText = `UserID ${userIDX} działanie (zipcode - geo) = ${zip - geo}`;
}
Zad3a();


async function getAllUsersCities() {
    var citiesList = [];
    var data = await apiCall(url_dict['users']);
    data.forEach(item => citiesList.push(item.address.city));
    return citiesList
}

async function getAllUsersName() {
    var nameList = [];
    var data = await apiCall(url_dict['users']);
    data.forEach(item => nameList.push(item.name));
    return nameList;
}


var zad3_b = document.createElement('div');
zad3_handler.appendChild(zad3_b);
async function Zad3b() {
    var charsInCities = await getAllUsersCities();
    charsInCities = charsInCities.reduce((prev, curr, idx, arr) => {
        return prev + curr.length;
    }, 0);
    var charsInUserNames = await getAllUsersName()
    charsInUserNames = charsInUserNames.reduce((prev, curr, idx, arr) => {
        return prev + curr.length;
    }, 0);

    zad3_b.innerText = charsInCities > charsInUserNames
        ? `Różnica długości nazw miast jest o ${charsInCities - charsInUserNames} większa od dlugosci nazw imion`
        : `Różnica długości nazw imion jest o ${charsInUserNames - charsInCities} większa od dlugosci nazw miast`;
}
Zad3b();



// var lookingName = 'Chelsey';
// UserExist(lookingName).then(result => result == true ? console.log(" Osoba " + lookingName + " istnieje w API") : console.log("Brak osoby o imieniu" + lookingName));

//zad 4 AJAX
// function will fire after DOM of the page is now ready,  $(function () { });

function createUl(data) {
    var element_ul = document.createElement('ul');
    for (var i = 0; i < data.length; i++) {
        var element_li = document.createElement('li');
        if (i === 0) {
            element_li.classList.add('bg-primary');
        }
        element_li.innerText = data[i];
        element_li.classList.add('list-group-item');
        element_ul.appendChild(element_li);
    }
    return element_ul;
}

function Z2_CreateTable(dict) {
    var table_th1 = document.createElement('th');
    table_th1.innerText = "Polska in";
    var table_th2 = document.createElement('th');
    table_th2.innerText = "Translation";
    var table_tr = document.createElement('tr');
    table_tr.appendChild(table_th1);
    table_tr.appendChild(table_th2);

    var table = document.createElement('table');
    table.id = "pl_table";
    table.appendChild(table_tr);
    for (var key in dict) {
        var td1 = document.createElement('td');
        td1.innerText = key;
        var td2 = document.createElement('td');
        td2.innerText = dict[key]
        var tr = document.createElement('tr');

        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    return table;
}

var btn_pl = false;
$('#multi_lang_pl').click(function () {
    if (btn_pl == true) {
        $('#pl_table').hide();
        this.innerText = 'Wczytaj';
        btn_pl = false;
    } else {
        this.innerText = "Ukryj"
        btn_pl = true;
        if ($('#pl_table').length > 0) {
            $('#pl_table').show();
        } else {
            $.ajax({
                type: 'GET',
                url: url_dict['poland'],
                success: function (data) {
                    var handler = document.getElementById('content');
                    var pl_data = data[0];
                    var dict = pl_data['translations'];
                    handler.appendChild(Z2_CreateTable(dict));
                },
                error: function (jqXHR, status, error) {
                    console.error("Zad 4a " + status)
                }
            })
        }
    }
})



var btn_10_users = false;
$('#tasks').click(function () { //The jQuery team has also created an even shorter method for the document ready event:
    if (btn_10_users == true) {
        $('#bilans').hide();
        this.innerText = 'Wczytaj';
        btn_10_users = false;
    } else {
        this.innerText = "Ukryj"
        btn_10_users = true;
        if (document.getElementById('bilans').innerText.length > 0) { // element utworzony ma dlugosc domyslnie 1.
            $('#bilans').show();
        } else {
            $.ajax({
                type: 'GET',
                url: url_dict['todos'],
                success: function (data) {// this method will run when success and data is passed into arg.
                    var successed = 0;
                    var notcompleted = 0;
                    data.forEach((el, idx, arr) => {
                        if (el.completed) {
                            successed++;
                        }
                        else {
                            notcompleted++;
                        }
                    });

                    var innerText = `Razem wykonano ${successed} zadań, Przed nami jeszcze ${notcompleted}, \r\n Ukończono wszystkie zadania w ${successed / (successed + notcompleted) * 100.0}%`
                    $('#bilans').append(innerText);
                },
                error: function (jqXhr, status, error) {
                    console.error(status);
                }
            })
        }
    }
})


//zad 5 metoda fetch
var zad5_hander = document.getElementById('zad_5');

function GetUser(name) {
    return fetch(url_dict['agify'] + `/?name=${name}`).then(response => response.json());
}
function WhereComeFromName(name) {
    return fetch(url_dict['nationalize'] + `/?name=${name}`).then(response => response.json());
}
function GetListOfUniver(country) // in english
{
    return fetch(url_dict['universities'] + `/search?country=${country}`).then(response => response.json());
}
function GetRadnomUser() {
    return fetch(url_dict['randomuser']).then(data => data.json());
}

var univ_show = true;
var listaUczelniDiv = document.createElement('div');

var btn_univ = document.getElementById('btn_univers');

btn_univ.addEventListener('click', function () {
    if (univ_show == true) {
        listaUczelniDiv.style.display = 'block';
        btn_univ.innerText = "Ukryj";
        univ_show = false;
    }
    else {
        listaUczelniDiv.style.display = 'none';
        btn_univ.innerText = "Wczytaj";
        univ_show = true;
    }
});

GetListOfUniver('poland')
    .then(data => {
        var arr = ['Lista Uczelni w Gdansku.'];
        (data).forEach(element => {
            if (element['name'].includes('Gdansk')) {
                arr.push(element['name'])
            }
        });
        listaUczelniDiv.id = 'univ_list';
        listaUczelniDiv.appendChild(createUl(arr));
        listaUczelniDiv.style.display = 'none';
        zad5_hander.appendChild(listaUczelniDiv);
    })
// ----------------------------------------------------------------
GetRadnomUser().then(
    arg => {
        GetRadnomUser().then(value => {
            var age1 = value['results'][0]['dob']['age']
            var age2 = arg['results'][0]['dob']['age']

            console.log(`Zadanie5b
Wiek osoby ${JSON.stringify(value['results'][0]['name']['first'])} = ${age1}
Wiek osoby ${JSON.stringify(arg['results'][0]['name']['first'])} = ${age2}
Zatem różnica wynosi: ${age1 - age2}`
            );
        });
    }
)




//zad 6 AXIOS

var req_options = {
    method: 'GET',
    responseEncoding: 'utf8'
}
var userGenerator = async () => {
    options = req_options['url'] = url_dict['randomuser']
    return await axios(options).then(data => data['data']).then(data => data['results'][0]);
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function ApiFilter(generator, ...filres) // filters(user obj).
{
    return await new Promise(async (resolve, reject) => {
        try {
            var user = await generator();
            for (i = 0; i < filres.length; i++) {
                if (!filres[i](user)) {
                    console.error(user);
                    await sleep(500); // api się grzeje daj mu odpoczac
                    user = await generator();
                    i = -1;// iteracja która jest na koncu pentli na koncu wyzeruje licznik.
                }
            }
            resolve(user);
        } catch (exception) {
            reject(exception);
        }
    })
}

var filter_gender_male = (user) => user['gender'] == 'male';// there we recive raw user
var filter_country = (user) => ['Germany', 'Spain', 'New Zealand', 'Brazil', 'Canada', 'Finland', 'Switzerland', 'Australia', 'United States']
    .some((arg) => arg === user['location']['country']);// there we recive raw user
var filter_title = (user) => ['Miss'] === user['name']['title']



function getUserAccount(id) {
    var options = req_options['url'] = url_dict['users'] + '/' + id;
    return axios(options).then(data => data['data']); // poprzez ['data'] wydobywam z całego response tylko dane (json)
}
function getAllCountriesData() {
    var options = req_options['url'] = url_dict['countriesAll'];
    return axios(options).then(data => data['data']);
}

getAllCountriesData().then(data => {
    var coutriesArr = []
    data.forEach((item, idx, arr) => {
        coutriesArr.push(item['name']);
    });
    // console.log('List of all available countries ->', coutriesArr);
});

//getUserAccount(10).then(data => console.log('Użytkownik o id 10', data));

//wykorzystaj obiekt Promise do pobrania dwóch różnych zasobów liczbowych i 
//napisz funkcję wykonującą wybrane działanie na tych liczbach

// get street number
function getStreetNumber() {
    return new Promise((resolve, reject) => {
        var options = req_options['url'] = url_dict['randomuser'];
        axios(options)
            .then(data => data['data'])
            .then(data => data['results'][0])
            .then(data => {
                //console.info(data);
                resolve(data['location']['street']['number'])
            }
            )
    })
}
var getPropabilityOfName = (name) => {
    return new Promise((resolve, reject) => {
        var options = req_options['url'] = url_dict['nationalize'] + `/?name=${name}`;
        axios(options)
            .then(data => data['data'])
            .then(data => resolve(data['country'][0]['probability']))
    })
}

getStreetNumber().then(streetnumber => {
    getPropabilityOfName('jan').then(prop => {
        console.log('Zad6a, StreetNr-PropabilityOfName = ' + (streetnumber - prop))
    })
})

var getLongitude = () => {
    return new Promise((resolve, reject) => {
        var options = req_options['url'] = url_dict['randomuser'];
        axios(options)
            .then(data => data['data'])
            .then(data => data['results'][0])
            .then(data => {
                //console.info(data);
                resolve(parseFloat(data['location']['coordinates']['longitude']))
            })
    })
}

function getUserBirthDate() {
    return new Promise((resolve, reject) => {
        var options = req_options['url'] = url_dict['randomuser'];
        axios(options)
            .then(data => data['data'])
            .then(data => data['results'][0])
            .then(data => data['dob']['date'])
            .then(date => date.split('T')[0].replaceAll('-', ' ').split(' ').reverse().join('.'))
            .then(clear => resolve(clear))
    })
}

function zad6_ostatnie() {
    return new Promise((resolve, reject) => {
        getUserBirthDate().then(bdate => {
            z6_getUserCount().then(count => {
                resolve({ 'ilosc imin jan': count, 'najwczesniej urodzony w': bdate });
            })
        })
    })
}

zad6_ostatnie().then(d => console.log('Zadanie 6b', d));



var z6_getUserCount = (name = 'jan') => {
    return new Promise((resolve, reject) => {
        var options = req_options['url'] = url_dict['agify'] + `/?name=${name}`;
        axios(options)
            .then(data => data['data'])
            .then(data => resolve(data['count']))

    })
}

// wykorzystaj obiekt Promise do pobrania dwóch różnych dowolnych zasobów i 
// napisz funkcję tworzącą z nich nowy obiekt,


