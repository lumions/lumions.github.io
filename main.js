var links = ["http://rs.sfacg.com/web/novel/images/NovelCover/Big/e36f7fa4-01e4-4b83-b5a8-4394a6c9dde7.jpg",

"https://www.dpsvip.com/images/news/BNS%20Gold.jpg",

"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/151010_Sapporo_ramen_at_Susukino_Sapporo_Hokkaido_Japan01s.jpg/270px-151010_Sapporo_ramen_at_Susukino_Sapporo_Hokkaido_Japan01s.jpg",

"http://thehub.musiciansfriend.com/images/drumsbuying/pearl-reference-pure-standard-natural-drum-set.jpg",
             "http://vignette3.wikia.nocookie.net/sakurasounopetnakanojo/images/4/4f/Shiinachan.jpg/revision/latest?cb=20150201181958",
             
];

var titles = ["別管這什麼w", "就說別管了", "你還繼續按", "很故意欸", "那你就重看吧", "Scratch兒童程式教學", "AI人工智慧"];
var index = 0;
var autoplay = false;

function prevPic() {
  
}
function nextPic() {
  console.log("nextPic: " + index);
  var img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  console.log(links)
  var title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
  
  if(autoplay) {
    setTimeout(nextPic, 3000);
  }
}

if(autoplay) {
    setTimeout(nextPic, 3000);
}
