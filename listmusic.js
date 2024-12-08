const allMusic = [
  {
    name: "Nha - ký ức trốn đi",
    Artist: "Nha",
    img: "./image/hinh13.jpg",
    music: "./music/FILE_20220726_140010_NHA - Ký ức trốn đi.m4a",
  },
  {
    name: "Lofi by tama(Dĩ vãng nhạt nhòa)",
    Artist: "Lofi By tama",
    img: "./image/maxresdefault (1).jpg",
    music:
      "./music/FILE_20220726_140141_Lúc đắm đuối anh cho rằng tình ta như ánh trăng rằm - Lofi By Tama ( Dĩ Vãng Nhạt Nhoà ).m4a",
  },
  {
    name: "You are the reason",
    Artist: "Calum scott",
    img: "./image/maxresdefault (2).jpg ",
    music:
      "./music/FILE_20220726_140214_You+Are+The+Reason_Calum+Scott_1553969776.mp3",
  },
  {
    name: "Wolves",
    Artist: "Sundial",
    img: "./image/maxresdefault (3).jpg",
    music: "./music/FILE_20220726_140310_Wolves_Sundial_1554355317.mp3",
  },
  {
    name: "with you",
    Artist: "Tyler Shaw",
    img: "./image/maxresdefault (4).jpg",
    music: "./music/FILE_20220726_140332_With+You_Tyler+Shaw_1556065396.mp3",
  },
  {
    name: "Unbreak my  heart ",
    Artist: "Toni - Braxton",
    img: " ./image/maxresdefault (5).jpg",
    music:
      "./music/FILE_20220726_140358_Unbreak+My+Heart_Toni+Braxton_1553969529.mp3",
  },
  {
    name: "Older",
    Artist: "Sasha sloan",
    img: "./image/maxresdefault (6).jpg",
    music: "./music/FILE_20220726_140654_Older_Sasha+Sloan_1553969905.mp3",
  },
  {
    name: "Like I'm gonna lose you",
    Artist: "Meghan Trainor",
    img: "./image/maxresdefault (7).jpg ",
    music: "./music/Like I_m Gonna Lose You - Meghan Trainor.mp3",
  },
  {
    name: "just give me a reason",
    Artist: "pink - nate ruess",
    img: "./image/maxresdefault (8).jpg ",
    music: "./music/Just Give Me A Reason - Pink_ Nate Ruess.mp3",
  },

  {
    name: "I will always love you",
    Artist: "Whitney houston",
    img: "./image/maxresdefault.jpg",
    music:
      "./music/FILE_20220726_140825_I+Will+Always+Love+You_Whitney+Houston_1553969574.mp3",
  },
  {
    name: "imagine",
    Artist: "john Lennon",
    img: "./image/S21PS_HUGO_LP_Look2_002_rgb.jpg",
    music: "./music/FILE_20220726_140850_Imagine_John+Lennon_1553970067.mp3",
  },
  {
    name: "Dancing with your gost ",
    Artist: "sasha alex",
    img: "./image/himh1.jpg",
    music:
      "./music/FILE_20220726_143859_Sasha-Alex-Sloan-Dancing-With-Your-Ghost-_Lyric-Video_.m4a-_1_.mp3",
  },

  {
    name: "Hẹn ước từ hư vô",
    Artist: "Mỹ Tâm",
    img: "./image/hinh4.jpg",
    music:
      "./music/FILE_20220802_084631_MỸ TÂM - HẸN ƯỚC TỪ HƯ VÔ (LIVE) _ MY SOUL 1981.m4a.mp3",
  },
  {
    name: "Sau này gặp lại nhau khi hoa nở",
    Artist: "Nguyên Hà",
    img: "./image/hinh5.jpg",
    music:
      "./music/FILE_20220802_084631_NGUYÊN HÀ - SAU NÀY HÃY GẶP LẠI NHAU KHI HOA NỞ _ OFFICIAL MUSIC VIDEO.m4a.mp3",
  },
  {
    name: "Tình Đầu",
    Artist: "Tăng Duy Tân",
    img: "./image/hinh6.jpg",
    music:
      "./music/FILE_20220802_084631_TÌNH ĐẦU - Tăng Duy Tân _ Official Music Video.m4a.mp3",
  },
  {
    name: "3017 album 1 2 3 4",
    Artist: "ft.Titie, Nâu, Dương,Erik",
    img: "./image/hinh9.jpg",
    music:
      "./music/FILE_20220802_084631_W_n - 3107 album 1 2 3 4 _ ft. Titie, Nâu, Duongg, Erik.m4a.mp3",
  },
  {
    name: "Ngày Mai Em Sẽ Thành Ký ức",
    Artist: "Bùi Lan Hương",
    img: "./image/hinh12.jpg",
    music:
      "./music/FILE_20220802_084632_NGÀY MAI EM SẼ THÀNH KÝ ỨC _ OFFICIAL MUSIC VIDEO _ BÙI LAN HƯƠNG.webm.mp3",
  },

  {
    name: "Tội Tình - (lofi ver)",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh7.jpg",
    music:
      "./music/FILE_20220802_084631_Tội Tình - (Lofi Ver.) _ Đạt Long Vinh x Bolero Lofi ~ Anh mang tội si mê nên đường yêu lạc nẻo về...m4a.mp3",
  },
  {
    name: "Vùng lá me bay - (lofi ver)",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh8.jpg",
    music:
      "/music/FILE_20220802_084631_Vùng Lá Me Bay - (Lofi Ver.) _ Đạt Long Vinh ~ Nhìn lá me bay nhớ kỷ niệm hai chúng mình....m4a.mp3",
  },

  {
    name: "Giã Từ - (lofi ver) ",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh10.jpg",
    music:
      "./music/FILE_20220802_084632_Giã Từ - (Lofi Ver.) _ Đạt Long Vinh ~ Người về lên xe hoa kỷ niệm buồn vào hồn.m4a.mp3",
  },
  {
    name: "Hoa Trinh Nữ - (lofi ver)",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh11.jpg",
    music:
      "./music/FILE_20220802_084632_Hoa Trinh Nữ - (Lofi Ver.) ~ Tôi Không Phải Là Vua Nên Mộng Ước Thật Bình Thường _ _ Nhạc Lofi 2022.m4a.mp3",
  },
  {
    name: "yêu em dài lâu, mùa xuân đầu... ",
    Artist: "Mai bích trâm-cover",
    img: "./image/hinh2.jpg",
    music:
      "./music/FILE_20220802_084631_[Lyrics] Nhạc Chill _ Mai Bích Trân _ Yêu Em Dài Lâu, Mùa Xuân Đầu Tiên, Anh Cho Em Mùa Xuân,....m4a.mp3",
  },
  {
    name: " Biển tình, mộng chiều xuân...",
    Artist: "Mai bích trâm-cover",
    img: "./image/hinh3.jpg",
    music:
      "./music/FILE_20220802_084631_Biển tình • Mộng chiều xuân • Ai cho em mùa xuân • Mai Bích Trân - cover (lyrics).m4a.mp3",
  },

  // list nhac update
  {
    name: "Ai khổ vì ai",
    Artist: "Đạt long vinh",
    img: "./image/lofi19.jpg",
    music:
      "./music/y2mate.com - Ai Khổ Vì Ai Lofi Ver Đạt Long Vinh Em biết chăng em anh khổ vì ai anh khóc vì ai_1080p (convert.io).mp3",
  },
  {
    name: "Bội Bạc",
    Artist: "Đạt long vinh",
    img: "./image/lofi4.jpg",
    music:
      "music/y2mate.com - Bội Bạc Lofi Ver x Bolero Lofi Đạt Long Vinh Nhiều đêm khắc khoải niềm ưu tư chợt đến_v720P (convert.io).mp3",
  },
  {
    name: "Bông cỏ mây",
    Artist: "Đạt long vinh",
    img: "./image/lofi5.jpg ",
    music:
      "./music/y2mate.com - Bông Cỏ May Lofi Ver x Bolero Lofi Đạt Long Vinh Tóc mây thơm mùi cỏ đưa anh thoát xa dần_1080p.mp3",
  },
  {
    name: "Cánh hồng phai",
    Artist: "Đạt long Vinh",
    img: "./image/lofi6.jpg",
    music:
      "./music/y2mate.com - Cánh Hồng Phai Lofi Ver Đạt Long Vinh x Bolero Lofi Nàng như một đóa hồng phai_v720P.mp3",
  },
  {
    name: "Chàng trai si tình",
    Artist: "Đạt long vinh",
    img: "./image/lofi7.jpg",
    music:
      "./music/y2mate.com - Con Đường Xưa Em Đi Lofi Ver Đạt Long Vinh x Bolero Lofi Em ơi nhìn gió lên khơi_v720P.mp3",
  },
  {
    name: "Con đường xưa em đi ",
    Artist: "Đạt long vinh",
    img: " ./image/lofi8.jpg",
    music:
      "./music/y2mate.com - Con Đường Xưa Em Đi Lofi Ver Đạt Long Vinh x Bolero Lofi Em ơi nhìn gió lên khơi_v720P.mp3",
  },
  {
    name: "Em đi trên cỏ non",
    Artist: "Đạt long vinh",
    img: "./image/lofi9.jpg",
    music:
      "./music/y2mate.com - Em Đi Trên Cỏ Non Lofi Ver Đạt Long Vinh Em chưa đi trên cỏ non chưa từng nghe_v720P.mp3",
  },
  {
    name: "Em gái miền tây",
    Artist: "Đạt Long Vinh",
    img: "./image/lofi10.jpg ",
    music:
      "./music/y2mate.com - Em Gái Miền Tây Lofi Ver Đạt Long Vinh Thuyền tình quay về bến sông mong người em ru mấy câu hò_v720P.mp3",
  },
  {
    name: "giã từ",
    Artist: "Đạt long Vinh",
    img: "./image/lofi11.jpg ",
    music:
      "./music/y2mate.com - Giã Từ Lofi Ver Đạt Long Vinh Người về lên xe hoa kỷ niệm buồn vào hồn_v720P.mp3",
  },

  {
    name: "Lâu đài tình ái",
    Artist: "Đạt Long Vinh",
    img: "./image/lofi12.jpg",
    music:
      "./music/y2mate.com - Lâu Đài Tình Ái Lofi Ver x Bolero Lofi Đạt Long Vinh Anh sẽ vì em làm thơ tình ái_1080p.mp3",
  },
  {
    name: "imagine",
    Artist: "john Lennon",
    img: "./image/lofi13.jpg",
    music:
      "./music/y2mate.com - Phải Lòng Con Gái Bến Tre Lofi Ver Đạt Long Vinh Bậu sang phà Rạch Miễu qua lẽo đẽo theo sau_v720P.mp3",
  },
  {
    name: "Nhac lofi chill (1)",
    Artist: "LofiChill",
    img: "./image/lofi14.jpg",
    music:
      "./music/y2mate.com - Nhạc Lofi Tiếng Anh Chill Nhẹ Nhàng Giúp Bạn Thư Giãn Học Bài List Nhạc Lofi Chill Hay Nhất_v720P.mp3",
  },

  {
    name: "Nhac lofi chill (2)",
    Artist: "LofiChill",
    img: "./image/lofi15.jpg",
    music:
      "./music/y2mate.com - Nhạc Lofi Tiếng Anh Chill Nhẹ Nhàng Giúp Bạn Thư Giãn Học Bài List Nhạc Lofi Chill Hay Nhất_v720P.mp4 - Copy.mp3",
  },
  {
    name: "Lofi old song remix_1980",
    Artist: "Lofichil",
    img: "./image/lofi16.jpg",
    music: "./music/y2mate.com - old songs but its lofi remix_480p.mp3",
  },
  {
    name: "Hayd Head in the clouds",
    Artist: "child_múic",
    img: "./image/lofi18.jpg",
    music:
      "./music/y2mate.com - Hayd Head In The Clouds Official Video_v720P.mp3",
  },
  {
    name: "until i found you",
    Artist: "Stephen Sanchez Em Beihold",
    img: "./image/lofi17.jpg",
    music:
      "./music/y2mate.com - Stephen Sanchez Em Beihold Heaven when I held you again Until I Found You Lyrics_720pFHR.mp3",
  },
  {
    name: "Lofi hiphop child",
    Artist: "Lofi",
    img: "./image/lofi20.jpg",
    music:
      "./music/y2mate.com - Lofi Hip Hop Chillhop Music Mix  GEMN Chill Lo fi Hip Hop Beats FREE 2021.mp3",
  },
];
