// TOPS
    const tops = document.getElementById('tops');
    const topsSources = ['./files/top1.jpg' , './files/top2.jpg' , './files/top3.jpg', './files/top4.jpg', './files/top5.jpg', './files/top6.jpg'];
     
    var tops_index = 0;

    const changeTop1 = () => {
      if  (tops_index === 0) tops_index = topsSources.length;
      tops.src = topsSources[--tops_index];
    }

    const changeTop2 = () => {
      if (tops_index === topsSources.length - 1)  tops_index = -1;

      tops.src = topsSources[++tops_index];
    } 

    

//     const element = document.getElementById('equal_button')

// // always checking if the element is clicked, if so, do alert('hello')
//   element.addEventListener("click", () => {
//     // logging_tops_index();
//     // document.write(tops_index);
//     console.log('hello');
//   });

    // if(document.getElementById('equal_button').clicked == true){
    //   logging_tops_index();
    // }
   

    // // if (tops_index = 2){
    // //  ep = 10;
    // // // }

    // document.getElementById('printing_tops_index').innerHTML = tops_index;


// TROUSERS
    const trousers = document.getElementById('trousers');
    const trousersSources = ['./files/trousers1.jpg' , './files/trousers2.jpg' , './files/trousers3.jpg', './files/trousers4.jpg', './files/trousers5.jpg', './files/trousers6.jpg'];
     
    var trousers_index = 0;

    const changeTrousers1 = () => {
      if  (trousers_index === 0) trousers_index = trousersSources.length;
      trousers.src = trousersSources[--trousers_index];
    }

    const changeTrousers2 = () => {
      if (trousers_index === trousersSources.length - 1) trousers_index = -1;

      trousers.src = trousersSources[++trousers_index];
    }
    // function logging_trousers_index(){
    //   return trousers_index;
    // }

    // console.log("example print statement");


// SHOES
    const shoes = document.getElementById('shoes');
    const shoesSources = ['./files/shoes1.jpg' , './files/shoes2.jpg' , './files/shoes3.jpg', './files/shoes4.jpg', './files/shoes5.jpg', './files/shoes6.jpg'];
     
    var shoes_index = 0;

    const changeShoes1 = () => {
      if  (shoes_index === 0) shoes_index = shoesSources.length;
      shoes.src = shoesSources[--shoes_index];
    }

    const changeShoes2 = () => {
      if (shoes_index === shoesSources.length - 1) shoes_index = -1;

      shoes.src = shoesSources[++shoes_index];
    }
    // function logging_shoes_index(){
    //   return shoes_index;
    // }

    // function logging_actual_index(){
    //   return  shoes_index;
    //   return trousers_index;
    //   return tops_index;

    // }




        // const element = document.getElementById('equal_button')

// always checking if the element is clicked, if so, do alert('hello')
  // element.addEventListener("click", () => {
  //   // logging_tops_index();
  //   document.getElementById("demo").innerHTML = "Hello Dolly.";
  // });
  var ep = 0;
  var name = '';
  var try_again = document.getElementById('tryagain');

  function logging_index(){
    // console.log("enter function")
      // tops
      if (tops_index === 0 || tops_index === 5){
        ep = ep + 10;
      }
      else if (tops_index === 1 || tops_index === 4){
        ep = ep + 3;
      }
      else{
        ep = ep + 6;
      }
      // trousers
      if (trousers_index === 0 || trousers_index === 5){
        ep = ep + 5;
      }
      else if (trousers_index === 1 || trousers_index === 3){
        ep = ep + 10;
      }
      else{
        ep = ep + 1;
      }
      // shoes
      if (shoes_index === 0 || shoes_index === 5){
        ep = ep + 2;
      }
      else if (shoes_index === 1 || shoes_index === 3){
        ep = ep + 6;
      }
      else{
        ep = ep + 10;
      }
      if (ep >19){
        name = 'ECO WARRIOR';
      }
      if (ep <20){
        name = 'ECO DESTROYER';
        try_again.style.display = 'block';
      }
      // console.log(ep);
      // console.log(tops_index);
      // console.log(trousers_index);
      // console.log(shoes_index);
      window.location.hash = "dropdown";
      document.getElementById('dropdown').style.display = 'block';
      document.getElementById("printing_ep").innerHTML = ep;
      document.getElementById("printing_name").innerHTML = name;
      document.getElementById("printing_try_again").innerHTML = try_again;
      ep = 0;
    }

    // function printing_stuff(){
    //   alert(tops_index);
    //   alert(trousers_index);
    //   alert(shoes_index);
    //   document.getElementById("printing_ep").innerHTML = ep;
    //   document.getElementById("printing_name").innerHTML = name;
    //   // let ep = 0;
    //   eco_points_button.style.display = 'none';
    // }

  function clearing_ep(){
    ep = 0;
    name = '';
    return ep;
    return name;
  }

  




