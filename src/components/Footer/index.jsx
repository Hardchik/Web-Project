import "./style.css";

export default function Footer() {
  return (
    <footer className="footer-with-social">
        <div className="title">Footer with Social</div>
        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatem aspernatur! Nesciunt beatae voluptatem id voluptatum ut eos dolores a quasi, deleniti, quos accusantium fuga dolore quaerat tempore architecto neque?</div>
        <div className="social">
            <a href="/" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-google"></ion-icon>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
                <ion-icon name="logo-github"></ion-icon>
            </a>
        </div>
    </footer>
  )
}
