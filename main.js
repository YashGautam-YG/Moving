canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;

rover_y=10;
rover_img="rover.png";
nasa_img_array=["1.jpg","2.jpg","3.jpg","4.jpg","mars.jpg"];
Random_number=Math.floor(Math.random()*5);
background_img=nasa_img_array[Random_number];
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploudbackground;
    background_imgtag.src=background_img;
    rover_imgtag=new Image();

    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;
}
function uploudbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if (keyPressed=='38'){
        up();   
    }
    if (keyPressed=='40'){
        down();
    }
    if (keyPressed=='37'){
        left();
    }
    if (keyPressed=='39'){
        right();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up is pressed x"+rover_x+"y "+rover_y);
        uploudbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down is pressed x"+rover_x+"y "+rover_y);
        uploudbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
