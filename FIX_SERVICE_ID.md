# Fix EmailJS Service ID Error

## Error Message
```
POST https://api.emailjs.com/api/v1.0/email/send 400 (Bad Request)
The service ID not found
```

## Problem
The Service ID `service_h04omy2` is not found in your EmailJS account. This could mean:
1. The Service ID is incorrect
2. The email service wasn't properly connected
3. The service was deleted

## Solution: Find Your Correct Service ID

### Step 1: Go to EmailJS Dashboard
1. Open: **https://dashboard.emailjs.com/admin**
2. Log in with your account

### Step 2: Check Email Services
1. Click **"Email Services"** in the left menu
2. You should see a list of connected services

### Step 3: Find Your Service ID

**If you see a service listed:**
- Look for the **Service ID** column
- It will look like: `service_abc1234`
- **Copy this exact ID**

**If you DON'T see any services:**
- You need to add one! Follow Step 4 below

### Step 4: Add Email Service (If Needed)

1. Click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Yahoo
   - Or any other provider
3. Click **"Connect Account"**
4. Sign in with the email that will RECEIVE messages
5. After connecting, you'll see your **Service ID**
6. **Copy this Service ID**

### Step 5: Update Your Code

1. Open: `src/components/home/contact-section.tsx`
2. Find line 46:
   ```typescript
   const SERVICE_ID = 'service_h04omy2' // ✅ Your EmailJS service ID
   ```
3. Replace with YOUR actual Service ID:
   ```typescript
   const SERVICE_ID = 'service_YOUR_ACTUAL_ID' // ✅ Your EmailJS service ID
   ```

### Step 6: Test Again

1. Save the file
2. Go to `http://localhost:3000/#contact`
3. Fill out the form
4. Click "Contact Me"
5. ✅ Should work now!

---

## Quick Checklist

- [ ] Logged into EmailJS dashboard
- [ ] Checked "Email Services" section
- [ ] Found or created an email service
- [ ] Copied the correct Service ID
- [ ] Updated line 46 in contact-section.tsx
- [ ] Saved the file
- [ ] Tested the form

---

## Example Service IDs

Service IDs look like this:
- ✅ `service_abc1234`
- ✅ `service_h04omy2`
- ✅ `service_xyz5678`
- ❌ `template_abc1234` (this is a template ID, not service ID)

---

## Where to Find Each ID

### Service ID
- Location: **Email Services** page
- Format: `service_xxxxxxx`
- What it does: Connects to your email provider

### Template ID  
- Location: **Email Templates** page
- Format: `template_xxxxxxx`
- What it does: Formats the email content

### Public Key
- Location: **Account** → **General**
- Already configured: `ZC51lHwwf6coyjTpE`
- What it does: Authenticates your website

---

## Screenshot Guide

When you're in the EmailJS dashboard:

1. **Email Services page** should show:
   ```
   ┌─────────────────────────────────────────┐
   │ Email Services                          │
   ├─────────────────────────────────────────┤
   │ Service Name    | Service ID           │
   │ Gmail           | service_abc1234      │ ← Copy this!
   └─────────────────────────────────────────┘
   ```

2. **Email Templates page** should show:
   ```
   ┌─────────────────────────────────────────┐
   │ Email Templates                         │
   ├─────────────────────────────────────────┤
   │ Template Name   | Template ID          │
   │ Contact Form    | template_mced23s     │ ← Already have this!
   └─────────────────────────────────────────┘
   ```

---

## Still Having Issues?

### Check if service is active
- In Email Services, make sure the service shows as "Active"
- If it says "Inactive", click to reactivate it

### Try creating a new service
- Sometimes services get disconnected
- Create a fresh service and use the new Service ID

### Verify email connection
- Make sure you completed the OAuth flow
- Gmail may require "Less secure app access" or App Password

---

## Current Configuration

**What you have:**
- ✅ Template ID: `template_mced23s`
- ✅ Public Key: `ZC51lHwwf6coyjTpE`
- ❌ Service ID: `service_h04omy2` (not found)

**What you need:**
- Find the correct Service ID from your EmailJS dashboard
- Update line 46 in contact-section.tsx

---

Once you update the Service ID, the form will work perfectly! 🚀
