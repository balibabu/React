import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgSrc} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name="Beyonce"
        tel="+123 456 789"
        email="b@beyonce.com"
        imgSrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      <Card
        name="Jack Bauer"
        imgSrc="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />

      <Card
        name="Chuck Norris"
        imgSrc="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </div>
  );
}

export default App;
