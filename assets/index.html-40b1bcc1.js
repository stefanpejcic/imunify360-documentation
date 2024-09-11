import{_ as r,V as l,n as d,p as u,q as t,J as i,C as a,A as s,a5 as o}from"./framework-528c2e2a.js";const c="/images/PleskAVScanAll.png",h="/images/PleskAVActions.png",m="/images/PleskAVActionStatus.png",p="/images/PleskAVSettings.png",f="/images/PleskAVStatusGreen.png",g="/images/PleskAVStatusDifferent.png",v="/images/PleskAVScanningReport.png",b="/images/PleskAVForUser.png",w="/images/PleskAVForUserDomain.png",y="/images/PleskAVQueued.png",k="/images/PleskAVStatusOK.png",x="/images/PleskAVViewReport.png",A="/images/PleskAVDomainTab.png",I="/images/PleskAVSettingsTab.png",P="/images/PleskAVToolsAndSettings.png",S="/images/PleskAVRetrieveKeys.png",V="/images/PleskAVKeyUpdateStatus.png",_="/images/PleskAVAboutTab.png",T="/images/PleskAVReportGreen.png",C="/images/PleskAVReportRed.png",q="/images/PleskAVUnduBtn.png",M="/images/PleskAVMalwareReport.png",R="/images/PleskAVSettings1.png",W="/images/PleskAVAutoUpdate.png",E="/images/PleskAVUpdateDatabases.png",j="/images/PleskAVScan.png",D="/images/PleskAVChangeMaxWorkingThreads.png",U="/images/PleskAVRemove.png",B="/images/PleskAVConfig.png",F={};function Q(z,e){const n=l("RouterLink");return d(),u("div",null,[e[30]||(e[30]=t("h1",{id:"imunifyav-for-plesk",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#imunifyav-for-plesk","aria-hidden":"true"},"#"),i(" ImunifyAV(+) for Plesk")],-1)),e[31]||(e[31]=t("p",null,"ImunifyAV for Plesk is an intelligent antivirus and security monitoring tool designed to work with Plesk CMS. It performs one-click automatic malware cleanup, domain reputation monitoring as well as blacklist status check and is available as a Free and a Premium (ImunifyAV+) version.",-1)),t("ul",null,[t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#quick-introduction-for-server-admins"},{default:s(()=>e[0]||(e[0]=[i("Quick introduction for server admins")])),_:1}),t("ul",null,[t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#premium-imunifyav-version-and-automatic-malware-cleanup"},{default:s(()=>e[1]||(e[1]=[i("Premium (ImunifyAV+) version and automatic malware cleanup")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#video"},{default:s(()=>e[2]||(e[2]=[i("Video")])),_:1})])])]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#quick-introduction-for-users"},{default:s(()=>e[3]||(e[3]=[i("Quick introduction for users")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#explanations"},{default:s(()=>e[4]||(e[4]=[i("Explanations")])),_:1}),t("ul",null,[t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#explaining-the-domain-tab"},{default:s(()=>e[5]||(e[5]=[i("Explaining the Domain tab")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#explaining-the-settings-tab"},{default:s(()=>e[6]||(e[6]=[i("Explaining the Settings tab")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#how-to-activate-a-license-key-for-paid-versions"},{default:s(()=>e[7]||(e[7]=[i("How to activate a license key (for paid versions)")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#how-the-antivirus-removes-malware"},{default:s(()=>e[8]||(e[8]=[i("How the Antivirus removes malware")])),_:1})])])]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#faq"},{default:s(()=>e[9]||(e[9]=[i("FAQ")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#troubleshooting"},{default:s(()=>e[10]||(e[10]=[i("Troubleshooting")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#removing-imunifyav-for-plesk"},{default:s(()=>e[11]||(e[11]=[i("Removing ImunifyAV for Plesk")])),_:1})]),t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#extension-diagnostics"},{default:s(()=>e[12]||(e[12]=[i("Extension diagnostics")])),_:1}),t("ul",null,[t("li",null,[a(n,{to:"/imunifyav/imunifyav_for_plesk/#how-to-collect-plesk-debug-log"},{default:s(()=>e[13]||(e[13]=[i("How to collect Plesk debug log")])),_:1})])])])]),e[32]||(e[32]=o('<h2 id="quick-introduction-for-server-admins" tabindex="-1"><a class="header-anchor" href="#quick-introduction-for-server-admins" aria-hidden="true">#</a> Quick introduction for server admins</h2><p>In order to scan your websites for malware using the ImunifyAV all you need is to install the extension from Plesk Marketplace, open the <em>Domains</em> tab and click the <em>Scan All</em>.</p><p><img src="'+c+'" alt=""></p><p>It will queue tasks to scan a complete list of websites for viruses, backdoors, web-shells, hacker’s scripts, phishing pages and other malware and run the process of websites scanning depending on specified number of concurrent scanning threads (1, 2 or 4) in the <em>Settings</em> tab. Also it will check each domain for blacklist status in search engines and antivirus services.</p><p>Another option is to click the <em>Scan</em> button next to the particular website to check the single website for malware and blacklist status.</p><p><img src="'+h+'" alt=""></p><p>In order to prevent server resources overload during scanning a set of websites the antivirus extension queues the scanning tasks and runs them with respect to the configured resources limitations (<em>Max working threads</em> in the <em>Settings</em> tab).</p><p><img src="'+m+'" alt=""></p><p>Take into consideration that default settings may not be optimal in terms of scanning speed so we would recommend to check the <em>Settings</em> tab before start and adjust the following parameters manually to set optimal values for better performance (or less server load).</p><p><img src="'+p+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>The <em>Max working threads</em> is limited by a half of CPU core number on server. So the 1 or 2 CPU cores gives one working thread as maximum.</p></div><p>When the scanning process is finished, check infection statuses of your websites. If everything in the report is green, congrats! It usually means your websites are neither compromised nor infected and blacklisted.</p><p><img src="'+f+'" alt=""></p><p>If you’ve noticed some “red alerts” next to the domain most likely it means the particular website is compromised and infected. Click the <em>View Report</em> button and see the details.</p><p>If you see some “orange alerts” next to the domain and <em>Domain blacklisted</em> notice it means the domain is blacklisted in either search engines or antivirus services. Click the <em>View Report</em> button to see blacklist status details.</p><p><img src="'+g+'" alt=""></p><p>The detailed report shows you the list of detected malware and domain blacklist status.</p><p><img src="'+v+'" alt=""></p><h3 id="premium-imunifyav-version-and-automatic-malware-cleanup" tabindex="-1"><a class="header-anchor" href="#premium-imunifyav-version-and-automatic-malware-cleanup" aria-hidden="true">#</a> Premium (ImunifyAV+) version and automatic malware cleanup</h3><p>In the Premium version of the Antivirus you can clean the malware automatically using the <em>Clean Malware</em> button.</p><h3 id="video" tabindex="-1"><a class="header-anchor" href="#video" aria-hidden="true">#</a> Video</h3><p>Watch the quick demo on how it works and then try it on your own.</p>',22)),e[33]||(e[33]=t("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/esQRNFLB-fQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)),e[34]||(e[34]=o('<h2 id="quick-introduction-for-users" tabindex="-1"><a class="header-anchor" href="#quick-introduction-for-users" aria-hidden="true">#</a> Quick introduction for users</h2><p>In order to scan your websites for malware using the ImunifyAV all you need is to click the <em>ImunifyAV</em> icon under the particular domain and then click the <em>Scan</em> button.</p><p><img src="'+b+'" alt=""></p><p><img src="'+w+'" alt=""></p><p>When you click the <em>Scan</em> button the Antivirus queues a scanning task and runs it when server resources are available (it may start immediately or with some delay). The resources are configured by server admin so there might be a queue for the scanning process. The queue lets all users checking their websites on demand without server overload. Thus if you see <em>Queued</em> in the status column – everything is OK, scanning will start as soon as the resources are available or another scanning is finished.</p><p><img src="'+y+'" alt=""></p><p>Upon completion check the status. If the report shows a green icon, congrats, it usually means your website is not compromised and clean.</p><p><img src="'+k+'" alt=""></p><p>If you’ve noticed some “red alerts” next to the domain most likely it means the particular website is compromised and infected. Click the <em>View Report</em> button and see the details.</p><p>If you see some “orange alerts” next to the domain and <em>Domain blacklisted</em> notice it means the domain is blacklisted in either search engines or antivirus services. Click the <em>View Report</em> button to see blacklist status details.</p><p><img src="'+x+'" alt=""></p><p>Watch the quick demo on how it works.</p>',12)),e[35]||(e[35]=t("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kfJeerML_ng?rel=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)),e[36]||(e[36]=o('<h2 id="explanations" tabindex="-1"><a class="header-anchor" href="#explanations" aria-hidden="true">#</a> Explanations</h2><h3 id="explaining-the-domain-tab" tabindex="-1"><a class="header-anchor" href="#explaining-the-domain-tab" aria-hidden="true">#</a> Explaining the <em>Domain</em> tab</h3><p>The screen below explains controls on the <em>Domain</em> tab.</p><p><img src="'+A+'" alt=""></p><h3 id="explaining-the-settings-tab" tabindex="-1"><a class="header-anchor" href="#explaining-the-settings-tab" aria-hidden="true">#</a> Explaining the <em>Settings</em> tab</h3><p><img src="'+I+'" alt=""></p><ul><li><strong>Quick Scan mode</strong> It configures antivirus to check critical files only: ph*, js, htm*, .htaccess, txt, tpl and some others. It will not scan media files (.png, .jpg, …), documents (.docx, .xlsx, .pdf, ..), and some other types. This helps to reduce server load and increase scanning speed dramatically.</li><li><strong>Skip images and other media files</strong> It configures antivirus to check all files besides media files and documents. This also helps to reduce server load and increase scanning speed dramatically. The difference between previous option is that enabled <em>Skip images…</em> makes antivirus scan unknown extensions, but <em>Quick scan</em> will skip them.</li><li><strong>Optimize scanning by speed</strong> It configures antivirus to turn on an “intelligent mode” while scanning cache folders. It will scan files from cache folders selectively which sometimes dramatically speed up the scanning process with the same level of malware detection.</li><li><strong>Max working threads</strong> It specifies the amount of concurrent scanning threads, i.e how many websites will be scanned or cleaned concurrently. By default it is limited by a half of CPU core number. So if your server has 8 cores, the antivirus allows you to configure 4 concurrent threads as maximum. But you can set it to 1 or 2 just to reduce server load during the scanning process.</li><li><strong>Scheduled rescanning</strong> It configures the interval of automatic website rescanning: once a day, once a week, once a month or never. We recommend to set it to “Daily” to be notified ASAP about any security issues. This option is available in the Premium version of antivirus.</li><li><strong>Start automatic scanning at</strong> It configures the exact time of automatic website scanning.</li><li><strong>Notify on website infection via email</strong> It configures antivirus to send out an email notification after scheduled scanning if websites are infected or blacklisted.This option is available in the Premium version of antivirus.</li><li><strong>Max allocated memory…</strong> It configures how much memory is allowed for a single scanning process. If some websites fail to scan try to increase this value. It is limited by 1GB.</li><li><strong>Number of days to keep…</strong> It configures antivirus to keep backup versions of cleaned files. During this period you can restore these files back using “Undo” button.</li><li><strong>Trim malicious files instead of deleting it</strong> It configures antivirus do not delete files when malware is detected but trim it instead. So the file will be 0 length but kept in the file system. If you are 100% sure that all detected malicious files are not included into another files or database so you can uncheck this option and run <em>Cleanup</em>.</li><li><strong>Update antivirus database automatically</strong> It configures antivirus to update malware database automatically every day. We recommend to enable this option.</li><li><strong>Allow users to use files ignore list</strong> It allows common users to add files that should be omitted by the scanner to the Ignore list.</li><li><strong>Enable antivirus warning banners</strong> It configures antivirus to show warnings.</li><li><strong>Enable ImunifyAV menu shortcut</strong></li><li><strong>Scanning timeout</strong> It configures antivirus to update/increase scan time. Sometimes there are situations when the site is too large or the server is loaded and the scanning process can be terminated due to timeout. It means that the scanner did not have time to complete the scan.</li><li><strong>Log level</strong></li></ul><h3 id="how-to-activate-a-license-key-for-paid-versions" tabindex="-1"><a class="header-anchor" href="#how-to-activate-a-license-key-for-paid-versions" aria-hidden="true">#</a> How to activate a license key (for paid versions)</h3><p>Once you have paid for the Premium version of antivirus in <a href="https://ext.plesk.com/packages/b71916cf-614e-4b11-9644-a5fe82060aaf-revisium-antivirus" target="_blank" rel="noopener noreferrer">Plesk Extension</a> directory you receive a confirmation mail with details and activation link. If you have already followed those steps and still have not got the Premium version try manual activation:</p><ol><li><p>Login in as Administrator to the Plesk panel. Go to <em>Tools &amp; Settings -&gt; License Management</em></p><p><img src="'+P+'" alt=""></p></li><li><p>Click the <em>Retrieve Keys</em></p><p><img src="'+S+'" alt=""></p></li><li><p>You will see the screen like below</p><p><img src="'+V+'" alt=""></p></li><li><p>Ensure that you have a license for the <code>ext-revisium-antivirus</code> under the <em>Additional License Keys</em> tab</p></li><li><p>Congrats! Now you are ready to experience Premium version of the ImunifyAV. Check the <em>About</em> tab to ensure that the Premium version is enabled.</p><p><img src="'+_+'" alt=""></p></li></ol><p>In case of any issues with purchasing or activating extension contact Support at <a href="https://cloudlinux.zendesk.com/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">https://cloudlinux.zendesk.com/hc/en-us/requests/new</a>.</p><h3 id="how-the-antivirus-removes-malware" tabindex="-1"><a class="header-anchor" href="#how-the-antivirus-removes-malware" aria-hidden="true">#</a> How the Antivirus removes malware</h3><p>ImunifyAV works as a regular antivirus: it looks for the malicious piece of code in the files of a website while scanning and shows infected files in the report when the scanning finishes. If the user selects to cleanup malware, then the antivirus either removes a piece of malicious injection in the file or removes the entire file depending on the detected threat.</p><p>If the entire file is a web-shell or doorway or some other type of malicious file, then antivirus removes it entirely. If there’s only a small injection at the beginning or at the end, or somewhere in the middle of the file, the exact malicious piece of code will be removed, but the rest content is left unchanged. Generally, the antivirus removes the malware and keeps a website up and running.</p><p>There’s an option in the settings which defines whether the file is to be removed or just truncated (content of the file is completely removed but the file itself is left on the file system empty and has zero file length).</p><p>The truncation is safer than removal because if the file is included in a database template or some other system file or a config file then the website might become broken after a cleanup. Therefore the antivirus uses a safer cleanup by default to keep the website working properly all the time. But one can disable this option in the Settings so the antivirus will remove the file completely in case the entire file is malware.</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2><h3 id="does-imunifyav-protect-websites" tabindex="-1"><a class="header-anchor" href="#does-imunifyav-protect-websites" aria-hidden="true">#</a> Does ImunifyAV protect websites?</h3><p>ImunifyAV is a comprehensive malware detection and removal tool. Website protection is not a part of the Antivirus.</p><p>ImunifyAV can effectively detect any type of website malware and remove it automatically using “one-click” cleanup, but it does not provide a proactive protection from future hacks and web-attacks. Therefore we strongly recommend to “harden” your websites after malware removal:</p><ul><li>Update CMS version and update every plugin</li><li>Enable two-factor authentication for web hosting panel and CMS admin panel</li><li>Setup a Web Application Firewall or corresponding plugin for your CMS</li><li>Set new strong and random passwords for every account (FTP, SSH, ISP, Admin panel)</li><li>Isolate websites from each other under single hosting account or place them on different accounts to prevent cross-contamination</li><li>For VPS admins: update OS and service components of your server, disable any unused services and components</li></ul><h3 id="my-websites-are-clean-what-to-do-next" tabindex="-1"><a class="header-anchor" href="#my-websites-are-clean-what-to-do-next" aria-hidden="true">#</a> My websites are clean, what to do next?</h3><p>It is good to hear that everything in the report has “green” status.</p><p><img src="'+T+'" alt=""></p><p>Just follow the recommendations on websites security to keep them safe and secured. And do not forget to re-scan your websites on a regular basis.</p><p>If you are server admin we recommend to schedule re-scanning in the <em>Settings</em> tab so the Antivirus will be checking websites for malware automatically with selected interval. This option is available in the Premium version of the extension.</p><h3 id="my-websites-are-infected-what-to-do-next" tabindex="-1"><a class="header-anchor" href="#my-websites-are-infected-what-to-do-next" aria-hidden="true">#</a> My websites are infected, what to do next?</h3><p>First of all – keep calm and check the detailed report.</p><p>Click the <em>View Report</em> button next to the “red” mark and check the list of detected malware.</p><p><img src="'+C+'" alt=""></p><p>Depending on your expertise and experience in web development you may resolve it in different ways.</p><p>Check the options below.</p><ul><li><p>Option 1: In the Premium version of the ImunifyAV you can click the <em>Clean Malware</em> button and it will remove the malware automatically. The Antivirus will keep your website up and running after the malware cleanup. It keeps original files for configured period of time (7 days by default) in its backup folder so you can restore them via the <em>Undo</em> button next to the website.</p><p><img src="'+q+'" alt=""></p><p>The cleanup report looks like this:</p><p><img src="'+M+'" alt=""></p><p>So try automatic one-button malware cleanup in the Premium version of the ImunifyAV.</p></li><li><p>Option 2: If you are an experienced webmaster and using the Free version of the Antivirus you can manually check the files one-by-one in the Plesk File Explorer or in your favourite FTP software to be sure that the listed files are not legitimate and contain the viruses. Just remove the malicious injections or entire file if it’s malicious. We recommend to create a backup of the entire website before any changes just to be sure that you could restore any changed file when needed.</p></li></ul><h3 id="what-to-do-when-antivirus-has-detected-malware-in-the-legitimate-file" tabindex="-1"><a class="header-anchor" href="#what-to-do-when-antivirus-has-detected-malware-in-the-legitimate-file" aria-hidden="true">#</a> What to do when antivirus has detected malware in the legitimate file?</h3><p>There&#39;s a small chance that you may face so-called “false-positives” while scanning the websites for malware i.e. when antivirus software marks a legitimate file as malicious because the file may contain some specific piece of code previously noticed in malware.</p><p>Just send us the file and we will include it into the exceptions list of the Antivirus so it will never show up in the report after the antivirus update.</p><h3 id="how-to-speed-up-the-antivirus" tabindex="-1"><a class="header-anchor" href="#how-to-speed-up-the-antivirus" aria-hidden="true">#</a> How to speed up the Antivirus?</h3><p>The Antivirus scanning performance mostly depends on server performance. But the default configuration of the Antivirus may not be optimal so we would recommend server admins to adjust the default settings for better performance. Just open the <em>Settings</em> tab and check the current parameters.</p><p><img src="'+R+'" alt=""></p><ul><li><strong>Quick Scan mode</strong> – if checked, the antivirus scans critical files only (php, js, html, htaccess, txt and some others). If you need to scan all files, uncheck the option.</li><li><strong>Skip images and other media</strong> – if checked, it will skip jpg, png, gif, avi, mpg, mov, bmp, tiff, docx, xlsx, pptx, pdf, and some others. if you need to scan all files, uncheck the option.</li><li><strong>Optimize by speed</strong> – if checked, the antivirus will do intelligent scanning of cache folders of CMS to speed up overall process. Uncheck the option for careful scanning.</li><li><strong>Max working threads</strong> – how many websites are to be scanned simultaneously.</li></ul><p>Strong recommendation for server admins managing servers with 4 or more number of CPU cores or lots of websites installed to change the <em>Max working threads</em> option.</p><p>As the opposite, if you feel that the Antivirus consumes lots of server resources just decrease the <em>Max working threads</em> parameters and the <em>Max allocated memory…</em> parameter.</p><h3 id="how-to-update-the-antivirus" tabindex="-1"><a class="header-anchor" href="#how-to-update-the-antivirus" aria-hidden="true">#</a> How to update the Antivirus?</h3><p>In the <em>Settings</em> tab you can enable the auto-update option of the Antivirus databases.</p><p><img src="'+W+'" alt=""></p><p>Another way for quick update of the ImunifyAV(+) databases is to open the <em>About</em> tab and click the <em>Update Databases</em>.</p><p><img src="'+E+'" alt=""></p><p>Also we recommend for server admins checking the ImunifyAV extension for a newer version just to keep the core files up-to-date.</p><h3 id="what-if-the-antivirus-has-not-detected-some-malicious-files" tabindex="-1"><a class="header-anchor" href="#what-if-the-antivirus-has-not-detected-some-malicious-files" aria-hidden="true">#</a> What if the Antivirus has not detected some malicious files?</h3><p>We do our best to keep the Antivirus database frequently updated and complete in order to detect as many threats as possible. But still there might be a small chance that some newly released malicious files are not yet in the database. Or there might be also another drawbacks:</p><ol><li>Check if you’re using the latest version of the ImunifyAV (check for the extension updates)</li><li>Check if you’re using the latest version of the Antivirus database (check it in the <em>About</em> tab)</li><li>Check current settings in the <em>Settings</em> tab. By default the Antivirus scans for critical extensions only (php, js, html, and some others). It provides a better performance while scanning everything besides the media files and documents. But the viruses may be located in those files either. So you may want to try the Antivirus in the <em>full scan</em> mode by switching the scanning option.</li><li>If you try everything above but the Antivirus still does not see the infected file, please, send us the file. We will analyse it and add to the Antivirus database for the next update.</li></ol><p>If you found a malicious file which has not been detected by antivirus, please send it to us via <a href="https://cloudlinux.zendesk.com/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">https://cloudlinux.zendesk.com/hc/en-us/requests/new</a>.</p><p>Thanks!</p><h3 id="where-can-i-find-the-imunifyav-log-file-on-plesk" tabindex="-1"><a class="header-anchor" href="#where-can-i-find-the-imunifyav-log-file-on-plesk" aria-hidden="true">#</a> Where can I find the ImunifyAV log file on Plesk?</h3><p>You can find the ImunifyAV log file here: <code>/usr/local/psa/var/modules/revisium-antivirus/revisium-antivirus-local.log</code></p><h3 id="dashboard-says-scan-failed-with-no-related-error-message" tabindex="-1"><a class="header-anchor" href="#dashboard-says-scan-failed-with-no-related-error-message" aria-hidden="true">#</a> Dashboard says &quot;scan failed&quot; with no related error message</h3><p>Sometimes you can face the issue that during scanning the scan process failed on one domain. And Dashboard says &quot;scan failed&quot; without an error message.</p><p>In most cases, the site is large and the scan was terminated due to timeout.</p><p>You can try to check records in the <code>/usr/local/psa/admin/logs/panel.log</code> and in the <code>/usr/local/psa/var/modules/revisium-antivirus/revisium-antivirus-local.log</code> log files.</p><p>Please consider increasing the <code>Scanning timeout</code> value in the ImunifyAV settings and re-run the scan engine.</p><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2><h3 id="i-payed-for-the-extension-but-it-is-not-yet-premium" tabindex="-1"><a class="header-anchor" href="#i-payed-for-the-extension-but-it-is-not-yet-premium" aria-hidden="true">#</a> I payed for the extension, but it is not yet Premium</h3>',62)),t("p",null,[e[15]||(e[15]=i("If you purchased the license for the Premium version and cannot activate the key, check ")),a(n,{to:"/imunifyav_for_plesk/#how-to-activate-a-license-key-for-paid-versions"},{default:s(()=>e[14]||(e[14]=[i("this section")])),_:1}),e[16]||(e[16]=i("."))]),e[37]||(e[37]=o('<h3 id="i-click-the-scan-button-but-it-doesn-t-start-scanning" tabindex="-1"><a class="header-anchor" href="#i-click-the-scan-button-but-it-doesn-t-start-scanning" aria-hidden="true">#</a> I click the <em>Scan</em> button, but it doesn’t start scanning</h3><p>When you click the <em>Scan</em> button it doesn’t start immediately, it queues the task to scan the website. You should see the <strong>Queued</strong> status in the line. Once the server resources are available it starts scanning and displaying a progress.</p><p><img src="'+j+'" alt=""></p><h3 id="the-antivirus-doesn-t-cleanup-some-of-malicious-files" tabindex="-1"><a class="header-anchor" href="#the-antivirus-doesn-t-cleanup-some-of-malicious-files" aria-hidden="true">#</a> The Antivirus doesn’t cleanup some of malicious files</h3><p>Check the Malware Removal report to see the details. There might be the following reasons:</p><ul><li>Malicious file is write-protected or a folder of the file is write-protected so the antivirus cannot write or delete it. Check it with the server administrator.</li><li>Malicious file was missed or not readable at the time of cleanup.</li><li>Malicious file is not in the cleanup database of the Antivirus. In this case you can see the <strong>Manual cleanup required</strong> status next to the file. Please, send it to us and we will check and add it for automatic cleanup.</li></ul><h3 id="i-scheduled-re-scanning-for-today-but-it-does-not-start-at-specified-time" tabindex="-1"><a class="header-anchor" href="#i-scheduled-re-scanning-for-today-but-it-does-not-start-at-specified-time" aria-hidden="true">#</a> I scheduled re-scanning for today but it does not start at specified time</h3><p>Scheduled re-scanning of files starts at specified time only if it’s been more than 24 hours since last website scanning. So if you would not scan it manually it will be checked the day after.</p><h3 id="when-i-click-the-scan-all-button-the-websites-start-scanning-in-random-order" tabindex="-1"><a class="header-anchor" href="#when-i-click-the-scan-all-button-the-websites-start-scanning-in-random-order" aria-hidden="true">#</a> When I click the <em>Scan All</em> button the websites start scanning in random order</h3><p>Order of websites scanning depends on two things:</p><ul><li>selected order in the table</li><li>order of domains registration</li></ul><p>For your convenience we would recommend sorting the table by the <em>State</em> column. Just click it to reorder.</p><h3 id="when-i-click-scan-or-clean-it-fails" tabindex="-1"><a class="header-anchor" href="#when-i-click-scan-or-clean-it-fails" aria-hidden="true">#</a> When I click <em>Scan</em> or <em>Clean</em> it fails</h3>',13)),t("p",null,[e[18]||(e[18]=i("Please, follow the ")),a(n,{to:"/imunifyav_for_plesk/#extension-diagnostics"},{default:s(()=>e[17]||(e[17]=[i("steps to gather information")])),_:1}),e[19]||(e[19]=i(" for analysis and send it to us."))]),e[38]||(e[38]=o('<h3 id="problem-with-websites-cleanup" tabindex="-1"><a class="header-anchor" href="#problem-with-websites-cleanup" aria-hidden="true">#</a> Problem with websites cleanup</h3><p>This topic explains how to resolve the issue with one-click automatic cleanup in the 2.0-x version.</p><h4 id="issue-description" tabindex="-1"><a class="header-anchor" href="#issue-description" aria-hidden="true">#</a> Issue description</h4><p>When administrator of server purchased the license and tries to cleanup malware within 24 hours since the purchase it gets “Failed to remove malware…”.</p><h4 id="root-cause" tabindex="-1"><a class="header-anchor" href="#root-cause" aria-hidden="true">#</a> Root cause</h4><p>Background process is restarted every 24 hours and updates the license information on restart. So until restart it will keep old license type.</p><h4 id="resolution" tabindex="-1"><a class="header-anchor" href="#resolution" aria-hidden="true">#</a> Resolution</h4><p>Administrator needs to restart the background process. There’re several ways to do this:</p><ul><li><p>Wait for 24 hours, or</p></li><li><p>Change the <em>Max working threads</em> under the <em>Settings</em> tab and <em>Save</em> settings, or</p><p><img src="'+D+'" alt=""></p></li><li><p>Re-install ImunifyAV, or</p></li><li><p>Kill the process named <code>ra_executor.php</code>, it will be restarted in a couple of minutes.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 `ps aux | grep &#39;ra_exec&#39; | awk {&#39;print$2&#39;}`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p>All these actions will restart the background process of antivirus and reload the license. This issue will be fixed in the upcoming release. We’re already working on it.</p><h2 id="removing-imunifyav-for-plesk" tabindex="-1"><a class="header-anchor" href="#removing-imunifyav-for-plesk" aria-hidden="true">#</a> Removing ImunifyAV for Plesk</h2><p>ImunifyAV for Plesk is managed as a common Plesk extension. It could be removed from <em>Extensions -&gt; My Extensions -&gt; Remove</em></p><p><img src="'+U+'" alt=""></p><h2 id="extension-diagnostics" tabindex="-1"><a class="header-anchor" href="#extension-diagnostics" aria-hidden="true">#</a> Extension diagnostics</h2><p>If you’ve experiencing some unusual behavior or faced with issues we appreciate if you could provide details on the issue for analysis at <a href="https://cloudlinux.zendesk.com/hc/en-us/requests/new" target="_blank" rel="noopener noreferrer">https://cloudlinux.zendesk.com/hc/en-us/requests/new</a>:</p>',15)),t("ol",null,[e[28]||(e[28]=t("li",null,"Screenshots of the issue (e.g. screenshot before action and the result)",-1)),e[29]||(e[29]=t("li",null,"Steps to reproduce if possible: how we could repeat the actions to see the issue",-1)),t("li",null,[e[27]||(e[27]=i("The following files for analysis: ")),t("ul",null,[t("li",null,[e[21]||(e[21]=t("code",null,"/usr/local/psa/admin/logs/panel.log",-1)),e[22]||(e[22]=i(" – Plesk panel debug log (")),a(n,{to:"/imunifyav_for_plesk/#how-to-collect-plesk-debug-log"},{default:s(()=>e[20]||(e[20]=[i("see below how to collect it")])),_:1}),e[23]||(e[23]=i(")"))]),e[24]||(e[24]=t("li",null,[t("code",null,"/usr/local/psa/var/modules/revisium-antivirus/ra.db"),i(" (antivirus database)")],-1)),e[25]||(e[25]=t("li",null,[t("code",null,"/usr/local/psa/var/modules/revisium-antivirus/ra_cache.db"),i(" (antivirus database cache)")],-1)),e[26]||(e[26]=t("li",null,[t("code",null,"/usr/local/psa/var/modules/revisium-antivirus/revisium-antivirus-local.log"),i(" (antivirus log)")],-1))])])]),e[39]||(e[39]=o(`<h3 id="how-to-collect-plesk-debug-log" tabindex="-1"><a class="header-anchor" href="#how-to-collect-plesk-debug-log" aria-hidden="true">#</a> How to collect Plesk debug log</h3><p>Open Plesk config file <code>/usr/local/psa/admin/conf/panel.ini</code> and add the following lines:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[log]

filter.priority=7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>You might also need to enable the Plesk debug mode. You can do so by adding the following lines:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[debug]
; Enable debug mode (do not use in production environment)
enabled = on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You might also need to enable logging of utilities calls. You can do so by adding the following lines:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>; Enable logging of external utilities calls
show.util_exec = on

; Enable logging of stdin and stdout for external utilities calls (do not use in production environment)
show.util_exec_io = on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See the Plesk&#39;s KB for more information: <a href="https://support.plesk.com/hc/en-us/articles/213408889-How-to-enable-disable-Plesk-debug-mode" target="_blank" rel="noopener noreferrer">https://support.plesk.com/hc/en-us/articles/213408889-How-to-enable-disable-Plesk-debug-mode</a></p></li></ul><p>It may look like this:</p><p><img src="`+B+`" alt=""></p><p>If you do not have the <code>/usr/local/psa/admin/conf/panel.ini</code> file, just create an empty one and add the lines as described above. After that, reproduce the issue and send us a packed (zipped) log located at the <code>/usr/local/psa/admin/logs/panel.log</code>.</p><p>If you have huge log (greater than 50Mb), you can obtain the last 15000 lines using the command:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail -15000 /usr/local/psa/admin/logs/panel.log &gt; debug_log.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>then just zip the file <code>debug_log.txt</code> and send us the <code>debug_log.zip</code> file.</p><p>After that, remove the lines from the <code>plesk.ini</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[log]

filter.priority=7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or change the value to the default one (usually – <code>filter.priority=3</code>).</p>`,13))])}const H=r(F,[["render",Q],["__file","index.html.vue"]]);export{H as default};
