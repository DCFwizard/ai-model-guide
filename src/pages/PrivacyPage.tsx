import { SEO } from '@/components/SEO';
import { StaticPageLayout } from './StaticPagesLayout';
export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read the Privacy Policy for the AI Model Guide website."
      />
      <StaticPageLayout title="Privacy Policy">
        <p className="text-muted-foreground italic">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-r-lg my-6">
          <p className="text-lg font-semibold">
            Your privacy matters to us. AI Model Guide is committed to protecting your personal information and your right to privacy.
          </p>
        </div>

        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how AI Model Guide ("we", "us", or "our") collects, uses, and discloses information when you access or use our website located at <strong>https://whichaimodeltouseforwhat.com</strong> (the "Website"). By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
        </p>

        <h2>2. Information We Collect</h2>

        <h3>2.1 Information You Provide</h3>
        <p>
          We do not require you to create an account or provide personal information to access and use our Website. If you choose to contact us through our contact form or email, we may collect:
        </p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Any information you choose to include in your message</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>
          When you visit our Website, we may automatically collect certain technical information, including:
        </p>
        <ul>
          <li><strong>Log Data:</strong> IP address, browser type and version, operating system, pages visited, time and date of visit, time spent on pages, and other diagnostic data</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our Website, including navigation paths and features accessed</li>
          <li><strong>Device Information:</strong> Device type, unique device identifiers, and mobile network information</li>
        </ul>

        <h3>2.3 Cookies and Similar Technologies</h3>
        <p>
          We may use cookies and similar tracking technologies to enhance your experience on our Website. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Website.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li><strong>To provide and maintain our Website:</strong> Ensuring the Website functions properly and remains accessible</li>
          <li><strong>To improve our services:</strong> Understanding how visitors use our Website to enhance content and user experience</li>
          <li><strong>To communicate with you:</strong> Responding to your inquiries, feedback, or questions</li>
          <li><strong>To detect and prevent technical issues:</strong> Monitoring and analyzing usage patterns to identify and resolve technical problems</li>
          <li><strong>To comply with legal obligations:</strong> Meeting regulatory requirements and responding to lawful requests from public authorities</li>
        </ul>

        <h2>4. Information Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, and email delivery services</li>
          <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
        </p>

        <h2>6. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li><strong>Access:</strong> The right to request access to the personal information we hold about you</li>
          <li><strong>Correction:</strong> The right to request correction of inaccurate or incomplete information</li>
          <li><strong>Deletion:</strong> The right to request deletion of your personal information</li>
          <li><strong>Objection:</strong> The right to object to our processing of your personal information</li>
          <li><strong>Data Portability:</strong> The right to request a copy of your information in a structured, machine-readable format</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          Our Website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party websites you visit.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our Website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information.
        </p>

        <h2>9. Security</h2>
        <p>
          We implement reasonable technical, administrative, and physical safeguards to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>10. International Data Transfers</h2>
        <p>
          Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our Website, you consent to the transfer of your information to such locations.
        </p>

        <h2>11. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The updated Privacy Policy will be indicated by an updated "Effective Date" at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
        </p>
        <p>
          If we make material changes to this Privacy Policy, we may notify you by prominently posting a notice on our Website or by sending you an email notification.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:contact@whichaimodeltouseforwhat.com" className="text-primary hover:underline">contact@whichaimodeltouseforwhat.com</a></li>
          <li><strong>Contact Page:</strong> <a href="/contact" className="text-primary hover:underline">/contact</a></li>
        </ul>
      </StaticPageLayout>
    </>
  );
}