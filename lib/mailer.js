import { createTransport } from 'nodemailer';

let transporter = null;

/**
 * Get or create a nodemailer transporter
 * Uses Gmail SMTP by default, but can be configured for other providers
 */
export function getMailer() {
  if (transporter) return transporter;
  
  const { GMAIL_USER, GMAIL_PASS, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  
  // Use custom SMTP if configured, otherwise use Gmail
  if (SMTP_HOST) {
    transporter = createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || '587', 10),
      secure: SMTP_PORT === '465',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  } else if (GMAIL_USER && GMAIL_PASS) {
    transporter = createTransport({
      service: 'gmail',
      pool: true,
      maxConnections: 3,
      maxMessages: 100,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });
  } else {
    console.warn('⚠️ Email not configured. Set GMAIL_USER/GMAIL_PASS or SMTP_* environment variables.');
    return null;
  }
  
  return transporter;
}

/**
 * Send an email
 * @param {Object} options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} [options.html] - HTML content
 * @param {string} [options.text] - Plain text content
 * @param {string} [options.from] - Override sender email
 */
export async function sendEmail({ to, subject, html, text, from }) {
  const mailer = getMailer();
  
  if (!mailer) {
    console.log(`📧 [EMAIL NOT CONFIGURED] Would send to: ${to}`);
    console.log(`   Subject: ${subject}`);
    console.log(`   Content: ${text || html?.substring(0, 100)}...`);
    return { success: false, error: 'Email not configured' };
  }
  
  const sender = from || process.env.MAIL_FROM || process.env.GMAIL_USER || 'no-reply@ghostpost.com';
  
  try {
    const result = await mailer.sendMail({
      from: sender,
      to,
      subject,
      text: text || html?.replace(/<[^>]+>/g, '') || '',
      html,
    });
    
    console.log(`✅ Email sent to ${to}: ${subject}`);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error(`❌ Failed to send email to ${to}:`, error);
    return { success: false, error: error.message };
  }
}

/**
 * Fire-and-forget email sending
 * Returns immediately, logs errors
 */
export function queueEmail(options) {
  sendEmail(options).catch(e => console.error('queueEmail failed:', e));
}

/**
 * Email templates
 */
export const emailTemplates = {
  /**
   * Account invitation email
   */
  invitation: ({ accountName, inviterName, inviteUrl, roleName }) => ({
    subject: `You've been invited to join ${accountName} on Ghost Post`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7B2CBF 0%, #9333EA 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Ghost Post</h1>
        </div>
        <div style="background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
          <h2 style="margin-top: 0;">You're Invited!</h2>
          <p>${inviterName ? `<strong>${inviterName}</strong> has invited you` : 'You have been invited'} to join <strong>${accountName}</strong> on Ghost Post as a <strong>${roleName}</strong>.</p>
          <p>Click the button below to accept the invitation and get started:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${inviteUrl}" style="display: inline-block; background: linear-gradient(135deg, #7B2CBF 0%, #9333EA 100%); color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">Accept Invitation</a>
          </div>
          <p style="color: #6b7280; font-size: 14px;">If you didn't expect this invitation, you can safely ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">This invitation link will expire in 7 days.</p>
        </div>
      </body>
      </html>
    `,
    text: `You've been invited to join ${accountName} on Ghost Post!\n\n${inviterName ? `${inviterName} has invited you` : 'You have been invited'} as a ${roleName}.\n\nAccept your invitation: ${inviteUrl}\n\nThis link expires in 7 days.`,
  }),

  /**
   * OTP verification email
   */
  otp: ({ code, expiresIn = '10 minutes' }) => ({
    subject: 'Your Ghost Post Verification Code',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #7B2CBF 0%, #9333EA 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Ghost Post</h1>
        </div>
        <div style="background: #fff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
          <h2 style="margin-top: 0;">Verification Code</h2>
          <p>Use this code to verify your account:</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #7B2CBF;">${code}</span>
          </div>
          <p style="color: #6b7280; font-size: 14px;">This code expires in ${expiresIn}.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">If you didn't request this code, please ignore this email.</p>
        </div>
      </body>
      </html>
    `,
    text: `Your Ghost Post verification code is: ${code}\n\nThis code expires in ${expiresIn}.\n\nIf you didn't request this code, please ignore this email.`,
  }),
};
