const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const playlist = $(".listmusic");
        const heading=$('.title_song');
        const singer = $('.singer');
        const audio=$('#audio');
        const imgs=$('.img__album');
        const playbtn=$('.playbtn');
        const plays=$('.fa-play');
        const pauses=$('.fa-pause');
        const imgImg=$('.img__album');
    const app = {
        currenIndex:0,
        isPlaying:false,
      songs: [
        {
          name: "Click Pow Get Down",
          singer: "Raftaar x Fortnite",
          path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
          image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg",
        },
        {
          name: "Tu Phir Se Aana",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
        },
        {
          name: "Naachne Ka Shaunq",
          singer: "Raftaar x Brobha V",
          path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
        {
          name: "Mantoiyat",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
        },
        {
          name: "Aage Chal",
          singer: "Raftaar",
          path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg",
        },
        {
          name: "Damn",
          singer: "Raftaar x kr$na",
          path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
          image:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/6/0/4/0604b2039e6be2b7c8d4f3243b24594d.jpg",
        },
        {
          name: "Feeling You",
          singer: "Raftaar x Harjas",
          path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
        },
      ],
      defineProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get: function () {
                return this.songs[this.currenIndex];
            }
        })
      },
      loadCurrentSongs: function () {

        heading.textContent=this.currentSong.name;
        singer.textContent=this.currentSong.singer;
        imgs.style.backgroundImage=`url('${this.currentSong.image}')`;
        audio.src=this.currentSong.path;
        console.log(heading,singer,audio);
      },
      handleEvent: function () {
        const __this=this;
        playbtn.onclick=function(){
            if(__this.isPlaying){
                __this.isPlaying=false;
                audio.pause();
                pauses.style.display='none'
                 plays.style.display='block'
            }
            else{
                audio.play();
                __this.isPlaying=true;
                pauses.style.display='block'
                plays.style.display='none'
                imgImg.style.animation='suNi 10s Infinite';
            }
            
        }
      },
      render: function () {
        const html = this.songs.map((song, i) => {
          return `<div class="card__music">
          <div class="item__card">
            <div class="card__img">
              <img
                src=${song.image}
                alt=""
                width="50px"
                height="50px"
                style="object-fit: cover"
              />
            </div>
            <div class="name_card">
              <div class="card__name">${song.name}</div>
              <div class="card__single">${song.singer}</div>
            </div>
            <div class="card__btn"><i class="fa-solid fa-music"></i></div>
          </div>
        </div>`;
        });
        playlist.innerHTML = html.join("");
      },
      start: function () {
        this.defineProperties();
        this.loadCurrentSongs();
        this.handleEvent();
        this.render();
      },
    };
    app.start();