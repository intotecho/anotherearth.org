org.anotherearth.Container=(function(){var a;function b(){var w={};var y=org.anotherearth;var k=$("body")[0];var e=org.anotherearth.URLManager;var l={};var B={};var n={};var d={};for(var s in d){n[s]=((d[s]!==null)?parseInt(d[s],10):1)}l.lat=28.345036;l.lng=69.447603;l.alt=70000;l.tilt=0;l.head=0;B.lat=28.345036;B.lng=69.447603;B.alt=70000;B.tilt=0;B.head=0;w.welcomePanel=new y.Panel(org.anotherearth.WELCOME_PANEL_BODY_ID,org.anotherearth.WELCOME_PANEL_HEADER_ID,org.anotherearth.WELCOME_PANEL_ID,"Indus river flooding, Pakistan",k,true,true,true);var u=document.createElement("div");u.innerHTML='<p>The overlay on the right-hand Earth shows flooding of the Indus river in northern Pakistan around 28 SHa`baan 1431 A.H./ 9 August 2010 A.D. (Imagery from <a href="http://earthobservatory.nasa.gov/IOTD/view.php?id=45343">NASA\'s Earth Observatory</a>.) The left-hand frame shows the Earth on 8 Jumaada al-THaany 1431 / May 22, 2010.</p><p>If you know of kml data more representative of the flooding in Pakistan this year, please get in contact with me at contact(at)anotherearth(dot)org.</p><p>Please see <a href="http://www.google.com/crisisresponse/pakistan_floods.html">www.google.com/crisisresponse/pakistan_floods.html </a> for ways in which you can help.</p><p>If your browser\'s preferred language isn\'t English then using a translator, <span id="google_branding"></span>, I\'ve attempted to convert the text.</p>';if(!$.support.leadingWhitespace){u.innerHTML+="<p>For a significantly enhanced experience with this site, I recommend using the Firefox or Chrome browsers.</p>"}w.welcomePanel.addChild(new org.anotherearth.MiscellaneousElement(u));google.language.getBranding("google_branding");w.earthsManager=new y.EarthsManager();w.earthsController=new y.EarthsController(w.earthsManager,n);w.leftEarth=new org.anotherearth.LockableEarth(org.anotherearth.L_EARTH_ID,w.earthsController,l);w.rightEarth=new org.anotherearth.LockableEarth(org.anotherearth.R_EARTH_ID,w.earthsController,B);w.controlPanel=new y.ControlPanel(org.anotherearth.CP_BUTTONS_CONTAINER_ID,org.anotherearth.CP_HEADER_ID,org.anotherearth.CP_ID,"Control Panel",k,true,true,false);w.earthsController.setLeftEarth(w.leftEarth);w.earthsController.setRightEarth(w.rightEarth);w.earthsController.setControlPanel(w.controlPanel);w.earthsManager.registerNewEarthObserver(w.controlPanel);w.earthsManager.registerUndoRedoObserver(w.controlPanel);w.earthsManager.registerUndoRedoObserver(w.earthsController);w.linkCreatorCommand=new y.LinkCreatorCommand(w.earthsController);w.toggleVerticalMovementLockCommand=new y.ToggleMovementLockCommand("vertical",w.earthsController);w.toggleHorizontalMovementLockCommand=new y.ToggleMovementLockCommand("horizontal",w.earthsController);w.toggleTiltLockCommand=new y.ToggleMovementLockCommand("tilt",w.earthsController);w.toggleHeadingLockCommand=new y.ToggleMovementLockCommand("head",w.earthsController);w.undoCommand=new y.UndoCommand(w.earthsController);w.redoCommand=new y.RedoCommand(w.earthsController);w.equateCameraAltitudesCommand=new y.EquateCameraAltitudesCommand(w.earthsController);w.equateCameraLatsLngsCommand=new y.EquateCameraLatsLngsCommand(w.earthsController);w.equateCameraTiltsCommand=new y.EquateCameraTiltsCommand(w.earthsController);w.equateCameraHeadingsCommand=new y.EquateCameraHeadingsCommand(w.earthsController);w.toggleEarthExtraCommand=new y.ToggleEarthExtraCommand(w.earthsController);w.toggleDonorEarthCommand=new y.ToggleDonorEarthCommand(w.earthsController);w.linkCreatingButtonUpdateStrategy=new y.LinkCreatingButtonUpdateStrategy();w.undoButtonUpdateStrategy=new y.UndoButtonUpdateStrategy();w.redoButtonUpdateStrategy=new y.RedoButtonUpdateStrategy();w.equateCameraLatsLngsStrategy=new y.EquateLatLngsButtonStrategy();w.equateCameraAltitudesStrategy=new y.EquateAltitudesButtonStrategy();w.equateCameraTiltsStrategy=new y.EquateTiltsButtonStrategy();w.equateCameraHeadingsStrategy=new y.EquateHeadingsButtonStrategy();w.altLockingCheckbox=new y.TwoEarthsCheckbox("altitudes",org.anotherearth.CP_ALTITUDE_LOCK_CHECKBOX_ID,w.earthsManager);w.latLngLockingCheckbox=new y.TwoEarthsCheckbox("latitudes and longitudes",org.anotherearth.CP_VIEW_CENTER_LOCK_CHECKBOX_ID,w.earthsManager);w.tiltLockingCheckbox=new y.TwoEarthsCheckbox("tilts",org.anotherearth.CP_TILT_LOCK_CHECKBOX_ID,w.earthsManager);w.headingLockingCheckbox=new y.TwoEarthsCheckbox("headings",org.anotherearth.CP_HEAD_LOCK_CHECKBOX_ID,w.earthsManager);w.altLockingCheckbox.addClickEventListener(w.toggleVerticalMovementLockCommand);w.latLngLockingCheckbox.addClickEventListener(w.toggleHorizontalMovementLockCommand);w.tiltLockingCheckbox.addClickEventListener(w.toggleTiltLockCommand);w.headingLockingCheckbox.addClickEventListener(w.toggleHeadingLockCommand);w.undoButton=new y.TwoEarthsButton("undo",org.anotherearth.CP_UNDO_BUTTON_ID,w.earthsManager);w.undoButton.addClickEventListener(w.undoCommand);w.undoButton.setUndoRedoUpdateStrategy(w.undoButtonUpdateStrategy);w.undoButton.setNewEarthPropsUpdateStrategy(w.undoButtonUpdateStrategy);w.undoButton.setIsEnabled(false);w.redoButton=new y.TwoEarthsButton("redo",org.anotherearth.CP_REDO_BUTTON_ID,w.earthsManager);w.redoButton.addClickEventListener(w.redoCommand);w.redoButton.setUndoRedoUpdateStrategy(w.redoButtonUpdateStrategy);w.redoButton.setNewEarthPropsUpdateStrategy(w.redoButtonUpdateStrategy);w.redoButton.setIsEnabled(false);w.equateCameraLatsLngsButton=new y.TwoEarthsButton("latitude and longitude",org.anotherearth.EQUATE_CAM_LATS_LNGS_BUTTON_ID,w.earthsManager);w.equateCameraLatsLngsButton.addClickEventListener(w.equateCameraLatsLngsCommand);w.equateCameraLatsLngsButton.setUndoRedoUpdateStrategy(w.equateCameraLatsLngsStrategy);w.equateCameraLatsLngsButton.setNewEarthPropsUpdateStrategy(w.equateCameraLatsLngsStrategy);w.equateCameraAltitudesButton=new y.TwoEarthsButton("altitude",org.anotherearth.EQUATE_CAM_ALTITUDES_BUTTON_ID,w.earthsManager);w.equateCameraAltitudesButton.addClickEventListener(w.equateCameraAltitudesCommand);w.equateCameraAltitudesButton.setUndoRedoUpdateStrategy(w.equateCameraAltitudesStrategy);w.equateCameraAltitudesButton.setNewEarthPropsUpdateStrategy(w.equateCameraAltitudesStrategy);w.equateCameraTiltsButton=new y.TwoEarthsButton("tilt",org.anotherearth.EQUATE_CAM_TILTS_BUTTON_ID,w.earthsManager);w.equateCameraTiltsButton.addClickEventListener(w.equateCameraTiltsCommand);w.equateCameraTiltsButton.setUndoRedoUpdateStrategy(w.equateCameraTiltsStrategy);w.equateCameraTiltsButton.setNewEarthPropsUpdateStrategy(w.equateCameraTiltsStrategy);w.equateCameraHeadingsButton=new y.TwoEarthsButton("heading",org.anotherearth.EQUATE_CAM_HEADINGS_BUTTON_ID,w.earthsManager);w.equateCameraHeadingsButton.addClickEventListener(w.equateCameraHeadingsCommand);w.equateCameraHeadingsButton.setUndoRedoUpdateStrategy(w.equateCameraHeadingsStrategy);w.equateCameraHeadingsButton.setNewEarthPropsUpdateStrategy(w.equateCameraHeadingsStrategy);w.linkCreatorButton=new y.LinkCreatorButton("create link",org.anotherearth.CP_LINK_CREATOR_BUTTON_ID,org.anotherearth.CP_LINK_BOX_ID,w.earthsManager);w.linkCreatorButton.setUndoRedoUpdateStrategy(w.linkCreatingButtonUpdateStrategy);w.linkCreatorButton.setNewEarthPropsUpdateStrategy(w.linkCreatingButtonUpdateStrategy);w.linkCreatorButton.setIsEnabled(true);w.linkCreatorButton.addClickEventListener(w.linkCreatorCommand);w.earthsController.setLinkCreatorButton(w.linkCreatorButton);var g=[];var c={};var q={};c.id="pick_left_camera";c.value="left_earth";c.name="donor_camera_selector";c.label="from left camera";g.push(c);q.id="pick_right_camera";q.value="right_earth";q.name="donor_camera_selector";q.label="from right camera";g.push(q);w.donorRadioButtons=new y.RadioButtons(g,"donor_camera_selector");w.donorRadioButtons.addClickEventListener(w.toggleDonorEarthCommand);var j={};var C={};var h={};var A={};var z={};var p={};var m={};var t={};j.text="borders and towns";j.value="borders";C.text="hi-res buildings";C.value="hiRes";h.text="lo-res buildings";h.value="loRes";A.text="roads";A.value="roads";z.text="terrain";z.value="terrain";p.text="sun";p.value="sun";m.text="atmosphere";m.value="atmosphere";t.text="grid";t.value="grid";var x=[j,C,h,A,z,t];var i=[$.extend(true,{},j),$.extend(true,{},C),$.extend(true,{},h),$.extend(true,{},A),$.extend(true,{},z),$.extend(true,{},t)];w.LEarthOptionSelector=new y.SelectBox(x,1,"left Earth",org.anotherearth.CP_L_EARTH_EXTRAS_SELECTOR_ID,true);w.REarthOptionSelector=new y.SelectBox(i,1,"right Earth",org.anotherearth.CP_R_EARTH_EXTRAS_SELECTOR_ID,true);w.LEarthOptionSelector.addClickEventListener(w.toggleEarthExtraCommand);w.REarthOptionSelector.addClickEventListener(w.toggleEarthExtraCommand);w.leftEarthSearch=new org.anotherearth.SearchBox(w.leftEarth,w.earthsController,org.anotherearth.L_EARTH_SEARCH_BOX_ID,"left Earth");w.rightEarthSearch=new org.anotherearth.SearchBox(w.rightEarth,w.earthsController,org.anotherearth.R_EARTH_SEARCH_BOX_ID,"right Earth");w.checkBoxSubPanel=new y.ShrinkableSubPanel("synchronize camera movement",org.anotherearth.CP_CAMERA_PROPERTY_LOCKING_SUB_PANEL_ID);w.cameraPropCopyingSubPanel=new y.ShrinkableSubPanel("copy camera coordinates",org.anotherearth.CP_CAMERA_PROPERTY_COPYING_SUB_PANEL_ID);w.earthOptionsSubPanel=new y.ShrinkableSubPanel("Earth overlays",org.anotherearth.CP_EARTH_OPTIONS_SUB_PANEL_ID);w.searchBoxSubPanel=new y.ShrinkableSubPanel("search",org.anotherearth.CP_SEARCH_BOX_SUB_PANEL_ID);var o=document.createElement("span");o.id="google_search_branding";$(w.searchBoxSubPanel.getContainingElement()).find(".sub_panel_title").append(o);w.miscellaneousSubPanel=new y.ShrinkableSubPanel("undo/redo",org.anotherearth.CP_MISC_OPTIONS_SUB_PANEL_ID);var v=(function(){var D=0;return function(){return ++D}})();var r=function(){w.rightEarth.setCameraProperties(28.27155,69.349811,23842.296337,60.638956,65.863623);setTimeout("org.anotherearth.Container.getInstance().getComponent('rightEarth').toggleExtra('time')",1000)};var f=function(){if(v()===2){w.altLockingCheckbox.setIsChecked(n.alt);w.tiltLockingCheckbox.setIsChecked(n.tilt);w.latLngLockingCheckbox.setIsChecked(n.latLng);w.headingLockingCheckbox.setIsChecked(n.heading);w.donorRadioButtons.setIsChecked(true,w.donorRadioButtons.getIndexOf("left_camera"));w.controlPanel.performNewEarthPropsUpdate();w.controlPanel.show();$("#"+org.anotherearth.CP_ID+" button").width($("#"+org.anotherearth.CP_ID+" button").width());$("#"+org.anotherearth.CP_ID).width($("#"+org.anotherearth.CP_ID).width());var D=window.innerHeight?window.innerHeight:$(window).height();var E=w.controlPanel.getContainingElement();var F=parseInt(($(E).css("top")).replace(/(\d+)px/,"$1"),10);if(D<=(($(w.controlPanel.getContainingElement()).outerHeight())+F)){w.controlPanel.closeSubPanels()}w.rightEarth.addKmlFromUrl("http://www.anotherearth.org/test.kml",r)}};w.earthsController.setEarthLoadingResponseCallback(f);w.checkBoxSubPanel.addChild(w.altLockingCheckbox);w.checkBoxSubPanel.addChild(w.headingLockingCheckbox);w.checkBoxSubPanel.addChild(w.latLngLockingCheckbox);w.checkBoxSubPanel.addChild(w.tiltLockingCheckbox);w.cameraPropCopyingSubPanel.addChild(w.donorRadioButtons);w.cameraPropCopyingSubPanel.addChild(w.equateCameraAltitudesButton);w.cameraPropCopyingSubPanel.addChild(w.equateCameraHeadingsButton);w.cameraPropCopyingSubPanel.addChild(w.equateCameraLatsLngsButton);w.cameraPropCopyingSubPanel.addChild(w.equateCameraTiltsButton);w.earthOptionsSubPanel.addChild(w.LEarthOptionSelector);w.earthOptionsSubPanel.addChild(w.REarthOptionSelector);w.miscellaneousSubPanel.addChild(w.undoButton);w.miscellaneousSubPanel.addChild(w.redoButton);w.searchBoxSubPanel.addChild(w.leftEarthSearch);w.searchBoxSubPanel.addChild(w.rightEarthSearch);w.controlPanel.addChild(w.earthOptionsSubPanel);w.controlPanel.addChild(w.searchBoxSubPanel);w.controlPanel.addChild(w.checkBoxSubPanel);w.controlPanel.addChild(w.cameraPropCopyingSubPanel);w.controlPanel.addChild(w.miscellaneousSubPanel);google.language.getBranding("google_search_branding");$(".gBrandingText").css("vertical-align","text-bottom");return{getComponent:function(D){return w[D]}}}return{getInstance:function(){if(!a){a=b()}return a}}})();