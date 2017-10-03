
let items = [
      { 
          question: "La pelicula más taquillera de Pixar", 
          options : [ "El Rey Leon", "Los Increibles", "Frozen"] ,
          image:"assets/img/fondo.png",
          answer : "Frozen"
      },
      { 
          question: "Pelicula animada más premiada?", 
          options:  ["Buscando a Nemo", "El rey Leon", "UP"] ,
          image :"assets/img/sou.png",
          answer : "El rey Leon"
      },
      { 
          question: "La pelicula ganadora del Oscar a la mejor animacion 2004?", 
          options:["Enredados", "Los Increibles", "Toy Story"], 
          image:"assets/img/in.png",
          answer : "Los Increibles"
      },
      { 
          question: "Largometraje con mas nominaciones al Oscar?", 
          options : ["Wall-E", "Monster Inc","Dory"],
          image:"assets/img/pumba.png",
          answer : "Wall-E"
      },
      { 
          question: "Record al debút más grande para un pelicula animada?", 
          options :["Bichos", "Bolt","Ratatouille"],
          image :"assets/img/fro.png",     
          answer : "Ratatouille"
      }
   ];
class Model {

   constructor (items) {
      this.answers =[];
      this.count = 0;
      this.complet = false;
      this.compare = false;
      this.score = 0;
      this.render = undefined;
   }
   saveData(){
         console.log("hola");
      this.count++;
      if (this.count === items.length - 1) {
            this.complet = true;
      }   
/*
      if (this.answers[this.count] == items[this.count].answer){
            this.score++;
          }
*/
  }
   subscribe(render){
      this.render = render;
   }
   inform() {
      console.log(this.todos.map(e => e.text));
      this.render();
   }
   again(){
      this.answers.push ({
            id: Utils.uuid(),
            question: question,
            options : options,
            image:imagen,
            answer : answer
       })
  }
  compare(){
          compare = true;
  }

}

const App = ({model }) => {
      return(
      <div>
      <header>
      <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 img-question">
              {!model.complet&&<img className="img-responsive img-questions" src={items[model.count].image}/>}
              {model.complet&&<img className="img-responsive img-questions" src="assets/img/in.png"/>}
          </div>
      </div>
      </header>
      <div className="row content ">
          <div className="progress-container col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left pogress-label">
                  <p>{model.count} pregunta(s) de 5</p>
              </div>
              <div className= "progress">
                  <div className="progress-bar"  >
                      <span className="sr-only">100%</span>
                  </div>
              </div>  
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            {!model.complet &&         
            <div>
            <div>
                <h1 className="text-center"> 
                    {items[model.count].question} 
                </h1>
            </div>
            <div className="btn-cont answers">
                  <div className="col-lg-4 col-sm-4 col-xs-12">
                        <button className='btn btn-huge' type="button" name="button" onClick={(e) => model.saveData()} >
                        <span className="letter a">A</span>{items[model.count].options[0]}</button>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-xs-12">
                        <button className='btn btn-huge' type="button" name="button" onClick={(e) => model.saveData()} >
                        <span className="letter">B</span>{items[model.count].options[1]}
                        </button>
                  </div>
                  <div className="col-lg-4 col-sm-4 col-xs-12">
                        <button className='btn btn-huge' type="button" name="button" onClick={(e) => model.saveData()} >
                        <span className="letter">C</span>{items[model.count].options[2]}
                        </button>
                  </div>
            </div>
            </div>
            }
              {model.complet && model.loadAnswer()}
          </div>                
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-social">
              <ul className="social-network social-circle">
                  <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
              </ul>               
          </div>
      </div>
  </div>
  )
};

let model = new Model();
let counter = 1;
let render = () => {
   console.log('render times: ', counter++);
   ReactDOM.render(
      <App title="TodoApp" model={model} />,
      document.getElementById('container')
   );
};

model.subscribe(render);
render(); 
/*
            let choice = items[model.count].options;
            console.log(choice);
            choice.map((key, index) => {
                let value = choice[key];
                console.log(value);
                let letters= ["A","B","C"];
                return (
                <div className= 'col-lg-4 col-xs-12 text-center' >
                    <button className='btn btn-huge' type="button" name="button" key={index} onClick={(e) => model.saveData(e.currentTarget, choice)}>
                      <span className='letter'>{letters[index]}</span>{value}
                    </button>
                </div>
                ); 
             }
             
            )
*/