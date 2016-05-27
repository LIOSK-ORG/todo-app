Steps performed for module operations on meteor, for refernce

#-------------------------------------------------------------------------------
# Meteor - Anularjs configurations
#-------------------------------------------------------------------------------
meteor remove blaze-html-templates

meteor add angular2-compilers barbatus:angular2-runtime

meteor npm install --save angular2-meteor @angular/platform-browser-dynamic

=> any errors use admin command prompt and re-run the command

#-------------------------------------------------------------------------------
# make sure all dependencies are installed
#-------------------------------------------------------------------------------
 meteor npm install

#-------------------------------------------------------------------------------
# Installing typings
#-------------------------------------------------------------------------------
 
Download npm for windows.
 
install typings

npm install typings -g
typings init
typings install es6-promise --save
typings install dt~es6-shim --global --save
typings install registry:env/meteor --global

npm install @angular/core
npm install angular2-meteor
npm install angular2-meteor-auto-bootstrap
npm install @angular/router-deprecated
#-------------------------------------------------------------------------------
# Adding Security
#-------------------------------------------------------------------------------

meteor remove insecure
meteor add accounts-password
meteor npm install --save angular2-meteor-accounts-ui

#-------------------------------------------------------------------------------
# Add Styling
#-------------------------------------------------------------------------------

meteor add fourseven:scss

#-------------------------------------------------------------------------------
# Remove autopublish data 
#-------------------------------------------------------------------------------

meteor remove autopublish
#-------------------------------------------------------------------------------
# Adding styles and icons
#-------------------------------------------------------------------------------
meteor add twbs:bootstrap
meteor add fortawesome:fontawesome
