function ordre (a,b){return a-b;}

function sudoku(){


   var l=new Array();
   var c=new Array();
   var zon=new Array();


   for(i=0;i<9;i++){
      l[i]=new Array();
      c[i]=new Array();
      zon[i]=new Array();
   }

   var tour=0;

   for(i=0;i<9;i++){

      for(j=0;j<9;j++){

         if(i<3 && j<3){cas=0;}
         if(i<3 && j>2 && j<6){cas=1;}
         if(i<3 && j>5){cas=2;}
         if(i>2 && i<6 && j<3){cas=3;}
         if(i>2 && i<6 && j>2 && j<6){cas=4;}
         if(i>2 && i<6 && j>5){cas=5;}
         if(i>5 && j<3){cas=6;}
         if(i>5 && j>2 && j<6){cas=7;}
         if(i>5 && j>5){cas=8;}

         var choix="123456789";
         var chainel=l[i].join("");
         var chainec=c[j].join("");
         var chainez=zon[cas].join("");

         var choix2=chainel+chainec;
         choix2=choix2.split("");
         choix2.sort(ordre);
         choix2=choix2.join("");
            for(k=1;k<choix2.length;k++){
               if(choix2.charAt(k)===choix2.charAt(k-1)){
                  choix2=choix2.replace(choix2.charAt(k),"");
               }
            }

         var choix3=choix2+chainez;
         choix3=choix3.split("");
         choix3.sort(ordre);
         choix3=choix3.join("");
            for(k=1;k<choix3.length;k++){
               if(choix3.charAt(k)===choix3.charAt(k-1)){
                  choix3=choix3.replace(choix3.charAt(k),"");
               }
            }

         var lng=choix.length;
            for(k=0;k<lng;k++){
               for(z=0;z<choix3.length;z++){
                  if(choix.charAt(k)===choix3.charAt(z)){
                     choix=choix.replace(choix3.charAt(z),"");
                  }
               }
            }

         var h=Math.floor(Math.random()*choix.length);

         l[i].push(choix.charAt(h));
         c[j].push(choix.charAt(h));
         zon[cas].push(choix.charAt(h));
      }

      if(!/^\d{9}$/.test(l[i].join(""))){
         if(tour<20){
            tour++;
         }
         else{
            break;
         }

         l[i].splice(0,9);
         for(w=0;w<9;w++){
            c[w].pop();
         }
         for(w=0;w<3;w++){
            zon[cas].pop();
            zon[cas-1].pop();
            zon[cas-2].pop();
         }
         i--;
      }
   }

   if(zon[8].length===9){
      alert(l.join().replace(/,/g,"").replace(/(\d{9})/g,"$1\n"));
   }
   else{
      sudoku();
   }
}
