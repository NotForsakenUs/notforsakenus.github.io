import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, requestType, message } = await req.json();

    // Validate required fields
    if (!name || !email || !requestType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: 'api',
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Accept self-signed certificates
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'SMTP configuration error',
          message: 'Unable to connect to email server. Please check SMTP settings.',
          code: 'SMTP_CONFIG_ERROR',
          details: verifyError instanceof Error ? verifyError.message : 'Unknown verification error'
        },
        { status: 500 }
      );
    }

    // Format the request type for display
    const requestTypeDisplay = requestType === 'general' ? 'General Inquiry' : 'Prayer Request';

    // Email content
    const subject = `Contact Form: ${requestTypeDisplay} from ${name}`;
    
    const textContent = `
New contact form submission from Not Forsaken Ministries website:

Name: ${name}
Email: ${email}
Request Type: ${requestTypeDisplay}

Message:
${message}

---
Please reply directly to: ${email}
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #34495e; margin-bottom: 20px;">New Contact Form Submission</h2>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 5px 0;"><strong>Request Type:</strong> ${requestTypeDisplay}</p>
          <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3 style="color: #34495e; margin-bottom: 10px;">Message:</h3>
          <div style="background: #ffffff; padding: 15px; border: 1px solid #ecf0f1; border-radius: 5px;">
            <p style="line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        
        <div style="background: #e8f5e8; padding: 10px; border-radius: 5px; border-left: 4px solid #27ae60;">
          <p style="margin: 0; font-size: 14px;">💡 <strong>Reply Instructions:</strong> Please reply directly to <a href="mailto:${email}">${email}</a> to respond to this inquiry.</p>
        </div>
      </div>
    `;

    // Send email - use info@notforsaken.us as the from address
    const mailOptions = {
      from: 'info@notforsaken.us',
      to: 'info@notforsaken.us',
      subject: subject,
      text: textContent,
      html: htmlContent,
      // Add headers for better deliverability
      headers: {
        'X-Mailer': 'Not Forsaken Ministries Contact Form',
        'X-Priority': '3',
      },
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Your message has been sent successfully. We will get back to you soon!' 
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      // Provide more specific error messages based on common SMTP issues
      let errorMessage = 'Failed to send email. Please try again later.';
      let errorCode = 'GENERIC_ERROR';
      
      if (emailError instanceof Error) {
        const errorMsg = emailError.message.toLowerCase();
        
        if (errorMsg.includes('domain') && errorMsg.includes('not allowed')) {
          errorMessage = 'Email domain configuration issue. Please contact the administrator.';
          errorCode = 'DOMAIN_NOT_ALLOWED';
        } else if (errorMsg.includes('authentication') || errorMsg.includes('login')) {
          errorMessage = 'Email authentication failed. Please check SMTP credentials.';
          errorCode = 'AUTH_FAILED';
        } else if (errorMsg.includes('connection') || errorMsg.includes('timeout')) {
          errorMessage = 'Unable to connect to email server. Please try again.';
          errorCode = 'CONNECTION_ERROR';
        }
      }
      
      return NextResponse.json(
        { 
          error: 'Email delivery failed',
          message: errorMessage,
          code: errorCode,
          details: emailError instanceof Error ? emailError.message : 'Unknown email error'
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Server error',
        message: 'An unexpected error occurred. Please try again later.',
        code: 'SERVER_ERROR'
      },
      { status: 500 }
    );
  }
}