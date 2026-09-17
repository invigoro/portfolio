import { pageHeader, section } from '../lib/components.mjs';

export default () => ({
  title: 'Terms of Use',
  description: 'Terms of Use for invigoro.me.',
  body: `${pageHeader({ eyebrow: 'Legal', title: 'Terms of Use' })}

    ${section(
      'section',
      `        <div class="prose">
        <p class="updated">Last updated: 3 April 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing or using this website (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you should not use this Site.</p>
        <p>This website exists to provide information about projects and experience related to Timothy Wells.</p>

        <h2>Permitted Use</h2>
        <p>You agree to use this Site only for lawful purposes and in a manner that does not interfere with or disrupt the operation of the Site or the experience of other users. Unauthorized attempts to access restricted areas, interfere with servers, or misuse the Site&rsquo;s content are prohibited.</p>

        <h2>Content Disclaimer</h2>
        <p>All information provided on this Site is offered on an <strong>&ldquo;as-is&rdquo; and &ldquo;as-available&rdquo;</strong> basis without warranties of any kind, either express or implied. The Site owner makes no representations regarding the accuracy, completeness, reliability, or availability of any content on this Site.</p>
        <p>Use of this Site and reliance on its content is at your own risk.</p>

        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, the owner of this Site shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of or inability to use this Site.</p>

        <h2>External Links</h2>
        <p>This Site may contain links to external websites or services that are not operated by the Site owner. The owner is not responsible for the content, security, or privacy practices of these third-party websites.</p>

        <h2>Intellectual Property</h2>
        <p>Unless otherwise stated, all content on this Site&mdash;including text, graphics, images, and design elements&mdash;is the property of the Site owner and may not be reproduced, distributed, or used without permission.</p>

        <h2>Accessibility</h2>
        <p>The owner of this Site is committed to making reasonable efforts to ensure that the Site is accessible to all visitors. If you encounter difficulty accessing any content, functionality, or feature of the Site, please contact us and we will make reasonable efforts to provide the information in an alternative format.</p>

        <h2>Governing Law</h2>
        <p>These Terms of Use shall be governed by and interpreted in accordance with the laws of the State of <strong>New Mexico</strong>, United States, without regard to conflict of law principles.</p>
        <p>Any disputes arising from the use of this Site shall be resolved exclusively in the state or federal courts located within <strong>Bernalillo, New Mexico</strong>, and users of this Site consent to the jurisdiction of those courts.</p>

        <h2>Changes to These Terms</h2>
        <p>These Terms of Use may be updated at any time without prior notice. Continued use of the Site after any changes are posted constitutes acceptance of the revised terms.</p>

        <h2>Contact</h2>
        <p>If you have questions regarding these Terms of Use or accessibility of the Site, please contact: <strong>donotshowmyemail@gmail.com</strong>.</p>
        </div>`,
    )}`,
});
