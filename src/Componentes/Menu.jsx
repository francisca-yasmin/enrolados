import missao from '../assets/missao.png';
import mapa from '../assets/mapa.png';
import bau from '../assets/bau.png';
import camera from '../assets/camera.png';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="missao">
            <figure>
              <img src={missao} alt="Missões" />
              <figcaption>Missões</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="inventario">
            <figure>
              <img src={bau} alt="Inventário" />
              <figcaption>Inventário</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="geolocalizacao">
            <figure>
              <img src={mapa} alt="GeoLocalização" />
              <figcaption>GeoLocalização</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link to="camera">
            <figure>
              <img src={camera} alt="Câmera" />
              <figcaption>Câmera</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    </div>
  );
}
