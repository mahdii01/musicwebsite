let $ = document;
let music = new Audio("03 Halam Avaz Mishe.mp3");
// let songItem = $.querySelectorAll(".songItem");
let currentStart = $.querySelector("#currentStart");
let currentEnd = $.querySelector("#currentEnd");
let menuSong = $.querySelector(".menu-song");
let masterPlay = $.querySelector("#masterPlay");
let wave = $.querySelector(".wave");
// let playListPlay=$.querySelectorAll('.playListPlay');
let playBtn = $.querySelectorAll(".playBtn");
// let popSong=$.querySelector('.pop-song');
let poster_master_play = $.querySelector("#poster-master-play");
let title = $.querySelector("#title");
let subtitle = $.querySelector(".subtitle");
let index = 0;
let index2=0;
let seek = $.querySelector("#seek");
let bar2 = $.querySelector("#bar2");
let dot = $.getElementsByClassName("dot")[0];
let vol_icon = $.querySelector("#vol_icon");
let vol = $.querySelector("#vol");
let vol_dot = $.querySelector("#vol_dot");
let vol_bar = $.getElementsByClassName("vol_bar")[0];
let back = $.querySelector("#back");
let next = $.querySelector("#next");
let leftScroll = $.querySelector("#leftScrolls");
let rightScroll = $.querySelector("#rightScrolls");
let item = $.getElementsByClassName("item")[0];
let leftScrolls = $.getElementById("leftScroll");
let rightScrolls = $.getElementById("rightScroll");
let popSong = $.getElementsByClassName("pop-song")[0];
//array of musics
let songs1 = [
  {
    id: 1,
    songName: "حالم عوض میشه",
    artist: "شادمهر عقیلی",
    cover: "images/shadmehr.jpg",
  },
  {
    id: 2,
    songName: "تجربه کن",
    artist: "شادمهر عقیلی",
    cover: "images/tajrobeh.jpg",
  },
  {
    id: 3,
    songName: "ای وای",
    artist: "بابک جهانبخش",
    cover: "images/Babak-Jahanbakhsh.jpg",
  },
  {
    id: 4,
    songName: "وای دل بیقرارم",
    artist: "بهنام بانی",
    cover: "images/Behnam-Bani.jpg",
  },
  {
    id: 5,
    songName: "یکی یدونه",
    artist: "محسن ابراهیم زاده",
    cover: "images/mohseneb.jpg",
  },
  {
    id: 6,
    songName: "Dünya Senin",
    artist: "ilyas Yalçıntaş",
    cover: "images/dunya.jpg",
  }
];
let songs2=[
    {
        id: 1,
        songName: "تنهاییام",
        artist: "شادمهر عقیلی",
        cover: "images/tanha.jpg",
      },
      {
        id: 2,
        songName: "easy on me",
        artist: "adele",
        cover: "images/easy.jpg",
      },
      {
        id: 3,
        songName: "icimdeki duman",
        artist: "ilyas Yalçıntaş",
        cover: "images/Ilyas-Yalçıntaş-Içimdeki-Duman.jpg",
      },
      {
        id: 4,
        songName: "ستاره های سربی",
        artist: "ابی",
        cover: "images/Ebi-Setarehaye-Sorbi.jpg",
      },
      {
        id: 5,
        songName: "زندگی جونم",
        artist: "علیرضا طلیسچی",
        cover: "images/Alireza-Talischi-Zendegi-Joonam.jpg",
      },
      {
        id: 6,
        songName: "قاب عکس خالی",
        artist: "سیروان خسروی",
        cover: "images/Sirvan-Khosravi-Ghabe-Akse-Khali.jpg",
      },
      {
        id: 7,
        songName: "بهت قول میدم",
        artist: "محسن یگانه",
        cover: "images/Mohsen-Yeganeh-Behet-Ghol-Midam.jpg",
      }

];
songs1.forEach(function (musics) {
    menuSong.insertAdjacentHTML(
      "beforeend",
      '<li class="songItem"><h5>' +
        musics.songName +
        '<div class="subtitle">' +
        musics.artist +
        '</div><i onclick="masterPlayclick(event)"  class="bi playListPlay bi-play-circle-fill playBtn" id="' +
        musics.id +
        '" ></i></h5><img src="' +
        musics.cover +
        '" alt="shadmehr"><span>0' +
        musics.id +
        "</span></li>"
    );
});
songs2.forEach(function (music) {
    popSong.insertAdjacentHTML(
      "beforeend",
      '<li class="songItem"><div class="img_play"><img src="' +
        music.cover +
        '" alt="shadmehr"><i onclick="popularPlayclick(event)" class="bi playListPlay bi-play-circle-fill" id="' +
        music.id +
        '"></i></div><h5>'+music.songName+'<br><div class="subtitle">'+music.artist+'</div></h5>'
    );

});

