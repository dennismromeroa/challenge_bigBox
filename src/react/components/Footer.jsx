import "../style/styleFooter.scss";
const Footer = () => {
  return (
    <div className="divFooterContainer">
      <div className="divLeft">
        <div className="columnLeft">
          <div className="titleFooter">Dennis Romero</div>
          <div className="titleFooter">Web Developer</div>
          <div className="titleFooter">dennisrome1987@gmail.com</div>
        </div>
        <div className="columnLeft">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dennis-romero-arevalo-8b6229155/"
          >
            
            Contact:<div className="titleFooter">Linkedin</div>
          </a>
        </div>
        <div className="columnLeft">
          <a
            target="_blank"
            href="https://github.com/dennismromeroa?tab=repositories"
          >
            
            Repository:<div className="titleFooter">Github</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
