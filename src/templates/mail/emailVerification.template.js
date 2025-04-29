import { APP_URL, PORT } from "../../constants.js";

export function mailVerification(token) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 40px 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 40px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            max-width: 150px;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            background-color: #2563eb;
            color: white !important;
            padding: 12px 30px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: 500;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #666;
            font-size: 0.9em;
        }
        .code {
            font-size: 1.2em;
            letter-spacing: 3px;
            padding: 10px 20px;
            background-color: #f3f4f6;
            border-radius: 5px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Verify Your Email Address</h1>
        </div>

        <p>Hello,</p>
        <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>

        <div style="text-align: center; margin: 30px 0;">
            <a href="${APP_URL}:${PORT}/api/v1/users/verify?token=${token}" class="button">Verify Email Address</a>
        </div>

        <p>If you didn't create an account, you can safely ignore this email.</p>

        <div class="footer">
            <p>Best regards,<br>The short_url Team</p>
            <p style="margin-top: 20px; color: #999;">
                This link will expire in 24 hours.<br>
            </p>
        </div>
    </div>
</body>
</html>
`;
}
