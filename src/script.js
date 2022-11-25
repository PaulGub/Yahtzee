$(document).ready(function () {

    $("button").click(function () {

        let nbSelected;

        if ($("#imgDe").children().length < 1) {
            for (let i = 0; i < 5; i++) {
                let urlImage = "images/" + randomIntBetween1and6() + ".png";
                $("#imgDe").append($('<img>', {
                    src: urlImage,
                    class: "rotate"
                }))
            }
        } else {
            nbSelected = 5 - $("#imgDe2").children().length;

            console.log(nbSelected);

            $("#imgDe").children().remove();

            for (let i = 0; i > nbSelected; i++) {
                let urlImage = "images/" + randomIntBetween1and6() + ".png";
                $("#imgDe").append($('<img>', {
                    src: urlImage,
                    class: "rotate"
                }))
            }
        }

    });

    $("#imgDe").on('click', 'img', function () {

        this.remove();

        $("#imgDe2").append(this);

    });

    const randomIntBetween1and6 = () => {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    }

})