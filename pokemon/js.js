const fetchPoke = async() => {
    var name = $("#search").val().toLowerCase();

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        const data = await res.json();

        console.log(res);
        console.log(data);
        fillCard(data);



    } catch (error) {
        console.log(error);

    }


}

const fillCard = (data) => {
    // var template = $("#template").contents();
    const img = data.sprites.front_default;
    $("#card-img").attr("src", img);
    const name = data.name;
    const id = data.id;
    $("#pokename").text(name);
    $("#pokeid").text("No " + id);


}


$(document).ready(function() {

    fetchPoke();
    fillCard();











})