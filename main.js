var canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
roverX=10;
roverY=10;


function add(){
    background_imgtag=new Image();
    background_imgtag.onload=upload_background;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=upload_rover;
    rover_imgtag.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_imgtag,roverX,roverY,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;

    if(keypressed=='37'){
        left();
    }
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='39'){
        right();
    }
    if(keypressed=='40'){
        down();
    }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        upload_background();
        upload_rover();
    }
}

function down(){
    if(roverY<=500){
        roverY=roverY+10;
        upload_background();
        upload_rover();
    }
}

function left(){
    if(roverX>=0){
        roverX=roverX-10;
        upload_background();
        upload_rover();
    }
}

function right(){
    if(roverX<=700){
        roverX=roverX+10;
        upload_background();
        upload_rover();
    }
}