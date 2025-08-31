# HubSpot Integration - Testing Guide

## Overview
This document provides testing steps for the HubSpot form integration on the landing page.

## Test Environment Setup

### 1. HubSpot Configuration
- **Region**: na2
- **Portal ID**: 243749134
- **Form ID**: 00114c76-bc96-45bd-b24d-4032ba62243f

### 2. Test URL
```
http://localhost:3000/lp/estimate?utm_source=instagram&utm_medium=cpc&utm_campaign=sept
```

## Manual Testing Steps

### Step 1: Form Loading
1. Open the landing page with UTM parameters
2. Navigate to the form section
3. Verify the HubSpot form loads correctly
4. Check that the loading spinner appears briefly
5. Confirm form fields are styled according to Pires Builders theme

### Step 2: Form Validation
1. Try to submit the form without filling required fields
2. Verify error messages appear in English
3. Check that error styling matches the theme (red borders, error text)
4. Fill in valid data and verify validation passes

### Step 3: Form Submission
1. Fill in all required fields with test data:
   - **Name**: John Doe
   - **Email**: test@example.com
   - **Phone**: (555) 123-4567
   - **City**: Cambridge, MA
   - **Project Type**: Renovation
   - **Message**: Test message
   - **Consent**: Check the box
2. Submit the form
3. Verify redirect to `/lp/thank-you` page

### Step 4: HubSpot Verification
1. Log into HubSpot portal (243749134)
2. Navigate to **Contacts** → **All Contacts**
3. Search for the test contact (test@example.com)
4. Verify the following fields are populated:
   - **Email**: test@example.com
   - **Phone**: (555) 123-4567
   - **City**: Cambridge, MA
   - **Project Type**: Renovation
   - **Message**: Test message

### Step 5: UTM Parameters
1. Check that UTM parameters are captured:
   - **utm_source**: instagram
   - **utm_medium**: cpc
   - **utm_campaign**: sept
   - **pageUrl**: [current page URL]
   - **pageName**: Landing Page - Estimate

### Step 6: Workflow Testing (Optional)
1. If a workflow exists for "Form submission → Create Deal"
2. Verify a new deal is created in the pipeline
3. Check deal properties are populated correctly

## Technical Verification

### Client-Side
- [ ] No hydration errors in console
- [ ] Form loads without JavaScript errors
- [ ] UTM parameters are preserved and submitted
- [ ] Redirect works correctly after submission

### Styling
- [ ] Form matches Pires Builders theme
- [ ] Focus states use orange color (#f97316)
- [ ] Error states are clearly visible
- [ ] Responsive design works on mobile

### Performance
- [ ] Lighthouse score ≥ 90
- [ ] HubSpot script loads with `lazyOnload` strategy
- [ ] No blocking resources

## Troubleshooting

### Common Issues

1. **Form not loading**
   - Check browser console for JavaScript errors
   - Verify HubSpot portal and form IDs are correct
   - Ensure network connectivity to HubSpot

2. **Styling issues**
   - Check if `hubspot-forms.css` is loaded
   - Verify CSS specificity is correct
   - Test in different browsers

3. **UTM parameters not captured**
   - Check browser console for errors
   - Verify URL parameters are present
   - Check hidden fields are added to form

4. **No redirect after submission**
   - Check if `.submitted-message` class appears
   - Verify router.push is called
   - Check for JavaScript errors

### Debug Mode
To enable debug logging, add this to the browser console:
```javascript
localStorage.setItem('hubspot-debug', 'true')
```

## Success Criteria

✅ **Form loads correctly** without hydration errors  
✅ **Styling matches theme** (orange focus, proper spacing)  
✅ **Validation works** with clear error messages  
✅ **Submission redirects** to thank you page  
✅ **Contact created** in HubSpot with all fields  
✅ **UTM parameters captured** and stored  
✅ **Performance maintained** (Lighthouse ≥ 90)  

## Notes

- The form uses HubSpot's inline embed method
- UTM parameters are automatically captured from URL
- Styling is applied via CSS overrides
- Tracking code only loads in production
- Form submission is handled by HubSpot's servers
