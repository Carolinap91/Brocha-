import Nav from 'react-bootstrap/Nav';
import './NavCategories.css';
import Artist from '../../img/imgArtistas/img1.jpg';
import LocalIcon from '../../img/icons/localIcon.png'
import HeartIcon from '../../img/icons/heartIcon.png'

function AlignmentExample() {
    return (
        <>
            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="navMenu" href="/home">MANUALIDADES</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navMenu" eventKey="link-1">PINTURAS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navMenu"  eventKey="link-1">ILUSTRACIÓN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navMenu"  eventKey="link-1">GRAFFITI</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navMenu"  eventKey="link-1">CERÁMICA</Nav.Link>
                </Nav.Item>
            </Nav>

            <div>
                <select className='selectForm' name="region" form="regionform">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </div>

            <div className='profileCard'>
                <div><img src={Artist} className='imgProfileMin' alt='img profile'/> </div>
                <div className='descriptionProfileMin'>
                    <div className='nameMin' ><h5>Name LastName</h5></div>
                    <div className='descriptionMin' ><p>Artista realista-cubista para murales de altura.</p></div>
                    <div className='iconsBottonCard'>
                        <div><h6><span><img src={LocalIcon} className='logoIcon' alt='logo icon'/></span> R.M.</h6></div>
                        <div><span>0</span><img src={HeartIcon} className='logoIcon' alt='logo icon'/></div>
                    </div>
                </div>
            </div>

            <div className='profileCard'>
                <div><img src={Artist} className='imgProfileMin' alt='img profile'/> </div>
                <div className='descriptionProfileMin'>
                    <div className='nameMin' ><h5>Name LastName</h5></div>
                    <div className='descriptionMin' ><p>Artista realista-cubista para murales de altura.</p></div>
                    <div className='iconsBottonCard'>
                        <div><h6><span><img src={LocalIcon} className='logoIcon' alt='logo icon'/></span> R.M.</h6></div>
                        <div><span>0</span><img src={HeartIcon} className='logoIcon' alt='logo icon'/></div>
                    </div>
                </div>
            </div>

            <div>
                
            </div>



        </>
    );
}

export default AlignmentExample;