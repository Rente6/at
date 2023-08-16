import Figure from 'react-bootstrap/Figure';
import Bebe from '../assets/Capture.png';


function Logo() {
  return (
    <Figure>
      <Figure.Image
        width={200}
        height={180}
        alt="50x50"
        src= {Bebe}
      />
      <Figure.Caption>
        BabyFun
      </Figure.Caption>
    </Figure>
  );
}

export default Logo;