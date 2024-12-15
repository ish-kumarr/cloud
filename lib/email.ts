import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
})

export async function sendOTPEmail(to: string, otp: string) {
  const mailOptions = {
    from: `"Cloud-ish" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Password Reset OTP for Cloud-ish',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f0f4f8; padding: 20px; text-align: center;">
          <h1 style="color: #3b82f6;">Cloud-ish</h1>
        </div>
        <div style="padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937;">Password Reset</h2>
          <p style="color: #4b5563;">You have requested to reset your password. Use the following OTP to complete the process:</p>
          <div style="background-color: #e5e7eb; padding: 10px; text-align: center; font-size: 24px; font-weight: bold; color: #1f2937; margin: 20px 0;">
            ${otp}
          </div>
          <p style="color: #4b5563;">This OTP will expire in 15 minutes. If you didn't request this, please ignore this email.</p>
        </div>
        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
          &copy; 2023 Cloud-ish. All rights reserved.
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

export async function sendPasswordResetEmail(to: string, resetLink: string) {
  const mailOptions = {
    from: `"Cloud-ish" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Password Reset for Cloud-ish',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f0f4f8; padding: 20px; text-align: center;">
          <h1 style="color: #3b82f6;">Cloud-ish</h1>
        </div>
        <div style="padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937;">Password Reset</h2>
          <p style="color: #4b5563;">You have requested to reset your password. Click the button below to proceed:</p>
          <div style="text-align: center; margin: 20px 0;">
            <a href="${resetLink}" style="background-color: #3b82f6; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
          </div>
          <p style="color: #4b5563;">If you didn't request this, please ignore this email.</p>
        </div>
        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 12px;">
          &copy; 2023 Cloud-ish. All rights reserved.
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Password reset email sent successfully')
  } catch (error) {
    console.error('Error sending password reset email:', error)
    throw error
  }
}

