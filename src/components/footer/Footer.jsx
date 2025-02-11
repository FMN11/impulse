import CurrentYear from "../common/CurrentYear";
import { FooterContainer } from "./FooterStyle";

const Footer = () => {
    return ( 
        <div id="footer">
            <FooterContainer>
                <p>Алло здраствуйте <CurrentYear/></p>
            </FooterContainer>
        </div>
     );
}

export default Footer;