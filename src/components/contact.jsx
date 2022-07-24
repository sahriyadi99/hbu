import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Segera Hubungi Kami Sekarang Juga!</h2>
                <p>
                  Atau bisa kunjungi kami disini, sebelum kehabisan promo !!!</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253828.5599555606!2d106.46244268802953!3d-6.254343623416875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd4fbeb613bd%3A0xb8bf036514f6ecb9!2sHBU%20EXPRESS!5e0!3m2!1sen!2sid!4v1646144083450!5m2!1sen!2sid" width="600" height="250" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className=''></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className=''></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className=''></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 HBU Express. All Right Reseved{' '}
            <a href='http://www.hbu.my.id' rel='nofollow'>
              Hbu.My.Id
            </a>
          </p>
        </div>
      </div>
    
    </div>
  )
}
