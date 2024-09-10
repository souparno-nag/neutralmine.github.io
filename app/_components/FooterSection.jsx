const FooterSection = () => (
    <footer style={{ padding: '2rem', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
        <div>
            <a href="/about" style={{ color: '#fff', margin: '0.5rem' }}>About</a>
            <a href="/features" style={{ color: '#fff', margin: '0.5rem' }}>Features</a>
            <a href="/contact" style={{ color: '#fff', margin: '0.5rem' }}>Contact Us</a>
            <a href="/privacy" style={{ color: '#fff', margin: '0.5rem' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: '#fff', margin: '0.5rem' }}>Terms of Service</a>
        </div>
        <p>&copy; {new Date().getFullYear()} NeutralMINE. All rights reserved.</p>
        <div>
            {/* Social media links */}
            <a href="https://twitter.com" style={{ color: '#fff', margin: '0.5rem' }}>Twitter</a>
            <a href="https://linkedin.com" style={{ color: '#fff', margin: '0.5rem' }}>LinkedIn</a>
        </div>
    </footer>
);

export default FooterSection;
