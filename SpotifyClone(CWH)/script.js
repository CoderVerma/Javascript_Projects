{/* <script src="https://kit.fontawesome.com/084eb7ada6.js" crossorigin="anonymous"></script> */}

console.log("Hello")

let songIndex=0;


let audioElement=new Audio('songs/1.mp3');

let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
  {  songName:"Rolex Entry",filepath: "songs/1.mp3",coverpath: 'covers/cover.jpg'},
  {  songName:"No Love",filepath: 'songs/2.mp3',coverpath: 'covers/2.jpg'},
  {  songName:"We Rollin",filepath: 'songs/3.mp3',coverpath: 'covers/3.jpg'},
  {  songName:"295",filepath: 'songs/4.mp3',coverpath: 'covers/4.jpg'},
  {  songName:"Jhajar",filepath: 'songs/5.mp3',coverpath: 'covers/5.jpg'},
  {  songName:"har har sambhu",filepath: 'songs/6.mp3',coverpath: 'covers/6.jpg'}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('song')[0].innerText=songs[i].songName;   
})


// audioElement.play();



// handle play pause click


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    let progress=((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;


})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName;

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName;

})