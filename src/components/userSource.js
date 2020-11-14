const users = [
    {
        id:1,
        profile: "Academlo",
        username: "Academlo",
        profileImg: `https://yt3.ggpht.com/a/AATXAJx_xTZfIYGPGSJfPP9tEA8WZvEQTgFQnK1gWVoX=s900-c-k-c0x00ffffff-no-rj`,
    },
    {
        id:2,
        profile: "Alvaro Ortiz",
        username: "aaobej",
        profileImg: `https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png`,
    },
    {
        id:3,
        profile: "Andres Ortiz",
        username: "andresort",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZyOEOIqQRPWXoZZN-jOfPpudGsx7aMfRzlg&usqp=CAU`,
    },
    {
        id:4,
        profile: "Jared Ortiz",
        username: "jaredo",
        profileImg: `https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png`,
    },
    {
        id:5,
        profile: "Karen Diaz",
        username: "kadilo17",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7UvZWBp0opKJJIF-BXk71yOlZEuqEEenf3g&usqp=CAU`,
    },
    {
        id:6,
        profile: "Oscar Islas",
        username: "oscarisl",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfv8L2XNI6ftiotLOYDIGzrAaKppHmfVIT5A&usqp=CAU`,
    },
    {
        id:7,
        profile: "Georg",
        username: "georgb",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU`,
    },
    {
        id:8,
        profile: "Laura Mendez",
        username: "MendezLaurita",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYQNqN8LqXGSksQ90BUEbezxl9W80boPk6HQ&usqp=CAU`,
    },
    {
        id:9,
        profile: "Ken Fight",
        username: "Kenneth Jhis",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_JmXsjhIcyXgF32xOHGDlN6uKCDoG1UE8rg&usqp=CAU`,
    },
    {
        id:10,
        profile: "Nvidia GForce",
        username: "NvidiaGfx",
        profileImg: `https://yt3.ggpht.com/a/AATXAJw3_884ppA_nhO7-1U4RbXJfWN0gVqPn_9afIMehBE=s240-c-k-c0xffffffff-no-rj-mo`,
    },
    {
        id:11,
        profile: "The Joker",
        username: "JokerHatesBat",
        profileImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c12b37e1-9561-46df-8cd5-abb73d13edd1/d1i58b4-c5cb1d0a-eb50-4af9-9036-4e607d54e4cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzEyYjM3ZTEtOTU2MS00NmRmLThjZDUtYWJiNzNkMTNlZGQxXC9kMWk1OGI0LWM1Y2IxZDBhLWViNTAtNGFmOS05MDM2LTRlNjA3ZDU0ZTRjZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ojQzjDQC-9yL_SUU-C9YSTwr-v_jGLAeCOZ4ffKHCkY`,
    },
    {
        id:12,
        profile: "DeadPool",
        username: "MrPool",
        profileImg: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89f9adda-0ce2-41ca-bd0a-629c69bba8e5/dapuv77-136f3b3e-66ea-4d43-9bbd-e38008c80c4f.png/v1/fill/w_1024,h_1191,strp/deadpool_png__3_by_anna_x_anarchy_dapuv77-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTkxIiwicGF0aCI6IlwvZlwvODlmOWFkZGEtMGNlMi00MWNhLWJkMGEtNjI5YzY5YmJhOGU1XC9kYXB1djc3LTEzNmYzYjNlLTY2ZWEtNGQ0My05YmJkLWUzODAwOGM4MGM0Zi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BiRn7SyNFJkkS4i8V8-fz8P0YqoC1zKWjbF5dsbMVJM`,
    },
    {
        id:13,
        profile: "Jhon Poveda",
        username: "poveJhon",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjYZaid8b4JYUWsE4UC0Syxnqm4aNSVHiEVg&usqp=CAU`,
    },
    {
        id:14,
        profile: "Jhon Avila",
        username: "ammongavila",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTexYPLSpzc_cliR3WDmO21syw_EmERJtBmOA&usqp=CAU`,
    },
    {
        id:15,
        profile: "Riuk Shinigami",
        username: "iloveapples",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi2YCTPC8A1LJZubIw3cMZTikWr468QlbMNw&usqp=CAU`,
    },
    {
        id:16,
        profile: "Lina Diaz",
        username: "lilidi",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPOPFExEYy16X956oiZR_T5BA2QhEoSbwogQ&usqp=CAU`,
    },
    {
        id:17,
        profile: "Johnny Deep",
        username: "SparrowDeep",
        profileImg: `https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-captain-jack-sparrow-pirate-carribean-512.png`,
    },
    {
        id:18,
        profile: "Batman",
        username: "TheBatman",
        profileImg: `https://i.pinimg.com/originals/46/00/57/46005760e0544bcadaaee9b92387e8b8.png`,
    },
    {
        id:19,
        profile: "Jason Voorhees",
        username: "friday13",
        profileImg: `https://p.kindpng.com/picc/s/21-218808_cool-avatar-png-picture-cool-pics-for-avatar.png`,
    },
    {
        id:20,
        profile: "Angry Squirrel",
        username: "angrySquil",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQes2YKvMH-ud4zsDsAKjoDT3RoANWB0Gmv0A&usqp=CAU`,
    },{
        id:21,
        profile: "Monica Avila",
        username: "monicaAvila",
        profileImg: `https://www.seekpng.com/png/detail/54-545802_freeuse-miku-transparent-avatar-hatsune-miku-hd-png.png`,
    },
     
    {
        id:22,
        profile: "Lex Luthor",
        username: "IhateSuperMan",
        profileImg: `https://img.icons8.com/color/452/lex-luthor.png`,
    
    },
    {
        id:23,
        profile: "AJ + Español",
        username: "ajplusespanol",
        profileImg: `https://upload.wikimedia.org/wikipedia/ar/5/5f/AJ%2B_logo.png`,
    

    },
    {
        id:24,
        profile: "Elon Musk",
        username: "elonmusk",
        profileImg: `https://thumbnail.imgbin.com/10/8/9/imgbin-elon-musk-tesla-motors-tesla-model-3-spacex-tesla-dJ5CpnLwMCeHCuT7A11U0JV38_t.jpg`,
     },
    {
        id:25,
        profile: "Google",
        username: "google",
        profileImg: `https://w7.pngwing.com/pngs/229/438/png-transparent-google-logo-adsense-google-adwords-history-company-text-logo.png`,
      },
    {
        id:26,
        profile: "LeBron James",
        username: "KingJames",
        profileImg: `https://i.pinimg.com/originals/b0/21/69/b0216941a4c8a4d0ee4529790f3bc808.png`,
      },
    {
        id:27,
        profile: "BBC Breaking News",
        username: "BBCBreaking",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DjKpqcXkcj1ijfCLyAgoiD7Zv-ATYvP8Cw&usqp=CAU`,
    
    },
    {
        id:28,
        profile: "NVIDIA GeForce",
        username: "NVIDIAGeForce",
        profileImg: `https://avatarfiles.alphacoders.com/175/thumb-175567.png`,
         },
    {
        id:29,
        profile: "National Geographic",
        username: "NatGeo",
        profileImg: `https://img.favpng.com/18/6/20/owl-computer-icons-national-geographic-animal-jam-clip-art-png-favpng-hzp2vusnPLVC6uGRrBffquxuU.jpg`,
        

    },
    {
        id:30,
        profile: "Hipertextual",
        username: "Hipertextual",
        profileImg: `https://hipertextual.com/files/2020/06/hipertextual-2020380252-270x270.png`,
        
    },
    {
        id:31,
        profile: "Hipertextual",
        username: "Hipertextual",
        profileImg: `https://hipertextual.com/files/2020/06/hipertextual-2020380252-270x270.png`,
        
    }, {
         
        id:32,
        profile: "Real Madrid C.F.",
        username: "realmadrid",
        profileImg: `https://avatarfiles.alphacoders.com/127/127291.png`,
        
    },
    {
        id:33,
        profile: "UEFA",
        username: "ChampionsLeague",
        profileImg: `https://logodownload.org/wp-content/uploads/2017/05/uefa-champions-league-logo.png`,
        
    },
    {
        id:34,
        profile: "FC Barcelona",
        username: "FCBarcelona_es",
        profileImg: `https://avatarfiles.alphacoders.com/160/160274.jpg`,
        
    },
    {
        id:35,
        profile: "Youtube",
        username: "Youtube",
        profileImg: `https://i.pinimg.com/originals/f0/bf/e6/f0bfe6f3b051934eb67b1b49e9481be4.png`,
        
    }

    
];

export {
    users
}