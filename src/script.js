$(document).ready(function () {

    let nbPlay = 0;

    $("button").click(function () {

        nbPlay++;

        if(nbPlay >= 4){
            alert("Vous ne pouvez pas relancez !")
        }

        else{
            let nbSelected;

            if ($("#imgDe2").children().length > 0) {

                nbSelected = 5 - $("#imgDe2").children().length;

                console.log(nbSelected);

                $("#imgDe").children().remove();

                createDe(nbSelected)


            } else if($("#imgDe").children().length ===5){
                $("#imgDe").children().remove();
                createDe();
            }


            else {
                createDe()
            }
        }

    });

    $("#imgDe").on('click', 'img', function () {

        this.remove();

        $(this).removeClass('rotate');

        $("#imgDe2").append(this);

    });

    const randomIntBetween1and6 = () => {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }

    const createDe = (nbDe = 5) => {
        for (let i = 0; i < nbDe; i++) {
            let urlImage = "images/" + randomIntBetween1and6() + ".png";
            $("#imgDe").append($('<img>', {
                src: urlImage,
                class: "rotate"
            }))
        }
    }

})