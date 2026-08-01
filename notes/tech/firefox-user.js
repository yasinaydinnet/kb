// Index and General purposes:
// 
// 1. Remove
//  1a. telemetry X
//  1b. tracking/network privacy X 
//  1c. promotions X
//  1d. discovery/recommendations X
//  1e. studies/experiments X
//  1f. reporting/diagnostic X
// 2. Increase
//  2a. security X
//  2b. speed (tba/incomplete/future)
// 3. Disable unused features
// 4. My settings

// 1A. REMOVE TELEMETRY X
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.redactNewtabPing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.search.eventTelemetry.enabled", false);
user_pref("browser.search.serpEventTelemetry.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
user_pref("nimbus.telemetry.targetingContextEnabled", false);
user_pref("permissions.desktop-notification.telemetry.siteCategories", "");
user_pref("security.unexpected_system_load_telemetry_enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.dap_enabled", false);
user_pref("toolkit.telemetry.dap_task1_enabled", false);
user_pref("toolkit.telemetry.dap_visit_counting_enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// 1B. REMOVE TRACKING/NETWORK PRIVACY X
user_pref("dom.prefetch_dns_for_anchor_http_document", false);
user_pref("dom.prefetch_dns_for_anchor_https_document", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.prefetch_via_proxy", false);
user_pref("network.prefetch-next", false);
user_pref("network.user_prefetch-next", false);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// 1C. REMOVE PROMOTIONS X
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.vpn.url", "");
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.privatebrowsing.promoEnabled", false);
user_pref("browser.settings-redesign.promo.dismissed", true);
user_pref("browser.snippets.syncPromo.enabled", false);
user_pref("browser.user_preferences.moreFromMozilla", false);
user_pref("identity.mobilepromo.android", "");

// 1D. REMOVE DISCOVERY/RECOMMENDATIONS X
user_pref("accessibility.typeaheadfind.flashBar", 0);
user_pref("browser.aboutwelcome.didSeeFinalScreen", true);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.discovery.containers.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.discovery.sites", "");
user_pref("browser.download.panel.shown", true);
user_pref("browser.eme.ui.firstContentShown", true);
user_pref("browser.engagement.ctrlTab.has-used", true);
user_pref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
user_pref("browser.engagement.sidebar-button.has-used", true);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showTopSites", false);
user_pref("browser.newtabpage.activity-stream.system.showWeatherOptIn", false);
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
user_pref("browser.newtabpage.activity-stream.widgets.weather.enabled", false);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.introShown", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("browser.urlbar.suggest.quicksuggest", false);
user_pref("browser.urlbar.suggest.remotetab", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("extensions.getAddons.cache.enabled", false); // Add-on metadata updating-recommendations
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("privacy.announcements.enabled", false);
user_pref("startup.homepage_welcome_url", "");
user_pref("trailhead.firstrun.didSeeAboutWelcome", true);

// 1E. REMOVE STUDYIES/EXPERIMENTS X
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);
user_pref("experiments.manifest.uri", "");
user_pref("nimbus.rollouts.enabled", false);

// 1F. REMOVE REPORTING/DIAGNOSTICS X
user_pref("browser.selfsupport.enabled", false);
user_pref("browser.selfsupport.urlbar-ping.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyVersion", 2);
user_pref("datareporting.policy.firstRunTime", 0);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("healthreport.uploadEnabled", false);
user_pref("toolkit.crashreporter.enabled", false);

// 2A. INCREASE SECURITY X
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode", true);
user_pref("network.IDN_show_punycode", true); // Prevent IDN phishing
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.ssl3.deprecated.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_seed_sha", false);

// 3. DISABLE UNUSED FEATURES X

// PUSH & WEB NOTIFICATIONS X
user_pref("dom.push.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// POCKET X
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");

// GEOLOCATION X
user_pref("browser.region.network.scan", false);
user_pref("browser.region.network.url", "");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.modernConfig", false);
user_pref("browser.snippets.geoUrl", "");
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");

// SNIPPETS
user_pref("browser.snippets.enabled", false);
user_pref("browser.snippets.statsUrl", "");
user_pref("browser.snippets.updateUrl", "");

// WEBRTC X
user_pref("media.getusermedia.aec_enabled", false); // Disable WebRTC audio processing modules
user_pref("media.getusermedia.agc_enabled", false); // Disable WebRTC audio processing modules
user_pref("media.getusermedia.noise_enabled", false); // Disable WebRTC audio processing modules
user_pref("media.peerconnection.enabled", false); // Disables webrtc, including zoom,teams,discord,GMeet
user_pref("media.peerconnection.ice.default_address_only", true); // Prevent IP exposure
user_pref("media.peerconnection.ice.no_host", true); // Don't reveal internal IP
user_pref("media.peerconnection.ice.obfuscate_host_addresses", true); // Replaces local IP addresses with mDNS hostnames to reduce fingerprinting.
user_pref("media.peerconnection.ice.proxy_only", true); // Enable only via proxy

// SSDP MEDIA CASTING X
user_pref("browser.casting.enabled", false);

// FIREFOX VIEW X
user_pref("browser.tabs.firefox-view", false);

// AI X
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ai.control.linkPreviewKeyPoints", "blocked");
user_pref("browser.ai.control.pdfjsAltText", "blocked");
user_pref("browser.ai.control.sidebarChatbot", "blocked");
user_pref("browser.ai.control.smartTabGroups", "blocked");
user_pref("browser.ai.control.smartWindow", "blocked");
user_pref("browser.ai.control.translations", "blocked");
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.linkPreview.longPress", false);
user_pref("browser.smartwindow.memories.generateFromConversation", false);
user_pref("browser.smartwindow.memories.generateFromHistory", false);

// SOCIAL X
user_pref("social.enabled", false);
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);

// 4. MY SETTINGS X
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.tabs.dragDrop.createGroup.enabled", false);
user_pref("browser.tabs.groups.enabled", false);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);
user_pref("browser.tabs.selectOwnerOnClose", false);
user_pref("browser.toolbars.bookmarks.visibility", "always");
user_pref("browser.translations.enable", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("mousewheel.min_line_scroll_amount", 50);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.local-network", 2);
user_pref("permissions.default.loopback-network", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);
user_pref("sidebar.new-sidebar.has-used", true);
user_pref("sidebar.old-sidebar.has-used", true);
user_pref("sidebar.visibility", "hide-sidebar");
user_pref("signon.autofillForms", false);
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.rememberSignons", false);
