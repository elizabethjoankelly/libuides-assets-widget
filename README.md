# libuides-assets-widget
Widget for automatically creating an HTML list of assets using LibGuides API and Javascript

## Requirements
* a LibGuides admin account

## Demo
See example in action at https://louislibraries.org/initiatives/digital-inclusion/news  

Current, Archived, and Digital Inclusion Week Newsletters are automatically published to this page when new documents are uploaded to "Assets" and tagged with the correct subject.

## Instructions
1. Get the apiURL from Tools -- API -- Endpoints v1.1. This example uses Get Assets and filters to only include asset type 4 (documents) and also filters to only include specific subjects (get subject ids from Admin -- Metadata & URLS -- Subjects). Your apiURL will look something like this:
`https://lgapi-us.libapps.com/1.1/assets?site_id=YourSiteID&key=YourAPIkey&asset_types=4&subject_ids=YourSubjectID`

2. In this example, in addition to pulling the names of the documents and listing them in the widget, I wanted to link to the documents. To do this, you will also need to know the URL prefix for your assets; you can get this by looking at the URL for an existing, published asset. Your URL will look something like this:
`https://YourWebsiteURL.com/ld.php?content_id=`

3. Download the assets-widget.js file from this repo and update as follows:

* Replace `YOUR URL` with the apiURL mentioned in step 1.
* Replace `YOUR ASSETS URL PREFIX` with the assets URL prefix mentioned in step 2.
* Save assets-widget.js with your changes.

4. Go to Admin -- Look & Feel -- Custom JS/CSS in LibGuides. Scroll down to Upload Customization Files and upload assets-widget.js. Copy the Include Code / URL; it should look something like this:
`<script type="text/javascript" src="https://libapps.s3.amazonaws.com/sites/YourSiteID/include/assets-widget.js"></script>` 

5. Download the assets-widget.html file from this repo and update as follows:
* Replace the <script></script> tags with the Include Code / URL copied in the previous step.  

Copy the code in your modified assets-widget.html file.  

5. Go to the guide page where you want to add your widget. Click Add / Reorder and select Media / Widget. Name your widget, and paste the code from your modified assets-widget.html file. Click Save. You should now see a list of your documents, hyperlinked.

Conversely, if you don't want to upload the js file to the CUstom JS/CSS library, you can include the code from assets-widget.js (in between `<script></script>` tags along with the HTML from assets-widget.html (`<ul id="widget" class="list-group"></ul>`) in the widget Embed Code editor:

`<ul id="widget" class="list-group"></ul>`
`<script>YOUR SCRIPT CODE</script>`
