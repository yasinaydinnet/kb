/* not tested */
const prefs_speedup = false;
const prefs_empty_homepage = false;
const prefs_disable_web_push_notifs = false;
const prefs_harden_security = true;

if (prefs_harden_security) {
  // Avoid logjam attack
  user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
  user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
  user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
  user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
  user_pref("security.ssl3.rsa_des_ede3_sha", false);

  // Crypto hardening
  // https://gist.github.com/haasn/69e19fc2fe0e25f3cff5
  //General settings
  user_pref("security.tls.unrestricted_rc4_fallback", false);
  user_pref("security.tls.insecure_fallback_hosts.use_static_list", false);
  user_pref("security.tls.version.min", 1);
  user_pref("security.ssl.require_safe_negotiation", false);
  user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
  user_pref("security.ssl3.rsa_seed_sha", true);
}
if (prefs_empty_homepage) {
  user_pref("startup.homepage_welcome_url", "");
  user_pref("browser.startup.homepage_override.mstone", "ignore");
}

if (prefs_disable_web_push_notifs) {
  // Disable push notifications 
  user_pref("dom.webnotifications.enabled",false); 
  user_pref("dom.webnotifications.serviceworker.enabled",false); 
  user_pref("dom.push.enabled",false); 
}

if (false) {
  // browser.tabs.selectOwnerOnClose
  // my tab usage closing problem

  // toolkit.telemetry.prompted 	Number Value 2
  // user_pref("owser.startup.homepage_override.mstone", ""); // “What's new” page - value should be ignore
  user_pref("app.shield.optoutstudies.enabled", false); // Studies/experiments
  user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // Crash reporting
  user_pref("browser.discovery.enabled", false); // Experiments
  user_pref("browser.search.geoip.url", ""); // Geolocation for default search engine
  user_pref("browser.search.suggest.enabled", false); // Firefox Suggest
  user_pref("browser.tabs.crashReporting.sendReport", false); // Crash reporting
  user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
  user_pref("browser.urlbar.quicksuggest.enabled", false);
  user_pref("browser.urlbar.suggest.quicksuggest", false);
  user_pref("browser.urlbar.suggest.searches", false); // Firefox Suggest
  user_pref("geo.enabled", false); // Disable geolocation:
  user_pref("geo.provider.network.url", ""); // Disable Mozilla Location Service:
  user_pref("messaging-system.rsexperimentloader.enabled", false); // Experiments
  user_pref("network.captive-portal-service.enabled", false); // Disable captive portal detection:
  user_pref("network.connectivity-service.enabled", false); // Disable connectivity checks:
  user_pref("network.dns.disablePrefetch", true); // Disable speculative connections: DNS prefetching
  user_pref("network.http.speculative-parallel-limit", 0)// Disable speculative connections:
  user_pref("network.predictor.enabled", false); // Disable speculative connections:
  user_pref("network.prefetch-next", false); // Disable speculative connections, Link prefetching

  // Privacy & Freedom Issues
  // https://webdevelopmentaid.wordpress.com/2013/10/21/customize-privacy-settings-in-mozilla-firefox-part-1-aboutconfig/
  // https://panopticlick.eff.org
  // http://ip-check.info
  // http://browserspy.dk
  // https://wiki.mozilla.org/Fingerprinting
  // http://www.browserleaks.com
  // http://fingerprint.pet-portal.eu
  user_pref("browser.translation.engine", "");
  user_pref("media.gmp-provider.enabled", false);
  user_pref("browser.urlbar.update2.engineAliasRefresh", true);
  user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
  user_pref("browser.newtabpage.activity-stream.showSponsored", false);
  user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
  user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
  user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
  user_pref("browser.urlbar.suggest.engines", false);
  user_pref("browser.urlbar.suggest.topsites", false);
  user_pref("security.OCSP.enabled", 0);
  user_pref("security.OCSP.require", false);
  user_pref("browser.discovery.containers.enabled", false);
  user_pref("browser.discovery.enabled", false);
  user_pref("browser.discovery.sites", "http://127.0.0.1/");
  user_pref("services.sync.prefs.sync.browser.startup.homepage", false);
  user_pref("browser.contentblocking.report.monitor.home_page_url", "http://127.0.0.1/");
  user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
  user_pref("social.enabled", false);
  user_pref("social.remote-install.enabled", false);
  user_pref("healthreport.uploadEnabled", false);
  user_pref("social.toast-notifications.enabled", false);

  user_pref("dom.event.clipboardevents.enabled",false);
  user_pref("network.user_prefetch-next", false);
  user_pref("network.dns.disablePrefetch", true);
  user_pref("network.http.sendSecureXSiteReferrer", false);
  user_pref("toolkit.telemetry.enabled", false);
  user_pref("toolkit.telemetry.server", "");
  user_pref("experiments.manifest.uri", ""); 
  user_pref("toolkit.telemetry.unified", false);

  // No search suggestions
  user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
  user_pref("browser.search.suggest.enabled", false);

  // Do not tell what plugins do we have enabled: https://mail.mozilla.org/pipermail/firefox-dev/2013-November/001186.html
  user_pref("plugins.enumerable_names", "");
  user_pref("plugin.state.flash", 0);

  // Mobile
  user_pref("privacy.announcements.enabled", false);
  user_pref("browser.snippets.enabled", false);
  user_pref("browser.snippets.syncPromo.enabled", false);
  user_pref("identity.mobilepromo.android", "http://127.0.0.1/");
  user_pref("browser.snippets.geoUrl", "http://127.0.0.1/");
  user_pref("browser.snippets.updateUrl", "http://127.0.0.1/");
  user_pref("browser.snippets.statsUrl", "http://127.0.0.1/");
  user_pref("datareporting.policy.firstRunTime", 0);
  user_pref("datareporting.policy.dataSubmissionPolicyVersion", 2);
  user_pref("browser.webapps.checkForUpdates", 0);
  user_pref("browser.webapps.updateCheckUrl", "http://127.0.0.1/");
  user_pref("app.faqURL", "http://127.0.0.1/");

  // Don't report TLS errors to Mozilla
  user_pref("security.ssl.errorReporting.enabled", false);

  // In <about:user_preferences>, hide "More from Mozilla"
  // (renamed to "More from GNU" by the global renaming)
  user_pref("browser.user_preferences.moreFromMozilla", false);

  //Disable Firefox Hello
  user_pref("loop.enabled",false);

  // Use old style user_preferences, that allow javascript to be disabled
  user_pref("browser.user_preferences.inContent",false);

  // Quality of life stuff
  user_pref("browser.download.useDownloadDir", false);
  user_pref("browser.aboutConfig.showWarning", false);
  user_pref("browser.toolbars.bookmarks.visibility", "never");
  user_pref("browser.tabs.firefox-view", false);
  user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

  // Disable use of WiFi region/location information
  user_pref("browser.region.network.scan", false);
  user_pref("browser.region.network.url", "");

  // New tab settings
  user_pref("browser.newtabpage.activity-stream.showTopSites",false);
  user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",false);
  user_pref("browser.newtabpage.activity-stream.feeds.snippets",false);
  user_pref("browser.newtabpage.activity-stream.disableSnippets", true);
  user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
  // Don't download ads for the newtab page
  user_pref("browser.newtabpage.directory.source", "");
  user_pref("browser.newtabpage.directory.ping", "");
  user_pref("browser.newtabpage.introShown", true);
  user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

  // Disable geolocation
  user_pref("geo.enabled", false);
  user_pref("geo.wifi.uri", "");
  user_pref("browser.search.geoip.url", "");
  user_pref("browser.search.geoSpecificDefaults", false);
  user_pref("browser.search.geoSpecificDefaults.url", "");
  user_pref("browser.search.modernConfig", false);

  // Do not show unicode urls https://www.xudongz.com/blog/2017/idn-phishing/
  user_pref("network.IDN_show_punycode", true);

  // Disable More from Mozilla
  user_pref("browser.preferences.moreFromMozilla", false);
}

