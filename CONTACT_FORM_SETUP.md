# Contact Form - Quick Setup Guide

## Current Status

The contact form currently **opens your email client** (Gmail, Outlook, etc.) with the message pre-filled. This is a fallback mechanism that works immediately without any setup.

## To Enable Direct Email Sending

Follow these simple steps to make emails send directly without opening an email client:

### Step 1: Create Free EmailJS Account (5 minutes)

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (Free - 200 emails/month)
3. Verify your email address
4. Log in to your dashboard

### Step 2: Connect Your Email (3 minutes)

1. In EmailJS dashboard, click **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose **Gmail** (or your email provider)
4. Click **"Connect Account"**
5. Sign in with your email (the one that will RECEIVE messages)
6. **IMPORTANT: Copy your Service ID** (looks like `service_abc1234`)
   - Save this somewhere - you'll need it in Step 4

### Step 3: Create Email Template (3 minutes)

1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Give it a name: `Contact Form`
4. In the template editor, paste this:

**Subject:**
```
New Contact: {{from_name}}
```

**Content:**
```
You have a new contact form submission!

Name: {{from_name}}
Phone: {{from_phone}}

Message:
{{message}}

---
Sent from RockyVeen.com Contact Form
```

5. Click **"Save"**
6. **IMPORTANT: Copy your Template ID** (looks like `template_xyz5678`)
   - Save this somewhere - you'll need it in Step 4

### Step 4: Update Your Website (1 minute)

1. Open the file: `src/components/home/contact-section.tsx`
2. Find these two lines (around line 44-45):
   ```typescript
   const SERVICE_ID = 'service_rockyveen' // Replace with your EmailJS service ID
   const TEMPLATE_ID = 'template_contact' // Replace with your EmailJS template ID
   ```

3. Replace with YOUR IDs from Steps 2 and 3:
   ```typescript
   const SERVICE_ID = 'service_abc1234' // Your actual Service ID
   const TEMPLATE_ID = 'template_xyz5678' // Your actual Template ID
   ```

4. Save the file

### Step 5: Test It!

1. Go to your website: `http://localhost:3000/#contact`
2. Fill out the contact form
3. Click "Contact Me"
4. ✅ You should see "Message Sent!" 
5. ✅ Check your email inbox - you should receive the message!

## That's It! 🎉

Your contact form will now send emails directly to your inbox without opening an email client.

---

## Troubleshooting

### "Opening Email Client" message appears
- This means EmailJS is not configured yet
- Complete Steps 1-4 above
- Make sure the Service ID and Template ID are correct

### No email received
- Check your spam folder
- Verify the Service ID and Template ID are correct
- Check EmailJS dashboard for delivery status
- Make sure you connected the correct email in Step 2

### "EmailJS not loaded" error
- Refresh the page
- Check browser console for errors
- The EmailJS script should already be in your layout.tsx

### Still having issues?
The fallback email client method still works! Users can still contact you by clicking "Contact Me" and sending through their email app.

---

## What Happens Without Setup

**Current behavior (no setup needed):**
1. User fills form
2. Clicks "Contact Me"
3. Their email client opens (Gmail, Outlook, etc.)
4. Message is pre-filled
5. User clicks "Send" in their email app
6. ✅ You receive the email

**After EmailJS setup:**
1. User fills form
2. Clicks "Contact Me"
3. Email sends instantly
4. User sees success message
5. ✅ You receive the email in your inbox

---

## Quick Reference

**EmailJS Dashboard:** https://dashboard.emailjs.com/

**File to Edit:** `src/components/home/contact-section.tsx`

**Lines to Change:** 44-45

**What to Replace:**
- `service_rockyveen` → Your Service ID
- `template_contact` → Your Template ID

**Free Tier:** 200 emails/month (plenty for most websites)

---

## Your EmailJS Public Key

Already configured in `src/app/layout.tsx`:
```
ZC51lHwwf6coyjTpE
```

You don't need to change this - it's already set up!

---

Need help? The form works NOW with the email client fallback. EmailJS setup is optional but recommended for a better user experience.
