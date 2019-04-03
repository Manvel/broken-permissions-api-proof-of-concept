# Broken permissions API

Currently existing chrome permissions API is unreliable.

## How to reproduce?

1. Install [Current extension from the Chrome Web store](https://chrome.google.com/webstore/detail/broken-permissions-api/lghpjgifedknlefkdmgajpfhfejdoafg).
1. Open popup
1. Ensure that `<all_urls>` is selected and click "Request"
1. Observe
1. Click "Contain?" button
1. Observe

## Observed behavior

### Step 4
The popup can close after providing the permissions, but if it's not then you should see the result of the added permissions in the "On Added" column.

### Step 6
"Contain?" column outputs "false", which means that there is basically no reliable way to determine if the `<all_urls>` permission was added.

## Expected behavior
On step 6 "Contain?" column outputs "true".

## Notes

There is [Current chrome issue](https://bugs.chromium.org/p/chromium/issues/detail?id=931413), but the description is ambigious, because that can as well means that behavior described here is expected.
I can't clarify that, because my comments are being ignored there for more than a month and having current minimal test case there might again be forgotten.

## Questions
- How is it possible to reliably determine if `<all_urls>` permission is set?
- How/were can I communicate such questions, so my comments aren't ignored, like in another issue? (I'm asking that because I need to communicated back to my users as well)
