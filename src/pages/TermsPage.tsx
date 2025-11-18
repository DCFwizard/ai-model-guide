import { SEO } from '@/components/SEO';
import { StaticPageLayout } from './StaticPagesLayout';
export function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read the Terms of Service for the AI Model Guide website."
      />
      <StaticPageLayout title="Terms of Service">
        <p className="text-muted-foreground italic">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="bg-muted/20 border-l-4 border-primary p-6 rounded-r-lg my-6">
          <p className="text-lg font-semibold">
            Please read these Terms of Service carefully before using AI Model Guide.
          </p>
        </div>

        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to AI Model Guide ("we", "us", "our", or "the Website"). By accessing or using our website located at <strong>https://whichaimodeltouseforwhat.com</strong>, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Website.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on the Website. Your continued use of the Website after such changes constitutes your acceptance of the new Terms.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          AI Model Guide is an informational resource that provides comparisons, reviews, and guidance on various artificial intelligence models. The Website is designed to help users make informed decisions when selecting AI models for their specific use cases.
        </p>
        <p>
          The information provided on our Website is for <strong>educational and informational purposes only</strong> and does not constitute professional, technical, legal, or financial advice.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul>
          <li>Use the Website in any way that violates any applicable federal, state, local, or international law or regulation</li>
          <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which may harm us or users of the Website</li>
          <li>Use any robot, spider, scraper, or other automated means to access the Website for any purpose without our express written permission</li>
          <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
          <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website</li>
          <li>Attack the Website via a denial-of-service attack or a distributed denial-of-service attack</li>
          <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Website without our express written permission</li>
        </ul>

        <h2>4. Intellectual Property Rights</h2>

        <h3>4.1 Ownership</h3>
        <p>
          The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by AI Model Guide, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
        </p>

        <h3>4.2 Limited License</h3>
        <p>
          Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Website for personal, non-commercial purposes. This license does not include any right to:
        </p>
        <ul>
          <li>Modify, copy, or create derivative works based on the Website or its content</li>
          <li>Distribute, transmit, broadcast, or otherwise make the Website or its content available to any third party</li>
          <li>Reverse engineer, decompile, or disassemble any software or technology underlying the Website</li>
          <li>Remove, alter, or obscure any copyright, trademark, or other proprietary rights notices</li>
        </ul>

        <h2>5. Third-Party Links and Resources</h2>
        <p>
          The Website may contain links to third-party websites, services, or resources that are not owned or controlled by AI Model Guide. We provide these links for your convenience and reference only. We do not endorse and are not responsible for:
        </p>
        <ul>
          <li>The content, accuracy, or opinions expressed on any third-party websites</li>
          <li>The privacy practices or terms of use of third-party websites</li>
          <li>Any damages or losses caused by your use of third-party websites or resources</li>
        </ul>
        <p>
          You acknowledge and agree that we shall not be liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any third-party content, goods, or services available on or through any such websites or resources.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, AI MODEL GUIDE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul>
          <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
          <li>Warranties regarding the accuracy, reliability, completeness, or timeliness of the content</li>
          <li>Warranties that the Website will be uninterrupted, secure, or error-free</li>
          <li>Warranties that defects will be corrected</li>
        </ul>
        <p>
          <strong>No Professional Advice:</strong> The information provided on the Website is for general informational purposes only and does not constitute professional advice. You should not rely on the information provided on the Website as a substitute for professional advice tailored to your specific circumstances.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AI MODEL GUIDE, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
        </p>
        <ul>
          <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
          <li>Damages resulting from your access to or use of (or inability to access or use) the Website</li>
          <li>Damages resulting from any conduct or content of any third party on the Website</li>
          <li>Damages resulting from unauthorized access, use, or alteration of your transmissions or content</li>
        </ul>
        <p>
          This limitation of liability applies regardless of the legal theory on which the claim is based, whether in contract, tort (including negligence), strict liability, or otherwise, even if we have been advised of the possibility of such damages.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion or limitation of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
        </p>

        <h2>8. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless AI Model Guide and its affiliates, officers, directors, employees, agents, suppliers, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
        </p>
        <ul>
          <li>Your violation of these Terms</li>
          <li>Your use of the Website</li>
          <li>Your violation of any rights of a third party</li>
          <li>Your violation of any applicable laws, rules, or regulations</li>
        </ul>

        <h2>9. User Content and Feedback</h2>
        <p>
          If you submit any feedback, suggestions, comments, or other communications to us regarding the Website ("Feedback"), you grant us a perpetual, irrevocable, non-exclusive, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate, distribute, and display such Feedback in any form, media, or technology, whether now known or hereafter developed, without any compensation or attribution to you.
        </p>

        <h2>10. Privacy</h2>
        <p>
          Your use of the Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> to understand our practices regarding the collection, use, and disclosure of your information.
        </p>

        <h2>11. Modifications to the Website</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue, temporarily or permanently, the Website (or any part thereof) at any time and without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Website.
        </p>

        <h2>12. Termination</h2>
        <p>
          We may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Website will immediately cease.
        </p>
        <p>
          All provisions of these Terms which by their nature should survive termination shall survive termination, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>

        <h2>13. Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within the United States for the resolution of any disputes arising out of or relating to these Terms or the Website.
        </p>

        <h2>14. Dispute Resolution</h2>
        <p>
          Any dispute, controversy, or claim arising out of or relating to these Terms or the Website shall be resolved through good faith negotiations between the parties. If the parties are unable to resolve the dispute through negotiations, the dispute may be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
        </p>

        <h2>15. Severability</h2>
        <p>
          If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid, illegal, or unenforceable provision shall be replaced with a valid, legal, and enforceable provision that most closely reflects the original intent of the provision.
        </p>

        <h2>16. Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy, constitute the entire agreement between you and AI Model Guide regarding your use of the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.
        </p>

        <h2>17. Waiver</h2>
        <p>
          No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition. Our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
        </p>

        <h2>18. Contact Information</h2>
        <p>
          If you have any questions, concerns, or comments regarding these Terms of Service, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:contact@whichaimodeltouseforwhat.com" className="text-primary hover:underline">contact@whichaimodeltouseforwhat.com</a></li>
          <li><strong>Contact Page:</strong> <a href="/contact" className="text-primary hover:underline">/contact</a></li>
        </ul>

        <div className="bg-muted/20 border border-muted p-6 rounded-lg mt-8">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> These Terms of Service were last updated on the effective date shown above. We encourage you to review these Terms periodically to stay informed of any updates or changes.
          </p>
        </div>
      </StaticPageLayout>
    </>
  );
}