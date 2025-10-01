interface ContactPageProps {
  currentLang: 'fr' | 'en';
}

const ContactPage = ({ currentLang }: ContactPageProps) => {
  const handleDownloadCV = () => {
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = '/cv-nathan-ruer.pdf';
    link.download = 'CV-Nathan-Ruer.pdf';
    link.click();
  };

  return (
    <div>

    </div>
  );
};

export default ContactPage;