
const name = band.rock.paramore.name;
const img = band.rock.paramore.image;
const song = band.rock.paramore.bestsong;


$("#start").on("click", function() {
    const nameDiv = $("<div>").addClass("name");
    const imgDiv = $("<div>").addClass("img");
    const songDiv = $("<div>").addClass("song");

    imgDiv.attr("src", img);

    nameDiv.append(name);
    songDiv.append(song);

    $("#band-info").append(nameDiv);
    $("#band-info").append(songDiv);
    $("#band-info").append(imgDiv);
})


console.log(name);
console.log(img);
console.log(song);