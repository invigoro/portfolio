import { pageHeader, section } from '../lib/components.mjs';

export default () => ({
  title: 'Privacy Policy',
  description: 'Privacy Policy for invigoro.me.',
  body: `${pageHeader({ eyebrow: 'Legal', title: 'Privacy Policy' })}

    ${section(
      'section',
      `        <div class="prose">
        <p class="updated">Last updated: 4 March 2026</p>

        <h2>Overview</h2>
        <p>This Privacy Policy explains how information may be collected and used when you visit this website (the &ldquo;Site&rdquo;), which provides information about Timothy Wells and related projects.</p>
        <p>By using this Site, you agree to the practices described in this policy.</p>

        <h2>Information Collected</h2>
        <p>This Site generally does not require users to create accounts or submit personal information in order to browse its content.</p>
        <p>However, certain information may be collected automatically through standard web technologies, including:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited</li>
          <li>Approximate geographic region</li>
          <li>Date and time of visits</li>
        </ul>
        <p>This information is typically collected by web servers or hosting providers for security, analytics, and operational purposes.</p>

        <h2>Voluntary Contact Information</h2>
        <p>If you contact the Site owner through email or other communication methods listed on the Site, any information you provide (such as your name or email address) will only be used to respond to your inquiry and will not be sold or shared with third parties except as required by law.</p>

        <h2>Cookies and Local Storage</h2>
        <p>This Site may use standard browser cookies or similar technologies to improve functionality or analyze traffic. Cookies are small files stored on your device that help websites remember certain preferences or usage information. This Site also stores your light or dark appearance preference locally in your browser; that preference never leaves your device.</p>
        <p>You can disable cookies through your browser settings if you prefer.</p>

        <h2>Third-Party Services</h2>
        <p>This Site may include links to external websites or services (such as GitHub or other platforms). Those services have their own privacy policies and practices, which are not controlled by the Site owner. Pages on this Site that embed video from YouTube, Vimeo, or Facebook, or that load fonts from Google Fonts, will contact those services when the page loads.</p>

        <h2>Data Security</h2>
        <p>Reasonable efforts are made to maintain the security of this Site and any information submitted through it. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>

        <h2>Children&rsquo;s Privacy</h2>
        <p>This Site is not directed toward children under the age of 13, and the Site owner does not knowingly collect personal information from children.</p>

        <h2>Changes to This Policy</h2>
        <p>This Privacy Policy may be updated periodically. Any changes will be posted on this page with the updated revision date.</p>

        <h2>Contact</h2>
        <p>If you have questions about this Privacy Policy or how information related to this Site is handled, you may contact: <strong>donotshowmyemail@gmail.com</strong>.</p>
        </div>`,
    )}`,
});
