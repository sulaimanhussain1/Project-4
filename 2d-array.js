

// 2D And 3D ARRAY....

document.write("<h1>2D & 3D ARRAY..</h1>");

var geek = [ 
                [" NAME " , " LAPTOP " , " PRICE "] ,
                [  " Sulaiman " , " HP " , 2800 ] , 
                [ " Shahroz " , " DELL " , 2300 ], 
                [ " Maaz " , " APPLE " , 4500 ] 
            ];


            for (let i = 0; i < 4 ; i++) {
                for (let j = 0; j < 3; j++) {
                  document.write(geek[i][j] + " " + " ");
                    
                }
                document.write("<br><br>");
            };