let playListPlay = $.querySelectorAll(".playListPlay");
let songItem = $.querySelectorAll(".songItem");
masterPlay.addEventListener("click", function () {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
    $.getElementById(`${index}`).classList.remove("bi-play-circle-fill");
    $.getElementById(`${index}`).classList.add("bi-pause-circle-fill");

  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
    $.getElementById(`${index}`).classList.add("bi-play-circle-fill");
    $.getElementById(`${index}`).classList.remove("bi-pause-circle-fill");

  }
});

function makesPlayAll() {
  playListPlay.forEach(function (elem) {
    // console.log(elem);
    elem.classList.remove("bi-pause-circle-fill");
    elem.classList.add("bi-play-circle-fill");
  });
}
function makesAllBackgrounds() {
  Array.from(songItem).forEach(function (elements) {
    elements.style.background = "rgb(105,105,170,0)";
  });
}

function masterPlayclick(event) {
  index = event.target.id;
  makesPlayAll();
  event.target.classList.add("selected");
  songs1.filter((selectedSong) => {
    if (selectedSong.id == index) {
      event.target.classList.remove("bi-play-circle-fill");
      event.target.classList.add("bi-pause-circle-fill");
      music.src = "audio/" + index + ".mp3";
      poster_master_play.src = songs1[index - 1].cover;
      title.innerHTML = songs1[index - 1].artist;
      title.insertAdjacentHTML(
        "beforeend",
        ' <div class="subtitle">' + songs1[index - 1].songName + "</div>"
      );
      music.play();
      masterPlay.classList.remove("bi-play-fill");
      masterPlay.classList.add("bi-pause-fill");
      wave.classList.add("active2");
    //   music.addEventListener("ended", function () {
    //     masterPlay.classList.add("bi-play-fill");
    //     masterPlay.classList.remove("bi-pause-fill");
    //     wave.classList.remove("active2");
    //   });
    music.addEventListener("ended", function () {
      masterPlay.classList.add("bi-pause-fill");
    //   masterPlay.classList.remove("bi-pause-fill");
    //   playListPlay.classList.remove("bi-pause-fill");
    $.getElementById(`${index}`).classList.add("bi-play-circle-fill");
    $.getElementById(`${index}`).classList.remove("bi-pause-circle-fill");
      wave.classList.add("active2");
      index++;
      console.log(index);
      if (index > songs1.length) {
        console.log(index);
          index=1;
      }
      console.log(index);
      music.src = "audio/" + index + ".mp3";
          poster_master_play.src = songs1[index - 1].cover;
          title.innerHTML = songs1[index - 1].artist;
          title.insertAdjacentHTML(
            "beforeend",
            ' <div class="subtitle">' + songs1[index - 1].songName + "</div>"
          );
          music.play();
          $.getElementById(`${index}`).classList.remove("bi-play-circle-fill");
          $.getElementById(`${index}`).classList.add("bi-pause-circle-fill");
          makesAllBackgrounds();
          songItem[index- 1].style.background ="rgba(105,105,170,.1)";
    });
    }
    });
}
 function popularPlayclick(event){
  index2 = event.target.id;
  makesPlayAll();
  event.target.classList.add("selected");
  songs2.filter((selectedSong) => {
    if (selectedSong.id == index2) {
      event.target.classList.remove("bi-play-circle-fill");
      event.target.classList.add("bi-pause-circle-fill");
      music.src = "audio/popularsong/" + index2 + ".mp3";
      poster_master_play.src = songs2[index2 - 1].cover;
      title.innerHTML = songs2[index2 - 1].artist;
      title.insertAdjacentHTML(
        "beforeend",
        ' <div class="subtitle">' + songs2[index2 - 1].songName + "</div>"
      );
      music.play();
      masterPlay.classList.remove("bi-play-fill");
      masterPlay.classList.add("bi-pause-fill");
      wave.classList.add("active2");
      music.addEventListener("ended", function () {
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
        wave.classList.remove("active2");
      });
    }
  });
}
music.addEventListener("timeupdate", function () {
  parseInt(music.currentTime);
  parseInt(music.duration);
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  parseInt(music_curr);
  parseInt(music_dur);

  let min;
  let sec;
  parseFloat(min);
  parseFloat(sec);
  min = Math.floor(music_dur / 60);
  sec = Math.floor(music_dur % 60);

  console.log(sec);
  if (sec < 10) {
    sec = "0" + sec;
  }
  currentEnd.innerText = min + ":" + sec;

  let min1;
  let sec1;
  parseFloat(min1);
  parseFloat(sec1);
  min1 = Math.floor(music_curr / 60);
  sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = "0" + sec1;
  }
  currentStart.innerText = min1 + ":" + sec1;

  let progressBar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressBar;
  let seekBar = seek.value;
  bar2.style.width = seekBar + "%";
  dot.style.left = seekBar + "%";
});
seek.addEventListener("change", function () {
  music.currentTime = (seek.value * music.duration) / 100;
});

