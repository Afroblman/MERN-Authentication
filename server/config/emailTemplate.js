export const EMAIL_VERIFICATION_OTP_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; background:#f8f9fa; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
    <tr>
      <td align="center">

        <table width="400" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; overflow:hidden;">
          
          <tr>
            <td style="background:#198754; color:#ffffff; text-align:center; padding:16px;">
              <h2 style="margin:0;">Verify Your Email</h2>
            </td>
          </tr>

          <tr>
            <td style="padding:24px; text-align:center; color:#212529;">
              <p style="margin:0 0 12px;">Use the OTP below to verify your email:</p>

              <div style="font-size:28px; font-weight:bold; letter-spacing:4px; margin:16px 0;">
                {{otp}}
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

export const PASSWORD_RESET_OTP_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset</title>
</head>
<body style="margin:0; padding:0; background:#f8f9fa; font-family:Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
    <tr>
      <td align="center">

        <table width="400" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; overflow:hidden;">
          
          <tr>
            <td style="background:#198754; color:#ffffff; text-align:center; padding:16px;">
              <h2 style="margin:0;">Password Reset</h2>
            </td>
          </tr>

          <tr>
            <td style="padding:24px; text-align:center; color:#212529;">
              <p style="margin:0 0 12px;">
                Use the OTP below to reset your password:
              </p>

              <div style="font-size:28px; font-weight:bold; letter-spacing:4px; margin:16px 0;">
                {{otp}}
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