if (prefs_speedup) {
  user_pref("network.http.pipelining", true);
  user_pref("network.http.proxy.pipelining", true);
  user_pref("network.http.pipelining.maxrequests", 10);
  user_pref("nglayout.initialpaint.delay", 0);
}

const privacy_block_crashreporting_breakpad = true;
const privacy_block_datareporting = true;
const privacy_block_extension_recommendations = true;
const privacy_block_firefoxhome = true;
const privacy_block_normady = true;
const privacy_block_pocket = true;
const privacy_block_telemetry = true;
const privacy_block_webrtc = true;
const privacy_block_ssdp_casting = true;
const privacy_block_selfsupport = true;
const privacy_block_vpn_mobile_promos = true;

if (privacy_block_vpn_mobile_promos) {
  user_pref("browser.contentblocking.report.hide_vpn_banner", true);
  user_pref("browser.contentblocking.report.mobile-ios.url", "");
  user_pref("browser.contentblocking.report.mobile-android.url", "");
  user_pref("browser.contentblocking.report.show_mobile_app", false);
  user_pref("browser.contentblocking.report.vpn.enabled", false);
  user_pref("browser.contentblocking.report.vpn.url", "");
  user_pref("browser.contentblocking.report.vpn-promo.url", "");
  user_pref("browser.contentblocking.report.vpn-android.url", "");
  user_pref("browser.contentblocking.report.vpn-ios.url", "");
  user_pref("browser.privatebrowsing.promoEnabled", false);
}

