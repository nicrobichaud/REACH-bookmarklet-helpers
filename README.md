# REACH-bookmarklet-helpers

Bookmarklets that inject js to ```xx.reachboarding.com``` to walk users through various tasks.
<br><br>
Intended for testing and proof of concept.
<br><br>
Drag the following links into your bookmark bar to make them accessible on your REACH site
<br><br>
[TEST](javascript:(function(){alert(0);})();)

[TEST 2](javascript:(function(){
document.body.appendChild(document.createElement('script')).src='https://rawcdn.githack.com/nicrobichaud/REACH-bookmarklet-helpers/e493eb39b9bac87711c02fa103c8aecb5254e22b/test.js'
})();
)
