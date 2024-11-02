import React from 'react';
import MusicPlayer from '../components/MusicPlayer';

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Bienvenido a Kodigo Music</h1>
      <p className="text-center">Explora tu música favorita de estos artistas:</p>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center shadow-sm">
            <h3 className="card-header">Adele</h3>
            <div className="card-body">
              <img src="\Imagenes\Adele1.jpg" alt="Adele" className="img-fluid mb-3" style={{ borderRadius: '5px' }} />
              <MusicPlayer trackName="Someone Like You" trackSrc="/Music/Adele1.mp3" />
              <img src="\Imagenes\Adele2.jpg" alt="Adele" className="img-fluid mb-3" style={{ borderRadius: '5px' }} />
              <MusicPlayer trackName="Rolling in the Deep" trackSrc="/Music/Adele2.mp3" />
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center shadow-sm">
            <h3 className="card-header">Lewis Capaldi</h3>
            <div className="card-body">
              <img src="\Imagenes\LewisS.jpg" alt="Lewis" className="img-fluid mb-3" style={{ borderRadius: '5px' }} />
              <MusicPlayer trackName="Someone You Loved" trackSrc="/Music/lewis-capaldi2.mp3" />
              <img src="\Imagenes\LewisB.jpg" alt="Lewis" className="img-fluid mb-3" style={{ borderRadius: '5px' }} />
              <MusicPlayer trackName="Before You Go" trackSrc="/Music/lewis-capaldi1.mp3" />
              
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center shadow-sm">
            <h3 className="card-header">Romeo Santos</h3>
            <div className="card-body">
              <img src="\Imagenes\RoemoC.jpg" alt="Romeo" className="img-fluid mb-3" style={{ borderRadius: '5px' }} />
              <MusicPlayer trackName="Propuesta Indecente" trackSrc="/Music/romeo-santos1.mp3" />
              <img src="\Imagenes\RoemoC.jpg" alt="Romeo" className="img-fluid mb-3" style={{ borderRadius: '5px' }} />
              <MusicPlayer trackName="Cancioncitas de Amor" trackSrc="/Music/romeo-santos2.mp3" />
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center shadow-sm">
            <h3 className="card-header">Billie Eilish</h3>
            <div className="card-body">
              <img src="\Imagenes\Bilish.jpg" alt="ABillie" className="img-fluid mb-3" style={{ borderRadius: '5px' }} />  
              <MusicPlayer trackName="Bad Guy" trackSrc="/Music/billie-eilish.mp3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
