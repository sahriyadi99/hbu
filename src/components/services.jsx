import SEO from './SEO';
export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>#1 Pilihan Exportir Indonesia</h2>
          <p>
          Sebagai Jasa Kirim No.1 pilihan exportir Indonesia, kita sangat memahami keresahan kaum exportir Nusantara yang kesulitan dalam mengirim barang skala kecil seperti parcels, dokumen, hingga sample barang ke luar negri dengan aman, transparan dah dihandle secara profesional sampai langsung ke tangan penerima yang ada disana dengan mudah.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
      <SEO url="services" />
    </div>
  )
}
