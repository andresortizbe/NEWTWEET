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
        profileImg: `hhttps://e7.pngegg.com/pngimages/779/911/png-clipart-lego-the-joker-mini-figure-joker-lego-batman-the-videogame-lego-batman-2-dc-super-heroes-movies-heroes-fictional-character-thumbnail.png`,
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
        profile: "Ken Fight",
        username: "Kenneth Jhis",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_JmXsjhIcyXgF32xOHGDlN6uKCDoG1UE8rg&usqp=CAU`,
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
        profile: "Ken Fight",
        username: "Kenneth Jhis",
        profileImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTivBOjSZsusiTyWCGhwNZAnHrgxlceMmLhQA&usqp=CAU`,
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
    }

    
];

export {
    users
}