vol.addEventListener("change", function () {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = vol_a + "%";
  vol_dot.style.left = vol_a + "%";
  music.volume = vol_a / 100;
});
back.addEventListener("click", function () {
  index -= 1;
  if (index < 1) {
    index = songs1.length;
  }
  // console.log(index);
  music.src = "audio/" + index + ".mp3";
  poster_master_play.src = songs1[index - 1].cover;
  title.innerHTML = songs1[index - 1].artist;
  title.insertAdjacentHTML(
    "beforeend",
    ' <div class="subtitle">' + songs1[index - 1].songName + "</div>"
  );
  music.play();
  makesPlayAll();
  $.getElementById(index).classList.remove("bi-play-fill");
  $.getElementById(index).classList.add("bi-pause-fill");
  makesAllBackgrounds();
  Array.from(songItem)[index - 1].style.background =
    "rgba(105,105,170,.1)";
});
next.addEventListener("click", function () {
  index -= 0;
  index += 1;
  if (index > songs1.length) {
    index = 1;
  }
  // console.log(index);
  music.src = "audio/" + index + ".mp3";
  poster_master_play.src = songs1[index - 1].cover;
  title.innerHTML = songs1[index - 1].artist;
  title.insertAdjacentHTML(
    "beforeend",
    ' <div class="subtitle">' + songs1[index - 1].songName + "</div>"
  );
  music.play();
  makesPlayAll();
  // playListPlay.classList.remove('bi-pause-circle-fill')
  $.getElementById(`${index}`).classList.remove("bi-play-circle-fill");
  $.getElementById(`${index}`).classList.add("bi-pause-circle-fill");
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  makesAllBackgrounds();
  Array.from(songItem)[`${index - 1}`].style.background =
    "rgba(105,105,170,.1)";
});

leftScrolls.addEventListener("click", function () {
  popSong.scrollLeft -= 330;
});
rightScrolls.addEventListener("click", function () {
  popSong.scrollLeft += 330;
});

leftScroll.addEventListener("click", function () {
  item.scrollLeft -= 330;
});
rightScroll.addEventListener("click", function () {
  item.scrollLeft += 330;
});
// playListPlay.forEach(function (items) {
//   items.addEventListener("click", masterPlayclick);
// });