if (privacy_block_selfsupport) {
  user_pref("browser.selfsupport.url", "");
  user_pref("browser.selfsupport.enabled", false);
  user_pref("browser.selfsupport.urlbar-ping.enabled", false);
}

if (privacy_block_ssdp_casting) {
  // Disable SSDP
  user_pref("browser.casting.enabled", false);
}

if (privacy_block_crashreporting_breakpad) {
  user_pref("breakpad.reportURL", ""); // Crash reporting
}

if (privacy_block_extension_recommendations) {
  // Disable recommended extensions
  user_pref("browser.newtabpage.activity-stream.asrouter.useruser_prefs.cfr", false);
  user_pref("extensions.htmlaboutaddons.discover.enabled", false);
  user_pref("extensions.getAddons.cache.enabled", false); // Add-on metadata updating-recommendations
  user_pref("extensions.getAddons.showPane", false); // Disable extension recommendations:
  user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // Disable extension recommendations:
}

if (privacy_block_telemetry) {
  user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
  user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
  user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled", false);
  user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.redactNewtabPing.enabled", false);
  user_pref("browser.newtabpage.activity-stream.telemetry", false);
  user_pref("browser.ping-centre.telemetry", false);
  user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
  user_pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false);
  user_pref("devtools.onboarding.telemetry.logged", false);
  user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
  user_pref("nimbus.telemetry.targetingContextEnabled", false);
  user_pref("permissions.desktop-notification.telemetry.siteCategories", "");
  user_pref("security.unexpected_system_load_telemetry_enabled", false);

  user_pref("toolkit.crashreporter.enabled", false); // Crash reporting
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
  user_pref("toolkit.telemetry.rejected", true);
  user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
  user_pref("toolkit.telemetry.server", "");
  user_pref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
  user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
  user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
  user_pref("toolkit.telemetry.unified", false);
  user_pref("toolkit.telemetry.unifiedIsOptIn", false);
  user_pref("toolkit.telemetry.updatePing.enabled", false);
}

if (privacy_block_datareporting) {
  user_pref("datareporting.healthreport.about.reportUrl", "http://127.0.0.1/");
  user_pref("datareporting.healthreport.documentServerURI", "http://127.0.0.1/");
  user_pref("datareporting.healthreport.service.enabled", false);
  user_pref("datareporting.healthreport.uploadEnabled", false);
  user_pref("datareporting.policy.dataSubmissionEnabled", false);
  user_pref("datareporting.policy.dataSubmissionPolicyAccepted", false);
  user_pref("datareporting.sessions.current.clean", true); // !!! TODO UNTESTED
}

if (privacy_block_firefoxhome) {
  // Disable home snippets
  user_pref("browser.aboutHomeSnippets.updateUrl", "data:text/html");

  user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", false); // Experiments
  user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // New tab recommendations
  user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // New tab recommendations
  user_pref("browser.newtabpage.activity-stream.showSponsored", false); // New tab recommendations
  user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // New tab recommendations
}

if (privacy_block_normady) {
  user_pref("app.normandy.api_url", ""); // Studies/experiments, diagnostics
  user_pref("app.normandy.enabled", false); // Studies/experiments, diagnostics
}

if (privacy_block_pocket) {
  user_pref("browser.pocket.enabled", false);
  user_pref("extensions.pocket.api", "");
  user_pref("extensions.pocket.enabled", false);
  user_pref("extensions.pocket.oAuthConsumerKey", "");
  user_pref("extensions.pocket.site", "");
}

if (privacy_block_webrtc) {
  user_pref("media.peerconnection.enabled", false); // Disables webrtc, inclding zoom,teams,discord,GMeet
  user_pref("media.peerconnection.ice.no_host", true); // Don't reveal your internal IP when WebRTC is enabled
  user_pref("media.peerconnection.ice.default_address_only", true); // Prevent webrtc IP exposure
  user_pref("media.peerconnection.ice.obfuscate_host_addresses", true); // Replaces local IP addresses with mDNS hostnames to reduce fingerprinting.
  user_pref("media.peerconnection.ice.proxy_only", true); // Webrtc allowed only through proxy if any
}
