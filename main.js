var canvas = new fabric.Canvas('myCanvas');

block_image_height = document.getElementById("current_height").value;
block_image_width = document.getElementById("current_width").value;

player_x = 100;
player_y = 100;

player_object = "";
block_image_object = "";

function player_update()
{
    fabric.image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x

        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.image.fromURL("get_image", function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

