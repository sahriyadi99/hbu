import { Helmet } from "react-helmet"
export const About = (props) => {
  return (
    <div id="about">
      <Helmet>
        <title>Jasa Kirim Paket di Tangerang</title>
        <meta name="description" content="Jasa Kirim Paket Di Tangerang" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/penawaran.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Get Cashback 10%</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Manfaat Menggunakan Jasa Pengiriman Kami</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
