# Broken permissions API

Currently existing chrome permissions API is unreliable. Which causes [Privacy
Manager](https://chrome.google.com/webstore/detail/giccehglhacakcfemddmfhdkahamfcmd) to be broken and I can expect more extensions being broken as well.

## How to reproduce?

1. Install [Current extension from the Chrome Web store](https://chrome.google.com/webstore/detail/broken-permissions-api/lghpjgifedknlefkdmgajpfhfejdoafg).
1. Open popup
1. Ensure that `<all_urls>` is selected and click "Request"
1. Observe
1. Click "Contain?" button
1. Observe
1. Switch `Select origin` to `https://*/*`
1. Clicl "Contain?" button
1. Observe

## Observed behavior

### Step 4
The popup can close after providing the permissions, but if it's not then you should see the result of the added permissions in the "On Added" column(ex. by opening the popup.html in another tab, or removing the permission and adding it again), which means that the [permission is granted](https://developer.chrome.com/apps/permissions#method-request).

### Step 6
"Contain?" column outputs "false", which means according to the [permissions API](https://developer.chrome.com/apps/permissions#method-contains) `<all_urls>` permission is not granted.

### Step 9
"Contain?" column outputs "true", which means that even though the `<all_urls>` permission were not granted according to the "Step 6" the `https://*/*` origin permissions were granted.

## Expected behavior
On step 6 "Contain?" column outputs "true".

## Notes

There is [Current chrome issue](https://bugs.chromium.org/p/chromium/issues/detail?id=931413), but the description is ambigious, because that can as well means that observed behavior described here is expected.
I can't clarify the ambiguity, because not able to get response to [my comments](https://bugs.chromium.org/p/chromium/issues/detail?id=931413#c10) for more than a month and having current minimal test case there might again have no attention.

## Questions
- How is it possible to reliably determine if `<all_urls>` permission is set?
- How long does it take to fix such bugs?
- Why my questions are being ignored causing ambigiuty?
- Is this testcase helpful? If yes - is there anything else I can do to help you to fix the chrome regression in a reasonable timeframe?