# Firefox Configuration

## Settings via user.js

How it works:

- Browser settings are stored at `user.js` and `prefs.js`
- When firefox starts, it reads configuration from `user.js` and then seeds into `prefs.js`. 
- Both files are located at profile folder.
  - For mac, `/Users/$USERNAME/Library/Application Support/Firefox/Profiles/$RANDOMSTRING.default-release`
  - Generally, to find/open profile folder: go to URL `about:support` > search for `Profile Folder` and click `Open Folder/Show in Finder`

My `user.js` file: [firefox-user.js](./firefox-user.js)

Links for settings:

- <https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections>
- <https://github.com/Aetherinox/firefox-telemetry-block>
- <https://github.com/hnhx/user.js>
- Not checked yet
  - <https://github.com/arkenfox/user.js/>
  - <https://github.com/yokoffing/Betterfox>


## Enterprise Settings

MacOS:

-  To manage and configure Firefox enterprise settings on macOS,
  - Create file `org.mozilla.firefox.plist`
  - Add your policies
  - Convert it into a `.mobileconfig` configuration profile, using tools like `ProfileCreator` or `mcxToProfile`
  - Deploy it via your MDM solution (such as Jamf or Intune)
  - Unknown:
    -  What is `policies.json` file?
  - Links:
    - <https://assets.mozilla.net/pdf/Firefox.for.Enterprise.Browser.Deployment.Guide.pdf>
    - <https://firefox-admin-docs.mozilla.org/guides/getting-started/>
    - <https://github.com/mozilla/policy-templates>
    - <https://support.mozilla.org/en-US/kb/managing-policies-macos-desktops>
    - <https://support.mozilla.org/en-US/kb/privacy-settings-firefox-enterprise>
    - <https://support.mozilla.org/en-US/products/firefox-enterprise/settings>
