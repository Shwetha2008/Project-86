var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

block_image_width = 500;
block_image_height = 500;

function new_image()
{
    {
        fabric.Image.fromURL("Happy.png",function(img){
            block_image_object=img;
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({
                top:0,
                left:0
            })
            canvas.add(block_image_object);
        })
        
    }
    new_image()
}
    
    function playSound()
    {
        x.play();
    }
    
        