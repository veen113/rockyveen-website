# EmailJS Template - Updated with Email Field

## Template Variables

Your contact form now sends these variables:
- `{{from_name}}` - Person's name
- `{{from_email}}` - Person's email address ✨ NEW
- `{{from_phone}}` - Person's phone number
- `{{message}}` - Person's message
- `{{to_name}}` - Your name (RockyVeen)

---

## Simple Text Template

### Subject:
```
New Contact: {{from_name}}
```

### Content:
```
You have a new contact form submission from your website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 NAME
{{from_name}}

📧 EMAIL
{{from_email}}

📱 PHONE
{{from_phone}}

💬 MESSAGE
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sent from: rockyveen.com contact form
To: {{to_name}}
```

---

## Beautiful HTML Template (Recommended)

### Subject:
```
🎯 New Contact: {{from_name}}
```

### Content:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
  <!-- Header with gradient -->
  <div style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px;">✨ New Contact Form Submission</h1>
  </div>
  
  <!-- Main content -->
  <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    
    <!-- Name -->
    <div style="margin-bottom: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: bold;">👤 Name</p>
      <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">{{from_name}}</p>
    </div>
    
    <!-- Email -->
    <div style="margin-bottom: 20px; padding: 15px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
      <p style="margin: 0 0 5px 0; color: #1e40af; font-size: 12px; text-transform: uppercase; font-weight: bold;">📧 Email</p>
      <p style="margin: 0; color: #1e3a8a; font-size: 16px; font-weight: 600;">
        <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none;">{{from_email}}</a>
      </p>
    </div>
    
    <!-- Phone -->
    <div style="margin-bottom: 20px; padding: 15px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #10b981;">
      <p style="margin: 0 0 5px 0; color: #065f46; font-size: 12px; text-transform: uppercase; font-weight: bold;">📱 Phone</p>
      <p style="margin: 0; color: #064e3b; font-size: 16px; font-weight: 600;">
        <a href="tel:{{from_phone}}" style="color: #059669; text-decoration: none;">{{from_phone}}</a>
      </p>
    </div>
    
    <!-- Message -->
    <div style="padding: 20px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; margin-bottom: 20px;">
      <p style="margin: 0 0 10px 0; color: #92400e; font-size: 12px; text-transform: uppercase; font-weight: bold;">💬 Message</p>
      <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
    </div>
    
    <!-- Quick Actions -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="mailto:{{from_email}}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: bold; margin-right: 10px;">Reply via Email</a>
      <a href="tel:{{from_phone}}" style="display: inline-block; padding: 12px 24px; background: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">Call Now</a>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <!-- Footer -->
    <p style="color: #9ca3af; font-size: 12px; text-align: center; margin: 0;">
      Sent from <strong style="color: #a855f7;">rockyveen.com</strong> contact form<br>
      To: {{to_name}}
    </p>
  </div>
</div>
```

---

## How to Add This Template

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Click "Email Templates"** in the left menu
3. **Click "Create New Template"**
4. **Template Name**: `Contact Form`
5. **Copy the Subject** from above
6. **Copy the Content** (choose Simple or HTML version)
7. **Click "Save"**
8. **Copy your Template ID** (e.g., `template_abc1234`)
9. **Update line 47** in `contact-section.tsx`:
   ```typescript
   const TEMPLATE_ID = 'template_abc1234' // Your actual Template ID
   ```

---

## What Changed in the Form

✅ **Added Email Field** - Now required  
✅ **Name Field** - Still required  
✅ **Phone Field** - Now optional  
✅ **Message Field** - Still required  

### Form Layout:
```
┌─────────────────────────────────────┐
│  Name           │  Email            │
├─────────────────────────────────────┤
│  Phone (Optional)                   │
├─────────────────────────────────────┤
│  Message                            │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

---

## Reply-To Configuration (Optional)

To make it easier to reply to contacts:

1. In your EmailJS template settings
2. Find **"Reply-To"** field
3. Set it to: `{{from_email}}`
4. Now when you click "Reply" in your email, it will automatically reply to the person who contacted you!

---

## Test Your Template

After setting up:

1. Go to `http://localhost:3000/#contact`
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 123-456-7890
   - Message: This is a test message
3. Click "Contact Me"
4. Check your inbox!
5. You should see a beautiful email with all the information

---

## Template ID Location

After saving your template, you'll find the Template ID:
- At the top of the template editor
- Format: `template_xxxxxxx`
- Example: `template_k8j2h9s`

Copy this and update your code! 🚀
