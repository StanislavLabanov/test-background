function App() {
  return (
    <div className="container">
      <div className="full_screen">
        <div className="full_screen_content">
          <header>
            <div className="header_container">
              <div className="header_title">SHELTERZ</div>
              <div className="left_block">
                <div className="btn_one">Зарегестрировать свой объект</div>
                <div className="btn_two">Зарегестрироваться</div>
                <img className="user" src="./Group 88.svg" />
                <img className="burger" src="./Group 87.svg" />
              </div>
            </div>
          </header>
          <h1>Сервис бронирования жилья<br />с полным возвратом средств</h1>
          <div className="data">
            <img src="./Group 368.svg" />
          </div>
          <div className="hotel">Бронируйте отели, квартиры,<br />хостелы и другие объекты</div>
          <div className="cashback">с кешбеком 100%</div>
        </div>
        <video
          preload="auto"
          autoPlay={true}
          muted
          loop={true}
          playsInline
          poster="./image 21.png"
          className="full_screen_video"
          src="./earth_0.5x (1).mp4"
        />
      </div>
      <div className="cities">
        <div className="cities_container">
          <div className="title">Travel to Earn</div>
          <div className="text">Бронируйте и зарабатывайте</div>
          <div className="top">
            <div className="top_content_one">
              <div className="top_image">
                <div className="name">Москва</div>
              </div>
              <div className="top_image">
                <div className="name">Санкт-Петербург</div>
              </div>
            </div>
            <div className="top_content_two">
              <div className="top_two_image">
                <div className="name">Нижний Новгород</div>
              </div>
              <div className="top_two_image">
                <div className="name">Сочи</div>
              </div>
              <div className="top_two_image">
                <div className="name">Казань</div>
              </div>
            </div>
          </div>
          <div className="title two">Поиск по типу размещения</div>
          <div className="center">
            <div className="center_content">
              <div className="cont">
                <img src="./Group 338.png" />
                <div className="cont_title">Отели</div>
                <div className="cont_text">3 отеля</div>
              </div>
              <div className="cont">
                <img src="./Group 339.png" />
                <div className="cont_title">Квартиры/ апартаменты</div>
                <div className="cont_text">10 квартир</div>
              </div>
              <div className="cont">
                <img src="./Group 340.png" />
                <div className="cont_title">Курортные отели</div>
                <div className="cont_text">6 курортных отелей</div>
              </div>
              <div className="cont">
                <img src="./Group 353.png" />
                <div className="cont_title">Котеджи</div>
                <div className="cont_text">1 котедж</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
