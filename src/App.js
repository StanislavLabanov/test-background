function App() {
  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="./earth 0.5x.mp4"
        />,
      ` }}></div>
      <header>
        <img src="./SHELTERZ.svg" className="right_block" />
        <div className="left_block">
          <div className="btn_one">Зарегестрировать свой объект</div>
          <div className="btn_two">Зарегестрироваться</div>
          <img className="user" src="./Group 88.svg" />
          <img className="burger" src="./Group 87.svg" />
        </div>
      </header>
      <h1>Сервис бронирования жилья<br />с полным возвратом средств</h1>
      <div className="data">
        <img src="./Group 368.svg" />
      </div>
      <div className="hotel">Бронируйте отели, квартиры,<br />хостелы и другие объекты</div>
      <div className="cashback">с кешбеком 100%</div>
    </div>
  );
}

export default App;
