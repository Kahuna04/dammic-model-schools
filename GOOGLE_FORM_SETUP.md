# Google Form Setup for Admissions

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click **+ Blank** or use a template
3. Title: "Dammic Model Schools - Application Form"

## Step 2: Add Form Fields

### Student Information
- **Full Name** (Short answer, Required)
- **Date of Birth** (Date, Required)
- **Gender** (Multiple choice: Male/Female, Required)
- **Class Applying For** (Dropdown: Creche, Nursery 1-3, Primary 1-6, JSS 1-3, SS 1-3, Required)

### Parent/Guardian Information
- **Parent/Guardian Full Name** (Short answer, Required)
- **Relationship** (Dropdown: Father, Mother, Guardian, Required)
- **Phone Number** (Short answer, Required)
- **Email Address** (Short answer, Required)
- **Home Address** (Paragraph, Required)
- **Occupation** (Short answer)

### Previous Education (Optional for Creche/Nursery 1)
- **Previous School Name** (Short answer)
- **Last Class Completed** (Short answer)

### Additional Information
- **Medical Conditions/Allergies** (Paragraph)
- **How did you hear about us?** (Multiple choice: WhatsApp, Facebook, Friend/Family, Google Search, Billboard, Other)
- **Any Additional Comments** (Paragraph)

### Documents Upload (Optional - requires Google Workspace)
- **Birth Certificate** (File upload)
- **Passport Photo** (File upload)
- **Last School Report** (File upload)

## Step 3: Link to Google Sheets

1. In your form, click the **Responses** tab
2. Click the green **Sheets icon** (Create Spreadsheet)
3. Choose "Create a new spreadsheet"
4. Name it: "Dammic Admissions 2025"
5. Click **Create**

✅ **All form responses will now automatically populate in Google Sheets!**

## Step 4: Get Embed URL

1. Click **Send** button (top right)
2. Click the **<> Embed HTML** icon
3. Copy the URL from `src="..."` 
4. Example: `https://docs.google.com/forms/d/e/1FAIpQLSc...xyz/viewform?embedded=true`

## Step 5: Update Website

1. Open `app/admissions/page.tsx`
2. Find line 16: `const googleFormUrl = "..."`
3. Replace with your actual form URL
4. Save and deploy

## Step 6: Customize Google Sheets

In your linked Google Sheet, you can:

### Add Formula Columns
- **Age Calculation**: `=DATEDIF(B2,TODAY(),"Y")` (if DOB in column B)
- **Application Date**: Automatically captured by Forms
- **Status**: Add dropdown (Pending, Accepted, Rejected, Interview Scheduled)
- **Notes**: For internal team comments

### Set Up Notifications
1. In Sheets: **Tools** → **Notification rules**
2. Choose: "Notify me when... A user submits a form"
3. Get instant email alerts for new applications

### Export to Excel
1. **File** → **Download** → **Microsoft Excel (.xlsx)**
2. Or use Google Sheets app on mobile for real-time access

## Step 7: Email Confirmation (Optional)

1. Install Google Forms add-on: **Email Notifications for Google Forms**
2. Send auto-reply to applicants confirming receipt
3. Customize message with your school branding

## Security & Privacy

- Set form to **Require sign-in** (if you want to prevent spam)
- Or keep it public for easier access
- Form responses are private - only you can see them
- Disable "Show link to submit another response" to prevent duplicates

## Sample Form Questions

```
1. Student's Full Name *
2. Date of Birth *
3. Gender * (Male/Female)
4. Class Applying For * (Dropdown)
5. Parent/Guardian Name *
6. Phone Number *
7. Email Address *
8. Home Address *
9. Previous School (if any)
10. Medical conditions/allergies
11. How did you hear about us? *
```

---

**Need Help?** Contact Google Workspace support or watch YouTube tutorials on "Google Forms to Sheets integration"
