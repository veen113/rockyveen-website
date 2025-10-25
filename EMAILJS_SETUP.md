# EmailJS Setup Guide for Contact Form

## Current Status
The contact form now has a **fallback mechanism** that works immediately:
- ✅ If EmailJS is not configured, it opens the user's email client with pre-filled message
- ✅ Works on all devices
- ✅ No setup required for basic functionality

## To Enable Direct Email Sending (Optional)

If you want emails to be sent directly without opening an email client, follow these steps:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for up to 200 emails/month)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Phone: {{from_phone}}

Message:
{{message}}

---
Sent from RockyVeen Website Contact Form
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `ZC51lHwwf6coyjTpE`)
3. This is already set in `src/app/layout.tsx`

### Step 5: Update the Code
Open `src/components/home/contact-section.tsx` and update these lines:

```typescript
const SERVICE_ID = 'service_rockyveen' // Replace with YOUR service ID
const TEMPLATE_ID = 'template_contact' // Replace with YOUR template ID
```

Replace with your actual IDs:
```typescript
const SERVICE_ID = 'service_abc123' // Your actual service ID
const TEMPLATE_ID = 'template_xyz789' // Your actual template ID
```

### Step 6: Test
1. Go to your website contact form
2. Fill out the form
3. Submit
4. Check your email inbox!

## Current Behavior

### Without EmailJS Setup (Current)
1. User fills out form
2. Clicks "Contact Me"
3. Email client opens with pre-filled message
4. User clicks send in their email client
5. ✅ Message is sent

### With EmailJS Setup (After configuration)
1. User fills out form
2. Clicks "Contact Me"
3. Email is sent directly
4. User sees success message
5. ✅ You receive email instantly

## Template Variables

The form sends these variables to EmailJS:
- `{{from_name}}` - User's name
- `{{from_phone}}` - User's phone number
- `{{message}}` - User's message
- `{{to_name}}` - Your name (RockyVeen)

## Email Template Example

Create a template in EmailJS with this content:

**Subject:**
```
🎯 New Contact: {{from_name}}
```

**Body:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #a855f7;">New Contact Form Submission</h2>
  
  <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Phone:</strong> {{from_phone}}</p>
  </div>
  
  <div style="background: #fff; padding: 20px; border-left: 4px solid #a855f7; margin: 20px 0;">
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
  </div>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
  
  <p style="color: #666; font-size: 12px;">
    Sent from RockyVeen Website Contact Form<br>
    <a href="https://rockyveen.com">rockyveen.com</a>
  </p>
</div>
```

## Troubleshooting

### Form opens email client instead of sending
- ✅ This is the fallback behavior (working as designed)
- To fix: Complete EmailJS setup above

### "EmailJS not loaded" error
- Check that the script is in `src/app/layout.tsx`
- Check browser console for errors
- Verify public key is correct

### Emails not arriving
- Check spam folder
- Verify email service is connected in EmailJS
- Check EmailJS dashboard for delivery status
- Verify template ID and service ID are correct

### Rate limiting
- Free plan: 200 emails/month
- Upgrade if you need more

## Files Modified

1. **`src/components/home/contact-section.tsx`**
   - Updated email handling
   - Added fallback to mailto
   - Better error handling

2. **`src/app/layout.tsx`**
   - EmailJS script already included
   - Public key: `ZC51lHwwf6coyjTpE`

## Testing Checklist

- [ ] Form submits without errors
- [ ] Success message appears
- [ ] Form clears after submission
- [ ] Email received (or email client opens)
- [ ] All form fields are included in email
- [ ] Phone number is optional but included if provided

## Current Working State

✅ **The form works NOW** - It opens the email client with a pre-filled message
✅ **No setup required** - Works out of the box
✅ **User-friendly** - Clear feedback messages
✅ **Fallback ready** - Always has a way to contact you

To enable direct email sending, just follow the EmailJS setup steps above!
