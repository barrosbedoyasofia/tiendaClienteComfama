import { Link } from "react-router-dom"
import './Footer.css'
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter class="footer text-center" color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <i class="bi bi-instagram"></i>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <i class="bi bi-facebook"></i>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <i class="bi bi-twitter"></i>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <i class="bi bi-tiktok"></i>
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
          <i class="bi bi-whatsapp"></i>
          </MDBBtn>

        </section>

        <div class="row justify-content-around">
            <div class="col-3">
                <img class="ancho"src="https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/LOGO%20ESMERALDA.png?alt=media&token=81327716-0436-4487-9555-90a4417ee115"/>
            </div>
            <div class="col-3 p-14">
                    <h6>Contáctanos</h6>
                    <a>brigthvco11@gmail.com</a>
                    <p>WhatsApp +57 3019907865</p>
            </div>
            <div class="col-3">
                <h6>Ubicanos en:</h6>
                <a>Cr 50 #50-50</a>
                <p class="m-0 p-0">Primer piso.</p>
                <p class="m-0 p-0">Medellín, Antioquia.</p>
            </div>
            <div class="col-3">
                <h6>Follow us</h6>
                <a>Instagram</a>
                <p class="m-0 p-0">Facebook</p>
                <a >Linkedin</a>
                <p>TikTok</p>
            </div>
        </div>

       
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a>
          JOYERíA ESMERALDA
        </a>
      </div>
    </MDBFooter>
  );
}